/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { PrismaClient } from '@prisma/client';

import activities from '../data/activities';
import hotels from '../data/hotels';
import restaurants from '../data/restaurants';

const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.position.deleteMany();
  await prisma.picture.deleteMany();
  activities.forEach(async (activity: any) => {
    await prisma.activity.create({
      data: {
        name: activity.ActivityName,
        description: activity.Description,
        location: activity.Location,
        address: activity.Address,
        organizer: activity.Organizer,
        startTime: activity.StartTime,
        endTime: activity.EndTime,
        cycle: activity.Cycle,
        websiteUrl: activity.WebsiteUrl,
        class1: activity.Class1,
        class2: activity.Class2,
        city: activity.City,
        position: { create: activity.Position },
        picture: { create: activity.Picture },
      },
    });
  });

  restaurants.forEach(async (restaurant: any) => {
    await prisma.restaurant.create({
      data: {
        name: restaurant.RestaurantName,
        description: restaurant.Description,
        address: restaurant.Address,
        phone: restaurant.Phone,
        openTime: restaurant.OpenTime,
        websiteUrl: restaurant.WebsiteUrl,
        class: restaurant.Class,
        city: restaurant.City,
        position: { create: restaurant.Position },
        picture: { create: restaurant.Picture },
      },
    });
  });

  hotels.forEach(async (hotel: any) => {
    await prisma.hotel.create({
      data: {
        name: hotel.HotelName,
        address: hotel.Address,
        city: hotel.City,
        phone: hotel.Phone,
        description: hotel.Description,
        class: hotel.Class,
        serviceInfo: hotel.ServiceInfo,
        websiteUrl: hotel.WebsiteUrl,
        position: { create: hotel.Position },
        picture: { create: hotel.Picture },
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
