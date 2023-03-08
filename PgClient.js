const { Client } = require("pg")

const client = new Client({
    connectionString : process.env.connectionString    
});

client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }  
})
module.exports = client;
