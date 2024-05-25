import { Contract } from '@algorandfoundation/tealscript';

export class StandardVerifier extends Contract {
  /**
   * Prove that a leaf is in a merkle tree by verifying the path to the root using keccak256.
   *
   * @param hashedLeaf The hashed leaf to verify
   * @param proof The merkle proof
   * @param root The merkle root
   *
   * @returns True if the proof is valid, false otherwise
   */
  protected keccak256Verify(hashedLeaf: bytes32, proof: bytes32[], root: bytes32): boolean {
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

  /**
   * Prove that a leaf is in a merkle tree by verifying the path to the root using sha256.
   *
   * @param hashedLeaf The hashed leaf to verify
   * @param proof The merkle proof
   * @param root The merkle root
   *
   * @returns True if the proof is valid, false otherwise
   */
  protected sha256Verify(hashedLeaf: bytes32, proof: bytes32[], root: bytes32): boolean {
    let hash = hashedLeaf;

    for (let i = 0; i < proof.length; i += 1) {
      // sha256 requires 35, so just giving some extra room here
      if (globals.opcodeBudget < 50) {
        increaseOpcodeBudget();
      }

      if (btobigint(proof[i]) > btobigint(hash)) {
        hash = sha256(hash + proof[i]);
      } else {
        hash = sha256(proof[i] + hash);
      }
    }

    return hash === root;
  }
}
