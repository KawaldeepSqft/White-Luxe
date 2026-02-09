import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* HEADER */}
      <div className="bg-[#111827] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-gray-300 max-w-4xl">
            Please read the following Terms & Conditions carefully before using
            White Luxe Real Estate services.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-[#AF882E] pl-4">
            Terms & Conditions
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            These Terms & Conditions ("Terms") govern all services provided by
            <strong> White Luxe Real Estate </strong>
            ("Company", "We", "Us", "Our") to buyers, sellers, landlords, tenants,
            builders, and developers ("Clients"). By engaging with us or using
            our services, you agree to these Terms.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">1. Nature of Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Residential & commercial brokerage</li>
                <li>Leasing, resale & primary sales assistance</li>
                <li>Builder & developer sales support</li>
                <li>Market advisory and investment consulting</li>
              </ul>
              <p className="mt-3 text-gray-700">
                We do not own, develop, construct, or guarantee any property marketed by us.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Role with Builders / Developers</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acts as a channel partner / brokerage advisor</li>
                <li>Assists in marketing, lead generation, site visits, and deal facilitation</li>
                <li>No control over construction quality, timelines, approvals, or delivery</li>
                <li>All commitments are solely the responsibility of the builder/developer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Brokerage & Fees</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Brokerage shall be mutually agreed in writing</li>
                <li>Payable upon successful transaction closure or booking</li>
                <li>Non-payment may result in legal recovery action</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Information & Representations</h3>
              <p className="text-gray-700">
                All property details are based on information provided by builders,
                owners, or third parties. Clients must conduct independent due diligence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. Limitation of Liability</h3>
              <p className="text-gray-700">
                White Luxe Real Estate shall not be liable for builder delays,
                project cancellations, regulatory issues, or investment losses.
                Liability, if any, is limited to the brokerage amount received.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">6. Governing Law</h3>
              <p className="text-gray-700">
                Governed by Indian laws. Courts at Gurugram, Haryana shall have
                exclusive jurisdiction.
              </p>
            </div>
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

export default TermsAndConditions;
