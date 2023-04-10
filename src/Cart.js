import React from 'react';
import { useCart } from 'react-use-cart';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <Table className='table table-light table-hover m-0'>
                        <thead>
                            <th>#</th>
                            <th>item</th>
                            <th>img</th>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} alt='' style={{ height: '6rem' }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                    <Button
                                     variant="info"
                                     onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                                     > - </Button>
                                    <Button
                                     variant="info"
                                     onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}
                                     > + </Button>
                                    <Button
                                     variant="danger"
                                     onClick={() => removeItem(item.id)}
                                     >Remove Item</Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: $ {cartTotal}</h2>
                </div>
                <div>
                    <Button
                     variant="danger"
                     onClick={()=>emptyCart()}
                     >Clear Cart</Button>
                     <Button variant="primary">Bye Now</Button>
                </div>
            </div>
        </section>
    );
};

export default Cart;