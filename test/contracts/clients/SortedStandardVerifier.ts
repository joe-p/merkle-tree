/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  AppStorageSchema,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "keccak256Verify(byte[32],byte[32],byte[32][])bool": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjkyLjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJLy8gVGhlIHJlcXVlc3RlZCBhY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgY29udHJhY3QuIEFyZSB5b3UgdXNpbmcgdGhlIGNvcnJlY3QgT25Db21wbGV0ZT8gRGlkIHlvdSBzZXQgeW91ciBhcHAgSUQ/CgllcnIKCi8vIGtlY2NhazI1NlZlcmlmeShieXRlWzMyXSxieXRlWzMyXSxieXRlWzMyXVtdKWJvb2wKKmFiaV9yb3V0ZV9rZWNjYWsyNTZWZXJpZnk6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIHByb29mOiBieXRlWzMyXVtdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglleHRyYWN0IDIgMAoKCS8vIGhhc2hlZExlYWY6IGJ5dGVbMzJdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglkdXAKCWxlbgoJaW50IDMyCgk9PQoKCS8vIGFyZ3VtZW50IDEgKGhhc2hlZExlYWYpIGZvciBrZWNjYWsyNTZWZXJpZnkgbXVzdCBiZSBhIGJ5dGVbMzJdCglhc3NlcnQKCgkvLyByb290OiBieXRlWzMyXQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZHVwCglsZW4KCWludCAzMgoJPT0KCgkvLyBhcmd1bWVudCAyIChyb290KSBmb3Iga2VjY2FrMjU2VmVyaWZ5IG11c3QgYmUgYSBieXRlWzMyXQoJYXNzZXJ0CgoJLy8gZXhlY3V0ZSBrZWNjYWsyNTZWZXJpZnkoYnl0ZVszMl0sYnl0ZVszMl0sYnl0ZVszMl1bXSlib29sCgljYWxsc3ViIGtlY2NhazI1NlZlcmlmeQoJYnl0ZSAweDAwCglpbnQgMAoJdW5jb3ZlciAyCglzZXRiaXQKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBrZWNjYWsyNTZWZXJpZnkocm9vdDogYnl0ZXMzMiwgaGFzaGVkTGVhZjogYnl0ZXMzMiwgcHJvb2Y6IGJ5dGVzMzJbXSk6IGJvb2xlYW4KLy8KLy8gUHJvdmUgdGhhdCBhIGxlYWYgaXMgaW4gYSBtZXJrbGUgdHJlZSBieSB2ZXJpZnlpbmcgdGhlIHBhdGggdG8gdGhlIHJvb3QKLy8KLy8gQHBhcmFtIHJvb3QgVGhlIG1lcmtsZSByb290Ci8vIEBwYXJhbSBoYXNoZWRMZWFmIFRoZSBoYXNoZWQgbGVhZiB0byB2ZXJpZnkKLy8gQHBhcmFtIHByb29mIFRoZSBtZXJrbGUgcHJvb2YKLy8KLy8gQHJldHVybnMgVHJ1ZSBpZiB0aGUgcHJvb2YgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZQprZWNjYWsyNTZWZXJpZnk6Cglwcm90byAzIDEKCgkvLyBQdXNoIGVtcHR5IGJ5dGVzIGFmdGVyIHRoZSBmcmFtZSBwb2ludGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIGxvY2FsIHZhcmlhYmxlcwoJYnl0ZSAweAoKCS8vIHRlc3QvY29udHJhY3RzL3NvcnRlZF9zdGFuZGFyZF92ZXJpZmllci5hbGdvLnRzOjE2CgkvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb29mLmxlbmd0aDsgaSArPSAxKQoJaW50IDAKCWZyYW1lX2J1cnkgMCAvLyBpOiB1aW50NjQKCipmb3JfMDoKCS8vIHRlc3QvY29udHJhY3RzL3NvcnRlZF9zdGFuZGFyZF92ZXJpZmllci5hbGdvLnRzOjE2CgkvLyBpIDwgcHJvb2YubGVuZ3RoCglmcmFtZV9kaWcgMCAvLyBpOiB1aW50NjQKCWZyYW1lX2RpZyAtMyAvLyBwcm9vZjogYnl0ZXMzMltdCglsZW4KCWludCAzMgoJLwoJPAoJYnogKmZvcl8wX2VuZAoKCS8vICppZjBfY29uZGl0aW9uCgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoxOAoJLy8gZ2xvYmFscy5vcGNvZGVCdWRnZXQgPCAxNDUKCWdsb2JhbCBPcGNvZGVCdWRnZXQKCWludCAxNDUKCTwKCWJ6ICppZjBfZW5kCgoJLy8gKmlmMF9jb25zZXF1ZW50CgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoxOQoJLy8gaW5jcmVhc2VPcGNvZGVCdWRnZXQoKQoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCWludCAwCglpdHhuX2ZpZWxkIEZlZQoJYnl0ZSBiNjQgQ29FQiAvLyAjcHJhZ21hIHZlcnNpb24gMTA7IGludCAxCglkdXAKCWl0eG5fZmllbGQgQXBwcm92YWxQcm9ncmFtCglpdHhuX2ZpZWxkIENsZWFyU3RhdGVQcm9ncmFtCglpbnQgRGVsZXRlQXBwbGljYXRpb24KCWl0eG5fZmllbGQgT25Db21wbGV0aW9uCglpdHhuX3N1Ym1pdAoKKmlmMF9lbmQ6CgkvLyAqaWYxX2NvbmRpdGlvbgoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MjIKCS8vIGJ0b2JpZ2ludChwcm9vZltpXSkgPiBidG9iaWdpbnQoaGFzaCkKCWZyYW1lX2RpZyAtMyAvLyBwcm9vZjogYnl0ZXMzMltdCglzdG9yZSAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAwIC8vIGk6IHVpbnQ2NAoJaW50IDMyCgkqIC8vIGFjYyAqIHR5cGVMZW5ndGgKCSsKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWludCAzMgoJZXh0cmFjdDMKCWZyYW1lX2RpZyAtMiAvLyBoYXNoZWRMZWFmOiBieXRlczMyCgliPgoJYnogKmlmMV9lbHNlCgoJLy8gKmlmMV9jb25zZXF1ZW50CgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoyMwoJLy8gaGFzaCA9IGtlY2NhazI1NihoYXNoICsgcHJvb2ZbaV0pCglmcmFtZV9kaWcgLTIgLy8gaGFzaGVkTGVhZjogYnl0ZXMzMgoJZnJhbWVfZGlnIC0zIC8vIHByb29mOiBieXRlczMyW10KCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIDAgLy8gaTogdWludDY0CglpbnQgMzIKCSogLy8gYWNjICogdHlwZUxlbmd0aAoJKwoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDMyCglleHRyYWN0MwoJY29uY2F0CglrZWNjYWsyNTYKCWZyYW1lX2J1cnkgLTIgLy8gaGFzaDogYnl0ZXMzMgoJYiAqaWYxX2VuZAoKKmlmMV9lbHNlOgoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MjUKCS8vIGhhc2ggPSBrZWNjYWsyNTYocHJvb2ZbaV0gKyBoYXNoKQoJZnJhbWVfZGlnIC0zIC8vIHByb29mOiBieXRlczMyW10KCXN0b3JlIDI1NSAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIDAgLy8gaTogdWludDY0CglpbnQgMzIKCSogLy8gYWNjICogdHlwZUxlbmd0aAoJKwoJbG9hZCAyNTUgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDMyCglleHRyYWN0MwoJZnJhbWVfZGlnIC0yIC8vIGhhc2hlZExlYWY6IGJ5dGVzMzIKCWNvbmNhdAoJa2VjY2FrMjU2CglmcmFtZV9idXJ5IC0yIC8vIGhhc2g6IGJ5dGVzMzIKCippZjFfZW5kOgoKKmZvcl8wX2NvbnRpbnVlOgoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MTYKCS8vIGkgKz0gMQoJZnJhbWVfZGlnIDAgLy8gaTogdWludDY0CglpbnQgMQoJKwoJZnJhbWVfYnVyeSAwIC8vIGk6IHVpbnQ2NAoJYiAqZm9yXzAKCipmb3JfMF9lbmQ6CgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoyOQoJLy8gcmV0dXJuIGhhc2ggPT09IHJvb3Q7CglmcmFtZV9kaWcgLTIgLy8gaGFzaGVkTGVhZjogYnl0ZXMzMgoJZnJhbWVfZGlnIC0xIC8vIHJvb3Q6IGJ5dGVzMzIKCT09CgoJLy8gc2V0IHRoZSBzdWJyb3V0aW5lIHJldHVybiB2YWx1ZQoJZnJhbWVfYnVyeSAwCglyZXRzdWIKCiphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgoqY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbgoKCS8vIHRoaXMgY29udHJhY3QgZG9lcyBub3QgaW1wbGVtZW50IHRoZSBnaXZlbiBBQkkgbWV0aG9kIGZvciBjcmVhdGUgTm9PcAoJZXJyCgoqY2FsbF9Ob09wOgoJbWV0aG9kICJrZWNjYWsyNTZWZXJpZnkoYnl0ZVszMl0sYnl0ZVszMl0sYnl0ZVszMl1bXSlib29sIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9rZWNjYWsyNTZWZXJpZnkKCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBOb09wCgllcnI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "SortedStandardVerifier",
    "desc": "",
    "methods": [
      {
        "name": "keccak256Verify",
        "desc": "Prove that a leaf is in a merkle tree by verifying the path to the root",
        "args": [
          {
            "name": "root",
            "type": "byte[32]",
            "desc": "The merkle root"
          },
          {
            "name": "hashedLeaf",
            "type": "byte[32]",
            "desc": "The hashed leaf to verify"
          },
          {
            "name": "proof",
            "type": "byte[32][]",
            "desc": "The merkle proof"
          }
        ],
        "returns": {
          "type": "bool",
          "desc": "True if the proof is valid, false otherwise"
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

export type IncludeSchema = {
  /**
   * Any overrides for the storage schema to request for the created app; by default the schema indicated by the app spec is used.
   */
  schema?: Partial<AppStorageSchema>
}

/**
 * Defines the types of available calls and state of the SortedStandardVerifier smart contract.
 */
export type SortedStandardVerifier = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'keccak256Verify(byte[32],byte[32],byte[32][])bool' | 'keccak256Verify', {
      argsObj: {
        /**
         * The merkle root
         */
        root: Uint8Array
        /**
         * The hashed leaf to verify
         */
        hashedLeaf: Uint8Array
        /**
         * The merkle proof
         */
        proof: Uint8Array[]
      }
      argsTuple: [root: Uint8Array, hashedLeaf: Uint8Array, proof: Uint8Array[]]
      /**
       * True if the proof is valid, false otherwise
       */
      returns: boolean
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type SortedStandardVerifierSig = keyof SortedStandardVerifier['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends SortedStandardVerifierSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the SortedStandardVerifier smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends SortedStandardVerifierSig> = SortedStandardVerifier['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the SortedStandardVerifier smart contract to the method's return type
 */
export type MethodReturn<TSignature extends SortedStandardVerifierSig> = SortedStandardVerifier['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type SortedStandardVerifierCreateCalls = (typeof SortedStandardVerifierCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type SortedStandardVerifierCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type SortedStandardVerifierDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: SortedStandardVerifierCreateCalls) => SortedStandardVerifierCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class SortedStandardVerifierCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the SortedStandardVerifier smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the keccak256Verify(byte[32],byte[32],byte[32][])bool ABI method
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static keccak256Verify(args: MethodArgs<'keccak256Verify(byte[32],byte[32],byte[32][])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'keccak256Verify(byte[32],byte[32],byte[32][])bool' as const,
      methodArgs: Array.isArray(args) ? args : [args.root, args.hashedLeaf, args.proof],
      ...params,
    }
  }
}

/**
 * A client to make calls to the SortedStandardVerifier smart contract
 */
export class SortedStandardVerifierClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `SortedStandardVerifierClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof SortedStandardVerifier['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the SortedStandardVerifier smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: SortedStandardVerifierDeployArgs & AppClientDeployCoreParams & IncludeSchema = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(SortedStandardVerifierCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the SortedStandardVerifier smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & IncludeSchema & CoreAppCallArgs & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(SortedStandardVerifierCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the SortedStandardVerifier smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the keccak256Verify(byte[32],byte[32],byte[32][])bool ABI method.
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: True if the proof is valid, false otherwise
   */
  public keccak256Verify(args: MethodArgs<'keccak256Verify(byte[32],byte[32],byte[32][])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SortedStandardVerifierCallFactory.keccak256Verify(args, params))
  }

  public compose(): SortedStandardVerifierComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      keccak256Verify(args: MethodArgs<'keccak256Verify(byte[32],byte[32],byte[32][])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.keccak256Verify(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as SortedStandardVerifierComposer
  }
}
export type SortedStandardVerifierComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the keccak256Verify(byte[32],byte[32],byte[32][])bool ABI method.
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  keccak256Verify(args: MethodArgs<'keccak256Verify(byte[32],byte[32],byte[32][])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): SortedStandardVerifierComposer<[...TReturns, MethodReturn<'keccak256Verify(byte[32],byte[32],byte[32][])bool'>]>

  /**
   * Makes a clear_state call to an existing instance of the SortedStandardVerifier smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): SortedStandardVerifierComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): SortedStandardVerifierComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<SortedStandardVerifierComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<SortedStandardVerifierComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type SortedStandardVerifierComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type SortedStandardVerifierComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
