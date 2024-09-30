import React, { useState } from "react";

const CreativeFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", description: "" });
  };

  return (
    <footer className=" text-white p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
        <p className="mb-6">
          I'm just a message away. Let’s discuss your project or any
          opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full md:w-1/3 p-3 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full md:w-1/3 p-3 bg-gray-800 border border-gray-700 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="2"
            className="w-full md:w-1/3 p-3 bg-gray-800 border border-gray-700 rounded"
          />
        </form>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-lg"
          >
            Ping Me
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default CreativeFooter;
