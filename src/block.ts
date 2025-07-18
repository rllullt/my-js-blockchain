interface IBlock {
  timestamp: Date,
  lastHash: string,
  hash: string,
  data: string,
}

class Block implements IBlock {
  timestamp: Date;
  lastHash: string;
  hash: string;
  data: string;

  constructor({ timestamp, lastHash, hash, data }: Block) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // Sugar if nothing is done with the constructor parameters!
  // constructor(
  //   public timestamp: Date,
  //   public lastHash: string,
  //   public hash: string,
  //   public data: string
  // ) {}
}

const block1 = new Block({
  timestamp: new Date('2025-07-18'),
  lastHash: '00',
  hash: '01',
  data: 'data'
});

console.log("block1:", block1);
