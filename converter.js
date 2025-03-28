const fs = require("fs");

const fontPath = "Poppins-Regular.ttf";
const font = fs.readFileSync(fontPath);
const base64 = font.toString("base64");

fs.writeFileSync("poppins-base64.txt", base64);
console.log("Base64 gerado com sucesso!");
