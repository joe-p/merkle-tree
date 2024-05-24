import { Contract } from '@algorandfoundation/tealscript';

export default class SortedStandardVerifier extends Contract {
  verifyProof(root: bytes32, leaf: bytes, proof: bytes32[]): boolean {
    let hash = keccak256(keccak256(leaf));

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
