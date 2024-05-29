import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// const result = await prisma.user.create({
	// 	data: {
	// 		name: "julian",
	// 		lastname: "julian@mail.com",
	// 	},
	// });

	// console.log(result);

	const result = await prisma.user.findMany();
	console.log(result);
}

main();
