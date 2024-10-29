import React, { useEffect, useRef, useState } from 'react'
import Papa from 'papaparse' //used to parse some files (csv)

// TODO: We have to do the overlapping portion
// basic logic that comes to my mind is first plot all the roues existing ones
// and if i try to plot again with red color , everything will just look reddy . so that is wrong optino
//

const GIS = () => {
	const mapRef = useRef(null) //used to reference the map div
	const [map, setMap] = useState(null) //used to control the map, current is a attribute within this ref object
	const directionsServiceRef = useRef(null) //used to call the direction service api
	const [directionsRendererList, setDirectionsRendererList] = useState([]) //used to direction rendering purposes
	const [routesData, setRoutesData] = useState([]) //used to map the routes data
	const [selectedRouteId, setSelectedRouteId] = useState(null) //used to store the selected routes
	const [routeCount, setRouteCount] = useState(0) //to store the routes count
	const [overlapMode, setOverlapMode] = useState(false) //to notice the overlap mode

	useEffect(() => {
		//getting the google map object
		const googleMaps = window.google.maps
		//initializing the google map object and centering them to delhi dimensions, and with zoom levels
		const initialMap = new googleMaps.Map(mapRef.current, {
			center: { lat: 28.614614, lng: 76.978024 },
			zoom: 14,
		})
		setMap(initialMap) //assign the initialized map to the initial map variable to use it
		directionsServiceRef.current = new googleMaps.DirectionsService() //initialize the directions api object
	}, [])

	//this function is used to plot the grouped routes in the map, via different colors and markers as we need
	//gotta learn a lot to make utilize the portion the best
	const plotRoutes = (routeGroups) => {
		const googleMaps = window.google.maps //make a google object
		const routeColor = overlapMode ? '#FF0000' : '#0000FF' // Red for overlap mode, blue otherwise

		// Clear previous routes
		directionsRendererList.forEach((renderer) => renderer.setMap(null))
		setDirectionsRendererList([])

		let plottedRoutesCount = 0

		Object.keys(routeGroups).forEach((routeId) => {
			//if (selectedRouteId && selectedRouteId !== routeId) return //no idea what this is doing indeed, may a bug

			const routeData = routeGroups[routeId] //group the route id and pick their relevant locations
			if (routeData.length < 2) return //less that two points we can't even plot them

			//this gets the stops location between the first (begin) and last(destination) of the routes, see the additional attributes also
			const waypoints = routeData
				.slice(1, routeData.length - 1)
				.map((stop) => ({
					location: {
						lat: parseFloat(stop.stop_lat),
						lng: parseFloat(stop.stop_lon),
					},
					stopover: true,
				}))

			//this makes a data structure to pass to the gmap, to get the routes
			const request = {
				//origin of the route
				origin: {
					lat: parseFloat(routeData[0].stop_lat), //parseFloat converts a string to a floating point number, incase the csv file is having string
					lng: parseFloat(routeData[0].stop_lon), //passing the float itself reduces the computation time
				},
				//destination of the routes
				destination: {
					lat: parseFloat(routeData[routeData.length - 1].stop_lat),
					lng: parseFloat(routeData[routeData.length - 1].stop_lon),
				},
				waypoints: waypoints, //intermiate stops
				travelMode: googleMaps.TravelMode.DRIVING, //driving mode
			}

			//calling the direction api to get the routes
			directionsServiceRef.current.route(request, (result, status) => {
				//if status is ok means we have the route
				if (status === 'OK') {
					console.log('Requested route is possible')
					//render the routes
					const directionsRenderer =
						new googleMaps.DirectionsRenderer({
							map: map,
							directions: result,
							suppressMarkers: true,
							polylineOptions: {
								strokeColor: routeColor,
								strokeWeight: 4,
							},
						})
					setDirectionsRendererList((prevList) => [
						...prevList,
						directionsRenderer,
					])
					plottedRoutesCount++
				} else {
					console.error('Directions request failed due to ' + status)
				}

				setRouteCount((prevCount) => prevCount + 1)
			})
		})
	}

	const groupByRouteId = (data) => {
		return data.reduce((acc, curr) => {
			if (!acc[curr.route_id]) acc[curr.route_id] = []
			acc[curr.route_id].push(curr)
			return acc
		}, {})
	}

	//this function handles the file changes
	const handleFileChange = (event) => {
		setRouteCount(0) //each time map the route count to zero , fresh start of counting the routes
		const file = event.target.files[0] //get the file from the event variable
		//Papa is used to parse the csv file
		Papa.parse(file, {
			header: true, //we have the have the csv header
			complete: (results) => {
				const groupedRoutes = groupByRouteId(results.data) //map them via the route id
				setRoutesData(groupedRoutes) // use that grouped routes
				plotRoutes(groupedRoutes) //plot that grouped routes
			},
		})
	}

	//used to specifically pick a route and plot it
	const handleRouteSelection = (event) => {
		setSelectedRouteId(event.target.value)
		plotRoutes(routesData)
	}

	//This function is used to toggle the overlap mode and plot the routes again
	//don't know why gpt replot again..gotta check that once
	const toggleOverlapMode = () => {
		setOverlapMode((prevMode) => !prevMode)
		plotRoutes(routesData) // Re-plot with new color scheme
	}

	return (
		<div>
			{/* Heading */}
			<div className='flex justify-center ml-[3%]'>
				<h3 className='text-black mt-2 ml-[14%] text-center text-2xl bg-yellow-100 py-2 w-[50%] rounded-full '>
					Existing Routes in Delhi
				</h3>
			</div>
			{/* This portion is used to get the csv file and left for the other features buttons */}
			<div className='flex w-full justify-evenly items-center ml-[8%] my-4'>
				<input
					className='m-2 p-2 border border-gray-300 rounded-md shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out'
					type='file'
					onChange={handleFileChange}
					accept='.csv'
				/>
				{/* Shows the total routes currently plotted on the map */}
				{/* Adding the overlap count and the distance would be really better */}
				<div className='text-gray-700 font-medium text-xl text-center my-4 ml-[15%]'>
					Total Routes Plotted: {routeCount}
				</div>
			</div>
			{/* This div is used to the google map, refered by the ref attribute */}
			<div className='w-full flex justify-center'>
				<div
					ref={mapRef}
					className='w-[1100px] h-[500px] rounded-md ml-[17%]'
				/>
			</div>
		</div>
	)
}

export default GIS
