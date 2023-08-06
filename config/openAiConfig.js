import dotenv from 'dotenv';
dotenv.config();

const OPENAI_KEY = process.env.OPENAI_KEY;
const openAiEnv = {
    OPENAI_KEY,
}

export default openAiEnv;
