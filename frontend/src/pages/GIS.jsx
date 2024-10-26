import React, { useEffect, useRef, useState } from 'react'
import Papa from 'papaparse'

const GIS = () => {
	const mapRef = useRef(null)
	const [map, setMap] = useState(null)
	const directionsServiceRef = useRef(null)
	const [directionsRendererList, setDirectionsRendererList] = useState([])
	const [routesData, setRoutesData] = useState([])
	const [selectedRouteId, setSelectedRouteId] = useState(null)
	const [routeCount, setRouteCount] = useState(0)
	const [overlapMode, setOverlapMode] = useState(false)

	useEffect(() => {
		const googleMaps = window.google.maps
		const initialMap = new googleMaps.Map(mapRef.current, {
			center: { lat: 28.614614, lng: 76.978024 },
			zoom: 14,
		})
		setMap(initialMap)
		directionsServiceRef.current = new googleMaps.DirectionsService()
	}, [])

	const plotRoutes = (routeGroups) => {
		const googleMaps = window.google.maps
		const routeColor = overlapMode ? '#FF0000' : '#0000FF' // Red for overlap mode, blue otherwise

		// Clear previous routes
		directionsRendererList.forEach((renderer) => renderer.setMap(null))
		setDirectionsRendererList([])

		let plottedRoutesCount = 0

		Object.keys(routeGroups).forEach((routeId) => {
			if (selectedRouteId && selectedRouteId !== routeId) return

			const routeData = routeGroups[routeId]
			if (routeData.length < 2) return

			const waypoints = routeData
				.slice(1, routeData.length - 1)
				.map((stop) => ({
					location: {
						lat: parseFloat(stop.stop_lat),
						lng: parseFloat(stop.stop_lon),
					},
					stopover: true,
				}))

			const request = {
				origin: {
					lat: parseFloat(routeData[0].stop_lat),
					lng: parseFloat(routeData[0].stop_lon),
				},
				destination: {
					lat: parseFloat(routeData[routeData.length - 1].stop_lat),
					lng: parseFloat(routeData[routeData.length - 1].stop_lon),
				},
				waypoints: waypoints,
				travelMode: googleMaps.TravelMode.DRIVING,
			}

			directionsServiceRef.current.route(request, (result, status) => {
				if (status === 'OK') {
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

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		Papa.parse(file, {
			header: true,
			complete: (results) => {
				const groupedRoutes = groupByRouteId(results.data)
				setRoutesData(groupedRoutes)
				plotRoutes(groupedRoutes)
			},
		})
	}

	const handleRouteSelection = (event) => {
		setSelectedRouteId(event.target.value)
		plotRoutes(routesData)
	}

	const toggleOverlapMode = () => {
		setOverlapMode((prevMode) => !prevMode)
		plotRoutes(routesData) // Re-plot with new color scheme
	}

	return (
		<div>
			<h3 className='text-blue-600 mt-2 text-center text-2xl'>
				Multi-Route Visualization with Directions API
			</h3>
			<div className='flex w-full justify-center items-center'>
				<input
					className='m-2'
					type='file'
					onChange={handleFileChange}
					accept='.csv'
				/>
				<select onChange={handleRouteSelection} defaultValue=''>
					<option value='' disabled>
						Select a route
					</option>
					{Object.keys(routesData).map((routeId) => (
						<option
							key={routeId}
							value={routeId}
						>{`Route ${routeId}`}</option>
					))}
				</select>
				<button
					onClick={toggleOverlapMode}
					className='bg-yellow-100 p-4 rounded-full m-4'
				>
					{overlapMode
						? 'Disable Overlap Mode'
						: 'Enable Overlap Mode'}
				</button>
			</div>
			<div className='w-full flex justify-center'>
				<div ref={mapRef} className='w-[1100px] h-[500px] rounded-md ml-[17%]' />
			</div>10%
			<div className='text-gray-700 font-medium text-xl text-center m-2'>
				Total Routes Plotted: {routeCount}
			</div>
		</div>
	)
}

export default GIS
