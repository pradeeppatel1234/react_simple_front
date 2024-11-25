const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000; // Port for the backend server

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Sample hardcoded data for balance overview
const balanceData = {
  currentBalance: 2000,
  transactions: [
    { date: "2023-01-01", description: "Payment Received", amount: 500, balance: 2500 },
    { date: "2023-01-03", description: "Payment Sent", amount: 300, balance: 2200 },
    { date: "2023-01-05", description: "Subscription Fee", amount: 100, balance: 2100 },
    { date: "2023-01-07", description: "Refund", amount: 200, balance: 2300 },
    { date: "2023-01-10", description: "Transfer", amount: 500, balance: 1800 },
  ],
};

// Sample hardcoded data for tasks
const tasksData = [
  { id: 1, task: "Complete the financial report", dueDate: "2023-01-15", status: "Pending" },
  { id: 2, task: "Update account details", dueDate: "2023-01-20", status: "Completed" },
  { id: 3, task: "Verify payment", dueDate: "2023-01-18", status: "Pending" },
];

// Endpoint to get balance data
app.get("/api/balance", (req, res) => {
  res.json(balanceData);
});

// Endpoint to get tasks data
app.get("/api/tasks", (req, res) => {
  res.json(tasksData);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
