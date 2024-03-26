"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addUser(firstName, lastName, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
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
    });
}
addUser("firstUser", "lastName", "password", "email1@gmail.com");
const updateUser = (id_1, _a) => __awaiter(void 0, [id_1, _a], void 0, function* (id, { firstName, lastName }) {
    const res = yield prisma.user.update({
        where: {
            id,
        },
        data: {
            firstName,
            lastName,
        },
    });
    console.log("Done", res);
});
updateUser(1, { firstName: "1stUser", lastName: "okay" });
