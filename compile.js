//spits out ABi
// we have to read the contract file
const path = require('path');
const fs   = require('fs');

const inboxPath = path.resolve(__dirname,'contracts' ,'Inbox.sol' );
const source    = fs.readFileSync(inboxPath, 'utf8');

solc.compile(source, 1));
