import { StandardVerifier } from './standard_verifier.algo';

export class StandardVerifierTest extends StandardVerifier {
  uint64Keccak256Root = GlobalStateKey<bytes32>();
  addressKeccak256Root = GlobalStateKey<bytes32>();
  tupleKeccak256Root = GlobalStateKey<bytes32>();

  uint64Sha256Root = GlobalStateKey<bytes32>();
  addressSha256Root = GlobalStateKey<bytes32>();
  tupleSha256Root = GlobalStateKey<bytes32>();

  createApplication(
    uint64Keccak256Root: bytes32,
    addressKeccak256Root: bytes32,
    tupleKeccak256Root: bytes32,
    uint64Sha256Root: bytes32,
    addressSha256Root: bytes32,
    tupleSha256Root: bytes32,
  ): void {
    this.uint64Keccak256Root.value = uint64Keccak256Root;
    this.addressKeccak256Root.value = addressKeccak256Root;
    this.tupleKeccak256Root.value = tupleKeccak256Root;
    this.uint64Sha256Root.value = uint64Sha256Root;
    this.addressSha256Root.value = addressSha256Root;
    this.tupleSha256Root.value = tupleSha256Root;
  }

  uint64keccak256Verify(leaf: uint64, proof: bytes32[]): boolean {
    const hashedLeaf = keccak256(keccak256(itob(leaf)));
    return this.keccak256Verify(hashedLeaf, proof, this.uint64Keccak256Root.value);
  }

  addressKeccak256Verify(leaf: Address, proof: bytes32[]): boolean {
    const hashedLeaf = keccak256(keccak256(leaf));
    return this.keccak256Verify(hashedLeaf, proof, this.addressKeccak256Root.value);
  }

  tupleKeccak256Verify(leaf: [uint64, Address], proof: bytes32[]): boolean {
    const hashedLeaf = keccak256(keccak256(rawBytes(leaf)));
    return this.keccak256Verify(hashedLeaf, proof, this.tupleKeccak256Root.value);
  }

  uint64sha256Verify(leaf: uint64, proof: bytes32[]): boolean {
    const hashedLeaf = sha256(sha256(itob(leaf)));
    return this.sha256Verify(hashedLeaf, proof, this.uint64Sha256Root.value);
  }

  addressSha256Verify(leaf: Address, proof: bytes32[]): boolean {
    const hashedLeaf = sha256(sha256(leaf));
    return this.sha256Verify(hashedLeaf, proof, this.addressSha256Root.value);
  }

  tupleSha256Verify(leaf: [uint64, Address], proof: bytes32[]): boolean {
    const hashedLeaf = sha256(sha256(rawBytes(leaf)));
    return this.sha256Verify(hashedLeaf, proof, this.tupleSha256Root.value);
  }
}
