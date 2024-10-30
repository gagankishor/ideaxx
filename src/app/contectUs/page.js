import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 min-h-screen py-16 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden lg:flex transform transition duration-500 hover:scale-105">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <div>
              <label className="text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full mt-2 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Information */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-800 to-purple-900 text-white p-10 lg:py-16 lg:px-20 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
          <p className="mb-10 leading-relaxed">
            Feel free to reach out to us directly through the following contact information or connect with us on social media.
          </p>
          <div className="space-y-5">
            <div className="flex items-center">
              <span className="material-icons mr-3 text-blue-300">phone</span>
              <span className="text-lg">+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-3 text-blue-300">email</span>
              <span className="text-lg">info@yourcompany.com</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-3 text-blue-300">location_on</span>
              <span className="text-lg">1234 Your Street, City, Country</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
