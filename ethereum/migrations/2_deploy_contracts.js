var AngelToken = artifacts.require("./AngelToken.sol");
var CryptoPool = artifacts.require("./CryptoPool.sol");
module.exports = function(deployer) {
	deployer.deploy(AngelToken);
	deployer.deploy(CryptoPool);
};
