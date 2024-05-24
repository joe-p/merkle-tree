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

    return ABIType.from(abiType).encode(value);
  },
};
