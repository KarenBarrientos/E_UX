import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*fin title */}

                            {/* info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* texto producto */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> Fundación:<span className="text-uppercase">{company}</span> </h4>
                                    <h5 className="text-blue"> <br/>
                                        <strong>Precio:
                                        <span>Lps.</span> {price}
                                        </strong>
                                    </h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Información sobre el Pez: </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* botones*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Regresar
                                        </ButtonContainer>
                                        </Link>

                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addTocart(id); value.openModal(id);
                                        }}>
                                            {inCart ? "Agregar" : "Agregar al carrito"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}