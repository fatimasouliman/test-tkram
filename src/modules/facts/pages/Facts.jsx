import { Table } from 'bootstrap-4-react/lib/components'
import './style/fact.css'
import CardFact from '../components/CardFact'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';

function Facts() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://catfact.ninja/facts')
      .then(res => setData(res.data.data))
  }, [])
  return (
    <div className='fact' >
      <h1>Fact</h1>
      <div className='cards' >
        {
          data ? data.map((ele, index) => [
            <CardFact index={index} text={ele.fact} />
          ]) :
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        }

      </div>

    </div>
  )
}

export default Facts
