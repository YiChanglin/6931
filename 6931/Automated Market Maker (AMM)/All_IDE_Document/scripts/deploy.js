// Deployment script for MyToken contract to Sepolia network
const hre = require("hardhat");

async function main() {
  // Deploy the MyToken contract
  const name = "MyToken";
  const symbol = "MTK";
  const decimals = 18;

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(name, symbol, decimals);
  await myToken.deployed();

  console.log("MyToken contract deployed at:", myToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
