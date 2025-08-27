import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqData = [
  { question: "How do I list my property on Urbanet?", answer: "You can list your property by registering and following the property listing steps in your dashboard." },
  { question: "Are the properties verified?", answer: "Yes, our team verifies each property listing before it's published." },
  { question: "Can I schedule virtual tours?", answer: "Absolutely! You can request virtual tours through the property page." },
  { question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, UPI, and net banking." },
  { question: "Can I work with a specific agent property on Urbanet?", answer: "Yes, you can directly connect with agents through their profiles." },
  { question: "How often are the listings updated?", answer: "Our listings are updated daily to ensure accuracy." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
       <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#A3743D] to-[#C49A6C] bg-clip-text text-transparent">
  Frequently Asked Questions
</h2>

        <p className="text-gray-500 text-lg mb-12">
          Answers to your real estate questions and concerns
        </p>
        <h3 className="font-semibold text-[#A3743D] text-lg mb-2">
          Still have a Questions?
        </h3>
        <p className="text-gray-500 mb-4">
          We're here to help! Don’t hesitate—ask away and get the answers you need.
        </p>
        <button
  onClick={() => window.open("https://wa.me/919815202102", "_blank")}
  className="bg-gradient-to-r from-[#AF882E] to-[#D7AE29] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
>
  Contact Us
</button>

      </div>

      {/* Right Section */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center text-lg font-medium text-[#333]">
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 text-[#333] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
