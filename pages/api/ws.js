const fs = require("fs");
const csv = require("fast-csv");
const csvFilePath = "./csv/WS.csv";

export default function handler(req, res) {
  const ws = [];

  if (req.body === "questions") {
    try {
      fs.createReadStream(csvFilePath)
        .pipe(
          csv.parse({
            headers: false,
          })
        )
        .on("error", (error) => console.error(error))
        .on("data", (row) => {
          ws.push({
            questRes1: row[1],
            questRes2: row[2],
            _id: row[0],
          });
        })
        .on("end", () => {
          res.status(200).json(ws);
        });
    } catch {
      res.status(400);
    }
  } else if (req.body === "main") {
    fs.createReadStream(csvFilePath)
      .pipe(
        csv.parse({
          headers: false,
        })
      )
      .on("error", (error) => console.error(error))
      .on("data", (row) => {
        const question = { _id: row[0] };

        ws.push(question);
      })
      .on("end", () => {
        res.status(200).json(ws);
      });
  } else {
    res.status(400);
  }
}
