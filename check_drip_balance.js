const Web3 = require("web3");
const web3 = new Web3("https://bsc-dataseed1.binance.org/");

let myWallet = "YOUR WALLET ADDRESS";

let abi = [{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

let dripAddress = "0x20f663cea80face82acdfa3aae6862d246ce0333";

const dripToken = new web3.eth.Contract(abi, dripAddress);

(async () => {
    let dripBalance = await dripToken.methods.balanceOf(myWallet).call();
    console.log("Drip",web3.utils.fromWei(dripBalance, 'ether'));
})();
