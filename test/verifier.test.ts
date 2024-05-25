import test from 'ava';
import { StandardMerkleTree } from '../src';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { SortedStandardVerifierClient } from './contracts/clients/SortedStandardVerifier.ts';
import algosdk from 'algosdk';

const fixture = algorandFixture();
let typedClient: SortedStandardVerifierClient;

const alice = algosdk.generateAccount().addr;
const bob = algosdk.generateAccount().addr;
const charlie = algosdk.generateAccount().addr;
const dave = algosdk.generateAccount().addr;

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
  const tree = StandardMerkleTree.of([[11], [22], [33]], ['uint64']);

  const leafIndex = tree.leafLookup([22]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.encodeUint64(22);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.true(result.return);
});

test('invalid uint64', async t => {
  const tree = StandardMerkleTree.of([[11], [22], [33]], ['uint64']);

  const leafIndex = tree.leafLookup([22]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.encodeUint64(1337);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.false(result.return);
});

test('valid address', async t => {
  const tree = StandardMerkleTree.of([[alice], [bob], [charlie]], ['address']);

  const leafIndex = tree.leafLookup([bob]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.ABIType.from('address').encode(bob);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.true(result.return);
});

test('invalid address', async t => {
  const tree = StandardMerkleTree.of([[alice], [bob], [charlie]], ['address']);

  const leafIndex = tree.leafLookup([bob]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.ABIType.from('address').encode(dave);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.true(!result.return);
});

test('valid (uint64,address)', async t => {
  const leaves = [
    [11, alice],
    [22, bob],
    [33, charlie],
  ];
  const tree = StandardMerkleTree.of(leaves, ['uint64', 'address']);

  const leafIndex = tree.leafLookup(leaves[1]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.ABIType.from('(uint64,address)').encode(leaves[1]);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.true(tree.verify(leafIndex, tree.getProof(leafIndex)));
  t.true(result.return);
});

test('invalid (uint64,address)', async t => {
  const leaves = [
    [11, alice],
    [22, bob],
    [33, charlie],
  ];
  const tree = StandardMerkleTree.of(leaves, ['uint64', 'address']);

  const leafIndex = tree.leafLookup(leaves[1]);
  const proof = tree.getProof(leafIndex).map(n => Buffer.from(n.slice(2), 'hex'));
  const root = Buffer.from(tree.root.slice(2), 'hex');
  const leaf = algosdk.ABIType.from('(uint64,address)').encode([1337, dave]);

  const result = await typedClient.verifyProof({ root, leaf, proof });

  t.true(tree.verify(leafIndex, tree.getProof(leafIndex)));
  t.false(result.return);
});
