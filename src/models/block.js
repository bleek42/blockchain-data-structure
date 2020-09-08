import cryptoJS from 'crypto-js';

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

    getBlockInfo() {
        const { index, proof, prevHash, transactions, timestamp } = this;
        return {
            index,
            proof,
            prevHash,
            transactions: transactions.map((trx) => trx.getBlockInfo()),
            timestamp,
        };
    }

    hashValue() {
        const { index, proof, transactions, timestamp } = this;
        const blockString = `${index}-${proof}-${JSON.stringify(transactions)}-${timestamp}`;
        const newHash = cryptoJS.SHA256(blockString);
        return newHash;
    }

    getPrevHash() {
        if (!this.prevHash) {
            throw ReferenceError('Cannot get "prevHash" with value of "null"!')
        }
        return this.prevHash;
    }
}

// const myBlock = new Block(0, );

const myHash = cryptoJS.SHA256('leekster');
const encryptedProof = cryptoJS.AES.encrypt('message', 'passphrase');
console.log(encryptedProof);

// const myBlock = new Block(512, myHash)
// console.log(myHash);