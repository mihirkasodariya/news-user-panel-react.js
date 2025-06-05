import React from "react";

const RefundPolicy = () => {
  return (
    <div className="mt-24">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-gradient-to-br from-[#1a237e] to-[#0288d1] ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Refund Policy
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Terms and conditions related to payment issues, refund policies, and
            steps to resolve payment failures.
          </p>
        </div>
      </div>

      {/* Refund Policy Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Policy Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-lg text-gray-600">
            <p className="mb-8">
              Through the Website or other digital media (“Media”), TechShpere
              Bulletin provides access to digital news and media content, and
              Weblock Infosoft and TechShpere Bulletin (collectively, the
              “Weblock Group”) provides access to non-news reports, curated
              events and communities among other services (“Services”).
            </p>
            <p className="mb-8">
              Terms not defined herein shall have the meaning given to them
              under the Terms of Use. Any person logging on to or using the
              Website shall be presumed to have read these policies (which
              includes the Disclaimer and Privacy Policy, separately provided on
              the Website) and unconditionally accepted the terms and conditions
              set out herein and this constitutes a binding and enforceable
              agreement between the User and the Weblock Group.
            </p>
            <p className="mb-8">
              While your bank doesn’t provide us with information about why your
              payment was declined, you can contact your bank directly to solve
              most payment issues.
            </p>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
              Contact your bank to resolve your payment issues even if:
            </h3>
            <ul className="list-disc ml-8 mb-8 text-gray-600">
              <li>
                You have successfully used the payment method on a previous
                order.
              </li>
              <li>
                Part of your order has already been charged and shipped
                successfully.
              </li>
              <li>
                You have funds available in your bank account or on your credit
                card to cover the cost of the order.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#12174a] to-[#2bace2] bg-clip-text text-transparent">
              Steps that you can take to resolve payment issues:
            </h3>
            <p className="mb-4">
              If your payment was declined, here are some steps you can take to
              resolve the issue:
            </p>
            <ul className="list-disc ml-8 mb-8 text-gray-600">
              <li className="text-lg text-gray-800 font-bold leading-relaxed mt-6">
                Contact your bank about payment security policies. Your bank
                might flag unexpected activity.
              </li>
              <p>
                Your bank might flag any unexpected activity on your account.
                This includes first-time orders and high-value purchases,
                regardless of the amount of funds available or your credit
                limit. Your bank might require your verbal authorisation to
                proceed with a transaction.
              </p>
              <li className="text-lg text-gray-800 font-bold leading-relaxed mt-6">
                Contact your bank about daily withdrawal or purchase limits.{" "}
              </li>
              <p>
                Most banks have limits on how much money can be charged or
                accessed in a single day. If you exceed this daily amount, your
                bank might block your account from any further activity
                regardless of available funds in the account. Your bank might
                require you to request a higher purchase limit to complete the
                transaction.
              </p>
              <li className="text-lg text-gray-800 font-bold leading-relaxed mt-6">
                Contact your bank about payment authorisations and reserved
                funds.
              </li>
              <p>
                When you place an order through the Website, we use RazorPay to
                contact your card’s issuing bank to confirm that your credit
                card has a valid number and has not been reported as lost or
                stolen. This is communicated by means of a full authorisation
                for the amount of the purchase. In case of a failed transaction
                the change and funds would be reserved against your account for
                the authorisation. Some banks might hold these authorisations
                for 7 to 10 business days. If your payment is declined because
                of lack of available funds, contact your bank to confirm whether
                the reserved funds are other authorisations, verify the amount
                of time that they hold authorisations, and request that they
                remove any extra authorisation to free up funds in your account.
              </p>
              <li className="text-lg text-gray-800 font-bold leading-relaxed mt-6">
                Submit an alternate payment method for your order.{" "}
              </li>
              <p>
                If you can’t resolve the payment issue with your bank in a
                timely manner and your order was suspended because the payment
                method was declined, you can change the payment method on the
                order to another card.
              </p>

              <p>
                We do not entertain any refund/cancellation post purchase of the
                order.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
              In case of any other query you can contact us at subscribe
                <a
                  // href="mailto:grievances@techshperebulletin.com"
                  className="text-[#2bace2] hover:underline  text-base break-words break-all"
                >
                  [@]techshperebulletin.com.
                </a>
                .
              </p>
            </ul>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              We do not entertain any refund/cancellation post-purchase of the
              order. In case of any other query, you can contact us at{" "}
              <a
                // href="mailto:grievances@techshperebulletin.com"
                className="text-[#2bace2] hover:underline  text-base break-words break-all"
              >
                subscribe@techshperebulletin.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        {/* <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Us for Any Queries 📩
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            For any assistance or clarification regarding payments or refunds,
            feel free to reach out to our team.
          </p>
          <button className="bg-gradient-to-r from-[#12174a] to-[#2bace2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg">
            Contact Support
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default RefundPolicy;
