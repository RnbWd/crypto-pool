pragma solidity ^0.4.21;

import './zeppelin/math/SafeMath.sol';

contract CryptoPool {
	using SafeMath for uint256;

	string public name = 'CryptoPool';
	string public symbol = '🧜‍♀️';

  constructor () {

  }

	event PoolCreated(string);
	event PoolEnded(string);

	struct Pool {
		string name;
		address owner;
		uint256 poolTotal;
		uint256 wager;
		bool active;
		address[] shills;
	}

	Pool[] private pools;

	mapping (uint => address) private poolToOwner;
	mapping (address => uint) ownerPoolCount;
	mapping (address => uint) shillPoolCount;

	modifier isPoolOwner(address _poolAddress) {
		require(poolToOwner[_poolAddress] == msg.sender);
		_;
	}

	function obtainPoolsByOwner() public returns (address[]) {
		address[] memory result = new address[](ownerPoolCount[msg.sender]);
    uint counter = 0;
    for (uint i = 0; i < pools.length; i++) {
      if (poolToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
	}

	function obtainPoolsByShill() public returns (address[]) {
		address[] memory result = new address[](ownerPoolCount[msg.sender]);
		uint counter = 0;
		for (uint i = 0; i < pools.length; i++) {
			if (zombieToOwner[i] == _owner) {
				result[counter] = i;
				counter++;
			}
		}
		return result;
	}

	// creates a Pool struct
	// @param _poolAddress: ethereum wallet that will be unique to each Pool
	// @param _name: a string that will be the name of the Pool
	// @param _wager: how much ether it will cost for each participant (aka shill) to be added to the Pool

	function createPool(address _poolAddress, string _name, uint256 _wager) public {
		uint id = pools.push(Pool(_name, msg.sender, 0, _wager, true, new address[](0))) - 1;
		poolToOwner[id] = msg.sender;
		ownerPoolCount[msg.sender] = ownerPoolCount[msg.sender].add(1);
		emit PoolCreated(_name);
	}

	// TODO add a way to link an external address for payments
	function placeWager(address _poolAddress) public payable {
		require(pools[_poolAddress].active);
		pools[_poolAddress].poolTotal = pools[_poolAddress].poolTotal.add(msg.value);
		pools[_poolAddress].shills.push(msg.sender);
	}

	function setWager(address _poolAddress, uint256 _wager) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].wager = _wager;
	}

	function releasePool(address _poolAddress, address _shill) public isPoolOwner(_poolAddress) {
		require(pools[_poolAddress].active);
		require(pools[_poolAddress].shills[_shill] != 0);
		pools[_poolAddress].shills[_shill].transfer(pools[_poolAddress].poolTotal);
		pools[_poolAddress].active = false;
		emit PoolEnded(pools[_poolAddress].name);
	}

	function changePoolOwner(address _poolAddress, address _newOwner) public isPoolOwner(_poolAddress) {
		poolToOwner[_poolAddress] = _newOwner;
	}

	function changeShillAddress(address _poolAddress, address _shill, address _toAddress) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].shills[msg.sender] = _toAddress;
	}

	function changePoolName(address _poolAddress, string _name) public isPoolOwner(_poolAddress) {
		pools[_poolAddress].name = _name;
	}

}
