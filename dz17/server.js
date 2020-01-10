const phones = [
            {
                name: 'iphone7',
                price: 14000,
                color: 'black'
            },
            {
                name: 'iphone8',
                price: 18000,
                color: 'white'
            },
            {
                name: 'iphone10',
                price: 24000,
                color: 'pink'
            },
            {
                name: 'iphone11',
                price: 28000,
                color: 'black'
            },
            {
                name: 'sumsung',
                price: 14000,
                color: 'black'
            },
            {
                name: 'xiaomi',
                price: 10000,
                color: 'black'
            },
            {
                name: 'meizu',
                price: 8000,
                color: 'green'
            },
            {
                name: 'huaiwei',
                price: 11000,
                color: 'black'
            },
        ];
       
let http = require('http');
const url = require('url') ;

http.createServer((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Headers', "*");
            
            let reqUrl = req.url;
            let resToBody = [];

            console.log(reqUrl.includes("/phones"));
            console.log(req.method === "GET");

            if (req.method === "GET" && reqUrl.includes("/phones")) {
                const currUrl = new URL("http://localhost:3000" + reqUrl);
                const searchParams = currUrl.searchParams;
                let priceS = 0;
                let priceF = 0;
                let color = "";

                if (searchParams.has("priceS")) {
                    priceS = searchParams.get("priceS");
                }

                if (searchParams.has("priceF")) {
                    priceF = searchParams.get("priceF");
                }

                if (searchParams.has("color")) {
                    color = searchParams.get("color");
                }
                console.log(priceS);
                console.log(priceF);
                console.log(color);
                resToBody = phones.filter(el => el.price >= priceS && el.price <= priceF && el.color == color);
            }

            let body = JSON.stringify(resToBody);
            res.end(body);
        }).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));