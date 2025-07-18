# my-js-blockchain
Fullstack blockchain that works with Express for the backend and React for the frontend. Based on the Ûdemy course “Build a Blockchain &amp; Cryptocurrency | Full-Stack Edition | Udemy”

## Block structure

- `timestamp`: JavaScript date object.
- `lastHash`: hash of the block that came before.
- `data`: transaction data (usually represented with a Merkle Tree, where the data lives in the leaves).
- `hash`: generated with the header information.

In bitcoin, the block hash is the hash of the block header (~200 bytes of data). This ifnormation contains:
- timestamp
- nonce
- hash of block that came before
- hash of Merkle Tree root


## About some libraries

### Nodemon

`nodemon` lets to automatically restart the server when the TypeScript code changes.
