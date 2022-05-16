import React from 'react'

export default function prompt() {
  return (
    <div>
      {/* implement a from */}
      <label>Enter Prompt:</label>
      <input></input>
      {/* on submit sends prompt to OpenAI */}
      <button>Submit</button>
    </div>
  )
}
