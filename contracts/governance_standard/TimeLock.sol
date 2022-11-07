// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    constructor(
        uint minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {}
}