const http = require("http");
const port =  process.env.PORT || 3000
const server = http.createServer((req,res)=>{
    const getData =  require('./main.js');                             
    getData(res);
})

server.listen(port,()=>console.log(`Server Starts running on the port`));

