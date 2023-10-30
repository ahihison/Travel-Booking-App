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
    bathRoomCount,
    guestCount,
    location,
  } = body;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      return NextResponse.error();
    }
  });
 const datatemp = {
  data: {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathRoomCount,
    guestCount,
    locationValue: location.value,
    price: parseInt(price, 10),
    userId: currentUser.id,
  },
 }
 console.log("body", body)
  console.log(datatemp)
  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathRoomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });
  
  return NextResponse.json(listing);
}
