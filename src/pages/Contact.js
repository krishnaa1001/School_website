import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 min-h-screen items-stretch">
      {/* Contact Form Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>
          <p className="mb-4">Phone: +1 (123) 456-7890</p>
          <p className="mb-4">Email: info@springdale.edu</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0614351859786!2d-122.08424968468114!3d37.42199977982454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb4dcb4335d7%3A0x7da8d7e0d58eab10!2sGoogleplex!5e0!3m2!1sen!2sus!4v1622068275792!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
