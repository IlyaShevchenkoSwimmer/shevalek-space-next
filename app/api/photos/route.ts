import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const jsonData = fs.readFileSync(process.cwd() + "/photosInfo.json");
  const utf8decoder = new TextDecoder();
  const data = JSON.parse(utf8decoder.decode(jsonData));
  return NextResponse.json(data);
}
