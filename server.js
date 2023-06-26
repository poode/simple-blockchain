const express = require("express");

const blockchain = require('./blockchainLoader');

const app = express();
app.use(express.json());

// Endpoint to get the entire blockchain
app.get("/blocks", (req, res) => {
  res.json(blockchain.getChain());
});

// Endpoint to add a new transaction
app.post("/transactions", (req, res) => {
  const { sender, recipient, amount } = req.body;
  const blockIndex = blockchain.addTransaction(sender, recipient, amount);
  res.json({ message: `Transaction will be added to Block ${blockIndex}` });
});

// Endpoint to mine a new block
app.get("/mine", (req, res) => {
  const previousHash = req.query.miner || blockchain.getLatestBlock().hash;
  const newBlock = blockchain.minePendingTransactions(previousHash);
  res.json({ message: "New block mined successfully", block: newBlock });
});

// Error handler for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Invalid route" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
