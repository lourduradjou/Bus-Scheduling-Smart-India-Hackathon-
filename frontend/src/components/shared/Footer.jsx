
// import { FaAngleRight } from "react-icons/fa6";
const Footer = () => {
	const currentYear = new Date().getFullYear() // Dynamically get the current year

	return (
		<footer className='ml-60 flex flex-col md:flex-row justify-evenly items-center bg-[#0c1a42] text-slate-gray py-6 px-4'>
			<div className='text-center md:text-left'>
				<h1 className='text-lg font-bold'>Transport Department</h1>
				<p>Government of NCT of Delhi</p>
			</div>
			<div className='text-center mt-2 md:mt-0'>
				Copyright © {currentYear} - All Rights Reserved - Official
				Website of Government of National Capital Territory of Delhi,
				India.
			</div>
		</footer>
	)
}

export default Footer

// const Footer = () => {
//   return (
//     <footer className="bg-[#171717] text-white p-8 flex justify-around">
//       {/* Quick Links */}
//       <div className="flex-1">
//         <h3 className="font-bold mb-4">Quick Links</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <ul className="space-y-2">
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Accessibility Statement</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Disclaimer</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Feedback</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Hyperlink Policy</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Terms & Conditions</a></li>
//           </ul>
//           <ul className="space-y-2">
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Copyright Policy</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">FAQs</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Help</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Privacy Policy</a></li>
//             <li className="flex items-center"><FaAngleRight className="mr-2" /><a href="#" className="hover:underline">Terms of Use</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Address */}
//       <div className="flex-1">
//         <h3 className="font-bold mb-4">Address</h3>
//         <address className="not-italic">
//           Public Relations Officer,<br />
//           Transport Department,<br />
//           5/9 Under Hill Road, Delhi 110054.<br />
//           <a href="tel:+911123994223" className="hover:underline block">011-23994223</a>
//           <a href="mailto:adpro.tpt@delhi.gov.in" className="hover:underline block">adpro[dot]tpt[at]delhi[dot]gov[dot]in</a>
//         </address>
//       </div>

//       {/* Map */}
//       <div className="flex-1">
//         <h3 className="font-bold mb-4">Map of Transport Department</h3>
//         <iframe
//           title="Transport Department Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8397990452!2d77.09160384742137!3d28.624626751486246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8cfc0a7d69%3A0x7e72a6b7a69ff835!2sTransport%20Department%20Headquarters%2C%20Under%20Hill%20Rd%2C%20Civil%20Lines%2C%20Delhi%2C%20110054!5e0!3m2!1sen!2sin!4v1693565436877!5m2!1sen!2sin"
//           width="300"
//           height="200"
//           className="border-0"
//           allowFullScreen=""
//           loading="lazy">
//         </iframe>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
