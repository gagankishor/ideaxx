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
                  <option>12 months</option>
                  <option>6 months</option>
                  <option>3 months</option>
                </select>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <button className="bg-red-100 text-red-500 px-4 py-2 rounded font-semibold mb-2">
                  SAVE ₹3,597.00
                </button>
                <div className="text-2xl font-bold text-gray-800">₹699.00 / month</div>
                <div className="text-gray-500 line-through">₹3999.00 / month</div>
              </div>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              Renews at ₹699.00/month on 08/12/2025. Cancel anytime!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Subtotal</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 line-through">₹11,988.00</span>
              <span className="text-xl font-bold text-gray-800">₹8,391.00</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Plan discount -30%</span>
              <span className="text-red-500">-₹3,597.00</span>
            </div>
          </div>
          <div className="mb-6">
            <a href="#" className="text-blue-600 hover:underline">
              Have a coupon code?
            </a>
          </div>
          <button className="w-full bg-[#6161FF] text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
            Continue
          </button>
          <div className="text-gray-500 text-sm mt-6 flex items-center space-x-2">
            <span>🛡️</span>
            <span>7-day money-back guarantee </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;