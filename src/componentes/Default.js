import React, { Component } from 'react';
import Product from './Product';

export default class Default extends Component {
    render() {

        return (
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>Error</h1>
            <h2> No se encuentra</h2>
            <h3>
                Solicitud de url
                <span className="text-danger">{this.props.locatioon.pathname}</span>{" "}
                No se encontró
            </h3>
            </div>

            </div>
                
            </div>
        );
    }
}