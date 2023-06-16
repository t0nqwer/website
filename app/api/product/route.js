import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const data = await prisma.product_Cloth.findMany({
      where: {
        Forweb: true,
      },
      select: {
        product_id: true,
        code: true,
        fabric: {
          select: {
            Fabric_ID: true,
            Weaving: true,
            Color: true,
            Pattern: true,
            Type: true,
          },
        },
        design: {
          select: {
            Design_Name: true,
            Brand: true,
            Category: true,
            Pattern: true,
          },
        },
        Front_Thumbnail: true,
        Front_img: true,
        Back_img: true,
        price: true,
      },
    });
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
