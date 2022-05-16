import React from 'react'

export default function prompt() {
  return (
    <div>
      {/* implement a from */}
      <form>
        <label>Enter Prompt:</label>
        <input></input>
      </form>
      {/* on submit sends prompt to OpenAI */}
      <button>Submit</button>
    </div>
  )
}
