import React from "react";

const Disclaimer = () => {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-gradient-to-br from-[#1a237e] to-[#0288d1] ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Disclaimer
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Please read our terms and conditions carefully.
          </p>
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4360ac] mb-4">
            Important Information
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The information on this website is provided by TechSphere Bulletin
            and Weblock Infosoft for general information purposes. We strive to
            keep our content up-to-date and accurate, but any reliance you place
            on the information is strictly at your own risk.
          </p>
        </div> */}

        {/* Disclaimer Details Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
              Our Legal Information
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            TechShpere Bulletin, the website, is operated by TechShpere Bulletin, under the terms of a license from Weblock Infosoft. References to ‘We’, ‘Us’ or ‘Our’ mean TechShpere Bulletin and Weblock Infosoft along with their affiliates, partners, associates, or subsidiaries.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            TechShpere Bulletin is engaged in the activity of providing digital news and media content without any involvement of Weblock Infosoft, and related services. We also provide you access to various other services such as industry reports, curated events and communities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The website or other digital media platform allows users to access Our services and content, for a fee or otherwise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            The information contained on this website is for general information purposes only. The information is provided by techshperebulletin.com, and while we endeavour to keep the information up to date and correct, any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
