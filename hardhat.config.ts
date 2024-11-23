import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const { PRIVATE_KEY, GINCO_API_KEY } = process.env;

// タスクファイルを読み込むための設定
const SKIP_LOAD = process.env.SKIP_LOAD === "true";
if (!SKIP_LOAD) {
	const taskPaths = ["", "utils", "lock"];
	taskPaths.forEach((folder) => {
		const tasksPath = path.join(__dirname, "tasks", folder);
		fs.readdirSync(tasksPath)
			.filter((_path) => _path.includes(".ts"))
			.forEach((task) => {
				require(`${tasksPath}/${task}`);
			});
	});
}

const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: "0.8.27",
				settings: {
					viaIR: true,
				},
			},
		],
	},
	networks: {
		hardhat: {
			allowUnlimitedContractSize: true,
		},
		holesky: {
			url: `https://testnet.node.gincoapis.com/ethereum/holesky/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		oasysTestnet: {
			url: `https://testnet.node.gincoapis.com/oasys/testnet/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		bnbTestnet: {
			url: `https://testnet.node.gincoapis.com/bnb/testnet/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		amoy: {
			url: `https://testnet.node.gincoapis.com/polygon/amoy-erigon/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		arbitrumSepolia: {
			url: `https://testnet.node.gincoapis.com/arbitrum/testnet/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		shibuya: {
			url: `https://testnet.node.gincoapis.com/astar/testnet/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
		fuji: {
			url: `https://testnet.node.gincoapis.com/avax/testnet/v1/${GINCO_API_KEY}`,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		}
	},
};

export default config;
