import { defaultAbiCoder } from './encoder';
import { keccak256 } from '@ethersproject/keccak256';
import { BytesLike, HexString, concat, compare } from './bytes';
import { sha256 } from '@ethersproject/sha2';

export type LeafHash<T> = (leaf: T) => HexString;
export type NodeHash = (left: BytesLike, right: BytesLike) => HexString;

export function standardLeafHash<T extends any[]>(type: string, value: T): HexString {
  return keccak256(keccak256(defaultAbiCoder.encode(type, value)));
}

export function standardNodeHash(a: BytesLike, b: BytesLike): HexString {
  return keccak256(concat([a, b].sort(compare)));
}

export function sha256LeafHash<T extends any[]>(type: string, value: T): HexString {
  return sha256(sha256(defaultAbiCoder.encode(type, value)));
}

export function sha256NodeHash(a: BytesLike, b: BytesLike): HexString {
  return sha256(concat([a, b].sort(compare)));
}
