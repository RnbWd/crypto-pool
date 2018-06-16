pragma solidity ^0.4.21;

import './zeppelin/math/SafeMath.sol';

contract CryptoPool {
	using SafeMath for uint256;

	string public name = 'CryptoPool';
	string public symbol = '🧜‍♀️';

  constructor () {
	}

	event PoolCreated(address);
	event PoolEnded(address);

	struct Pool {
		string name;
		uint256 poolTotal;
		uint256 wager;
		bool active;
		mapping (address => address) shills;
	}

	mapping (address => Pool) public pools;
	mapping (address => address) private poolToOwner;
	mapping (address => uint) private ownerPoolCount;
	mapping (address => uint) private shillPoolCount;

	modifier isPoolOwner(address _poolAddress) {
		require(poolToOwner[_poolAddress] == msg.sender);
		_;
	}

	// return an array of pools that the sender owns
	// address[] _pools - list of ethereum addresses
	// maximum of 25 addresses in _pools
	// @param _pools an array of pool addresses

	function obtainPoolsByOwner(address[] _pools) public view returns (address[]) {
		require(_pools.length < 26);
		address[] memory result;
		if (ownerPoolCount[msg.sender] < 26) {
			 result = new address[](ownerPoolCount[msg.sender]);
		} else {
			 result = new address[](25);
		}
		uint counter = 0;
    for (uint i = 0; i < _pools.length; i++) {
      if (poolToOwner[_pools[i]] == msg.sender) {
        result[counter] = _pools[i];
        counter = counter.add(1);
      }
    }
    return result;
	}

	// return an array of pools that the sender owns
	// address[] _pools - list of ethereum addresses
	// maximum of 25 addresses in _pools
	// @param _pools an array of pool addresses

	function obtainPoolsByShill(address[] _pools) public view returns (address[]) {
		require(_pools.length < 26);
		address[] memory result;
		if (shillPoolCount[msg.sender] < 26) {
			result = new address[](shillPoolCount[msg.sender]);
		} else {
			result = new address[](25);
		}
		uint counter = 0;
    for (uint i = 0; i < _pools.length; i++) {
      if (pools[_pools[i]].shills[msg.sender] != 0) {
        result[counter] = _pools[i];
        counter = counter.add(1);
      }
    }
    return result;
	}

	// creates a Pool struct
	// @param _poolAddress: ethereum wallet that will be unique to each Pool
	// @param _name: a string that will be the name of the Pool
	// @param _wager: how much ether it will cost for each participant (aka shill) to be added to the Pool

	function createPool(address _poolAddress, string _name, uint256 _wager) public {
		require(!pools[_poolAddress].active);
	  pools[_poolAddress].name = _name;
		pools[_poolAddress].wager = _wager;
		pools[_poolAddress].active = true;
    poolToOwner[_poolAddress] = msg.sender;
		ownerPoolCount[msg.sender] = ownerPoolCount[msg.sender].add(1);
		emit PoolCreated(_poolAddress);
	}

	function placeWager(address _poolAddress, address _toAddress) public payable {
		require(pools[_poolAddress].active);
		pools[_poolAddress].poolTotal = pools[_poolAddress].poolTotal.add(msg.value);
		pools[_poolAddress].shills[msg.sender] = _toAddress;
		shillPoolCount[msg.sender] = shillPoolCount[msg.sender].add(1);
	}

	function setWager(address _poolAddress, uint256 _wager) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].wager = _wager;
	}

 // release all of the ether collected in a pool total to the winning participant
 // address of participant address to pay is saved when a bet is placed

	function releasePool(address _poolAddress, address _shill) public isPoolOwner(_poolAddress) {
		require(pools[_poolAddress].active);
		require(pools[_poolAddress].shills[_shill] != 0);
		pools[_poolAddress].shills[_shill].transfer(pools[_poolAddress].poolTotal);
		pools[_poolAddress].active = false;
		emit PoolEnded(_poolAddress);
	}

	function changePoolOwner(address _poolAddress, address _newOwner) public isPoolOwner(_poolAddress) {
		poolToOwner[_poolAddress] = _newOwner;
	}

	function changeShillAddress(address _poolAddress, address _shill, address _toAddress) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].shills[_shill] = _toAddress;
	}

	function changePoolName(address _poolAddress, string _name) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].name = _name;
	}

}
