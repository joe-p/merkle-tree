import test from 'ava';
import { StandardMerkleTree } from '../src';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { SortedStandardVerifierClient } from './contracts/clients/SortedStandardVerifier.ts';
import algosdk, { ABIValue } from 'algosdk';
import { keccak256 } from '@ethersproject/keccak256';

const fixture = algorandFixture();
let typedClient: SortedStandardVerifierClient;

const alice = algosdk.generateAccount().addr;
const bob = algosdk.generateAccount().addr;
const charlie = algosdk.generateAccount().addr;
const dave = algosdk.generateAccount().addr;

async function verifyProofTest<LeafType extends ABIValue>(
  leaves: LeafType[],
  encoding: string,
  leafToVerify: LeafType,
): Promise<boolean> {
  const tree = StandardMerkleTree.of(leaves, encoding);

  const result = await typedClient.keccak256Verify({
    root: Buffer.from(tree.root.slice(2), 'hex'),
    hashedLeaf: Buffer.from(keccak256(keccak256(algosdk.ABIType.from(encoding).encode(leafToVerify))).slice(2), 'hex'),
    proof: tree.getProof(leaves[1]).map(n => Buffer.from(n.slice(2), 'hex')),
  });

  return result.return as boolean;
}

test.before(async t => {
  await fixture.beforeEach();
  const { algorand } = fixture;
  const { testAccount } = fixture.context;

  typedClient = new SortedStandardVerifierClient(
    {
      resolveBy: 'id',
      id: 0,
      sender: testAccount,
    },
    algorand.client.algod,
  );

  await typedClient.create.createApplication({});
});

test.beforeEach(async t => {
  await fixture.beforeEach();
});

test('valid uint64', async t => {
  t.true(await verifyProofTest([11, 22, 33], 'uint64', 22));
});

test('invalid uint64', async t => {
  t.false(await verifyProofTest([11, 22, 33], 'uint64', 1337));
});

test('valid address', async t => {
  t.true(await verifyProofTest([alice, bob, charlie], 'address', bob));
});

test('invalid address', async t => {
  t.false(await verifyProofTest([alice, bob, charlie], 'address', dave));
});

test('valid (uint64,address)', async t => {
  const leaves = [
    [11, alice],
    [22, bob],
    [33, charlie],
  ];

  t.true(await verifyProofTest(leaves, '(uint64,address)', leaves[1]));
});

test('invalid (uint64,address)', async t => {
  const leaves = [
    [11, alice],
    [22, bob],
    [33, charlie],
  ];

  t.false(await verifyProofTest(leaves, '(uint64,address)', [1337, dave]));
});
