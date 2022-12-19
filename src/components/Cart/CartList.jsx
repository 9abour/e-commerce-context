import CartItem from "./CartItem";

const CartList = ({ value }) => {
	const { cart } = value;
	return (
		<>
			{cart.map(product => {
				return <CartItem product={product} value={value} key={product.id} />;
			})}
			<div className="clear-cart">
				<button
					className="main-btn btn-danger"
					onClick={() => {
						value.clearCart();
					}}
				>
					Clear Cart
				</button>
			</div>
		</>
	);
};
export default CartList;
