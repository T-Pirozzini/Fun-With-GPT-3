
export default function Response(props) {
  const { payload } = props

  return (
    <div>
      <ul>
        {payload.map((load) => (
          <li key={load.id}>       
            <h3>AI Response {load.id}</h3>
            <p>PROMPT: {load.prompt}</p>
            <p>RESPONSE: {load.response}</p>
          </li>              
        ))}
      </ul>    
    </div>
  )
}
