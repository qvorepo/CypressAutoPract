//Proof of concepts to send a request in Node.js
//To excute this type 'node request_poc.js' in the terminal.
const fs = require('fs')
    , path = require('path')
    , certFile = path.resolve(__dirname, 'ssl/client.crt')
    , keyFile = path.resolve(__dirname, 'ssl/client.key')
    , request = require('request');
 
const options = {
    url: 'https://api.some-server.com/',
    agentOptions: {
        //cert: fs.readFileSync(certFile),
        //key: fs.readFileSync(keyFile),
        // Or use `pfx` property replacing `cert` and `key` when using private key, certificate and CA certs in PFX or PKCS12 format:
        pfx: fs.readFileSync('H:/API/pfx.cert'),
        passphrase: '722',
        securityOptions: 'SSL_OP_NO_SSLv3'
    },
    body: {
        
    }
};
 
request.get(options);