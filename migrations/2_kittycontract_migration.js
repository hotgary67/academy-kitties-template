const Kittycontract = artifacts.require("Kittycontract");
const name = "Crazy Cats";
const symbol = "CCS";

module.exports = function (deployer) {
  deployer.deploy(Kittycontract, name, symbol);
};




//const _name = "ErEr";
//const _symbol = "ER";
//const _amount = "100"

//module.exports = function(deployer, network, accounts) {
  //deployer.deploy(ERC20, _name, _symbol).then(function(instance) {
    //instance.mint(accounts[0], _amount)

//  });

//};
