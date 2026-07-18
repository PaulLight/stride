import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.text();

    const response = await fetch(process.env.API_BASE_URL!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    const data = await response.json();
    return NextResponse.json(data);
}
