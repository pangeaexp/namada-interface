import { Query, Sdk } from "@namada/shared";
import { ChainsService } from "background/chains";

export class SdkService {
  constructor(protected readonly chainsService: ChainsService) {}

  public async getRpc(): Promise<string> {
    // Pull chain config from store, as the RPC value may have changed:
    const chain = await this.chainsService.getChain();

    if (!chain) {
      throw new Error("No chain found!");
    }
    const { rpc } = chain;
    return rpc;
  }

  async getSdk(): Promise<Sdk> {
    const rpc = await this.getRpc();
    return new Sdk(rpc);
  }

  async getQuery(): Promise<Query> {
    const rpc = await this.getRpc();
    return new Query(rpc);
  }
}
