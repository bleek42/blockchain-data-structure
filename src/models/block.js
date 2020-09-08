import crypto from 'crypto-js';

export class Block {
    constructor(index, prevHash, prevProof, transactions) {
        this.index = index;
        this.proof = prevProof;
        this.prevHash = prevHash;
        this.transactions = transactions;
        this.timestamp = Date.now();
    }

    getProof() {
        if (!this.proof) {
            throw ReferenceError('Cannot get "proof" with value of "null"!')
        }
        return this.proof;
    }

    setProof(proof) {
        this.proof = proof;
    }

    getIndex() {
        if (!this.index) {
            throw ReferenceError('Cannot get "index" with value of "null"!');
        }
        return this.index;
    }

    hashValue() {
        const { index, proof, transactions, timestamp } = this;
        const blockString = `${index}-${proof}-${JSON.stringify(transactions)}-${timestamp}`;
        const hashString = crypto.SHA256(blockString);
        console.log(hashString);
        return hashString;
    }

    getPrevHash() {
        if (!this.prevHash) {
            throw ReferenceError('Cannot get "prevHash" with value of "null"!')
        }
        return this.prevHash;
    }
}