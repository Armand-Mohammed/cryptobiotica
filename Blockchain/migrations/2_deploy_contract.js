const Payment = artifacts.require("Cryptobiotica");

module.exports = function(deployer) {
  deployer.deploy(Payment);
};
