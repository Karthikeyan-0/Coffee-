import React, { useState } from "react";

const BudgetCalculator = () => {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const calculateBalance = () => {
    const values = [income, rent, food, transport, others].map(Number);
    if (values.some((v) => isNaN(v) || v < 0)) {
      alert("Please enter only positive numeric values for all fields.");
      return;
    }

    const totalExpenses = rent + food + transport + others;
    const remaining = income - totalExpenses;

    setBalance(remaining);

    if (remaining < 0) {
      setMessage("You are overspending!");
      setColor("red");
    } else {
      setMessage("Good job managing your expenses!");
      setColor("green");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h2>Budget Calculator</h2>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <label>Monthly Income:</label>
        <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
        <br />
        <label>Rent / EMI:</label>
        <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} />
        <br />
        <label>Food Expenses:</label>
        <input type="number" value={food} onChange={(e) => setFood(Number(e.target.value))} />
        <br />
        <label>Transport Expenses:</label>
        <input type="number" value={transport} onChange={(e) => setTransport(Number(e.target.value))} />
        <br />
        <label>Other Expenses:</label>
        <input type="number" value={others} onChange={(e) => setOthers(Number(e.target.value))} />
        <br />
        <button onClick={calculateBalance} style={{ marginTop: "15px" }}>Calculate Balance</button>
      </div>
      {balance !== null && (
        <div style={{ marginTop: "20px", color: color, fontWeight: "bold" }}>
          Remaining Balance: ₹{balance}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;
