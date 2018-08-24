const config = require('../../common/config');
const Web3 = require('web3');
let web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    let rpc_url = config.rpc_url;
    web3 = new Web3(new Web3.providers.HttpProvider(rpc_url));
}

let Start = async function() {
    try {
        web3.eth.getBlockNumber((err, ret) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(JSON.stringify(ret));
                
            }
        })
        
    } catch (error) {
        console.log(error.stack);
    }
}

Start();