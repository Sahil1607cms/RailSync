import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 40001
};

export default config;