import React, { useState, useEffect } from "react";


const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("Last 2 Months");

  useEffect(() => {
    // Simulating API call
    const fetchTransactions = async () => {
      const dummyData = [
        { id: 123, type: "Social Media Expert", amount: 99, date: "2023-08-18", method: "Paypal", status: "Successful" },
        { id: 456, type: "Web Designer", amount: 199, date: "2023-07-12", method: "Bank Transfer", status: "Pending" },
        { id: 789, type: "Finance Accountant", amount: 299, date: "2023-07-10", method: "Paypal", status: "Rejected" },
        { id: 101, type: "Social Media Expert", amount: 399, date: "2023-06-28", method: "Bank Transfer", status: "Successful" },
        { id: 112, type: "Web Designer", amount: 499, date: "2023-06-18", method: "Paypal", status: "Pending" },
      ];
      setTransactions(dummyData);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="transaction-list">
      <div className="header">
        <h2>Transaction History</h2>
        <div className="filter">
          <span>Sort By</span>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Last 2 Months">Last 2 Months</option>
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="order-id">#{transaction.id}</td>
              <td>{transaction.type}</td>
              <td className="amount">${transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.method}</td>
              <td className={`status ${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
