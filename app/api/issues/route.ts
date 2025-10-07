import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import z from "zod";

const prisma = new PrismaClient();

const issueSchema = z.object({
  title: z.string().min(1).max(225),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }

  const newIssues = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssues, { status: 201 });
}
