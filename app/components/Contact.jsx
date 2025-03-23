"use client";

import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b093c25-82c7-4c3e-b454-0009ba8dae7f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[5%] sm:px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-cover sm:bg-[length:90%_auto]"
    >
      {/* Heading Section */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 sm:mb-12 font-Ovo text-sm sm:text-base">
        If you would like to get in touch, please feel free to reach out via
        email. I am available for inquiries, collaborations, and professional
        opportunities. I will do my best to respond promptly.
      </p>

      {/* Form Section */}
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10 mb-6 sm:mb-8">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white focus:border-gray-600 transition-colors mb-6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
          Submit now
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
