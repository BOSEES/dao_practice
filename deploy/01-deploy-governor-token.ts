import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
};
export default deployGovernanceToken;