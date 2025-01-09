import { Metadata } from "next";
import React, { FormEvent } from "react";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us app page",
};

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-4">
          Have Question in Mind?
          <br />
        <span className="text-center mb-8">Let us help you</span>
        </h2>
        <form action={"#"} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-1/2 border border-red-300 rounded-md px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Question type"
              className="w-1/2 border border-red-300 rounded-md px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your question"
              className="flex-grow border border-red-300 rounded-l-md px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-4 rounded-r-md font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
