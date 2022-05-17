import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";

import Response from "./Response"

export default function Prompt() {
  const [userPrompt, setUserPrompt] = useState('')
  const [result, setResult] = useState()

  async function onSubmit(e) {
    e.preventDefault();    
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())    

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_SECRET,
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
      prompt: `${userPrompt}`,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((response) => {
      setUserPrompt(`${formDataObj.prompt}`)
      setResult(response.data.choices[0].text)      
    })
  }    

  return (
    <div>    
      <form onSubmit={onSubmit} >
        <label>Enter Prompt: </label>
        <input
          type='text'
          name='prompt'
          placeholder='Enter a prompt'
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />       
        <input type='submit' value='Get openAI Response' />  
      </form>
      <Response
        prompt={userPrompt}
        result={result}
      />        
    </div>
  )
}
