import { type ABIValue, ABIType } from 'algosdk';

export const defaultAbiCoder = {
  encode: (types: string[], values: ABIValue[]): Uint8Array => {
    let abiType = types[0] ?? '';

    let value: ABIValue = values;

    if (types.length > 1) {
      abiType = `(${types.join(',')})`;
    } else {
      value = value[0] ?? '';
    }

    abiType = abiType.replace(/bytes32/g, 'byte[32]');

    // TODO: Handle this when nested, either via upstream algosdk PR or custom encoder
    if (abiType.match(/^byte\[\d+\]$/) && typeof value === 'string' && value.startsWith('0x')) {
      const byteLength = (value.length - 2) / 2;
      const buf = Buffer.alloc(byteLength);

      buf.copy(Buffer.from(value, 'hex'));
      value = buf;
    }

    // TODO: Handle this when nested, either via upstream algosdk PR or custom encoder
    if (abiType.match(/^uint\d+$/)) {
      value = BigInt(value as string);
    }

    return ABIType.from(abiType).encode(value);
  },
};
