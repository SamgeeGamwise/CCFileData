const fs = require("fs");
const csv = require("fast-csv");
const csvFilePath = "./csv/SJ.csv";

export default async function handler(req, res) {
  const sj = [];

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

          question.questLabel = row[1];
          question.questText = row[2];

          for (let i = 3; i < row.length; i++) {
            if (row[i]) {
              question[`questRes${i - 2}`] = row[i];
            }
          }

          question._id = row[0];

          sj.push(question);
        })
        .on("end", () => {
          res.status(200).json(sj);
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

        sj.push(question);
      })
      .on("end", () => {
        res.status(200).json(sj);
      });
  } else {
    res.status(400);
  }
}
