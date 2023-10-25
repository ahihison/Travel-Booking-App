import { NextResponse } from "next/server";

import getCurrentUser from "@/app/acctions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    price,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
  } = body;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      return NextResponse.error();
    }
  });
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      price: parseInt(price, 10),
      category,
      roomCount,
      bathRoomCount: bathroomCount,
      guestCount,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
