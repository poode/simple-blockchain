const fs = require("fs");

const Block = require('./block');

function writeBlockchainDataToFile(blockchainData) {
  fs.writeFileSync("blockchainData.json", JSON.stringify(blockchainData));
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    return new Block(0, new Date().toString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }


  minePendingTransactions(minerAddress) {
    const rewardTransaction = {
      sender: "Blockchain",
      recipient: minerAddress,
      amount: 100, // Set the mining reward
    };
    this.pendingTransactions.push(rewardTransaction);

    const previousHash = this.getLatestBlock().hash;
    const newBlock = new Block(
      this.chain.length,
      new Date().toString(),
      this.pendingTransactions,
      previousHash
    );
    newBlock.mineBlock(this.difficulty);

    this.chain.push(newBlock);
    this.pendingTransactions = [];

    writeBlockchainDataToFile(this);
    return newBlock;
  }

  addTransaction(sender, recipient, amount) {
    const transaction = {
      sender,
      recipient,
      amount,
    };
    this.pendingTransactions.push(transaction);
    return this.getLatestBlock().index + 1;
  }

  getChain() {
    return this.chain;
  }
}

module.exports = Blockchain;
