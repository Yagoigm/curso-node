import http from "http";

http.createServer( (req, res) =>{
    


    res.write('Hi');

    res.end();
} )

.listen( 4000 );

console.log("Escuchando en el puerto", 4000)