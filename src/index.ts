import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addUser(
  firstName: string,
  lastName: string,
  password: string,
  email: string
) {
  const res = await prisma.user.create({
    data: {
      firstName,
      lastName,
      password,
      email,
    },
    select: {
      id: true,
      password: true,
      firstName: true,
    },
  });
  console.log("Done", res);
}


interface UpdateParams {
  firstName: string;
  lastName: string;
}
const updateUser = async (
  id: number,
  { firstName, lastName }: UpdateParams
) => {
  const res = await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
    },
  });
  console.log("Done", res)
};
updateUser(1,{firstName:"1stUser" , lastName:"okay"})