import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart';
import './ItemCart.css'

const Itemcard = (props) => {
  const {addItem} = useCart();
    return (
        <Card  className="m-2 p-2 bg-" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img}  className="img"/>
        <Card.Body className='text-center'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>${props.price}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <Button variant="primary" onClick={() => addItem(props.item)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    );
};

export default Itemcard;