// <註解>
// cdm 輸入: nodemon index.mjs=> 自動重新刷新http
// cdm 輸入: npm i=> 尋找檔案中用到的npm
// package.json裡面輸入自訂:
// "scripts": {
//     ...
//     "start": "nodemon index.mjs" => npm start
//     "dev": "nodemon index.mjs wei wei@gmail.com" => npm run "___"
//   },
//+ 先試試看這樣



// <執行>
import http from "http";

const server = http.createServer((request, response) => {
    response.setHeader("content-type","text/html;charset=utf-8");
    // process.argv[2]= nodemon index.mjs "wei"
    response.end(`hello server, 你好主機, ${process.argv[2]}`);
});

server.listen(9000, () => {
    console.log("server is running @ http://localhost:9000");
})