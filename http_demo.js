// e => {
//   console.log("hello");
// };
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     fs.readFile(
//       path.join(__dirname, 'public', 'index.html'),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'index.html' });
//         res.end(content);
//       }
//     );
//   }
// });
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`the server is running on ${PORT}`);
// });