const os = require("node:os");
const totalmemory = os.totalmem();

console.log("RAM monitoring. by Foks_f");
for (i = 0; i < 5; i++) {
  console.log("");
}

function sleep(millis) {
  var t = new Date().getTime();
  var i = 0;
  while (new Date().getTime() - t < millis) {
    i++;
  }
}

const formatBytes = (bytes, decimals = 2, k = 1024) => {
  let sizes = ["байт", "КБ", "МБ", "ГБ", "ТБ"];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
};

const format = (bytes, decimals = 2, k = 1024) => {
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));
};

const pocent = (a, b) => {
  if (!a || !b) {
    return "No data";
  } else {
    let num = (a / b) * 100;
    return num;
  }
};

while (true) {
  const freemem = os.freemem();
  let using = format(totalmemory - freemem);
  let out = Math.floor(pocent(using, format(totalmemory)));

  console.log("Всего " + formatBytes(totalmemory));
  console.log("Свободно " + formatBytes(freemem));
  console.log("Занято " + formatBytes(totalmemory - freemem));
  console.log("Процентов " + out + "%");
  console.log("");
  sleep(2000);
}
