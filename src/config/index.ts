import dotenv from "dotenv";
dotenv.config();

export const Config = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",

    MONGO_URI: process.env.MONGO_URI as string,

    JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN as string,
    JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN as string,
    JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || "15m",
    JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || "7d",

    EMAIL_HOST: process.env.EMAIL_HOST as string,
    EMAIL_PORT: Number(process.env.EMAIL_PORT) || 587,
    EMAIL_USER: process.env.EMAIL_USER as string,
    EMAIL_PASS: process.env.EMAIL_PASS as string,

    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",

    BCRYPT_SALT_ROUND: Number(process.env.BCRYPT_SALT_ROUND) || 12,

    RATE_LIMIT_WINDOW_MS:
        Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    RATE_LIMIT_MAX_REQUESTS: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
};
