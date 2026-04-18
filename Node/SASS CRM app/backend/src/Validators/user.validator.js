import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().trim().email("Invalid Email format").toLowerCase(),
    password: z.string().trim().regex(/[A-Z]/, "Must include uppercase").regex(/[0-9]/, "Must include number"),
    role: z.enum(["user", "admin"]).optional().default("user"),
    company: z.string().trim().optional(),
    phone: z.string().trim().min(10).optional()
})

export const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required") 
})