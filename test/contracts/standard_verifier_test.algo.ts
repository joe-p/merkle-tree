import { StandardVerifier } from './standard_verifier.algo';

export class StandardVerifierTest extends StandardVerifier {
  uint64Keccak256Root = GlobalStateKey<bytes32>();
  addressKeccak256Root = GlobalStateKey<bytes32>();
  tupleKeccak256Root = GlobalStateKey<bytes32>();

  createApplication(uint64Keccak256Root: bytes32, addressKeccak256Root: bytes32, tupleKeccak256Root: bytes32): void {
    this.uint64Keccak256Root.value = uint64Keccak256Root;
    this.addressKeccak256Root.value = addressKeccak256Root;
    this.tupleKeccak256Root.value = tupleKeccak256Root;
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
}
