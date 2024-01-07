import { Table } from 'bootstrap-4-react/lib/components'
import './style/breeds.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';

function Breeds() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://catfact.ninja/breeds')
      .then(res => setData(res.data.data))
  }, [])
  return (
    <div className='breeds' >
      <h1>Breeds</h1>
      <div className='table'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>breed</th>
              <th>coat</th>
              <th>country</th>
              <th>origin</th>
              <th>pattern</th>

            </tr>
          </thead>
          <tbody>
            {
              data ? data.map(ele => [
                <tr>
                  <td>{ele.breed}</td>
                  <td>{ele.coat}</td>
                  <td>{ele.country}</td>
                  <td>{ele.origin}</td>
                  <td>{ele.pattern}</td>
                </tr>
              ]) :
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
            }


          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Breeds
