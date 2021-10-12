import path from 'path';
import fs from 'fs';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { Menu } from '../src/Menu';

const PORT = process.env.PORT ?? 4000;
const app = express();

app.use(express.static('./build'));

app.get('/*', (res, req) => {
    const app = ReactDOMServer.renderToString(<Menu />);

    const indexFile = path.resolve('./build/index.html');
    
    fs.readFile(indexFile, 'utf-8', (err, data) => {
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`));
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});