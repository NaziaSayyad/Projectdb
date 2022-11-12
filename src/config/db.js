const mongoose= require("mongoose");
//  Every connection which goes to different services is here . we 
// don't need to define connection again and again 

const connect = async () =>{
    return mongoose.connect(process.env.DB_URL);
}
module.exports = connect;

/*  
There are  multiple communication that happens to
 the server to client like AWS, 
 database,rabit enq,emailservices, aws services 
*/