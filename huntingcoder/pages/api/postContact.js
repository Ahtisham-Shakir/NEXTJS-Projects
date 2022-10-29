import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    await fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );

    res.status(200).json({ message: "Thanks for Contacting us!" });
  } else {
    res.status(200).json(["Get request"]);
  }
}
