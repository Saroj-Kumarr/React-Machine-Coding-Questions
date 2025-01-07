import { useState } from "react";

const tabsData = [
  {
    label: "Overview",
    content:
      "This product helps you streamline workflows and improve productivity with ease.",
  },
  {
    label: "Features",
    content:
      "Packed with a user-friendly interface, third-party integrations, and advanced analytics.",
  },
  {
    label: "Pricing",
    content:
      "Affordable plans starting from $10/month, with Pro and Enterprise options available.",
  },
  {
    label: "FAQs",
    content:
      "Get answers to common questions about free trials, cancellations, and discounts.",
  },
];

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <div className="flex border-b border-gray-200">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTabIndex(index)}
            className={`p-3 w-full text-center font-medium ${
              currentTabIndex === index
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-50 h-screen border border-gray-200 rounded-b-lg shadow-sm">
        <p className="text-gray-700 text-sm">
          {tabsData[currentTabIndex].content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
