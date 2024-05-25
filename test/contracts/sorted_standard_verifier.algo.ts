import { Contract } from '@algorandfoundation/tealscript';

export default class SortedStandardVerifier extends Contract {
  /**
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param root The merkle root
   * @param hashedLeaf The hashed leaf to verify
   * @param proof The merkle proof
   *
   * @returns True if the proof is valid, false otherwise
   */
  keccak256Verify(root: bytes32, hashedLeaf: bytes32, proof: bytes32[]): boolean {
    let hash = hashedLeaf;

    for (let i = 0; i < proof.length; i += 1) {
      // keccak256 requires 130, so just giving some extra room here
      if (globals.opcodeBudget < 145) {
        increaseOpcodeBudget();
      }

      if (btobigint(proof[i]) > btobigint(hash)) {
        hash = keccak256(hash + proof[i]);
      } else {
        hash = keccak256(proof[i] + hash);
      }
    }

    return hash === root;
  }
}
