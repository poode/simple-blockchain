const fs = require("fs");

const Blockchain = require("./blockchain");

function loadBlockchainData() {
  try {
    const data = fs.readFileSync("blockchainData.json", { encoding: 'utf8'});
    const blockchainData = JSON.parse(data);
    const blockchain = new Blockchain();

    // Copy the loaded data to the blockchain instance
    blockchain.chain = blockchainData.chain;
    blockchain.pendingTransactions = blockchainData.pendingTransactions;
    blockchain.difficulty = blockchainData.difficulty;

    return blockchain;
  } catch (error) {
    // If the file doesn't exist or there's an error, return a new instance of the Blockchain class
    return new Blockchain();
  }
}

module.exports = loadBlockchainData()
