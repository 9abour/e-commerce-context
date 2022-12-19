const CartItem = (props, value) => {
	const { id, img, title, price, total, count } = props.product;
	return (
		<div className="cart-product" key={props.id}>
			<div className="image">
				<img src={img} alt="" />
			</div>
			<div className="title">
				<h4>{title}</h4>
			</div>
			<div className="price">
				<span>{price} $</span>
			</div>
			<div className="quantity">
				<span className="count-quantity">{count}</span>
				<div className="btns">
					<button
						className="increase"
						onClick={() => {
							props.value.increment(id);
						}}
					>
						+
					</button>
					<button
						className="decrease"
						onClick={() => {
							props.value.decrement(id);
						}}
					>
						-
					</button>
				</div>
			</div>
			<div className="total">
				<h5>total:</h5>&nbsp;&nbsp;
				<span>{total} $</span>
			</div>
			<div
				className="del"
				onClick={() => {
					props.value.removeItem(id);
				}}
			>
				<button>
					<svg width="25" height="25" viewBox="0 0 32 32">
						<path
							fill="#1c1f26"
							d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
export default CartItem;
