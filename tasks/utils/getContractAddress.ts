import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getContractAddress } from "../../helpers/contractJsonHelper";
import { mekongTestnet } from "../../helpers/constants";

/**
 * 【Task】	get deployed contract address
 */
task("getContractAddress", "getContractAddress of connected chain")
	.addParam("contract", "contract name in <contractName>Moduel#<contractName>")
	.setAction(async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
		console.log(
			"################################### [START] ###################################"
		);

		const publicClient = await hre.viem.getPublicClient({
			chain: mekongTestnet,
		});
		const chainId = (await publicClient.getChainId()).toString();
		// get contract name
		const contractName = `${taskArgs.contract}Module#${taskArgs.contract}`;

		// get contract address
		const contractAddress = getContractAddress(chainId, contractName);

		console.log(`
			${contractName} 's address is ${contractAddress}
		`);

		console.log(
			"################################### [END] ###################################"
		);
	});
