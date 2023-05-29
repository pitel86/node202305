const http = require('http');

const PORT = 5000;

const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHeader(200);
    if(req.url == '/'){
        res.end('estoy en la home')
    }else if(req.url == '/movies'){
        res.end("estoy en la ruta de movies")
    }else if(req.url == '/actors'){
        res.end("estoy en la ruta de actors")
    }else{
        res.end("esta ruta no existe")
    }
}

const app = http.createServer(requestHandler);

app.listen(PORT, () => console.log('ya está funcionando mi servidor'));