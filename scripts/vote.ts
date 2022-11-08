import { developmentChain, proposalsFile, VOTING_PERIOD } from "../helper-hardhat.config";
import { ethers, network } from "hardhat";
import * as fs from "fs";
import moveBlocks from "../utils/move-blocks";

const index = 0;

async function main(proposalIndex: number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    const proposalId = proposals[network.config.chainId!][proposalIndex];
    // 0 = Against, 1 = For, 2 = Abstain
    const voteWay = 1;
    const reason = "I like do da cha cha";
    const governor = await ethers.getContract("GovernorContract");
    const voteTxResponse = await governor.castVoteWithReason(
        proposalId,
        voteWay,
        reason
    )

    await voteTxResponse.wait(1);
    if (developmentChain.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 1);
    }
    console.log("Voted! Ready to go!");
    
}

main(index)
.then(() => process.exit(0))
.catch((error) => process.exit(1));