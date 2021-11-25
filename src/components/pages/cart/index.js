import React from 'react'
import { useParams } from 'react-router'

const Cart = () => {

    const {id}= useParams();
    return (
        <div>
            <h3>{id}</h3>
        </div>
    )
}

export default Cart
