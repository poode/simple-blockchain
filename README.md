# Simple Blockchain Implementation

This repository contains a simple implementation of a blockchain using JavaScript and Express.js. It serves as an educational example to understand the fundamental concepts of a blockchain.

## Features

- Blockchain data structure with blocks and transactions
- Proof-of-Work (PoW) mining mechanism
- Persistence of blockchain data using a JSON file
- Express.js server to expose RESTful API endpoints

## Prerequisites

- Node.js (version 18.13.0 or higher)
- npm (version 8.19.3 or higher)

## Getting Started

1. Clone the repository:

> git clone https://github.com/poode/simple-blockchain.git


2. Install the dependencies:

>cd simple-blockchain && npm install


3. Start the application:

> npm start

The server will be running at `http://localhost:3000`.

## [API Endpoints](https://documenter.getpostman.com/view/2773498/2s93z86iEc)

- `GET /blocks`: Retrieves the current blockchain data (chain of blocks).
- `POST /transactions`: Adds a new transaction to the pending transaction pool.
- `GET /mine?miner=ADDRESS`: Mines a new block using the pending transactions and provides a mining reward to the specified miner address.


## Configuration

The blockchain difficulty level and mining reward can be adjusted in the `blockchain.js` file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

This implementation is inspired by the concepts and structures of blockchain technology.

## Disclaimer

This implementation is for educational purposes only and should not be used in production environments. It lacks many security and robustness features found in mature blockchain systems.


