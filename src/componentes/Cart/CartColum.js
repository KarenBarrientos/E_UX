import React, { Component } from 'react';

export default function CartColum() {

    return (
        <div className="contrainer-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-title2 bg-info"><strong> Peces</strong> </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-title2 bg-info"><strong> Nombre del Pez</strong></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-title2 bg-info"><strong> Precio</strong> </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-title2 bg-info"><strong> Cantidad</strong> </p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-title2 bg-info"> <strong> Total</strong></p>
                </div>
            </div>
        </div>
    );
}
