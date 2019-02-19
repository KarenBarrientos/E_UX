import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()} >
                                Limpiar Carrito
            </button>
                        </Link>

                        <h5>
                            <span className="text-titl3">Subtotal: </span>
                            <strong>Lps. {cartSubtotal} </strong>
                        </h5>

                        <h5>
                            <span className="text-titl3">Impuesto: </span>
                            <strong>Lps. {cartTax} </strong>
                        </h5>

                        <h5>
                            <span className="text-titl3">Total: </span>
                            <strong>Lps. {cartTotal} </strong>
                        </h5>

                    </div>

                </div>

            </div>
        </React.Fragment>
    )

}