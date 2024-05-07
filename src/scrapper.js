import http from 'http';
const url =
  'https://ms.ro/ro/informatii-de-interes-public/examene/examene-si-concursuri-nationale/';
http.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});
