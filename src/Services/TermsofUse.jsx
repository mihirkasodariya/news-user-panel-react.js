import React, { use } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const TermsPage = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-16 sm:mt-20 md:mt-24">
      {/* Hero Section - Made more responsive */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[400px] w-full bg-gradient-to-br from-[#1a237e] to-[#0288d1]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-center max-w-3xl font-light px-4">
            {/* Please read these terms and conditions carefully before using our platform */}
            PLEASE READ ALL OF THE FOLLOWING TERMS AND CONDITIONS OF THIS WEB
            SITE BEFORE USING THIS SITE.
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12 flex items-center text-sm sm:text-base">
            <span onClick={() => navigate("/")} className="cursor-pointer">Home</span>
            <IoIosArrowForward  onClick={() => navigate("/")} className="mx-2 cursor-pointer" />
            <span className="text-gray-300">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Content Section - Improved responsiveness */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Introduction Card - Better mobile layout */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 transform -mt-20 sm:-mt-24 md:-mt-32 relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Welcome to TechSphere Bulletin
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              By accessing this website, you agree to be bound by these terms
              and conditions. Please read them carefully before using our
              services.
            </p>
          </div>
        </div>

        {/* Terms Navigation - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
          {termsData.map((section, index) => (
            <button
              key={index}
              className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
              onClick={() =>
                document
                  .getElementById(section.title)
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {section.title.split(".")[0]}
            </button>
          ))}
        </div>

        {/* Terms Sections - Improved spacing and readability */}
        <div className="space-y-8 sm:space-y-12">
          {termsData?.map((section, index) => (
            <div
              id={section.title}
              key={index}
              className="bg-white rounded-2xl py-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
                  <IoCheckmarkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4360ac]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 pb-4 border-b">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 space-y-3 sm:space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[10px] sm:text-base md:text-lg leading-relaxed break-words"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
          <div className="flex items-center gap-4 ">
            <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
              <IoCheckmarkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4360ac]" />
            </div>
            <h1 className="text-base sm:text-2xl  font-bold text-gray-800 mb-6">
              30. Survival
            </h1>
          </div>

          <div className="text-gray-600 space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-base md:text-lg leading-relaxed">
              Provisions related to Intellectual Property, Warranties and
              Indemnity shall continue to apply even after termination of these
              Terms and Conditions.
            </p>
          </div>
          <h1 className="text-[10px] sm:text-2xl font-bold text-gray-800 my-4">
            Payment Policy
          </h1>
          <div className="text-gray-600 space-y-1 sm:space-y-4">
            <p className="text-[10px] sm:text-base md:text-lg leading-relaxed">
              This page provides the terms of sale and purchase for the digital
              subscriptions offered by www.techshperebulletin.com (“TechShpere
              Bulletin” or “TechSphere” or “we” or “us”).{" "}
            </p>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {termsData1?.map((section, index) => (
              <div
                id={section.title}
                key={index}
                className="bg-white rounded-2xl py-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
                    <IoCheckmarkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4360ac]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 pb-4 border-b">
                      {section.title}
                    </h2>
                    <div className="text-gray-600 space-y-3 sm:space-y-4">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-[10px] sm:text-base md:text-lg leading-relaxed break-words "
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
          <div className="space-y-8 sm:space-y-12">
            {termsData2?.map((section, index) => (
              <div
                id={section.title}
                key={index}
                className="bg-white rounded-2xl py-6  shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
                    <IoCheckmarkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#4360ac]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 pb-4 border-b">
                      {section.title}
                    </h2>
                    <div className="text-gray-600 space-y-3 sm:space-y-4">
                      {section.content?.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-[10px] sm:text-base md:text-lg leading-relaxed break-words"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="  mx-auto p-4 sm:p-6 bg-gradient-to-br from-[#24284e] to-[#062e44]  shadow-lg rounded-2xl mt-6 sm:mt-10">
          <h1 className="text-xl sm:text-5xl font-bold text-white text-center mb-6">
            Grievance Officers
          </h1>

          <div className="space-y-4 sm:space-y-6">
            {grievanceOfficers.map((officer, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent mb-3 sm:mb-4">
                  {officer.company}
                </h2>

                <div className="flex items-start gap-2 sm:gap-3">
                  <IoLocationSharp className="text-[#4360ac] w-5 h-5 sm:w-6 sm:h-6" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {officer.address}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                  <IoMail className="text-[#4360ac] w-5 h-5 sm:w-6 sm:h-6" />
                  <a
                    href={`mailto:${officer.email}`}
                    className="text-blue-600 text-sm sm:text-base hover:underline break-words break-all"
                  >
                    {officer.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-6 sm:mt-8">
            <a
              href="https://techshperebulletin.com/subscribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-[#12174a] to-[#2bace2] text-white text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:bg-[#354b8c] transition-all duration-300"
            >
              See Subscription Plans
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const grievanceOfficers = [
  {
    company: "TechShpere Bulletin",
    address:
      "303-304, 3rd Floor, Near D-Mart, Mota Varachha, Surat, – 394101, Gujarat",
    name: "Grievance Officer",
    email: "grievances@techshperebulletin.com",
  },
  {
    company: "Weblock Infosoft",
    address:
      "303-304, 3rd Floor, Near D-Mart, Mota Varachha, Surat, – 394101, Gujarat",
    name: "Grievance Officer",
    email: "grievances.weblockinfosoft@techshperebulletin.com",
  },
];

const termsData2 = [
  {
    title: "2. Cancellation And Refund Policy",
    content: [],
  },
  {
    title: "2.1 Cancellation and Refunds of Digital Subscriptions",
    content: [
      "You can choose a subscription of the term and duration offered by the Company as listed in the schedule of subscription options set out on the Media. Your subscription will renew automatically until it is cancelled in accordance with these Terms and Conditions.",
      "For annual subscriptions, we will notify you of the pending renewal of your subscription at least 7 days prior to the date of your subscription renewal, except as otherwise required by law. For all subscriptions, you must cancel your subscription before it renews in order to avoid billing of subscription fees for the renewal term.",
      "Subscription to the Media commences immediately on the realisation of payment of the subscription fees, and there can be no cancellation once the subscription is active.",
      "If you choose to pay annually, at least 7 days before each renewal you will be sent a reminder notice stating the rate that will apply for the renewal period. Unless you notify us before the end of your annual subscription period that you no longer wish to receive it, your annual subscription will renew for another year. We will charge the subscription using the same card or other payment method that you previously used.",
      "You do not have any right to cancel your subscription or any part of it until the end of your then current subscription period. Although you may notify us of your intention to cancel at any time, such notice will only take effect at the end of your then current subscription period, and you will not receive a refund (except in the limited circumstances set out in these Terms and Conditions). You may notify us of your wish to cancel your subscription by contacting our team at subscribe[@]techshperebulletin.com. You must provide at least 5 business days advance notice for this to be implemented.",
      "The Company reserves the right to suspend or terminate your subscription if you breach any of these Terms and Conditions, with or without notice and without further obligation to you. We may also suspend or terminate your subscription if we are prevented from providing Services to you by circumstances beyond our control. The Company may, in exceptional circumstances, cease to publish the Media, the content or cease to provide subscription Services. The Company will give you prior notice of this, if possible. If we do so, then we will have no further obligation to you except for a refund of the unexpired period of your paid subscription.",
      "If you are a registered user, but not a subscriber, then the Company reserves the right to suspend or terminate your registration at any time, with or without notice and without further obligation to you. If you would like to cancel your registration then please contact us at subscribe[@]techshperebulletin.com.",
      "In addition to any subscription fees you pay, you are responsible for paying any internet connection or other telecommunications charges that you may incur by accessing the Media or using the Services available on it.",
      "You can change or cancel your digital subscription at any time by emailing us at subscribe[@]techshperebulletin.com.",
    ],
  },
  {
    title: "2.2 Changes to Content or Access",
    content: [
      "We reserve the right to make changes to our digital subscriptions at any time. If we temporarily reduce or eliminate the charge for content or access that you are currently paying for under different terms, you will not receive a refund.",
      "The Company uses the services of third party payment service providers to process your payment of the Subscription Fees.",
      "Accordingly your usage of such third party services shall be in accordance with the terms and conditions of adopted and implemented by such service provider, and the Company shall not be responsible for any failed or incomplete fulfilment of any payment instructions issued by you through such service provider or any actions taken by the Company in respect of the same.",
      "Subscription Fees will be billed at the beginning of your subscription and any renewal of your subscription. We may change the Subscription Fees and charges then in effect, or add new fees or charges which will take effect that the end of your subscription period, by giving you notice in advance and an opportunity to cancel. If you believe someone has accessed the Media using your account and password without your authorization, please immediately us at subscribe[@]techshperebulletin.com.",
      "Subscription and access to content services fall under the purview of Goods & Service Tax ( GST ) as per the current indirect taxation policy, Government of India. Taxes are applicable for consumption of content on the Media and other products of the",
      "Company uniformly for customers based in India and outside the country. Unless otherwise indicated, prices stated on the Media are inclusive of applicable GST, any applicable value added tax (VAT) or other sales taxes.",
      "The Company reserves the right to suspend or terminate your subscription if you breach these Terms, with or without notice and without further obligation to you. We may also suspend or terminate your subscription if we are prevented from providing Services to you by circumstances beyond our control. The Company may, in exceptional circumstances, cease to publish any Media, its content or cease to provide subscription Services. The Company will give you at least 15 days’ notice of this, if possible.",
      "If we do so, then we will have no further obligation to you except for a refund of the unexpired period of your paid subscription. This means that we will refund you with any amounts that you have paid us in advance that relate to any remaining and unexpired period of your subscription.",
      "If you are a registered user, but not a subscriber, then the Company reserves the right to suspend or terminate your registration at any time, with or without notice and without further obligation to you. If you would like to cancel your registration then please contact subscribe[@]techshperebulletin.com.",
      "In addition to any subscription fees you pay, you are responsible for paying any internet connection or other telecommunications charges that you may incur by accessing the Media or using the Services available on it.",
    ],
  },
  {
    title: "2.3 Third Party Content",
    content: [
      "The Company may partner with third party content providers to offer bundled services, under which the payment for both the Services will be collected by the Company. The Company will endeavour to provide seamless access to all such third parties with a single one point access. There could be a gap in this seamless access due to a technology breakdown, temporary disconnection of the internet connection or any factors beyond the reasonable control of the Company.",
      "You are requested to read through the terms and conditions offered by content partners to the Media. Most partners offer bundled services for new users. Existing subscribers of partners are not eligible for bundled subscription. Should you happen to be one please note that the partner will be liable to reject your offer to subscribe under the bundled subscription not leading to contract formation as a result.",
    ],
  },
  {
    title: "2.4 Advertisements",
    content: [
      "In consideration for Company granting you access to and use of the Media and Services, you agree that Company and its third party providers and partners may place such advertising on the Services or in connection with the display of content or information from the Services, whether submitted by them or others. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on the Media is accurate and complies with applicable local or international laws. The Company will not be responsible for the illegality of, or any error or inaccuracy in advertisers or sponsors materials. Your correspondence or business dealings with, or participation in promotions of, advertisers other than with the Company found on or through the Media, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such advertiser. We will not be responsible or liable for any claim, error, omission, inaccuracy in advertising material or any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such non-Company advertisers on the Media. The Company reserves the right to omit, suspend or change the position of any advertising material submitted for insertion. Acceptance of advertisements on the website will be subject to these terms and conditions.",
    ],
  },
  {
    title: "2.5 Term and Termination",
    content: [
      "These Terms and Conditions will remain in full force and effect while you continue the use of the Media and/or avail of the Services at any level. The Company retains the right to deny access to the Media and/or the Services to anyone who it believes has violated any of these Terms and Conditions or does not accept these Terms and Conditions, and retains the right to terminate the subscription of such person. You may terminate these Terms and Conditions by cancelling your subscription.",
    ],
  },
  {
    title: "2.6 Grievance Redressal",
    content: [
      "“Redressal Mechanism : Any complaints or concerns with regards to content and or comment or breach of these terms shall be taken up with the designated Grievance Officer for respective website as mentioned below via in writing or through email at their respective email id, signed with the electronic signature to the respective Grievance Officer”. Please note that the email addresses given below are meant for receiving concerns and queries regarding the corresponding websites. The Company shall not be responsible for any communication, if addressed, to any non- designated person in this regard.",
      "In accordance with the Information Technology Act 2000, the name and the details of the Grievance Officer at “TechShpere Bulletin and Weblock Infosoft” is provided below :",
    ],
  },
  {
    title: "Grievance Officer",
  },
  {
    title: "TechShpere Bulletin",
    content: [
      "303-304, 3rd Floor, Near D-Mart, Mota Varachha, Surat, – 394101, Gujarat",
      "Name: Grievance Officer",
      "Email: grievances[@]techshperebulletin.com",
    ],
  },
];

const termsData1 = [
  {
    title: "1.1 About Digital Products",
    content: [
      "You are not required to purchase anything for certain limited use of www.techshperebulletin.com. You can review the various “TechShpere Bulletin” digital subscriptions here. “TechShpere Bulletin” reserves the right to modify the terms, content, type, and availability of any digital subscription at any time.",
    ],
  },
  {
    title: "1.2 Processing and Payment",
    content: [
      "“TechShpere Bulletin” will process your purchase as promptly as possible. There may be a delay in the activation of your digital subscription while payment details are verified. We accept payments through major credit cards, Debit Cards, Netbanking, UPI & major wallets (PAYTM, Simpl) & options provided by our payment gateway partners. We reserve the right to reject any order or purchase at any time. If your initial payment authorisation is later revoked, your digital subscription will be terminated. Contact our Customer Care if you believe your access was terminated in error.",
    ],
  },
  {
    title: "1.3 Pricing",
    content: [
      "When you pay for a digital subscription, you agree to pay the price that is set for that particular digital subscription. You also agree to the billing frequency stated at the time of your order. Discount eligibility is determined at the time of the order. Discounts cannot be applied retroactively. All prices are in Indian Rupees, unless otherwise stated. “TechShpere Bulletin” reserves the right to change prices and fees at any time. We will notify you in advance if the regular rate of a digital subscription changes from what was stated originally. You will have the opportunity to accept the new price or cancel your digital subscription from that point forward. Applicable taxes would be as per Indian government rules & regulations & may vary from time to time.",
    ],
  },
  {
    title: "1.4 Billing",
    content: [
      "We will charge or debit your payment method at the beginning of your subscription. Billing will continue according to the cycle stated at the time of your order.",
      "The currency in which you will be billed will be stated during the purchase process.",
    ],
  },
  {
    title: "1.5 Unpaid Charges",
    content: [
      "If your credit card expires or your payment method is otherwise invalid, your digital subscription will not automatically be terminated. You will remain responsible for all charges.",
    ],
  },
  {
    title: "1.6 Promotions",
    content: [
      "We may occasionally offer promotions. The specific terms of each promotion are stated at the time the promotion is offered. Each promotion may be different. Promotions cannot be combined.",
    ],
  },
];

const termsData = [
  {
    title: " Introduction",
    content: [
      "Weblock Infosoft is a technology service provider, that also carries out marketing, educational, and non-news content development activities. Weblock Infosoft has granted an exclusive, non-transferable, non-sublicenseable, non-assignable, worldwide license to TechShpere Bulletin (“TechShpere Bulletin” or “TechShpere” or “we” or “us” or “our” or “Company“) to access, use, manage, and operate the Website (www.techshperebulletin.com) (including any sub-domains thereof, or application (the “Website”)).",
      "TechShpere Bulletin solely provides news and current affairs content on the Website on an ‘as-is basis’ and without any interference of Weblock Infosoft. Further, TechShpere Bulletin also provides access to Services and other non-news related content developed by it or Weblock Infosoft or third-parties through the Website on an ‘as-is basis’ from time-to-time.",
      "The following terms and conditions (the “Terms and Conditions“) govern your use of this Website and any content, features or functionality made available from or through this Website by TechShpere Bulletin under the registered trademark ‘TechShpere Bulletin’ acting on behalf of itself and Weblock Infosoft (collectively, referred to as the “TechShpere Bulletin Group”). ",
      "Through the Website or related mobile application or other digital media (“Media”), the Company allows users to access certain business news content and current affairs and non-news reports, curated events and communities, along with executive courses and programs for a subscription fee and otherwise (“Services”).",
      "In addition to hosting the content created by the TechShpere Bulletin Group, the Website operates as an ‘intermediary’ as defined under the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.",
      "Through the Website or related mobile application or other digital media ('Media'), the Company allows users to access certain business news content and current affairs and non-news reports, curated events and communities, along with executive courses and programs for a subscription fee and otherwise ('Services').",
      "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable, and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures. ",
      "This is a legal agreement between you, the user (“User” or “You”) of the Service, as defined below, and stating the terms that govern your use of the Media, as set out below. If you do not agree to these Terms and Conditions, you are not entitled to use the Media and any use thereafter shall be unauthorized. Definition of “User” or “You” means any person who accesses or avails of this site of the Company for the purposes of hosting, publishing, sharing, transacting, displaying or uploading information or views and includes other persons jointly participating in using the Media.",
      "By continuing to access, link to, or use this Media, or any service on this Media, you signify your acceptance of the Terms and Conditions.",
      "TechShpere Bulletin reserves the right to amend, remove, or add to the Terms and Conditions at any time at its sole and absolute discretion. Such modifications shall be effective immediately. ",
      "Accordingly, please continue to review the Terms and Conditions whenever accessing, linking to, or using the Media. Your access, link to, or use of the Media, or any service on this Media, after the posting of modifications to the Terms and Conditions will constitute your acceptance of the Terms and Conditions, as modified.",
      "Some of the services on the Media may be subject to additional posted Terms & Conditions. Your use of those services is subject to those conditions, which are incorporated into these Terms and Conditions by reference. In the event of an inconsistency between these Terms and Conditions and any additional posted conditions, the provisions of the additional conditions shall prevail.",
      "If, at any time, you do not wish to accept the Terms and Conditions, you may not access, link to, or use the Media. Any terms and conditions proposed by you which are in addition to or which conflict with the Terms and Conditions are expressly rejected by TechShpere Bulletin and shall be of no force or effect. In such case, you are prohibited from accessing the Media and any such access shall be unauthorised.",
    ],
  },
  {
    title: "1. Eligibility",
    content: [
      "You will be eligible to subscribe to the Services on the Media only if you are competent to contract under the Indian Contract Act, 1872. A person is competent to contract under the Indian Contract Act, 1872, inter-alia, if he/she is above eighteen (18) years of age, is of a sound mind and is not disqualified from contracting by any law to which he/she is subject. ",
      "You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are capable of entering, performing and adhering to these Terms and Conditions and that you agree to be bound by the following terms and conditions. While individuals under the age of 18 may utilize the Services of the Media, they shall do so only with the involvement & guidance of their parents and / or legal guardians, under such Parent /Legal guardian’s registered account.",
      "You agree to register prior to uploading any content and / or comment and any other use or Services of the Media and provide your details including but not limited to complete name, age, email address, residential address, and contact number.",
    ],
  },
  {
    title: "2. Proprietary Rights",
    content: [
      "Except as permitted herein, you do not have any right, title or interest in and to the Media including all the content (including, for example, audios, photographs, illustrations, graphics, other visuals, videos, copy, text, software, titles, Shockwave files, etc.), code, data and materials thereon, the look and feel, design and organization of the Media, and the compilation of the content, code, data and materials on the Media, including but not limited to any copyrights, trademark rights, trade secrets, know how, patent rights, database rights, service marks, moral rights, sui generis rights and other intellectual property and proprietary rights therein (collectively referred to as the “TechShpere Bulletin IPR“). ",
      "Your use of the TechShpere Bulletin IPR does not grant to you ownership of any content, code, data or materials you may access on or through the Media or through the use of TechShpere Bulletin IPR. Your use of the TechShpere Bulletin IPR is only a limited, non-exclusive licence to use the TechShpere Bulletin IPR while accessing the Media.",
      "You agree to comply with all written requests made by TechShpere Bulletin or its suppliers and licensors of content, equipment, or otherwise (“Suppliers“) to protect their and others’ contractual, statutory, and common law rights in the TechShpere Bulletin IPR.",
    ],
  },
  {
    title: "3. Limited Use",
    content: [
      "You may access and view the content on the Media on your computer or other device and, except as specifically permitted by these Terms and Conditions, you may not copy or make any use of the TechShpere Bulletin IPR or any portion thereof. ",
      "Unless otherwise specifically indicated in these Terms and Conditions or on the Media, use of the Media and the TechShpere Bulletin IPR, are only for your personal, non-commercial and internal use. ",
      "Except as specifically permitted herein, you shall not use the Media or the TechShpere Bulletin IPR, or any portion thereof or the names of any individual participant in, or contributor to, the TechShpere Bulletin IPR, or any variations or derivatives thereof, for any purpose, without TechShpere Bulletin’s prior written approval.",
    ],
  },
  {
    title: "4. Subscription",
    content: [
      "Subscription Services provide you access to Media and Services offered through the Website (including news and current affairs content provided by TechShpere Bulletin) (“Subscription Services”). A preview is available to all viewers of the Media but access to opinion pieces, commentaries and exclusive features of the Media are available to paid subscribers of the Subscription Services alone. ",
      "The nature of the Subscription Services made available to you is subject to change. We may vary the access rights of users engaged in accessing the Media without a paid subscription at any time. With respect to paid subscribers, any revision of access rights will take effect at any time during or after such a user’s current subscription term.",
      "Subscription Services may differ geographically and based on the device from which you subscribe. Subscription packages and price may also vary in time. Subscription doesn’t grant rights over the Service or the TechShpere Bulletin IPR other than as expressly mentioned herein.",
      "The Website integrates with third party payment gateways, wallets, etc. In case of any payment failure, rejection, inability to purchase or access servers, dropping off in between buying journey, TechShpere Bulletin Group will not be held responsible in any form. All the transaction issues to be handled directly with the payment gateway or wallets.",
      "Users may not be eligible for one or more payment options depending on the eligibility criteria decided by the respective payment partner. TechShpere Bulletin Group will not be held responsible in any form for the respective eligibility criteria.",
      "Plan duration will include all such technical or production issues like server downtime, unavailability to login or access the site etc. Plan will expire on the due date with respect to purchase dates.",
      "By submitting your payment and other subscription details, you are making an offer to us to buy a subscription. Your offer will only be accepted by us and a contract formed when we have successfully verified your payment details and email address, at which point we will provide you with access to your subscription. TechShpere Bulletin reserves the right to reject any offer in its discretion, for any or no reason.",
      "The payment services provider would be a PCI-DSS Level 1-certified to assure the highest level of safety standards.",
      "You shall pay all fees and charges incurred through your account at the rates in effect for the billing period in which such fees and charges are incurred, including but not limited to charges for any products or services offered for sale through the Media or by any other vendor or service provider.",
      "All fees and charges shall be billed to you, and you shall be solely responsible for their payment. You shall pay all applicable taxes relating to the use of the Media through your account, and the purchase of any other products or services.",
      "Certain portions of the Media may require a prepaid fee (“Prepaid Fee“), which may be modified from time to time in TechShpere Bulletin’s sole discretion. The Prepaid Fee, and all taxes and other fees related thereto will be paid by you in advance.",
      "In no event will you receive any portions of the Media, if a Prepaid Fee is required unless TechShpere Bulletin receives all fees and charges payable by you, including the Prepaid Fee.",
      "The structure and quantum of the fee charged by TechShpere Bulletin can be revised (including any increase or decrease in the fee amount) by TechShpere Bulletin at its sole and absolute discretion, without any notice to the User.",
    ],
  },
  {
    title: "5. Prohibited Use",
    content: [
      "Unless otherwise specifically indicated in these Terms and Conditions or on the Media, any commercial or promotional distribution, publishing, re-circulation, re-distribution or exploitation of the Service or Media, or any content, code, data or materials on the Media, or any portion of the Service or TechShpere Bulletin IPR is strictly prohibited unless you have received the express prior written permission from our authorized personnel or the otherwise applicable rights holder. Other than as expressly allowed herein or on the Media, you may not download, post, display, store, publish, copy, reproduce, distribute, transmit, modify, perform, broadcast, transfer, create derivative works from, sell or otherwise exploit any content, code, data or materials of, on or available through the Media or of the Service. You further agree that you may not alter, edit, delete, remove, otherwise change the meaning or appearance of, or repurpose, recompile, decompile reverse engineer any of the content, code, data, or other materials on or available through the Media, including, without limitation, the alteration or removal of any trademarks, trade names, logos, service marks, or any other proprietary content or proprietary rights notices.",
      "You shall not use the Service or the Media for any illegal purpose, for the facilitation of the violation of any law or regulation, or in any manner inconsistent with the Terms and Conditions. You agree not to use, transfer, distribute, or dispose of any information contained in the Service or TechShpere Bulletin IPR in any manner that could compete with the business of TechShpere Bulletin or any of its Suppliers.",
      "You may use the “e-mail this article” function solely to inform others about a TechShpere Bulletin News article, and you shall immediately cease using this function with regard to recipients who have requested not to receive such information.",
      "You are forbidden from any attempts to resell or put to commercial use any part of the Media or the Service or any TechShpere Bulletin IPR; any collection and use of any product listings, descriptions, or prices; any derivative use of the Media or its contents; any downloading or copying of account information for the benefit of any other merchant; any renting, leasing, or otherwise transferring rights to the Media / Service / TechShpere Bulletin IPR; or any data gathering or extraction tools; or any use of meta tags.",
      "You may not offer any part of the Service / TechShpere Bulletin IPR for sale or distribute it over any other medium including but not limited to over-the-air television or radio broadcast, a computer network or hyperlink framing on the internet without the prior written consent of TechShpere Bulletin.",
      "You may not use the Service / TechShpere Bulletin IPR in any way to improve the quality of any data sold or contributed by you to any third party.",
      "You may not input, distribute, upload, post, email, transmit or otherwise make available any content through the Media that: (i) is promotional in nature, including solicitations for funds or business, without the prior written authorization of TechShpere Bulletin, or constitutes junk mail, spam, chain letters, pyramid schemes or the like; (ii) is unlawful, harmful, threatening, abusive, tortious, defamatory, vulgar, obscene, pornographic, pedophilic libelous, invasive of another’s privacy (including bodily privacy), insulting or harassing on the basis of gender, racially or ethnically objectionable, relating or encouraging money laundering or gambling or an online game causes uses harm, or promoting enemity between different groups on the grounds of religion or caste with the intent to incite violence, ; (iii) for which you do not have the right to make available under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements); (iv) infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party; (v) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource, or telecommunications equipment; (vi) is harmful to minors; (vii) constitutes the personally identifiable information of any other person that such person has not authorized you to disclose;  (viii) impersonates another person; (ix) threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; (x) results in advertising or solicitation to anyone to buy or sell products or services, or to make donations of any kind; (xi) Results in spamming, spidering, “screen scraping,” “database scraping,”, phishing or harvesting email addresses that have been posted by other users of the Sites; (xii) Uses or attempt to use another person’s account, password or services; (xiii) Disrupts, interferes with or otherwise violates the security of the Sites or any services, accounts, passwords, servers or networks related to the Site; (xiv) Sends repeated messages to another user or repeat postings of the same message under the same or multiple subjects or engage in cyber stalking or become a nuisance for other users; (xv) Damages, disables, overburdens, or impairs servers, or the network(s) connected to the servers, or interferes with any other party’s use and enjoyment of any Services; (xvi) Obtains or attempts to obtain any materials or information through any means not intentionally made available through the Media/Services; (xvii) deceives or misleads the addressee about the origin of the message knowingly or intentionally communicates any misinformation or information which is paterntly false and untrue or misleading in nature or has been identified as fake or false; or (xviii) is in the nature of advertisement or surrogate advertisement or promotion of an online game that is not a permissible online game or of any online gaming intermediary offering such game.",
      "You may not use any of the Services / TechShpere Bulletin IPR in any manner which creates the impression that such items belong to or are associated with you or are used with TechShpere Bulletin’s consent, and you acknowledge that you have no ownership rights in and to any of such items.",
      "You agree not to use any framing techniques to enclose any Service or TechShpere Bulletin IPR; or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on the Media / Service, including without limitation, the size, color, location or style of all proprietary marks.",
      "You may neither interfere with nor attempt to interfere with nor otherwise disrupt the proper working of the Media, any activities conducted on or through the Media or any servers or networks connected to the Media.",
      "You may neither obtain nor attempt to obtain through any means any TechShpere Bulletin IPR that have not been intentionally made publicly available either by public display on the Media or through accessibility by a visible link on the Media. You shall not violate the security of the Media or attempt to gain unauthorized access to the Media, data, materials, information, computer systems or networks connected to any server associated with the Media, through hacking, password timing or any other means.",
      "You may neither take nor attempt any action that, in the sole discretion of TechShpere Bulletin, imposes or may impose an unreasonable or disproportionately large load or burden on the Media or the infrastructure of the Media. You shall not use or attempt to use any “scraper,” “robot,” “bot,” “spider,” “data mining,” “computer code,” or any other automate device, program, tool, algorithm, process or methodology to access, acquire, copy, or monitor any portion of the Media, any data or content found on or accessed through the Media, or any other Media information without the prior express written consent of TechShpere Bulletin. You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any other content.",
      "Requests to republish or use in any manner TechShpere Bulletin’s material/content for distribution should be addressed to updates[@]techshperebulletin.com.",
      "Unless TechShpere Bulletin has expressly consented in writing, you shall not republish or use in any manner any material/consent/Service/TechShpere Bulletin IPR of TechShpere Bulletin.",
    ],
  },
  {
    title: "6. User Material",
    content: [
      "(a) Unless specifically requested, we do not solicit nor do we wish to receive any confidential, secret or proprietary information or other material from you through the Media, by e-mail or in any other way. Any information, creative works, demos, ideas, suggestions, concepts, methods, systems, designs, plans, techniques, Images or other materials submitted or sent to us (including, for example and without limitation, that which you submit or post to our chat rooms, messaging services, message boards, survey responses, and/or our blogs, or send to us via e-mail) (“User Material“) will be deemed not to be confidential or secret, and may be used by us in any manner consistent with the Media’s Privacy Policy.",
      "(b) If you submit material to any Media, you represent and warrant that (a) you shall not upload, post, transmit, distribute or otherwise publish through the Media or any service or feature made available on or through the Media, any materials which violate any terms of these Terms and Conditions (b) the User Materials are original to you, that no other party has any rights thereto, that any “moral rights” in User Materials have been waived, that the User Material is truthful and accurate; that use of the User Material does not violate these Terms And Conditions and will not cause injury to any person or entity; and that you will indemnify, defend and hold harmless TechShpere Bulletin Group, and its Suppliers, agents, shareholders, directors, officers, employees, representatives, successors, and assigns for all claims resulting from: User Material; and (c) you grant to TechShpere Bulletin Group and its affiliates a perpetual, non-exclusive, irrevocable, royalty-free, sublicensable and fully transferable worldwide right and license in the User Material and in any and all media, now known or later developed, to use, publish, copy, reproduce, display, modify, transmit digitally, translate, create derivative works based upon, distribute, store and otherwise exploit, such content for any purpose whatsoever (including, without limitation, advertising, commercial, promotional, marketing and publicity purposes) in TechShpere Bulletin Group’s discretion without additional notice, attribution or consideration to you or to any other person or entity.",
      "(c) You agree that TechShpere Bulletin Group and its Suppliers, agents, directors, officers, employees, representatives, successors, and assigns do not have any responsibility and assume no liability for any material submitted by you or any third party and may delete or destroy any such User Material at any time.",
      "(d) You agree to register prior to uploading any content and / or comment and any other use of Service or TechShpere Bulletin IPR or the Media and provide your details including but not limited to complete name, age, email address, residential address, contact number.",
      "(e) Private or Sensitive Information on Public Forums It is important to remember that comments submitted to a forum may be recorded and stored in multiple places, both on the Media and elsewhere on the internet, which are likely to be accessible for a long time and you have no control over who will read them eventually. It is therefore important that you are careful and selective about the personal information that you disclose about yourself and others, and in particular, you should not disclose sensitive, embarrassing, proprietary or confidential information in your comments to our public forums.",
      "(f) User Material containing Protected Content All User Material, whether publicly or privately transmitted / posted, is the sole responsibility of the person from where such content is originated (the “Originator“). By Posting any material which contains images, photographs, pictures or GIFs that are otherwise graphical in whole or in part (“Images“), you warrant and represent that (a) you are the copyright owner of such Images, or that the copyright owner of such Images has granted you permission to use such Images or any content and / or images contained in such Images consistent with the manner and purpose of your use and as otherwise permitted by these Terms and Conditions, (b) you have the rights necessary to grant the licenses and sublicenses described in these Terms and Conditions, and (c) that each person depicted in such Images, if any, has provided consent to the use of the Images as set forth in these Terms and Conditions, including, by way of limitation, the distribution, public display and reproduction of such Images.",
      "You represent that you have valid rights and title in any and all User Material / Images that you submit on the Media, that you have not infringed on any intellectual property rights belonging to any party.",
      "TechShpere Bulletin Group accepts no responsibility for the said User Material / Images.",
      "You represent that you are a responsible adult (18 years or above) and you shall be solely responsible for all User Material that you upload post or otherwise transmit.",
      "(g) TechShpere Bulletin also endeavours to provide a web platform for various community interactions for persons to interact and exchange views with each other. Members of the general public posts content on such services, and therefore the accuracy, integrity or quality of such content cannot be guaranteed. You understand that by using such services, you may be exposed to objectionable matter.",
      "(h) TechShpere Bulletin is under no obligation to monitor any bulletin boards, chat rooms, or other areas of the Media through which users can supply information or material. TechShpere Bulletin reserves the right at all times to refuse to post or to remove any information or materials, in whole or in part, that its sole discretion are objectionable or in violation of these Terms and Conditions.",
      "(i) TechShpere Bulletin is Not Responsible For and Not Necessarily Hold the Opinions of our Contributors / Bloggers / Commenters, etc.",
      "Opinions and other statements expressed by users and third parties (e.g., bloggers) are theirs alone, not opinions of TechShpere Bulletin. TechShpere Bulletin is not responsible for the accuracy and completeness of blogger / contributor content, neither does it endorse or guarantee the same, nor accept any obligation or liability for the same. TechShpere Bulletin Group and its affiliates, successors, assigns, employees, agents, directors, officers and shareholders do not undertake or assume any duty to monitor its site for inappropriate or unlawful content.",
      "TechShpere Bulletin Group and its affiliates, successors, assigns, employees, agents, directors, officers and shareholders assume no responsibility or liability which may arise from the content thereof, including, but not limited to, claims for defamation, libel, slander, infringement, invasion of privacy and publicity rights, obscenity, pornography, profanity, fraud, or misrepresentation.",
      "Notwithstanding the foregoing, TechShpere Bulletin reserves the right to block or remove communications, postings or materials at any time in its sole discretion.",
    ],
  },
  {
    title: "7. Exchange Of Information Chat & Other Community Services",
    content: [
      "TechShpere Bulletin endeavours to provide a web platform for various community interactions for persons to interact and exchange views with each other. The User Material posted on the Media is by general public therefore the accuracy, integrity or quality of such content cannot be guaranteed. You understand that by using the Services / Media / TechShpere Bulletin IPR, you may be exposed to objectionable matter.",
    ],
  },
  {
    title: "8. Trademarks",
    content: [
      "The trademarks, logos, service marks and trade names (collectively the “Trademarks“) displayed on the Media or on content available through the Media are the TechShpere Bulletin Group’s registered and unregistered Trademarks and others and may not be used in connection with products and/or services that are not related to, associated with, or sponsored by their rights holders that are likely to cause customer confusion, or in any manner that disparages or discredits their rights holders. All Trademarks not owned by us that appear on the Media or on or through the Media’s services, if any, are the property of their respective owners. Nothing contained on the Media should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademark displayed on the Media without our written permission or the third party that may own the applicable Trademark. Your misuse of the Trademarks displayed on the Media or on or through any of the Media’s services is strictly prohibited.",
    ],
  },
  {
    title: "9. Right To Monitor And Editorial Control",
    content: [
      "We reserve the right, but do not have an obligation, to monitor and/or review all materials posted to the Media or through the Media’s services or features by users, and we are not responsible for any such materials posted by users. However, we reserve the right, at all times, to disclose any information as necessary to satisfy any law, regulation or government request, or to edit, refuse to post or to remove any information or materials, in whole or in part, that in our sole discretion are objectionable or in violation of these Terms and Conditions, our policies or applicable law. We may also impose limits on certain features of the forums or restrict your access to part or all of the forums without notice or penalty if we believe you are in breach of the guidelines set forth in this paragraph, our Terms and Conditions or applicable law, or for any other reason without notice or liability.",
    ],
  },
  {
    title: "10. Registration And Account Creation",
    content: [
      "Certain portions (at the discretion of TechShpere Bulletin) of the Website may be accessible by subscription only.",
      "As part of the registration and account creation process necessary to obtain access to certain portions of the Service or the Website, including those portions that require a fee or payment for access, you will select a username and a password. You will provide TechShpere Bulletin with certain registration information, all of which must be accurate, truthful, and updated. You shall not: (i) select a username already used by another person; (ii) use a username in which another person has rights without such person’s authorization; or (iii) use a username or password that TechShpere Bulletin, in its sole discretion, deems offensive or inappropriate. You may also be required to provide us with certain information that may be personal to you. Please refer to our “Privacy Policy” for the terms of usage of such information. You also authorise Weblock Infosoft to collect and process your personal data to provide you with access to the Services.",
      "TechShpere Bulletin reserves the right to deny creation of your account based on TechShpere Bulletin’s inability to verify the authenticity of your registration information. You shall be solely responsible for maintaining the confidentiality of your password. You shall immediately notify TechShpere Bulletin of any known or suspected unauthorized use(s) of your account, or any known or suspected breach of security, including loss, theft, or unauthorized disclosure of your password or credit card information and TechShpere Bulletin may, at its sole and absolute discretion, take such action as it may deem fit.",
      "If the computer system or device on which you have accessed the Service or the Media is sold or transferred to or used by another party, you warrant and represent that you will delete all cookies and software files obtained by or through use of the Service or the Media.",
      "TechShpere Bulletin uses an internal process for identity management. User or subscriber when logs in with their respective identities, gives TechShpere Bulletin a permission to contact them for details on subscription plans, signs-up for daily newsletter and allows TechShpere Bulletin to send promotional offers, plans, third party offers available with TechShpere Bulletin. User gives TechShpere Bulletin permission to reach out to them via email, browser notification, SMS, WhatsApp notification, website banners or other mediums.",
    ],
  },
  {
    title: "11. Termination",
    content: [
      "We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, our Media (or any part thereof) with or without notice without any liability whatsoever.",
      "TechShpere Bulletin reserves the right to suspend / cancel, or discontinue any or all categories, products or the Service or any part thereof at any time without notice, make modifications and alterations in any or all of the content, products and services contained on the Media without prior notice.",
      "TechShpere Bulletin shall not be liable to you or any third party for any such modification, suspension or discontinuance of the Media. In addition, we reserve the right to terminate your access to the Media for any reason or without assigning any specific reason, and to take any other actions that TechShpere Bulletin, in its sole discretion, believes to be in the interest of our Company and of our Users as a whole.",
      "TechShpere Bulletin reserves the right to terminate your account, in whole or in part, in its sole discretion, at any time without notice and without assigning any specific reason.",
      "We reserve the right to immediately remove any non-compliant User Material uploaded by you without any liability and shall further have the right to take recourse to such remedies as would be available to the TechShpere Bulletin under the applicable laws.",
      "We do not permit any part of the Media being cached in proxy servers and accessed by individuals who have not registered with TechShpere Bulletin as users of the Media; or access through a single account and password being made available to multiple users on a network. If TechShpere Bulletin reasonably believes that an account and password is being used / misused in any manner, TechShpere Bulletin shall reserve the right to cancel access rights immediately without notice, and block access to all users from that IP address. You could be held liable for losses incurred by TechShpere Bulletin or another party due to someone else using your account or password.",
      "You may terminate your account at any time. Upon termination of the Terms and Conditions by you or TechShpere Bulletin, you must discontinue your use of the Services and access to the Media and destroy promptly all materials obtained from the Services and/or the Media and any copies thereof. The Media, like most news sites, does not need you to log in unless you are commenting, sharing on social media, etc. You are responsible for all charges incurred up to the time the account is terminated. Notwithstanding anything else herein, TechShpere Bulletin reserves the right to pursue any and all claims against any user of your account. You agree to maintain only one account and certify that you currently have no other account(s).",
    ],
  },
  {
    title: "12. Embedded Video Links",
    content: [
      "Certain portions of the Media provide the functionality for you to “embed” videos appearing on the page on other websites or blog pages (together with the Player, as defined herein, the “Embedded Video“). The functionality is provided by giving you the necessary HTML code to include on such page to make that Embedded Video appear. If you include the HTML on a web or blog page, the actual video stream for the Embedded Video will be served from our servers but the Embedded Video may be rendered to the visitor of that page as part of that page. If you elect to embed video on a page, you agree as follows: (i) you will not alter, in any respect, the Embedded Video (including without limitation the content, format, and length and advertising associated therewith) from how it is served from our servers; (ii) you will not facilitate access to the Embedded Video through any video player or other tool other than the video player that is provided by us when the Embedded Video appears (the “Player“); (iii) the Embedded Video may be used as part for commercial purposes, including on an advertising-supported page, provided that: (a) the Embedded Video shall not be included in, or used as part of, a service that sells access to video content; (b) you shall not insert advertising, sponsorship or promotional messages in, or immediately adjacent to, the Embedded Video or Player; and (c) to the extent you sell any advertising, sponsorship or promotional material to appear on the same page that includes the Embedded Video, the page includes other content not provided by us which is a sufficient basis for such sales. You may not block, inhibit, build upon or disable any portion of the Player, including without limitation links back to our site. You understand and agree that all measured metrics related to the access and viewing of the Embedded Video shall be credited to the relevant Media. Without limitation of any provision of these Terms and Conditions, we shall have no liability to you for any reason with respect to your use of Embedded Video and you agree to defend, indemnify and hold us and our affiliates and our affiliates’ directors, officers, employees and agents harmless from any and all claims, liabilities, costs and expenses, including attorneys’ fees, arising in any way from your use of the Embedded Video",
    ],
  },
  {
    title: "13. Links To Third Party Websites Or Resources",
    content: [
      "Our Media may contain links to third-party websites or resources (“Partner Links”). We provide these links only as a convenience and are not responsible for the content, products, or services on or available from those websites or resources or links displayed on such Partner Links. You agree to accept sole responsibility for, and assume all risk arising from, your use of any Partner Links. TechShpere Bulletin does not guarantee any access to Partner Links. Access to Partner Links is governed by the terms and conditions of the respective sites.",
    ],
  },
  {
    title: "14. Disclaimer And Limitation Of Liability",
    content: [
      "(a) You agree that your use of the Service and the Media is at your sole risk and acknowledge that the Service or the Media, including, without limitation, all Services, features, content, functions and materials provided through the Media, are provided “as is,” “as available,” without warranty of any kind, either express or implied, including, without limitation, any warranty for information, data, data processing services, uptime or uninterrupted access, any warranties concerning the availability, playability, displayability, accuracy, precision, correctness, thoroughness, completeness, usefulness, or content of information, and any warranties of title, non-infringement, merchantability or fitness for a particular purpose, and we hereby disclaim any and all such warranties, express and implied. We do not warrant that the web site or the Services, content, functions or materials provided through the web site will be timely, secure, uninterrupted or error free, or that defects will be corrected. We make no warranty that the Media or the provided Services will meet users’ requirements. No advice, results or information, whether oral or written, obtained by you from us or through the media shall create any warranty not expressly made herein. We and our affiliates also assume no responsibility, and shall not be liable for, any damages to, or viruses that may infect, your equipment on account of your access to, use of, or browsing in the Media or your downloading of any materials, data, text, images, video content, or audio content from the Media. If you are dissatisfied with the Media, your sole remedy is to discontinue using the Media or the Service.",
      "(b) TechShpere Bulletin does not warrant that the Service and/or the Media is compatible with your equipment or that the Service and/or the Media, or e-mail sent by TechShpere Bulletin or its representative, is free of errors or viruses, worms or “Trojan horses,” or any other harmful, invasive, or corrupted files, and is not liable for any damage you may suffer as a result of such destructive features or that the Services and/or the Media will meet your requirements.",
      "(c) You agree that the TechShpere Bulletin Group and its Suppliers, agents, directors, officers, employees, representatives, successors, and assigns shall have no responsibility or liability for: (i) any injury or damages, whether caused by the negligence of the TechShpere Bulletin Group, or their respective affiliates, Suppliers, agents, directors, officers, employees, representatives, general partner, subsidiaries, successors, and assigns, or otherwise arising in connection with the Services and/or the Media and shall not be liable for any lost profits, losses, punitive, incidental or consequential damages, or any claim against the TechShpere Bulletin Group by any other party; or (ii) any fault, inaccuracy, omission, delay, or any other failure in the Service and/or the Media caused by your computer equipment or arising from your use of the Service and/or the Media on such equipment.",
      "(d) The content of other websites, services, goods, or advertisements that may be linked to the Service or the Media is not maintained or controlled by TechShpere Bulletin. TechShpere Bulletin is therefore not responsible for the availability, content, or accuracy of other websites, services, or goods that may be linked to, or advertised on, the Service and/or the Media.",
      "(e) TechShpere Bulletin does not: (a) make any warranty, express or implied, with respect to the use of the links provided on, or to, the Media or the Service; (b) guarantee the accuracy, completeness, usefulness or adequacy of any other websites, services, goods, or advertisements that may be linked to the Media or the Service; or (c) make any endorsement, express or implied, of any other websites, services, goods, or advertisements that may be linked to the Service and/or the Media. TechShpere Bulletin is also not responsible for the reliability or continued availability of the telephone lines, wireless services, communications media, and equipment you use to access the Media or the Service. You understand that TechShpere Bulletin and/or third-party contributors to the Service and/or the Media may choose at any time to inhibit or prohibit their content from being accessed under the Terms and Conditions.",
      "(f) You acknowledge that: (a) the content in the Service and/or the Media is provided for information purposes only and is not intended for trading purposes; (b) the Media or the Service may include certain information taken from stock exchanges and other sources from around the world; (c) TechShpere Bulletin does not guarantee the sequence, accuracy, completeness, or timelines of the Service and/or the Media; (d) the provision of certain parts of the Service and/or the Media is subject to the terms and conditions of other agreements to which TechShpere Bulletin is a party; (e) none of the information contained on the Media constitutes a solicitation, offer, opinion, or recommendation by TechShpere Bulletin to buy or sell any security, or to provide legal, tax, accounting, or investment advice or services regarding the profitability or suitability of any security or investment; (f) the information provided on this Media is not intended for use by, or distribution to, any person or entity in any jurisdiction or country where such use or distribution would be contrary to law or regulation. Accordingly, anything to the contrary herein set forth notwithstanding, TechShpere Bulletin, its Suppliers, agents, directors, officers, employees, representatives, successors, and assigns shall not, directly or indirectly, be liable, in any way, to you or any other person for any: (A) inaccuracies or errors in or omissions in the Services and/or the Media including, but not limited to, quotes and financial data; (B) delays, errors, or interruptions in the transmission or delivery of information through the Service and/or the Media; or (c) loss or damage arising therefrom or occasioned thereby, or by any reason of non-performance.",
      "(g) TechShpere Bulletin neither endorses nor offers any judgment or warranty and accept no responsibility or liability for the authenticity, availability, sustainability of the information, software, products, services and related graphics contained of any of the services or for any damage, loss or harm, direct or consequential or any violation of local or international laws that may be incurred by your visit or transactions by using the Services and/or the Media.",
      "(h) We try to ensure that the information posted on the Media is correct and up-to-date. We reserve the right to change or make corrections to any of the information provided on the media at any time and without any prior warning. We neither endorse nor are responsible for the accuracy or reliability of any opinion, advice or statement on the media, nor for any offensive, defamatory, obscene, indecent, unlawful or infringing posting made thereon by anyone other than our authorized employee or spokespersons while acting in their official capacities (including, without limitation, other users of the web site). It is your responsibility to evaluate the accuracy, completeness or usefulness of any information, opinion, advice or other content available through the Media. Please seek the advice of professionals, as appropriate, regarding the evaluation of any specific information, opinion, advice or other content, including but not limited to financial, health, or lifestyle information, opinion, advice or other content.",
      "(I) Under no circumstances, including but not limited to negligence, shall the TechShpere Bulletin Group, its suppliers, agents, directors, officers, employees, representatives, successors, or assigns (“Protected Party“) be liable to you for direct, indirect, incidental, consequential, special, punitive, or exemplary damages even if the Protected Party has been advised specifically of the possibility of such damages, arising from the use of, or the inability to use the Service or the Media or the content, features, materials and functions related thereto, your provision of information via the media, or any links or items on the Service or any provision of the Terms and Conditions, such as, but not limited to, loss of revenue or anticipated profits or lost business or loss of data or goodwill. Even if such Protected Party has been advised of the possibility of such damages. Some jurisdiction do not allow the limitation or exclusion of liability for incidental or consequential damages so some of the above limitations may not apply to certain users. In no event shall the Protected Party’s total liability to you for all damages, losses and causes of action (whether in contract or tort, including but not limited to, negligence or otherwise) exceed, in the aggregate, the amount paid by you, if any, for accessing this Media.",
    ],
  },
  {
    title: "15. Indemnification",
    content: [
      "You agree, at your own expense, to indemnify, defend and hold harmless TechShpere Bulletin Group, its Suppliers, agents, directors, officers, employees, shareholders representatives, successors, and assigns from and against any and all claims, damages, liabilities, costs, and expenses, including reasonable attorneys’ and experts’ fees, arising out of or in connection with the Service and/or the Media, or any links on the Service and/or the Media, including, but not limited to: (i) your use or someone using your computer’s or device use of the Service and/or the Media; (ii) use by someone using your account; (iii) a violation of the Terms and Conditions by you or anyone using your computer or device (or account, where applicable); (iv) a claim that any use of the Service and/or the Media by you or someone using your computer (or account, where applicable) infringes any intellectual property right of any third party, or any right of privacy or publicity, is libelous or defamatory, or otherwise results in injury or damage to any third party; (v) any deletions, additions, insertions or alterations to, or any unauthorized use of, the Media and/or the Service by you or someone using your computer (or account, where applicable); (vi) any misrepresentation or breach of representation or warranty made by you contained herein; or (vii) any breach of any covenant or agreement to be performed by you hereunder.",
      "You agree to pay any and all costs, damages, and expenses, including, but not limited to, reasonable attorneys’ fees and costs awarded against or otherwise incurred by or in connection with or arising from any such claim, suit, action, or proceeding attributable to any such claim.",
      "You agree to pay any and all costs, damages, and expenses, including, but not limited to, reasonable attorneys’ fees and costs awarded against or otherwise incurred by or in connection with or arising from any such claim, suit, action, or proceeding attributable to any such claim.",
    ],
  },
  {
    title: "16. Linking ",
    content: [
      "Upon linking to the Media pursuant to the Terms and Conditions, you will be granted a non-exclusive, non-transferable, royalty-free sub-license to use the TechShpere Bulletin mark solely for providing an underlined, textual link from your Media to TechShpere Bulletin.com.",
      "Unless otherwise specifically indicated in these Terms and Conditions or on the Media, you agree that: (i) if you include a link from any other link to the Media, such link shall open in a new browser window and shall link to the full version of an HTML formatted page of the relevant Media; (ii) you are not permitted to link directly to any image hosted on the Media and/or our Services, such as using an “in-line” linking method to cause the image hosted by us to be displayed on another website or any other media; (iii) you are not permitted to link the Media to any site or other media containing an inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information that violates any applicable intellectual property, proprietary, privacy or publicity rights; and (iv) you agree not to download or use images hosted on the Media on another website or other media, for any purpose, including, without limitation, posting such images on another site or media (as the case may be).",
      "Further, you may not archive, cache, or mirror any TechShpereBulletin.com web page or portions of a web page. If you would like to use, reprint, frame, or redistribute any TechShpere Bulletin.com content other than as permitted herein, you must not do so unless you have an express permission from TechShpere Bulletin. Please include: (a) your name, e-mail address, and telephone number; (b) the name of your company; (c) the website address(es) where the proposed use will occur; and (d) specific details about the contemplated linking or framing activities, including the content or webpage(s) of this website which you would like to use while seeking such permission.",
    ],
  },
  {
    title: "17. Framing",
    content: [
      "TechShpere Bulletin is concerned about the integrity of the Media when it is accessed in a manner solely determined by third parties or viewed in a setting solely created by third parties. Specifically, TechShpere Bulletin is concerned with activities such as bringing up or presenting content of the Media within another website or web media (“Framing“).You agree not to link from any other website or web media to the Media in any manner such that the Media, or any page of the Media, is “framed” surrounded or obfuscated by any third party content, materials or branding. We reserve all of our rights under the law to insist that any link to the Media be discontinued, and to revoke your right to link to the Media from any other website or web media at any time upon written notice to you.",
      "No other use of TechShpere Bulletin’s marks, names or logos is permitted without express written permission from TechShpere Bulletin.",
    ],
  },
  {
    title: "18. Photosensitive Seizures",
    content: [
      "A very small percentage of people may experience a seizure when exposed to certain visual images, such as flashing lights or patterns that may appear in video games or other electronic or online content. Even people who have no history of seizures or epilepsy may have an undiagnosed condition that can cause these “photosensitive epileptic seizures” while watching video games or other electronic content. These seizures have a variety of symptoms, including light headedness, disorientation, confusion, momentary loss of awareness, eye or face twitching, altered vision or jerking or shaking of arms or legs. If you experience any of the foregoing symptoms, or if you or your family has a history of seizures or epilepsy, you should immediately stop using the Media and consult a doctor.",
    ],
  },
  {
    title: "19. Limited Time To Claim",
    content: [
      "You and TechShpere Bulletin agree that any legal action arising out of or related to the Services only, must be initiated within one (1) year from the accruing of the cause of action, otherwise, such cause of action be deemed to have cease to exist and no claims in respect of such cause of action can be made.",
    ],
  },
  {
    title: "20. Governing Law",
    content: [
      "We control and operate the Media from our offices in India. We do not represent that materials on the Media are appropriate or available for use in other locations. Persons who choose to access the Media from other locations do so on their own initiative, and are responsible for compliance with local laws, if and to the extent local laws are applicable.",
      "Notwithstanding anything else contained herein, these Terms and Conditions shall be governed and construed in accordance with the laws of the India.",
      "You agree to submit to the jurisdiction of the courts of Delhi (without giving effect to conflicts-of-law principles thereof.) with respect to any legal proceedings that may arise in connection with the Service or from a dispute as to the interpretation or breach of the Terms and Conditions.",
    ],
  },
  {
    title: "21. Miscellaneous",
    content: [
      "You accept that TechShpere Bulletin has the right to change the content or technical specifications of any aspect of the Service and/or the Media at any time in TechShpere Bulletin’s sole discretion. You further accept that such changes may result in your being unable to access the Service and/or the Media. The failure of TechShpere Bulletin to exercise or enforce any right or provision of the Terms and Conditions shall not constitute a waiver of such right or provision. TechShpere Bulletin may assign its rights under these Terms and Conditions without notice. These Terms and Conditions will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.",
    ],
  },
  {
    title: "22. Headings",
    content: [
      "You accept that TechShpere Bulletin has the right to change the content or technical specifications of any aspect of the Service and/or the Media at any time in TechShpere Bulletin’s sole discretion. You further accept that such changes may result in your being unable to access the Service and/or the Media. The failure of TechShpere Bulletin to exercise or enforce any right or provision of the Terms and Conditions shall not constitute a waiver of such right or provision. TechShpere Bulletin may assign its rights under these Terms and Conditions without notice. These Terms and Conditions will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.",
    ],
  },
  {
    title: "23. Severability",
    content: [
      "If any provision of these Terms and Conditions is found invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms and Conditions will remain in force.",
    ],
  },
  {
    title: "24. Entire Agreement",
    content: [
      "These Terms and Conditions and the Privacy Policy and any other terms and conditions of service on the Media, and its successor, constitute the entire agreement between you and TechShpere Bulletin and govern your use of the Service and the Media.",
    ],
  },
  {
    title: "25. Notice Of Copyright Infringement",
    content: [
      "The TechShpere Bulletin Group is not liable for any infringement of copyright arising out of materials posted on or transmitted through the Media, or items advertised on the Media, by the Users or any other third parties. The TechShpere Bulletin Group respects the intellectual property rights of others and require that the people who use the Media, or the services or features made available on or through the Media, do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please forward the following information to the Grievance Officer (as mentioned below in the Payment Policy)",
      "A physical or electronic signature of a person authorized to act on behalf of the copyright owner for the purposes of the complaint.",
      "Identification of the copyrighted work claimed to have been infringed.",
      "Identification of the material on our website that is claimed to be infringing or to be the subject of infringing activity.",
      "The address, telephone number or e-mail address of the complaining party.",
      "A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law.",
      "A statement, under penalty of perjury, that the information in the notice of copyright infringement is accurate, and that the complaining party is authorized to act on behalf of the owner of the right that is allegedly infringed.",
    ],
  },
  {
    title: "26. User Generated Content Disclaimer",
    content: [
      "The views, suggestions, opinions, comments, feedback and investment tips expressed by Users on the platform are their personal views / expressions / information. Neither TechShpere Bulletin nor its principals, managements, agents, associates or employees represent the aforesaid views / expressions / information and further do not guarantee the accuracy, adequacy and completeness nor endorse and acknowledge the said views / expression.",
      "Neither TechShpere Bulletin nor its principals, managements, agents, associates or employees are not financially liable and responsible for any errors or omissions or for any results obtained from the use of said views/expressions/information.",
      "No warranty of any kind, implied, express or statutory, including but not limited to the warranties of non-infringement of third party rights and freedom from computer virus, is given in conjunction with the said views/expressions/information.",
      "Caution Note: Investments in any securities are subject to market risks and any content/material on the Media shall not be construed as any recommendation or advisory to trade in any of the securities.",
      "Copyright Notice: Copyright ©TechShpereBulletin.com All Rights Reserved.  ",
      "This disclaimer/ terms of service notification is subject to change without notice.",
    ],
  },
  {
    title: "27. Access to TechShpere Bulletin and TechShpere Bulletin Plus",
    content: [
      "You accept that TechShpere Bulletin provides access to TechShpere Bulletin and TechShpere Bulletin Plus articles available only on the TechShpere Bulletin website and any direct access to TechShpere Bulletin and TechShpere Bulletin Plus will require a separate subscription with them.",
    ],
  },
  {
    title: "28. Assignment ",
    content: [
      "TechShpere Bulletin or Weblock Infosoft may assign these Terms and Conditions or any part of it without restrictions. You are not allowed to assign, transfer or sub-license Your rights under these Terms and Conditions, to any third party.",
    ],
  },
  {
    title: "29. Waiver",
    content: [
      "Any failure to enforce at any time any of the provisions of these Terms and Conditions shall not be construed to be a waiver of its right, power, privilege or remedy or as a waiver of any preceding or succeeding breach nor shall any single or partial exercise of any right power privilege or remedy preclude any other or further exercise of such or any other right power privilege or remedy provided in these Terms and Conditions all of which are several and cumulative and are not exclusive of each other or of any other rights or remedies otherwise available at law or in equity.",
    ],
  },
];

export default TermsPage;

// import React from "react";
// import { IoCheckmarkCircle } from "react-icons/io5";

// const TermsPage = () => {
//   return (
//     <div className="mt-24">
//       {/* Hero Section */}
//       <div className="relative h-[400px] w-full">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#4360ac] to-[#2bace2] opacity-90"></div>
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
//             Terms of Use
//           </h1>
//           <p className="text-lg md:text-xl text-center max-w-3xl italic">
//             Please read all of the following terms and conditions of this website before using this site.
//           </p>
//         </div>
//       </div>

//       {/* Terms Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Introduction Section */}
//         <div className="text-center mb-16">
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Weblock Infosoft is a technology service provider that also engages in marketing, educational, and non-news content development activities. Weblock Infosoft has granted an exclusive, non-transferable, non-sublicenseable, non-assignable, worldwide license to TechSphere Bulletin (“TechSphere Bulletin” or “we” or “us” or “our” or “Company”) to access, use, manage, and operate the Website (www.techspherebulletin.com) (including any sub-domains thereof, or application (the “Website”)). TechSphere Bulletin solely provides news and current affairs content on the Website on an ‘as-is basis’ without any interference from Weblock Infosoft. Additionally, TechSphere Bulletin provides access to Services and other non-news related content developed by itself, Weblock Infosoft, or third parties through the Website on an ‘as-is basis’ from time to time.
//           </p>
//         </div>

//         {/* Key Terms Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#4360ac] to-[#2bace2] bg-clip-text text-transparent">
//             Key Terms & Conditions
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {terms.map((term, index) => (
//               <div
//                 key={index}
//                 className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
//               >
//                 <IoCheckmarkCircle className="w-6 h-6 text-[#4360ac] flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="text-gray-600 leading-relaxed">{term}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Detailed Terms Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#4360ac] to-[#2bace2] bg-clip-text text-transparent">
//             Detailed Terms
//           </h2>
//           <div className="space-y-12">
//             {termsData.map((section, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
//               >
//                 <div className="flex items-start space-x-4">
//                   <span className="text-2xl font-bold bg-gradient-to-r from-[#4360ac] to-[#2bace2] bg-clip-text text-transparent flex-shrink-0">
//                     {section.id}.
//                   </span>
//                   <ul className="list-disc ">
//                     <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                       {section.title}
//                     </h3>
//                     <li className="text-gray-600 leading-relaxed">
//                       {section.description}
//                     </li>
//                     {section.description2 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description2}
//                       </li>
//                     )}
//                     {section.description3 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description3}
//                       </li>
//                     )}
//                     {section.description4 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description4}
//                       </li>
//                     )}
//                     {section.description5 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description5}
//                       </li>
//                     )}
//                     {section.description6 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description6}
//                       </li>
//                     )}
//                     {section.description7 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description7}
//                       </li>
//                     )}
//                     {section.description8 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description8}
//                       </li>
//                     )}
//                     {section.description9 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description9}
//                       </li>
//                     )}
//                     {section.description10 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description10}
//                       </li>
//                     )}
//                     {section.description11 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description11}
//                       </li>
//                     )}
//                     {section.description12 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description12}
//                       </li>
//                     )}
//                     {section.description13 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description13}
//                       </li>
//                     )}
//                     {section.description14 && (
//                       <li className="text-gray-600 leading-relaxed mt-4">
//                         {section.description14}
//                       </li>
//                     )}
//                     {/* {section.description15 && (
//                       <p className="text-gray-600 leading-relaxed mt-4">
//                         {section.description15}
//                       </p>
//                     )} */}

//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Legal Framework Section */}
//         <div className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] rounded-2xl p-8 md:p-12 text-white mb-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Our Legal Framework
//             </h2>
//             <p className="text-lg md:text-xl leading-relaxed">
//               In addition to hosting content created by the TechSphere Bulletin Group, the Website operates as an ‘intermediary’ as defined under the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
//             </p>
//           </div>
//         </div>

//         {/* Back to Home Section */}
//         <div className="text-center">
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Return to our main page to explore our services and content offerings.
//           </p>
//           <a
//             href="/"
//             className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg inline-flex items-center"
//           >
//             Back to Home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const terms = [
//   "The following terms and conditions (“Terms and Conditions”) govern your use of this Website and any content, features, or functionality made available from or through this Website by TechSphere Bulletin under the registered trademark ‘TechSphere Bulletin’ acting on behalf of itself and Weblock Infosoft (collectively, the “TechSphere Bulletin Group”).",
//   "Through the Website or related mobile application or other digital media (“Media”), the Company allows users to access certain business news content, current affairs, non-news reports, curated events, communities, and executive courses for a subscription fee and otherwise (“Services”).",
//   "By continuing to access, link to, or use this Media, you signify your acceptance of the Terms and Conditions. TechSphere Bulletin reserves the right to amend, remove, or add to these Terms at its sole discretion, effective immediately.",
//   "Some services on the Media may be subject to additional posted Terms & Conditions, incorporated herein by reference. In case of inconsistency, the additional conditions prevail.",
// ];

// const termsData = [
//     {
//       id: 1,
//       title: "Eligibility",
//       description:
//         "You will be eligible to subscribe to the Services on the Media only if you are competent to contract under the Indian Contract Act, 1872. A person is competent to contract under the Indian Contract Act, 1872, inter-alia, if he/she is above eighteen (18) years of age, is of a sound mind and is not disqualified from contracting by any law to which he/she is subject. You hereby represent and warrant to the Company that you are at least eighteen (18) years of age or above and are capable of entering, performing and adhering to these Terms and Conditions and that you agree to be bound by the following terms and conditions. While individuals under the age of 18 may utilize the Services of the Media, they shall do so only with the involvement & guidance of their parents and / or legal guardians, under such Parent /Legal guardian’s registered account. You agree to register prior to uploading any content and / or comment and any other use or Services of the Media and provide your details including but not limited to complete name, age, email address, residential address, and contact number.",
//     },
//     {
//       id: 2,
//       title: "Proprietary Rights",
//       description:
//         "Except as permitted herein, you do not have any right, title or interest in and to the Media including all the content (including, for example, audios, photographs, illustrations, graphics, other visuals, videos, copy, text, software, titles, Shockwave files, etc.), code, data and materials thereon, the look and feel, design and organization of the Media, and the compilation of the content, code, data and materials on the Media, including but not limited to any copyrights, trademark rights, trade secrets, know how, patent rights, database rights, service marks, moral rights, sui generis rights and other intellectual property and proprietary rights therein (collectively referred to as the “TechShpere Bulletin IPR“). Your use of the TechShpere Bulletin IPR does not grant to you ownership of any content, code, data or materials you may access on or through the Media or through the use of TechShpere Bulletin IPR. Your use of the TechShpere Bulletin IPR is only a limited, non-exclusive licence to use the TechShpere Bulletin IPR while accessing the Media.",
//       description2:
//         " You agree to comply with all written requests made by TechShpere Bulletin or its suppliers and licensors of content, equipment, or otherwise (“Suppliers“) to protect their and others’ contractual, statutory, and common law rights in the TechShpere Bulletin IPR.",
//     },
//     {
//       id: 3,
//       title: "User Obligations",
//       description:
//         "You may access and view the content on the Media on your computer or other device and, except as specifically permitted by these Terms and Conditions, you may not copy or make any use of the TechShpere Bulletin IPR or any portion thereof. Unless otherwise specifically indicated in these Terms and Conditions or on the Media, use of the Media and the TechShpere Bulletin IPR, are only for your personal, non-commercial and internal use. Except as specifically permitted herein, you shall not use the Media or the TechShpere Bulletin IPR, or any portion thereof or the names of any individual participant in, or contributor to, the TechShpere Bulletin IPR, or any variations or derivatives thereof, for any purpose, without TechShpere Bulletin’s prior written approval.",
//     },
//     {
//       id: 4,
//       title: "Limitation of Liability",
//       description:
//         "Subscription Services provide you access to Media and Services offered through the Website (including news and current affairs content provided by TechShpere Bulletin) (“Subscription Services”). A preview is available to all viewers of the Media but access to opinion pieces, commentaries and exclusive features of the Media are available to paid subscribers of the Subscription Services alone. The nature of the Subscription Services made available to you is subject to change. We may vary the access rights of users engaged in accessing the Media without a paid subscription at any time. With respect to paid subscribers, any revision of access rights will take effect at any time during or after such a user’s current subscription term.",
//       description2:
//         "Subscription Services may differ geographically and based on the device from which you subscribe. Subscription packages and price may also vary in time. Subscription doesn’t grant rights over the Service or the TechShpere Bulletin IPR other than as expressly mentioned herein.",
//       description3:
//         "The Website integrates with third party payment gateways, wallets, etc. In case of any payment failure, rejection, inability to purchase or access servers, dropping off in between buying journey, TechShpere Bulletin Group will not be held responsible in any form. All the transaction issues to be handled directly with the payment gateway or wallets.",
//       description4:
//         "Users may not be eligible for one or more payment options depending on the eligibility criteria decided by the respective payment partner. TechShpere Bulletin Group will not be held responsible in any form for the respective eligibility criteria.",
//       description5:
//         "Plan duration will include all such technical or production issues like server downtime, unavailability to login or access the site etc. Plan will expire on the due date with respect to purchase dates.",
//       description6:
//         "By submitting your payment and other subscription details, you are making an offer to us to buy a subscription. Your offer will only be accepted by us and a contract formed when we have successfully verified your payment details and email address, at which point we will provide you with access to your subscription. TechShpere Bulletin reserves the right to reject any offer in its discretion, for any or no reason.",
//       description7:
//         "The payment services provider would be a PCI-DSS Level 1-certified to assure the highest level of safety standards.",
//       description8:
//         "You shall pay all fees and charges incurred through your account at the rates in effect for the billing period in which such fees and charges are incurred, including but not limited to charges for any products or services offered for sale through the Media or by any other vendor or service provider.",
//       description9:
//         "All fees and charges shall be billed to you, and you shall be solely responsible for their payment. You shall pay all applicable taxes relating to the use of the Media through your account, and the purchase of any other products or services.",
//       description10:
//         "Certain portions of the Media may require a prepaid fee (“Prepaid Fee“), which may be modified from time to time in TechShpere Bulletin’s sole discretion. The Prepaid Fee, and all taxes and other fees related thereto will be paid by you in advance.",
//       description11:
//         "In no event will you receive any portions of the Media, if a Prepaid Fee is required unless TechShpere Bulletin receives all fees and charges payable by you, including the Prepaid Fee.",
//       description12:
//         "The structure and quantum of the fee charged by TechShpere Bulletin can be revised (including any increase or decrease in the fee amount) by TechShpere Bulletin at its sole and absolute discretion, without any notice to the User.",
//     },
//     {
//       id: 5,
//       title: "Prohibited Use",
//       description:
//         "Unless otherwise specifically indicated in these Terms and Conditions or on the Media, any commercial or promotional distribution, publishing, re-circulation, re-distribution or exploitation of the Service or Media, or any content, code, data or materials on the Media, or any portion of the Service or TechShpere Bulletin IPR is strictly prohibited unless you have received the express prior written permission from our authorized personnel or the otherwise applicable rights holder. Other than as expressly allowed herein or on the Media, you may not download, post, display, store, publish, copy, reproduce, distribute, transmit, modify, perform, broadcast, transfer, create derivative works from, sell or otherwise exploit any content, code, data or materials of, on or available through the Media or of the Service. You further agree that you may not alter, edit, delete, remove, otherwise change the meaning or appearance of, or repurpose, recompile, decompile reverse engineer any of the content, code, data, or other materials on or available through the Media, including, without limitation, the alteration or removal of any trademarks, trade names, logos, service marks, or any other proprietary content or proprietary rights notices.",
//         description2: "You shall not use the Service or the Media for any illegal purpose, for the facilitation of the violation of any law or regulation, or in any manner inconsistent with the Terms and Conditions. You agree not to use, transfer, distribute, or dispose of any information contained in the Service or TechShpere Bulletin IPR in any manner that could compete with the business of TechShpere Bulletin or any of its Suppliers.",
//         description3: "You may use the “e-mail this article” function solely to inform others about a TechShpere Bulletin News article, and you shall immediately cease using this function with regard to recipients who have requested not to receive such information.",
//         description4: "You are forbidden from any attempts to resell or put to commercial use any part of the Media or the Service or any TechShpere Bulletin IPR; any collection and use of any product listings, descriptions, or prices; any derivative use of the Media or its contents; any downloading or copying of account information for the benefit of any other merchant; any renting, leasing, or otherwise transferring rights to the Media / Service / TechShpere Bulletin IPR; or any data gathering or extraction tools; or any use of meta tags.",
//         description5: "You may not offer any part of the Service / TechShpere Bulletin IPR for sale or distribute it over any other medium including but not limited to over-the-air television or radio broadcast, a computer network or hyperlink framing on the internet without the prior written consent of TechShpere Bulletin.",
//         description6: "You may not use the Service / TechShpere Bulletin IPR in any way to improve the quality of any data sold or contributed by you to any third party.",
//         description7: "You may not input, distribute, upload, post, email, transmit or otherwise make available any content through the Media that: (i) is promotional in nature, including solicitations for funds or business, without the prior written authorization of TechShpere Bulletin, or constitutes junk mail, spam, chain letters, pyramid schemes or the like; (ii) is unlawful, harmful, threatening, abusive, tortious, defamatory, vulgar, obscene, pornographic, pedophilic libelous, invasive of another’s privacy (including bodily privacy), insulting or harassing on the basis of gender, racially or ethnically objectionable, relating or encouraging money laundering or gambling or an online game causes uses harm, or promoting enemity between different groups on the grounds of religion or caste with the intent to incite violence, ; (iii) for which you do not have the right to make available under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements); (iv) infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party; (v) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource, or telecommunications equipment; (vi) is harmful to minors; (vii) constitutes the personally identifiable information of any other person that such person has not authorized you to disclose; \ (viii) impersonates another person; (ix) threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; (x) results in advertising or solicitation to anyone to buy or sell products or services, or to make donations of any kind; (xi) Results in spamming, spidering, “screen scraping,” “database scraping,”, phishing or harvesting email addresses that have been posted by other users of the Sites; (xii) Uses or attempt to use another person’s account, password or services; (xiii) Disrupts, interferes with or otherwise violates the security of the Sites or any services, accounts, passwords, servers or networks related to the Site; (xiv) Sends repeated messages to another user or repeat postings of the same message under the same or multiple subjects or engage in cyber stalking or become a nuisance for other users; (xv) Damages, disables, overburdens, or impairs servers, or the network(s) connected to the servers, or interferes with any other party’s use and enjoyment of any Services; (xvi) Obtains or attempts to obtain any materials or information through any means not intentionally made available through the Media/Services; (xvii) deceives or misleads the addressee about the origin of the message knowingly or intentionally communicates any misinformation or information which is paterntly false and untrue or misleading in nature or has been identified as fake or false; or (xviii) is in the nature of advertisement or surrogate advertisement or promotion of an online game that is not a permissible online game or of any online gaming intermediary offering such game.",
//         description8: "You may not use any of the Services / TechShpere Bulletin IPR in any manner which creates the impression that such items belong to or are associated with you or are used with TechShpere Bulletin’s consent, and you acknowledge that you have no ownership rights in and to any of such items.",
//         description9: "You agree not to use any framing techniques to enclose any Service or TechShpere Bulletin IPR; or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on the Media / Service, including without limitation, the size, color, location or style of all proprietary marks.",
//         description10: "You may neither interfere with nor attempt to interfere with nor otherwise disrupt the proper working of the Media, any activities conducted on or through the Media or any servers or networks connected to the Media.",
//         description11: "You may neither obtain nor attempt to obtain through any means any TechShpere Bulletin IPR that have not been intentionally made publicly available either by public display on the Media or through accessibility by a visible link on the Media. You shall not violate the security of the Media or attempt to gain unauthorized access to the Media, data, materials, information, computer systems or networks connected to any server associated with the Media, through hacking, password timing or any other means.",
//         description12: "You may neither take nor attempt any action that, in the sole discretion of TechShpere Bulletin, imposes or may impose an unreasonable or disproportionately large load or burden on the Media or the infrastructure of the Media. You shall not use or attempt to use any “scraper,” “robot,” “bot,” “spider,” “data mining,” “computer code,” or any other automate device, program, tool, algorithm, process or methodology to access, acquire, copy, or monitor any portion of the Media, any data or content found on or accessed through the Media, or any other Media information without the prior express written consent of TechShpere Bulletin. You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any other content.",
//         description13: "Requests to republish or use in any manner TechShpere Bulletin’s material/content for distribution should be addressed to updates[@]techshperebulletin.com.",
//         description14: "Unless TechShpere Bulletin has expressly consented in writing, you shall not republish or use in any manner any material/consent/Service/TechShpere Bulletin IPR of TechShpere Bulletin."
//     },
//   ];

// export default TermsPage;
