import { Card } from 'bootstrap-4-react/lib/components'
import React from 'react'

function CardFact({index , text}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
        <Card.Header>Fact {index}</Card.Header>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">more</Card.Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default CardFact
