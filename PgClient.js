const { Client } = require("pg")

const client = new Client({
    host :  process.env.DbHOST ||"dpg-cfvqqbvdvk4rro0a7pug-a.singapore-postgres.render.com",
    user : process.env.DbUSER|| "karthikeyan",
    port : process.env.DbPORT || 5432,
    password : process.env.DbPASSWORD || "2X6xh3zXLG5qHtxpaPAcFbYtshMq7gY7",
    database :  process.env.DB || "musicfolks",
    ssl: true
});

client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }  
})
module.exports = client;