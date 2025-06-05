import React from "react";
import { FaNewspaper, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-gradient-to-br from-[#1a237e] to-[#0288d1]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            TechSphere Bulletin
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Is StartUp technology and business intelligence platform, delivering cutting-edge insights to entrepreneurs, tech leaders, and professionals.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our inception, we have been committed to providing in-depth startup news, market research reports, and industry-focused events that drive innovation and business growth.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
            Why TechSphere Bulletin?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <IoCheckmarkCircle className="w-6 h-6 text-[#12174a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Media Section */}
        <div className="relative bg-gradient-to-br from-[#1a237e] to-[#0288d1] rounded-2xl p-8 md:p-12 text-white mb-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond Media: More Than Just News</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              TechSphere Bulletin goes beyond news reporting. With TechSphere DataLabs, we provide data-driven intelligence for strategic decision-making. Our exclusive TechSphere Plus membership gives access to premium reports, industry forecasts, and expert analyses—keeping business leaders ahead in an evolving market.
            </p>
          </div>
        </div>
        {/* <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join TechSphere Bulletin Today! 🚀
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay informed, stay ahead. Subscribe now to receive the latest updates in technology, startups, and business intelligence.
          </p>
          <button className="bg-gradient-to-r from-[#12174a] to-[#2bace2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg">
            Subscribe Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

const features = [
  {
    title: "Authoritative Startup & Tech News",
    description: "Stay updated with real-time industry trends and deep-dive analyses of India's growing startup ecosystem."
  },
  {
    title: "Comprehensive Market Insights",
    description: "We track thousands of startups with exclusive data reports, research studies, and expert opinions."
  },
  {
    title: "Industry-Leading Events & Networking",
    description: "Join our curated conferences, webinars, and executive summits featuring top business leaders."
  },
  {
    title: "Trusted by Government & Enterprises",
    description: "We collaborate with state agencies and global enterprises to support India's regional startup ecosystems."
  }
];

const stats = [
  { number: "1M+", label: "Monthly Readers" },
  { number: "50K+", label: "Premium Subscribers" },
  { number: "100+", label: "Industry Events" },
  { number: "500+", label: "Expert Contributors" }
];

export default AboutUs;


// import React from "react";
// import { FaNewspaper, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";
// // import aboutHero from "../images/about-hero.jpg"; // Add your hero image

// const AboutUs = () => {
//   return (
//     <div className="mt-24">
//       {/* Hero Section with Background Image */}
//       <div className="relative h-[400px] w-full">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#12174a] to-[#2bace2] opacity-90"></div>
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
//             About TechSphere Bulletin
//           </h1>
//           <p className="text-lg md:text-xl text-center max-w-3xl">
//             Delivering cutting-edge insights to entrepreneurs, tech leaders, and professionals
//             through authoritative journalism and data-driven intelligence.
//           </p>
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
//             Our Mission
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             To empower the tech ecosystem with accurate, insightful, and actionable information,
//             helping businesses and professionals make informed decisions in the rapidly evolving
//             digital landscape.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-[#12174a] to-[#2bace2] text-white">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-800">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {stats.map((stat, index) => (
//               <div key={index} className="p-6">
//                 <p className="text-4xl font-bold bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
//                   {stat.number}
//                 </p>
//                 <p className="text-gray-600 mt-2">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-[#12174a] to-[#2bace2] py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Join Our Growing Community
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Get exclusive access to premium reports, industry forecasts, and expert analyses.
//           </p>
//           <button className="bg-white text-[#12174a] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
//             Subscribe Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const features = [
//   {
//     title: "Premium News Coverage",
//     description: "Real-time industry updates and in-depth analysis from expert journalists.",
//     icon: <FaNewspaper className="w-6 h-6" />
//   },
//   {
//     title: "Market Intelligence",
//     description: "Comprehensive data reports and research studies for informed decision-making.",
//     icon: <FaChartLine className="w-6 h-6" />
//   },
//   {
//     title: "Industry Events",
//     description: "Exclusive conferences and networking opportunities with industry leaders.",
//     icon: <FaUsers className="w-6 h-6" />
//   },
//   {
//     title: "Strategic Partnerships",
//     description: "Collaborations with government agencies and enterprise organizations.",
//     icon: <FaHandshake className="w-6 h-6" />
//   }
// ];

// const stats = [
//   { number: "1M+", label: "Monthly Readers" },
//   { number: "50K+", label: "Premium Subscribers" },
//   { number: "100+", label: "Industry Events" },
//   { number: "500+", label: "Expert Contributors" }
// ];

// export default AboutUs;


// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-50 text-gray-900 mt-24 py-16 px-6 md:px-16 lg:px-24">
//       {/* Hero Section */}
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold text-blue-600 leading-tight">TechShpere Bulletin</h1>
//         <p className="mt-6 text-lg text-gray-700 md:text-xl">
//           India’s leading technology and business intelligence platform, delivering cutting-edge insights to entrepreneurs, tech leaders, and professionals.
//         </p>
//       </div>
      
//       {/* Features Section */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
//         {features.map((feature, index) => (
//           <div key={index} className="p-8 bg-white shadow-md rounded-lg text-center transition-transform transform hover:scale-105">
//             <h2 className="text-xl font-semibold text-blue-500">{feature.title}</h2>
//             <p className="mt-3 text-gray-600 text-sm md:text-base">{feature.description}</p>
//           </div>
//         ))}
//       </div>
      
//       {/* Beyond Media Section */}
//       <div className="bg-blue-600 text-white p-12 mt-20 rounded-xl text-center">
//         <h2 className="text-3xl md:text-4xl font-bold">Beyond Media: More Than Just News</h2>
//         <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl">
//           With TechShpere DataLabs, we provide data-driven intelligence for strategic decision-making. Our exclusive TechShpere Plus membership gives access to premium reports, industry forecasts, and expert analyses—keeping business leaders ahead in an evolving market.
//         </p>
//       </div>
      
//       {/* Call to Action */}
//       <div className="text-center mt-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Join TechShpere Bulletin Today! 🚀</h2>
//         <p className="mt-3 text-gray-700 md:text-lg">Stay informed, stay ahead. Subscribe now to receive the latest updates.</p>
//         <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all text-lg md:text-xl">
//           Subscribe Now
//         </button>
//       </div>
//     </div>
//   );
// };

// const features = [
//   { title: "Authoritative Startup & Tech News", description: "Stay updated with real-time industry trends and deep-dive analyses." },
//   { title: "Comprehensive Market Insights", description: "Exclusive data reports, research studies, and expert opinions." },
//   { title: "Industry-Leading Events & Networking", description: "Join conferences, webinars, and executive summits with top leaders." },
//   { title: "Trusted by Government & Enterprises", description: "We collaborate with agencies and enterprises to support startups." }
// ];

// export default AboutUs;
