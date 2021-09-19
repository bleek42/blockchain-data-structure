import io from "socket.io";

import { Block } from "./block";
import { Transaction } from "./transaction";

export class Blockchain {
	constructor(blocks, io) {
		this.block = blocks || [new Block(0, 1, 0, [])];
		this.transactions = [];
		this.nodes = [];
		this.io = io();
	}

	addNode(node) {
		if (!node) {
			throw TypeError('Cannot add node with a value of "null"!');
		}
		this.nodes.push(node);
	}

	mineBlock(block) {
		if (!block) {
			throw TypeError('Cannot mine block with value of "null"!');
		}
		this.blocks.push(block);
		this.io.emit(console.info("Block has been mined!"), this.toArray());
	}

	lastBlock() {
		return this.blocks(this.block.length - 1);
	}

	async addTransaction(transaction) {
		this.transactions.push(transaction);
		if (this.transactions.length === 2) {
			console.info("Starting block mining...");
			const prevBlock = this.lastBlock();
		}
	}
}
