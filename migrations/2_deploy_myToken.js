const MyToken = artifacts.require("myToken");

module.exports = async function (deployer, network, accounts) {
  deployer.deploy(MyToken);
  const myToken = await MyToken.deployed()

};
