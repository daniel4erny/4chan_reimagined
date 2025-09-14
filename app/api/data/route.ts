// app/api/data/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://seznam.cz");
    const html = await response.text();

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Nepodařilo se načíst Seznam" }, { status: 500 });
  }
}
