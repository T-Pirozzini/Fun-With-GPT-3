import React, { useState } from 'react'

// openAI API
import { Configuration, OpenAIApi } from "openai";

// components
import Response from './Response';

// styles
import './Prompt.css'

export default function Prompt() {
  const [userPrompt, setUserPrompt] = useState('')
  const [result, setResult] = useState('') 
  const [id, setId] = useState(1) 
  const [payload, setPayload] = useState([]) 
  
  const generateID = (e) => {
    return id + 1;
  }  

  function onSubmit(e) {
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
      setResult(`${response.data.choices[0].text}`)     
      setId(generateID())    
      let responseObj

      responseObj = {        
        id: id,
        prompt: `${formDataObj.prompt}`,
        response: `${response.data.choices[0].text}`
      }      
      payload.unshift(responseObj)
      setUserPrompt('')          
    })       
  }  
  
  return (
    <div className="prompt-container">    
      <form className="prompt-form" onSubmit={onSubmit} >
        <label className="prompt-label">Give GPT-3 a prompt . . .</label>
        <input
          className="prompt-input"
          type='text'
          name='prompt'
          placeholder='Enter a prompt... e.g.Tell me a good robot joke'
          value={userPrompt}
          onChange={(e) => {setUserPrompt(e.target.value)}}
        />       
        <input className="prompt-btn" type='submit' value='ASK GPT-3' />  
      </form>
      <Response        
        payload={payload}       
      />        
    </div>
  )
}
