const { Client } = require("pg")

const client = new Client({
    host :  process.env.DbHOST ,
    user : process.env.DbUSER,
    port : process.env.DbPORT ,
    password : process.env.DbPASSWORD ,
    database :  process.env.DB ,
    ssl: true
});

client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }  
})
module.exports = client;
