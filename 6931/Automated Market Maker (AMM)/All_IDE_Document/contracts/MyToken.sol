// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Import the OpenZeppelin ERC20 contract, which contains all the standard functionality for an ERC20 token
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    constructor(string memory name, string memory symbol, uint8 decimals) ERC20(name, symbol) {

        _mint(msg.sender, 1000 * 10 ** uint256(decimals));
    }
}
