import readline from "readline";
import fs from "fs";

import { NextResponse } from "next/server";

export async function GET() {
  const data = await noteGetter(process.cwd() + "/public/notes/");
  return NextResponse.json(data);
}

async function noteGetter(path: string) {
  const notes = fs.readdirSync(path);

  return Promise.all(
    notes.map((note) => {
      let lines = 0;

      return new Promise((resolve) => {
        const info = { text: "", heading: "" };

        const fileStream = fs.createReadStream(path + note);

        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity,
        });

        rl.on("line", (line) => {
          if (lines > 1) {
            info.text += line + "\n";
          }
          if (lines === 0) {
            info.heading = line;
          }
          lines++;
        });

        rl.on("close", () => {
          console.log("Finished reading the file.");
          resolve(info);
        });
      });
    })
  );
}
