import React, { Component } from 'react';

export default function CartColum() {

    return (
        <div className="contrainer-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Productos</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Nombre del productos</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Precio</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Cantidad</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Remover</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> Total</p>
                </div>
            </div>
        </div>
    );
}
