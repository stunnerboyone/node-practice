
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

config();


const configuration = new Configuration({
	organization: process.env.ORG_ID,
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
	model: "gpt-3.5-turbo",
	messages: [{role: "user", content: "5 words about Putin"}],
  });
  console.log(`${completion.data.choices[0].message.content} Tokens: ${completion.data.usage.total_tokens}`);


