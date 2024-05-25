import test from 'ava';
import { StandardMerkleTree } from '../src';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import algosdk from 'algosdk';
import { StandardVerifierTestClient } from './contracts/clients/StandardVerifierTest';

const fixture = algorandFixture();
let typedClient: StandardVerifierTestClient;

const alice = algosdk.generateAccount().addr;
const bob = algosdk.generateAccount().addr;
const charlie = algosdk.generateAccount().addr;
const dave = algosdk.generateAccount().addr;

const uint64Leaves = [11, 22, 33];
const addressLeaves = [alice, bob, charlie];
const tupleLeaves = [
  [11, alice],
  [22, bob],
  [33, charlie],
];

const uint64Keccack256Tree = StandardMerkleTree.of(uint64Leaves, 'uint64');
const addressKeccack256Tree = StandardMerkleTree.of(addressLeaves, 'address');
const tupleKeccack256Tree = StandardMerkleTree.of(tupleLeaves, '(uint64,address)');

test.before(async t => {
  await fixture.beforeEach();
  const { algorand } = fixture;
  const { testAccount } = fixture.context;

  typedClient = new StandardVerifierTestClient(
    {
      resolveBy: 'id',
      id: 0,
      sender: testAccount,
    },
    algorand.client.algod,
  );

  await typedClient.create.createApplication({
    uint64Keccak256Root: Buffer.from(uint64Keccack256Tree.root.slice(2), 'hex'),
    addressKeccak256Root: Buffer.from(addressKeccack256Tree.root.slice(2), 'hex'),
    tupleKeccak256Root: Buffer.from(tupleKeccack256Tree.root.slice(2), 'hex'),
  });
});

test.beforeEach(async t => {
  await fixture.beforeEach();
});

test('valid uint64', async t => {
  const result = await typedClient.uint64keccak256Verify({
    leaf: 22,
    proof: uint64Keccack256Tree.getProof(22).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.true(result.return);
});

test('invalid uint64', async t => {
  const result = await typedClient.uint64keccak256Verify({
    leaf: 1337,
    proof: uint64Keccack256Tree.getProof(22).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.false(result.return);
});

test('valid address', async t => {
  const result = await typedClient.addressKeccak256Verify({
    leaf: bob,
    proof: addressKeccack256Tree.getProof(bob).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.true(result.return);
});

test('invalid address', async t => {
  const result = await typedClient.addressKeccak256Verify({
    leaf: dave,
    proof: addressKeccack256Tree.getProof(bob).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.false(result.return);
});

test('valid tuple', async t => {
  const result = await typedClient.tupleKeccak256Verify({
    leaf: [22, bob],
    proof: tupleKeccack256Tree.getProof([22, bob]).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.true(result.return);
});

test('invalid tuple', async t => {
  const result = await typedClient.tupleKeccak256Verify({
    leaf: [22, dave],
    proof: tupleKeccack256Tree.getProof([22, bob]).map(n => Buffer.from(n.slice(2), 'hex')),
  });
  t.false(result.return);
});
