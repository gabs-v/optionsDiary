import React,{useState} from 'react'

const Form = (props) => {

    const [ticker, setTicker] = useState('')
    const [entryPrice, setEntryPrice] = useState('')

    const newEntry = (e) => {
        e.preventDefault()

        const entry = {ticker, entryPrice}
        console.log("new entry!" , entry)

    setTicker("")
    setEntryPrice("")
    }

  return (
    <div>
        <form onSubmit={newEntry}>
            <h1>Journal Entry</h1>
            <div>
                <label>Ticker:</label>
                <input type='text' onChange={ (e) => setTicker(e.target.value)  } />
            </div>
            <div>
                <label>Entry Price: </label>
                <input type='number' onChange={ (e) => setEntryPrice(e.target.value) } />
            </div>
            <input type='submit' value='Submit'  />
        </form>

    </div>
  )
}

export default Form