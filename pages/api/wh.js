import { equal } from "assert";

const fs = require("fs");
const csv = require("fast-csv");
const csvFilePath = "./csv/WH.csv";

export default async function handler(req, res) {
  const wh = [];

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
          const question = {};

          question.questText = row[1];

          for (let i = 2; i < row.length; i++) {
            if (row[i]) {
              question[`questRes${i - 1}`] = row[i];
            }
          }

          question._id = row[0];

          wh.push(question);
        })
        .on("end", () => {
          res.status(200).json(wh);
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

        wh.push(question);
      })
      .on("end", () => {
        res.status(200).json(wh);
      });
  } else {
    res.status(400);
  }
}
