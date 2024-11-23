import { Chain } from "viem";

// テストネットの設定
export const mekongTestnet: Chain = {
	id: 7078815900,
	name: "Ethereum Mekong Testnet",
	nativeCurrency: {
		name: "Mekong Ethereum",
		symbol: "ETH", // テストネット用のシンボル
		decimals: 18, // Aleph Zeroのネイティブトークンの小数点桁数
	},
	blockExplorers: {
		default: {
			name: "Ethereum Mekong TestnetExplorer",
			url: "https://explorer.mekong.ethpandaops.io", // テストネット用のブロックエクスプローラーURL
		},
	},
	rpcUrls: {
		default: {
			http: ["https://rpc.mekong.ethpandaops.io"], // Aleph Zero TestnetのRPC URL
			webSocket: ["wss://rpc.mekong.ethpandaops.io"], // WebSocket RPC URL
		},
	},
	testnet: true, // テストネットなのでtrue
	contracts: {
		ensRegistry: undefined, // Aleph ZeroはENSを使用していない場合、undefined
		ensUniversalResolver: undefined,
		multicall3: undefined, // 必要であれば、Multicallコントラクトのアドレスを指定
		universalSignatureVerifier: undefined,
	},
};
