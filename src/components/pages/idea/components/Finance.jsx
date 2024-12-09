import { useState } from "react";

const FinancialProjection = () => {
  const initialCosts = {
    cogs: 40, // Cost of Goods Sold
    wages: 6,
    marketing: 5,
    rent: 0,
    general: 1,
    depreciation: 2,
    utilities: 0,
    other: 1,
    interest: 0,
    taxes: 20,
  };

  const [revenue, setRevenue] = useState(2000);
  const [growth, setGrowth] = useState(0);
  const [costs, setCosts] = useState(initialCosts);

  const handleCostChange = (event, type) => {
    const value = parseFloat(event.target.value);
    setCosts({ ...costs, [type]: isNaN(value) ? 0 : value });
  };

  const totalCost = Object.values(costs).reduce(
    (total, percent) => total + (revenue * percent) / 100,
    0
  );
  const netProfit = revenue - totalCost;
  const netProfitMargin = ((netProfit / revenue) * 100).toFixed(2);

  return (
    <div className="financial-projection">
      <h2 id="section-heading">
        Enter Yearly Business Operations Cost (edit percentages or leave as is)
      </h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>% of Revenue</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Expected First Year Revenue</td>
            <td colSpan="2">
              <input
                type="number"
                min="0"
                value={revenue}
                onChange={(e) => setRevenue(parseFloat(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Expected Revenue Growth</td>
            <td colSpan="2">
              <input
                type="number"
                min="0"
                value={growth}
                onChange={(e) => setGrowth(parseFloat(e.target.value))}
              />
            </td>
          </tr>
          {Object.keys(initialCosts).map((costKey, index) => (
            <tr key={index}>
              <td>{costKey.charAt(0).toUpperCase() + costKey.slice(1)}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={costs[costKey]}
                  onChange={(e) => handleCostChange(e, costKey)}
                />
              </td>
              <td>${((revenue * costs[costKey]) / 100).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="results">
        <div>Your First Year Total Cost is: ${totalCost.toFixed(2)}</div>
        <div>Your First Year Net Profit is: ${netProfit.toFixed(2)}</div>
        <div>Your Net Profit Margin is: {netProfitMargin}%</div>
      </div>
    </div>
  );
};

export default FinancialProjection;
