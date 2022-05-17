import React, { useState } from 'react'

export default function Response(props) {
  const { prompt, result } = props 

  return (
    <div>
      {/* results displayed in a list, sorted newest to oldest */}      
      <h3>AI Response</h3>
      <p>{result}</p>
    </div>
  )
}
