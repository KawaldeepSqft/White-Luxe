import React, { useEffect } from "react";

const LegalDisclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* HEADER */}
      <div className="bg-[#111827] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Legal Disclaimer
          </h1>
          <p className="mt-3 text-gray-300 max-w-4xl">
            Please read the following Legal Disclaimer carefully before using
            White Luxe Real Estate services.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-[#AF882E] pl-4">
            Legal Disclaimer
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              White Luxe Real Estate is a real estate brokerage and advisory firm
              acting solely as an intermediary between buyers, sellers,
              landlords, tenants, builders, and developers.
            </p>

            <p>
              All property information, pricing, layouts, approvals, and possession
              timelines displayed on this website are based on details provided by
              respective builders, developers, owners, or third parties.
            </p>

            <p>
              White Luxe Real Estate does not guarantee the accuracy, completeness,
              or reliability of such information and shall not be responsible for
              discrepancies, delays, cancellations, or non-compliance by builders
              or owners.
            </p>

            <p>
              Visitors are advised to independently verify all legal, financial,
              and technical details before entering into any transaction.
            </p>

            <p>
              Unauthorized use, reproduction, or copying of website content is
              strictly prohibited.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="border-t pt-8 text-center">
          <h3 className="text-lg font-semibold">White Luxe Real Estate</h3>
          <p className="text-sm text-gray-600 mt-1">
            Trusted Advisory | Transparent Deals | Value-Driven Real Estate
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
