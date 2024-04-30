import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, statSync } from 'fs';
import cors from 'cors';

// Connect directry
const app = express();
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

// Use cors
const corsConfig={
    origin: true,
    credentials: true,
    methods: ['GET','POST'],
}
app.use(cors(corsConfig));

app.get('/video/:id',(req,res)=>{
    const id = req.params.id;
    const path = `${__dirname}/videos/${id}.mov`;
    let range = req.headers.range;
    if(!range){
        res.status(400).send("Requires Range header");
    }
    let videoSize = statSync(path).size;
    const CHUNK_SIZE = 10**6;
    const start = Number(range.replace(/\D/g,""));
    const end = Math.min(start + CHUNK_SIZE,videoSize-1);
    const fileStream = createReadStream(path,{
        start,
        end
    });
    fileStream.pipe(res);

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end-start+1,
        "Content-Type": "video/mp4",
        "Content-List":["ab667","ab668","ab669"]
    }
    res.writeHead(206,headers);

});

app.get('/video',(req,res)=>{
    res.status(200).send(["ab667","ab668","ab669"]);
});

