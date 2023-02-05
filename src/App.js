import { useState, useEffect } from 'react'
import image from './images/kra.jpg'

const App = () => {

  const url = "https://api.kanye.rest/"
  const [quote, setQuote] = useState("")

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data["quote"])
  }


  useEffect(() => {
    getQuote()
  }, [])

  const getNewQuote = () => {
    setQuote(null)
    getQuote()
  }


  return (
    <div className='box'>
      <h1>KANYE REST API</h1>
      <img src={image} alt="" />
      <h2>{quote}</h2>
      <button className="btn-generator" onClick={getNewQuote}>New Quote of Kanye</button>
    </div>
  )
}
export default App
