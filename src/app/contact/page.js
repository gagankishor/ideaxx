export default function Contact() {
    return (
      <>
       
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Have questions or inquiries? Reach out to us by filling out the form
              below.
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-12 text-center">
              <p className="text-gray-600">Or reach us at:</p>
              {/* <p className="text-gray-800 font-medium">Phone: +1 234 567 890</p> */}
              <p className="text-gray-800 font-medium">
                Email: info@idxsolana.io
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }