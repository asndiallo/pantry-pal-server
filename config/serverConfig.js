import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const serverEnv = {
    PORT,
}

export default serverEnv;
