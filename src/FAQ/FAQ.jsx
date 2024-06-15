import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-lg">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do you build the entire ship in house?",
      answer:
        "Lorem ipsum dolor adipiscing tempor labore dolore magna mollis, purus semper tellus nullam vehicula ipsum ligula ullamcorper malesuada proin libero interdum lorem ipsum.",
    },
    {
      question: "What if there is no wind?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
    {
      question:
        "I am a mover owner or shipper: I regularly have containers transported via sea. How do I benefit from using Borneo ships?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
    {
      question: "Are your ships already in operation?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
    {
      question: "Why should you use our service?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
    {
      question: "Where can these ships operate?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
    {
      question: "What type of freight can I transport with your ship?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet consectetur dolor in elementum.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-gray-500 uppercase mb-2">FAQ</h2>
        <h1 className="text-4xl font-bold mb-2">
          Quick answers to questions you may have
        </h1>
        <p className="text-gray-600 mb-4">
          Can't find what you're looking for?
        </p>
        <a href="mailto:hi@domain.com" className="text-orange-500">
          hi@domain.com
        </a>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
