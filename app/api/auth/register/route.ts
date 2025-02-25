import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const {name, email, password} = await req.json();

        if(!name || !email || !password){
            return NextResponse.json({error: "All field are required "},{status: 404});
        }

        const existingUser = await prisma.user.findUnique({
            where: {email}
        });

        if(existingUser){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data:{
                name, email,
                password: hashedPassword,
                role: "user"
            }
        });
        return NextResponse.json({ message: "User registered successfully", user }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
      }
}