import { Coin } from "./coins";
import { Account, CosmosClient, GetNonceResult, PostTxResult } from "./cosmosclient";
import { BroadcastMode } from "./lcdapi";
import { StdFee } from "./types";
import { OfflineSigner } from "./wallet";
export interface FeeTable {
  readonly upload: StdFee;
  readonly init: StdFee;
  readonly exec: StdFee;
  readonly send: StdFee;
}
export declare class SigningCosmosClient extends CosmosClient {
  readonly senderAddress: string;
  private readonly signer;
  private readonly fees;
  /**
   * Creates a new client with signing capability to interact with a CosmWasm blockchain. This is the bigger brother of CosmWasmClient.
   *
   * This instance does a lot of caching. In order to benefit from that you should try to use one instance
   * for the lifetime of your application. When switching backends, a new instance must be created.
   *
   * @param apiUrl The URL of a Cosmos SDK light client daemon API (sometimes called REST server or REST API)
   * @param senderAddress The address that will sign and send transactions using this instance
   * @param signer An implementation of OfflineSigner which can provide signatures for transactions, potentially requiring user input.
   * @param customFees The fees that are paid for transactions
   * @param broadcastMode Defines at which point of the transaction processing the postTx method (i.e. transaction broadcasting) returns
   */
  constructor(
    apiUrl: string,
    senderAddress: string,
    signer: OfflineSigner,
    customFees?: Partial<FeeTable>,
    broadcastMode?: BroadcastMode,
  );
  getNonce(address?: string): Promise<GetNonceResult>;
  getAccount(address?: string): Promise<Account | undefined>;
  sendTokens(recipientAddress: string, transferAmount: readonly Coin[], memo?: string): Promise<PostTxResult>;
}
