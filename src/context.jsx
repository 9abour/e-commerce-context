import { createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext(); // [1]: Provider, [2]: Consumer

import React, { Component } from "react";

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart: [],
		modalProduct: detailProduct,
		modalOpen: false,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
	};

	// Set Products
	componentDidMount() {
		this.setProducts();

		// Products from localStorage
		const products = this.checkInCartLS();
		if (products !== null && products.length > 0) {
			this.setState(() => {
				return {
					cart: [...products],
				};
			}, this.setTotalLS);
		}
	}

	checkInCartLS = () => {
		let returnedProducts = localStorage.getItem("product");
		const products = JSON.parse(returnedProducts);
		return products;
	};

	setProducts = () => {
		let tempProducts = [];

		storeProducts.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];

			const cartItems = this.checkInCartLS();
			if (cartItems !== null) {
				cartItems.map(cartItem => {
					if (cartItem.id === item.id) {
						item.inCart = true;
					}
				});
			}
		});

		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getItem = id => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	handleDetails = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};

	addToCart = id => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		this.setState(
			() => {
				return {
					products: [...tempProducts],
					cart: [...this.state.cart, product],
					detailProduct: { ...product },
				};
			},
			() => {
				this.setTotal(), this.saveCartProductsLS();
			}
		);
	};

	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {
				modalProduct: product,
				modalOpen: true,
			};
		});
	};

	closeModal = () => {
		this.setState(() => {
			return {
				modalOpen: false,
			};
		});
	};

	increment = id => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.price * product.count;

		// Increment products in LS
		const productsFromLS = JSON.parse(localStorage.getItem("product"));
		const selectedProductLS = productsFromLS.find(item => item.id === id);
		selectedProductLS.count = product.count;

		// Updating new total
		selectedProductLS.total = product.price * product.count;

		// Set new products after increment item
		localStorage.setItem("product", JSON.stringify(productsFromLS));

		this.setState(() => {
			return {
				cart: [...tempCart],
			};
		}, this.setTotal);
	};

	decrement = id => {
		let tempCart = [...this.state.cart];
		const selectProduct = tempCart.find(item => item.id === id);
		const index = tempCart.indexOf(selectProduct);
		const product = tempCart[index];

		// Decrement products in LS
		const productsFromLS = JSON.parse(localStorage.getItem("product"));
		const selectedProductLS = productsFromLS.find(item => item.id === id);
		if (product.count > 1) {
			product.count = product.count - 1;
			selectedProductLS.count = product.count;
		}

		product.total = product.count * product.price;

		// Updating new total
		selectedProductLS.total = product.price * product.count;

		// Set new products after increment item
		localStorage.setItem("product", JSON.stringify(productsFromLS));

		this.setState(() => {
			return {
				cart: [...tempCart],
			};
		}, this.setTotal);
	};

	removeItem = id => {
		const filter = this.state.cart.filter(item => item.id !== id);
		const product = this.getItem(id);
		const productsFromLS = JSON.parse(localStorage.getItem("product"));

		// Filtering all products that don't match current product
		const filteredLS = productsFromLS.filter(item => item.id !== product.id);

		// Set new products after remove single item
		localStorage.setItem("product", JSON.stringify(filteredLS));

		product.inCart = false;
		this.setState(() => {
			return {
				cart: filter,
			};
		}, this.setTotal);
	};

	clearCart = () => {
		// Reset products as default after cleared cart
		// this.state.products.map(product => {
		// 	product.inCart = false;
		// });
		this.setState(
			() => {
				return {
					cart: [],
				};
			},
			() => {
				this.setProducts(), this.setTotal();
			}
		);

		this.state.products.map(item => {
			item.inCart = false;
		});

		// Remove everything in ***LS 😂
		localStorage.clear();
	};

	setTotal = () => {
		let subTotal = 0;
		this.state.cart.map(item => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = Number(tempTax.toFixed(2));
		const total = subTotal + tax;

		localStorage.setItem("total", JSON.stringify({ subTotal, tax, total }));

		this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total,
			};
		});
	};

	setTotalLS = () => {
		const totalFromLS = JSON.parse(localStorage.getItem("total"));

		// Restore Total from LS
		if (totalFromLS !== null) {
			this.setState(() => {
				return {
					cartSubTotal: totalFromLS.subTotal,
					cartTax: totalFromLS.tax,
					cartTotal: totalFromLS.total,
				};
			});
		}
	};

	saveCartProductsLS = () => {
		const products = this.state.cart;
		localStorage.setItem("product", JSON.stringify(products));
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetails,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
