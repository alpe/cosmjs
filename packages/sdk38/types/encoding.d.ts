import { Msg } from "./msgs";
import { StdFee } from "./types";
export declare function makeSignBytes(
  msgs: readonly Msg[],
  fee: StdFee,
  chainId: string,
  memo: string,
  accountNumber: number,
  sequence: number,
): Uint8Array;
