import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Itemcard = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="">
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='text-center'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>${props.price}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
};

export default Itemcard;