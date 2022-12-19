const Total = props => {
	const { cartSubTotal, cartTax, cartTotal } = props.value;
	return (
		<div className="total-container">
			<div className="cart-total">
				<div className="sub-total">
					<h4>subtotal :</h4>
					<span>{cartSubTotal}$</span>
				</div>
				<div className="tax">
					<h4>tax :</h4>
					<span>{cartTax}$</span>
				</div>
				<div className="total">
					<h4>total :</h4>
					<span>{cartTotal}$</span>
				</div>
			</div>
		</div>
	);
};

export default Total;
