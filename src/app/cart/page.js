const Cart = () => {
  return (
    <div className="bg-[#f6f5fc] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          {/* Single Web Hosting */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Startup Plan</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              {/* Period Selection */}
              <div className="flex items-center space-x-2">
                <label className="text-gray-500">Period</label>
                <select className="border border-gray-300 rounded px-3 py-2">
                  <option>48 months</option>
                  <option>36 months</option>
                  <option>24 months</option>
                  <option>12 months</option>
                </select>
              </div>
              {/* Price and Discount */}
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <button className="bg-red-100 text-red-500 px-4 py-2 rounded font-semibold mb-2">
                  SAVE ₹15,840.00
                </button>
                <div className="text-2xl font-bold text-gray-800">₹699.00 / month</div>
                <div className="text-gray-500 line-through">₹3999.00 / month</div>
              </div>
            </div>
            {/* Renewal Info */}
            <p className="text-gray-500 mt-4 text-sm">
              Renews at ₹179.00/month on 05/12/2028. Cancel anytime!
            </p>
          </div>

          {/* Domain Section */}
          {/* <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold mb-2">🌐 Every website needs a domain</h3>
            <p className="text-gray-500 mb-4">
              Get your domain right away and publish your website faster
            </p>
            <input
              type="text"
              placeholder="Domain name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow p-6">
          {/* Subtotal */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Subtotal</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 line-through">₹19,152.00</span>
              <span className="text-xl font-bold text-gray-800">₹3,312.00</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Plan discount -83%</span>
              <span className="text-red-500">-₹15,840.00</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mb-6">
            <a href="#" className="text-blue-600 hover:underline">
              Have a coupon code?
            </a>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-[#6161FF] text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
            Continue
          </button>

          {/* Guarantee */}
          <div className="text-gray-500 text-sm mt-6 flex items-center space-x-2">
            <span>🛡️</span>
            <span>7-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
