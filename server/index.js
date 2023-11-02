const express = require("express");
const cors = require("cors");

const fs = require("fs");
const readline = require("readline");
const { createLogger, transports } = require("winston");
require("winston-daily-rotate-file");

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const { keyboard, Key } = require("@nut-tree/nut-js");

const port = "COM3";
const path = "Z:/Tickets/";

const sp = new SerialPort(port, {
  parser: new Readline({ encoding: "UTF-8" }),
  baudRate: 4800,
  parity: "none",
});

const logger = createLogger({
  level: "info",
  transports: [
    new transports.DailyRotateFile({
      filename: "info-%DATE%.log",
      datePattern: "DD-MM-YYYY",
      zippedArchive: true,
      level: "info",
      dirname: "Z:/Logs/",
    }),
  ],
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/getData", function (req, res) {
  new Promise((resolve, reject) => {
    let package = "";
    let RFID = "";
    const Hexparts = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    sp.on("data", (data) => {
      const stringData = data.toString().trim();
      if (stringData) {
        package += stringData;
        if (package.length == 10) {
          let text2 = "";
          let text3 = package;
          for (const c of text3) {
            text2 += Hexparts[c.charCodeAt(0) - 48];
          }
          RFID = "MT_" + text2;
          resolve(RFID);
        }
      } else {
        package = "";
      }
    });
  })
    .then((result) => {
      keyboard.pressKey(Key.LeftAlt, Key.S);
      keyboard.releaseKey(Key.LeftAlt, Key.S);
      fs.stat(`${path + result}.txt`, function (err) {
        if (err) {
          fs.openSync(`${path + result}.txt`, "w");
          readCard();
        } else {
          readCard();
        }
      });

      async function readCard() {
        var instream = fs.createReadStream(`${path + result}.txt`);
        var rl = readline.createInterface(instream);
        var arr = [];

        rl.on("line", function (line) {
          arr.push(line);
        });

        rl.on("close", function () {
          res.send({ RFID: result, arr });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/book", (req, res) => {
  keyboard.pressKey(Key.LeftAlt, Key.H);
  keyboard.releaseKey(Key.LeftAlt, Key.H);

  let data = req.body.data;

  var file = fs.createWriteStream(`${path + req.body.cardNumber}.txt`);
  file.on("error", function (err) {
    logger.log("error", "Fehler beim Schreiben des Tickets", {
      payload: err,
      time: new Date().toLocaleString(),
    });
  });
  data.forEach((value) => file.write(`${value}\r\n`));
  file.end();

  res.sendStatus(200);
  keyboard.pressKey(Key.LeftAlt, Key.H);
  keyboard.releaseKey(Key.LeftAlt, Key.H);
  if (req.body.log !== "") {
    logger.log("info", "Ticket gebucht", {
      name: req.body.log,
      time: new Date().toLocaleString(),
      karte: req.body.cardNumber,
    });
  }
});

app.listen(5000, () => {
  console.log(`Listening for Cards at http://localhost:${5000}`);
});
