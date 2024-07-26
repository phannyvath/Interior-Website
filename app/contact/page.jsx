import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-orange-400 shadow-lg rounded-lg overflow-hidden ">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-extrabold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-white mb-6">
            We'd love to hear from you! Please use the form below to get in
            touch with us.
          </p>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-700 shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="bg-orange-600 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Address</h2>
          <p className="text-gray-600 mt-2">
            1234 Street Name, City, State, 12345
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-4">Phone</h2>
          <p className="text-gray-600 mt-2">(123) 456-7890</p>
          <h2 className="text-lg font-semibold text-gray-900 mt-4">Email</h2>
          <p className="text-gray-600 mt-2">info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
