import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//proveedor

//consumidor

class ProductProvider extends Component {
    state = {
        products: [], detailProduct: detailProduct,
        cart: [], modalOpen: false, modalProduct: detailProduct,
        cartSubtotal: 0, cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        });
    };


    setProducts = () => {
        let temp = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            temp = [...temp, singleItem];

        });
        this.setState(() => {
            return { products: temp }
        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            }, () => { this.addTotals(); }
        );
    };
/*
    tester = () => {
        console.log("Estado cachorros:", this.state.products[0].inCart);
        console.log("Datos de cachorros: ", storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(() => {
            return { products: tempProducts }
        }, () => {
            console.log("Estado cachorros:", this.state.products[0].inCart);
            console.log("Datos de cachorros: ", storeProducts[0].inCart);

        });
    };

    /*en render va: <button onClick={this.tester}>Probar</button> 
    */

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        });
    };

    closeModal = id => {
        this.setState(() => {
            return { modalOpen: false }
        });
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() });

    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() });
        }


    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        })
    };

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.15;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        });

    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail: this.handleDetail,
                addToCart: this.addToCart, openModal: this.openModal,
                closeModal: this.closeModal, increment: this.increment,
                decrement: this.decrement, removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };