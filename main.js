import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
  const response = await prisma.product.create({
    data: {
      name: "Shoes Lebron",
      description: "This is a description",
    },
  });
  console.log(response);
})();
