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
    "verifyProof(byte[32],byte[],byte[32][])bool": {
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
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjkyLjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJLy8gVGhlIHJlcXVlc3RlZCBhY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgY29udHJhY3QuIEFyZSB5b3UgdXNpbmcgdGhlIGNvcnJlY3QgT25Db21wbGV0ZT8gRGlkIHlvdSBzZXQgeW91ciBhcHAgSUQ/CgllcnIKCi8vIHZlcmlmeVByb29mKGJ5dGVbMzJdLGJ5dGVbXSxieXRlWzMyXVtdKWJvb2wKKmFiaV9yb3V0ZV92ZXJpZnlQcm9vZjoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZSAweDE1MWY3Yzc1CgoJLy8gcHJvb2Y6IGJ5dGVbMzJdW10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWV4dHJhY3QgMiAwCgoJLy8gbGVhZjogYnl0ZVtdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglleHRyYWN0IDIgMAoKCS8vIHJvb3Q6IGJ5dGVbMzJdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglkdXAKCWxlbgoJaW50IDMyCgk9PQoKCS8vIGFyZ3VtZW50IDIgKHJvb3QpIGZvciB2ZXJpZnlQcm9vZiBtdXN0IGJlIGEgYnl0ZVszMl0KCWFzc2VydAoKCS8vIGV4ZWN1dGUgdmVyaWZ5UHJvb2YoYnl0ZVszMl0sYnl0ZVtdLGJ5dGVbMzJdW10pYm9vbAoJY2FsbHN1YiB2ZXJpZnlQcm9vZgoJYnl0ZSAweDAwCglpbnQgMAoJdW5jb3ZlciAyCglzZXRiaXQKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyB2ZXJpZnlQcm9vZihyb290OiBieXRlczMyLCBsZWFmOiBieXRlcywgcHJvb2Y6IGJ5dGVzMzJbXSk6IGJvb2xlYW4KLy8KLy8gUHJvdmUgdGhhdCBhIGxlYWYgaXMgaW4gYSBtZXJrbGUgdHJlZSBieSB2ZXJpZnlpbmcgdGhlIHBhdGggdG8gdGhlIHJvb3QKLy8KLy8gQHBhcmFtIHJvb3QgVGhlIG1lcmtsZSByb290Ci8vIEBwYXJhbSBsZWFmIFRoZSB1bmhhc2hlZCBsZWFmIHRvIHZlcmlmeS4gVGhpcyBzaG91bGQgYmUgdGhlIHJhdyBBQkkgZW5jb2RlZCB2YWx1ZS4KLy8gQHBhcmFtIHByb29mIFRoZSBtZXJrbGUgcHJvb2YKLy8KLy8gQHJldHVybnMgVHJ1ZSBpZiB0aGUgcHJvb2YgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZQp2ZXJpZnlQcm9vZjoKCXByb3RvIDMgMQoKCS8vIFB1c2ggZW1wdHkgYnl0ZXMgYWZ0ZXIgdGhlIGZyYW1lIHBvaW50ZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgbG9jYWwgdmFyaWFibGVzCglieXRlIDB4CglkdXAKCgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoxNAoJLy8gaGFzaCA9IGtlY2NhazI1NihrZWNjYWsyNTYobGVhZikpCglmcmFtZV9kaWcgLTIgLy8gbGVhZjogYnl0ZXMKCWtlY2NhazI1NgoJa2VjY2FrMjU2CglmcmFtZV9idXJ5IDAgLy8gaGFzaDogYnl0ZVszMl0KCgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoxNgoJLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9vZi5sZW5ndGg7IGkgKz0gMSkKCWludCAwCglmcmFtZV9idXJ5IDEgLy8gaTogdWludDY0CgoqZm9yXzA6CgkvLyB0ZXN0L2NvbnRyYWN0cy9zb3J0ZWRfc3RhbmRhcmRfdmVyaWZpZXIuYWxnby50czoxNgoJLy8gaSA8IHByb29mLmxlbmd0aAoJZnJhbWVfZGlnIDEgLy8gaTogdWludDY0CglmcmFtZV9kaWcgLTMgLy8gcHJvb2Y6IGJ5dGVzMzJbXQoJbGVuCglpbnQgMzIKCS8KCTwKCWJ6ICpmb3JfMF9lbmQKCgkvLyAqaWYwX2NvbmRpdGlvbgoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MTgKCS8vIGdsb2JhbHMub3Bjb2RlQnVkZ2V0IDwgMTQ1CglnbG9iYWwgT3Bjb2RlQnVkZ2V0CglpbnQgMTQ1Cgk8CglieiAqaWYwX2VuZAoKCS8vICppZjBfY29uc2VxdWVudAoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MTkKCS8vIGluY3JlYXNlT3Bjb2RlQnVkZ2V0KCkKCWl0eG5fYmVnaW4KCWludCBhcHBsCglpdHhuX2ZpZWxkIFR5cGVFbnVtCglpbnQgMAoJaXR4bl9maWVsZCBGZWUKCWJ5dGUgYjY0IENvRUIgLy8gI3ByYWdtYSB2ZXJzaW9uIDEwOyBpbnQgMQoJZHVwCglpdHhuX2ZpZWxkIEFwcHJvdmFsUHJvZ3JhbQoJaXR4bl9maWVsZCBDbGVhclN0YXRlUHJvZ3JhbQoJaW50IERlbGV0ZUFwcGxpY2F0aW9uCglpdHhuX2ZpZWxkIE9uQ29tcGxldGlvbgoJaXR4bl9zdWJtaXQKCippZjBfZW5kOgoJLy8gKmlmMV9jb25kaXRpb24KCS8vIHRlc3QvY29udHJhY3RzL3NvcnRlZF9zdGFuZGFyZF92ZXJpZmllci5hbGdvLnRzOjIyCgkvLyBidG9iaWdpbnQocHJvb2ZbaV0pID4gYnRvYmlnaW50KGhhc2gpCglmcmFtZV9kaWcgLTMgLy8gcHJvb2Y6IGJ5dGVzMzJbXQoJc3RvcmUgMjU1IC8vIGZ1bGwgYXJyYXkKCWludCAwIC8vIGluaXRpYWwgb2Zmc2V0CglmcmFtZV9kaWcgMSAvLyBpOiB1aW50NjQKCWludCAzMgoJKiAvLyBhY2MgKiB0eXBlTGVuZ3RoCgkrCglsb2FkIDI1NSAvLyBmdWxsIGFycmF5Cglzd2FwCglpbnQgMzIKCWV4dHJhY3QzCglmcmFtZV9kaWcgMCAvLyBoYXNoOiBieXRlWzMyXQoJYj4KCWJ6ICppZjFfZWxzZQoKCS8vICppZjFfY29uc2VxdWVudAoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MjMKCS8vIGhhc2ggPSBrZWNjYWsyNTYoaGFzaCArIHByb29mW2ldKQoJZnJhbWVfZGlnIDAgLy8gaGFzaDogYnl0ZVszMl0KCWZyYW1lX2RpZyAtMyAvLyBwcm9vZjogYnl0ZXMzMltdCglzdG9yZSAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAxIC8vIGk6IHVpbnQ2NAoJaW50IDMyCgkqIC8vIGFjYyAqIHR5cGVMZW5ndGgKCSsKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWludCAzMgoJZXh0cmFjdDMKCWNvbmNhdAoJa2VjY2FrMjU2CglmcmFtZV9idXJ5IDAgLy8gaGFzaDogYnl0ZVszMl0KCWIgKmlmMV9lbmQKCippZjFfZWxzZToKCS8vIHRlc3QvY29udHJhY3RzL3NvcnRlZF9zdGFuZGFyZF92ZXJpZmllci5hbGdvLnRzOjI1CgkvLyBoYXNoID0ga2VjY2FrMjU2KHByb29mW2ldICsgaGFzaCkKCWZyYW1lX2RpZyAtMyAvLyBwcm9vZjogYnl0ZXMzMltdCglzdG9yZSAyNTUgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAxIC8vIGk6IHVpbnQ2NAoJaW50IDMyCgkqIC8vIGFjYyAqIHR5cGVMZW5ndGgKCSsKCWxvYWQgMjU1IC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWludCAzMgoJZXh0cmFjdDMKCWZyYW1lX2RpZyAwIC8vIGhhc2g6IGJ5dGVbMzJdCgljb25jYXQKCWtlY2NhazI1NgoJZnJhbWVfYnVyeSAwIC8vIGhhc2g6IGJ5dGVbMzJdCgoqaWYxX2VuZDoKCipmb3JfMF9jb250aW51ZToKCS8vIHRlc3QvY29udHJhY3RzL3NvcnRlZF9zdGFuZGFyZF92ZXJpZmllci5hbGdvLnRzOjE2CgkvLyBpICs9IDEKCWZyYW1lX2RpZyAxIC8vIGk6IHVpbnQ2NAoJaW50IDEKCSsKCWZyYW1lX2J1cnkgMSAvLyBpOiB1aW50NjQKCWIgKmZvcl8wCgoqZm9yXzBfZW5kOgoJLy8gdGVzdC9jb250cmFjdHMvc29ydGVkX3N0YW5kYXJkX3ZlcmlmaWVyLmFsZ28udHM6MjkKCS8vIHJldHVybiBoYXNoID09PSByb290OwoJZnJhbWVfZGlnIDAgLy8gaGFzaDogYnl0ZVszMl0KCWZyYW1lX2RpZyAtMSAvLyByb290OiBieXRlczMyCgk9PQoKCS8vIHNldCB0aGUgc3Vicm91dGluZSByZXR1cm4gdmFsdWUKCWZyYW1lX2J1cnkgMAoKCS8vIHBvcCBhbGwgbG9jYWwgdmFyaWFibGVzIGZyb20gdGhlIHN0YWNrCglwb3BuIDEKCXJldHN1YgoKKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCWludCAxCglyZXR1cm4KCipjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNyZWF0ZSBOb09wCgllcnIKCipjYWxsX05vT3A6CgltZXRob2QgInZlcmlmeVByb29mKGJ5dGVbMzJdLGJ5dGVbXSxieXRlWzMyXVtdKWJvb2wiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX3ZlcmlmeVByb29mCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNhbGwgTm9PcAoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "SortedStandardVerifier",
    "desc": "",
    "methods": [
      {
        "name": "verifyProof",
        "desc": "Prove that a leaf is in a merkle tree by verifying the path to the root",
        "args": [
          {
            "name": "root",
            "type": "byte[32]",
            "desc": "The merkle root"
          },
          {
            "name": "leaf",
            "type": "byte[]",
            "desc": "The unhashed leaf to verify. This should be the raw ABI encoded value."
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
    & Record<'verifyProof(byte[32],byte[],byte[32][])bool' | 'verifyProof', {
      argsObj: {
        /**
         * The merkle root
         */
        root: Uint8Array
        /**
         * The unhashed leaf to verify. This should be the raw ABI encoded value.
         */
        leaf: Uint8Array
        /**
         * The merkle proof
         */
        proof: Uint8Array[]
      }
      argsTuple: [root: Uint8Array, leaf: Uint8Array, proof: Uint8Array[]]
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
   * Constructs a no op call for the verifyProof(byte[32],byte[],byte[32][])bool ABI method
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static verifyProof(args: MethodArgs<'verifyProof(byte[32],byte[],byte[32][])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'verifyProof(byte[32],byte[],byte[32][])bool' as const,
      methodArgs: Array.isArray(args) ? args : [args.root, args.leaf, args.proof],
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
   * Calls the verifyProof(byte[32],byte[],byte[32][])bool ABI method.
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: True if the proof is valid, false otherwise
   */
  public verifyProof(args: MethodArgs<'verifyProof(byte[32],byte[],byte[32][])bool'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(SortedStandardVerifierCallFactory.verifyProof(args, params))
  }

  public compose(): SortedStandardVerifierComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      verifyProof(args: MethodArgs<'verifyProof(byte[32],byte[],byte[32][])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.verifyProof(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
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
   * Calls the verifyProof(byte[32],byte[],byte[32][])bool ABI method.
   *
   * Prove that a leaf is in a merkle tree by verifying the path to the root
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  verifyProof(args: MethodArgs<'verifyProof(byte[32],byte[],byte[32][])bool'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): SortedStandardVerifierComposer<[...TReturns, MethodReturn<'verifyProof(byte[32],byte[],byte[32][])bool'>]>

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