import "./Cart.scss";
import CartList from "./CartList";
import { ProductConsumer } from "../../context";
import Total from "./Total";

const Cart = () => {
	return (
		<>
			<div className="container">
				<div className="cart-container">
					<ProductConsumer>
						{value => {
							const { cart } = value;
							if (cart.length > 0) {
								return (
									<>
										<CartList value={value} />
										<Total value={value} />
									</>
								);
							} else {
								return <h1 className="empty-cart">Your cart is empty</h1>;
							}
						}}
					</ProductConsumer>
				</div>
			</div>
		</>
	);
};

export default Cart;
