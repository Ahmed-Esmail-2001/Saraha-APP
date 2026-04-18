import dotenv from 'dotenv'

dotenv.config()

export const config = {
    //Application
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    //Database
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name',
    //Jason Web Token
    JWT:{
        SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
        EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    },
}