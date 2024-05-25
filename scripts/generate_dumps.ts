import { StandardMerkleTree } from '../src/index';
import { writeFileSync } from 'fs';
import path from 'path';

const leaves = [['a'], ['b'], ['c'], ['d'], ['e'], ['f']];

const sorted = StandardMerkleTree.of(leaves, ['string'], { sortLeaves: true });
const dumpsDir = path.join(__dirname, '..', 'test', 'dumps');

const unsorted = StandardMerkleTree.of(leaves, ['string'], { sortLeaves: false });

writeFileSync(path.join(dumpsDir, 'standard-v1.sorted.json'), JSON.stringify(sorted.dump(), null, 2));
writeFileSync(path.join(dumpsDir, 'standard-v1.unsorted.json'), JSON.stringify(unsorted.dump(), null, 2));
