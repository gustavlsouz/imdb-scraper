# imdb-scraper
Simple IMDB scraper. Node.js, mongoose and Cheerio

Opções:

        --inicio <numero inicial>
        --quant <quantidade de links para percorrer>
                -> ex: node index.js --inicio 55000 --quant 500

        --time [opcional] <intervalo em segundos>

        --top250 para lista dos 250 melhores filmes
                -> node index.js --top250

        --iy <ano inicial> --fy <ano final>
        --ip <páginal inicial> --fp <página final>
                -> ex: node index.js --iy 2011 --fy 2017 --ip 3 --fp 5
