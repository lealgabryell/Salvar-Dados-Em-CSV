const cheerio = require('cheerio');
const fs = require("fs");

const html = `
<ul id="timesDeFutebol">
<li class="time1">Flamengo</li>
<li class="time2">Botafogo</li>
<li class="time3">Udinese</li>
</ul>
`;

const readHtml = cheerio.load(html);
const content = readHtml('#timesDeFutebol').text()

const csvCreator = () => {
  fs.writeFileSync("dados.csv", content);
}
csvCreator();