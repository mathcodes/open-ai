import openai from './chatgpt'
const query = async (prompt: string, model: string) => {
  // here we pass in what the user types then make a request to chatGPT
  // the call is a completion so I'm passing in the information at this point and then it's going to go ahead and return the response
  const res = await openai.createCompletion({
    model, // the model we want to use
    prompt, // the prompt we want to use
    temperature: 0.9, // the temperature is how creative the AI is going to be
    max_tokens: 750, // the max tokens is how long the response is going to be
    frequency_penalty: 0.5, // the frequency penalty is how often the AI is going to repeat itself
    presence_penalty: 0.5, // the presence penalty is how often the AI is going to talk about the same topic
  })
  .then(res => res.data.choices[0].text)
  .catch(err =>
    `GPT did not find an answer to your question. Please try again. (Error: ${err.message})`
  )

  return res
}

export default query