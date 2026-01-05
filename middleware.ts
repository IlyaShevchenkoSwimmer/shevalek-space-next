import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "nodejs", // Now stable!
};

export function middleware(request: NextRequest) {
  // Access to full Node.js APIs and npm packages
  const fs = require("fs");
  const crypto = require("crypto");

  // Complex authentication logic
  const token = request.headers.get("authorization");

  if (!isValidToken(token)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

function isValidToken(token: string | null): boolean {
  // Use Node.js crypto for validation
  // Access file system, databases, etc.
  return true;
}
