import React, { useState } from 'react'

export default function Response() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  return (
    <div>
      {/* results displayed in a list, sorted newest to oldest */}
      <p>Prompt: {prompt}</p>
      <p>Response: {response}</p>
    </div>
  )
}
