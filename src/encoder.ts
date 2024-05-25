import { type ABIValue, ABIType } from 'algosdk';

export const defaultAbiCoder = {
  encode: (type: string, value: ABIValue): Uint8Array => {
    const abiType = type.replace(/bytes32/g, 'byte[32]');

    return ABIType.from(abiType).encode(value);
  },
};
