import { Link } from "react-router-dom";
import "./Details.scss";
import { ProductConsumer } from "../../context";

const Details = () => {
	return (
		<>
			<ProductConsumer>
				{value => {
					const { id, title, img, price, company, info, inCart } =
						value.detailProduct;
					return (
						<div className="container">
							<div className="product-details">
								<div className="product f-c">
									<div className="image">
										<img src={img} alt="" />
									</div>
									<div className="info">
										<div className="model">
											Model: <h4>{title}</h4>
										</div>
										<div className="maker">
											Made by: <h4>{company}</h4>
										</div>
										<div className="price">
											Price: <span>{price}$</span>
										</div>
										<div className="description">
											Info:
											<p>{info}</p>
										</div>
										<div className="btns">
											<Link to={"/"}>
												<button
													type="button"
													className="btn-primary main-btn back-btn"
												>
													Back to products
												</button>
											</Link>
											<button
												type="button"
												className="btn-success tocart-btn main-btn"
												// Add to cart event
												onClick={() => {
													!inCart && value.addToCart(id);
													!inCart && value.openModal(id);
												}}
											>
												{inCart ? "In cart" : "Add to cart"}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		</>
	);
};

export default Details;
