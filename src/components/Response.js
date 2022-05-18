// styles
import './Response.css'

export default function Response(props) {
  const { payload } = props

  return (
    <div className="response-container">      
        {payload.map((load) => (
          <div className='response'>
            <li key={load.id}>       
              <h3 className="response-title">RESPONSE #{load.id}</h3>
              <p className="response-text"><span>USER PROMPT: </span>{load.prompt}</p>
              <p className="response-text"><span>GPT-3 RESPONSE: </span>{load.response}</p>
            </li>
          </div>              
        ))}          
    </div>
  )
}
