import { initWasm, WalletCore } from "@trustwallet/wallet-core";

class TrustWalletCore {
    walletCore: WalletCore;
    CoinType: WalletCore["CoinType"];

    constructor(_walletCore: WalletCore) {
        this.walletCore = _walletCore;
        this.CoinType = _walletCore.CoinType;
    }
    async init() {
        const _walletCore = await initWasm();
        this.walletCore = _walletCore;
        this.CoinType = _walletCore.CoinType;
    }
    getWalletCore() {
        return this.walletCore;
    }
    suggestMenumonic=(val:string)=>{
        return this.walletCore.Mnemonic.suggest(val)
    }
}

 const trustWalletService = new TrustWalletCore({} as WalletCore);


export default trustWalletService;
