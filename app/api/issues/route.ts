import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import { issueSchema } from "../../validationSchemas";

const prisma = new PrismaClient();

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
