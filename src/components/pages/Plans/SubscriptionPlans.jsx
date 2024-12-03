// components/SubscriptionPlans.js
export default function SubscriptionPlans() {
    const plans = [
      {
        duration: "1 Month",
        price: 999,
        discount: null,
        finalPrice: 999,
      },
      {
        duration: "6 Months",
        price: 5994,
        discount: "20%",
        finalPrice: 4795,
      },
      {
        duration: "12 Months",
        price: 11988,
        discount: "30%",
        finalPrice: 8391,
      },
    ];
  
    return (
      <div className=" py-10 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md bg-white p-6 ${
                plan.discount ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <h3 className="text-xl font-semibold mb-3 text-center">
                {plan.duration}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                Original Price: <span className="line-through">{plan.price}₹</span>
              </p>
              {plan.discount && (
                <p className="text-center text-[var(--main-color)] font-medium">
                  Discount: {plan.discount}
                </p>
              )}
              <p className="text-center text-2xl font-bold text-gray-800">
                {plan.finalPrice}₹
              </p>
              <div className="mt-6 text-center">
                <button className="bg-[var(--main-color)] blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  