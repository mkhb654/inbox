const assert = require('assert');
const ganache = require('ganahce-cli');
const Web3 = requrie('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');


let accounts ;
let inbox;
