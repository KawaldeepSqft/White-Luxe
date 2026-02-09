import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800">
      {/* HEADER */}
      <div className="bg-[#111827] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-3 text-gray-300 max-w-4xl">
            Please read the following Privacy Policy carefully before using
            White Luxe Real Estate services.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-[#AF882E] pl-4">
            Privacy Policy
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              We respect your privacy and are fully committed to safeguarding your
              personal information. Any details shared through this website, including
              your name, contact number, email address, or other personal data, are
              used strictly for property-related communication, inquiries, and service
              delivery. We do not sell, rent, or misuse client information under any
              circumstances, and appropriate measures are taken to ensure data security
              and confidentiality.
            </p>

            <p>
              By submitting your details on our website, you voluntarily consent to
              being contacted via phone calls, WhatsApp, SMS, or email for relevant
              property updates, offers, and service-related communication. Your
              information will only be used to provide accurate assistance and a
              better customer experience.
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

export default PrivacyPolicy;
