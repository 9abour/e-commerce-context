import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

const Product = props => {
	const { id, title, img, price, inCart } = props.products;
	return (
		<ProductConsumer>
			{value => (
				<div className="product">
					<Link to="/products/details">
						<div
							className="image f-c"
							onClick={() => {
								value.handleDetail(id);
							}}
						>
							<img src={img} alt="" />
						</div>
					</Link>
					<div className="info ">
						<h3 className="title">{title}</h3>
						<div className="price-container">
							Price: <span className="price">{price}</span>$
						</div>
						<div
							className="add-to-cart main-btn btn-primary"
							disabled={inCart ? true : false}
							// Add to cart event
							onClick={() => {
								!inCart && value.addToCart(id);
								!inCart && value.openModal(id);
							}}
						>
							{inCart ? (
								<svg width="32" height="32" viewBox="0 0 16 16">
									<path
										fill="currentColor"
										d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
									/>
								</svg>
							) : (
								<svg width="32" height="32" viewBox="0 0 16 16">
									<path
										fill="currentColor"
										d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
									/>
								</svg>
							)}
						</div>
					</div>
				</div>
			)}
		</ProductConsumer>
	);
};

export default Product;
