module.exports = (res)=>{    
    const client = require('./PgClient')                     
    client.query(`Select * from artist`, async (err,data)=>{                                
        if(!err) {                                                                                             
            res.writeHead(200,{ "Content-Type": "application/json" })
            res.end(JSON.stringify(data.rows))                                
        }
        else{                                                            
            res.writeHead(200,{ "Content-Type": "text/html" })
            res.end(` <h1> There is an Error!! : ${err} </h1>`)                                  
        }            
    })                   
}
