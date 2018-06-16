pragma solidity ^0.4.21;

import './zeppelin/ownership/Ownable.sol';

contract Wallet is Ownable {

	struct UserWallet {
		bytes32 btcWallet;
		bool isActive;
	}

	mapping (address => UserWallet) public wallets;

	function addBtcWallet(bytes32 _btcWallet) public {
		require(!wallets[msg.sender].isActive);
		wallets[msg.sender].btcWallet = _btcWallet;
		wallets[msg.sender].isActive = true;
	}

}
