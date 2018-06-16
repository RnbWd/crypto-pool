pragma solidity ^0.4.21;

import './zeppelin/token/ERC20/StandardToken.sol';

contract AngelToken is StandardToken {
	string public name = 'AngelToken';
	string public symbol = '🌤';
	uint8 public decimals = 2;
	uint public INITIAL_SUPPLY = 800000;

  function AngelToken () {
		totalSupply_ = INITIAL_SUPPLY;
  	balances[msg.sender] = INITIAL_SUPPLY;
  }
}
