import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default openai

// We can now use Singleton config object which has a connection to the OPENAI_API_KEY and basically make my chat GPT calls