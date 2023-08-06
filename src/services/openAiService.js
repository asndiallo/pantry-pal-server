import { Configuration, OpenAIApi } from 'openai';
import openAiEnv from '../../config/openAiConfig.js';

const OPENAI_KEY = openAiEnv.OPENAI_KEY;
const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
