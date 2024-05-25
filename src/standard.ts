import { HexString } from './bytes';
import { MerkleTreeData, MerkleTreeImpl } from './merkletree';
import { MerkleTreeOptions } from './options';
import { sha256LeafHash, sha256NodeHash, standardLeafHash, standardNodeHash } from './hashes';
import { validateArgument } from './utils/errors';

export type HashFunction = 'keccak256' | 'sha256';

export interface StandardMerkleTreeData<T extends any[]> extends MerkleTreeData<T> {
  format: 'standard-v1';
  leafEncoding: string;
  hashFunction: HashFunction;
}

export interface StandardMerkleTreeOptions extends MerkleTreeOptions {
  hashFunction?: HashFunction;
}

const leafHashFunctions = {
  keccak256: standardLeafHash,
  sha256: sha256LeafHash,
};

const nodeHashFunctions = {
  keccak256: standardNodeHash,
  sha256: sha256NodeHash,
};

export class StandardMerkleTree<T extends any[]> extends MerkleTreeImpl<T> {
  protected constructor(
    protected readonly tree: HexString[],
    protected readonly values: StandardMerkleTreeData<T>['values'],
    protected readonly leafEncoding: string,
    protected readonly hashFunction: HashFunction,
  ) {
    super(
      tree,
      values,
      leaf => leafHashFunctions[hashFunction](leafEncoding, leaf),
      (a, b) => nodeHashFunctions[this.hashFunction](a, b),
    );
  }

  static of<T extends any[]>(
    values: T,
    leafEncoding: string,
    options: StandardMerkleTreeOptions = {},
  ): StandardMerkleTree<T> {
    // use default nodeHash (standardNodeHash)
    const hashFunction = options.hashFunction ?? 'keccak256';
    const [tree, indexedValues] = MerkleTreeImpl.prepare(
      values,
      options,
      leaf => leafHashFunctions[hashFunction](leafEncoding, leaf),
      nodeHashFunctions[hashFunction],
    );

    return new StandardMerkleTree(tree, indexedValues, leafEncoding, hashFunction);
  }

  static load<T extends any[]>(data: StandardMerkleTreeData<T>): StandardMerkleTree<T> {
    validateArgument(data.format === 'standard-v1', `Unknown format '${data.format}'`);
    validateArgument(data.leafEncoding !== undefined, 'Expected leaf encoding');
    validateArgument(data.hashFunction !== undefined, 'Expected hash function');

    const tree = new StandardMerkleTree(data.tree, data.values, data.leafEncoding, data.hashFunction);
    tree.validate();
    return tree;
  }

  dump(): StandardMerkleTreeData<T> {
    return {
      format: 'standard-v1',
      leafEncoding: this.leafEncoding,
      hashFunction: this.hashFunction,
      tree: this.tree,
      values: this.values,
    };
  }
}
