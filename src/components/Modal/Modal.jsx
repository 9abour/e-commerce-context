import "./Modal.scss";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

const Modal = () => {
	return (
		<>
			<ProductConsumer>
				{value => {
					const { title, img, price, company } = value.detailProduct;
					const { modalOpen, closeModal } = value;
					if (!modalOpen) {
						return null;
					} else {
						return (
							<div className="modal-container">
								<div className="product-modal">
									<div className="product">
										<div className="msg">
											<h4>Item added to cart</h4>
											<div className="icon">
												<svg width="32" height="32" viewBox="0 0 512 512">
													<path
														fill="currentColor"
														d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-16.79 192.47l51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06Zm-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62Zm176.8-128.79l-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z"
													/>
												</svg>
											</div>
										</div>
										<div className="image">
											<img src={img} alt="" />
										</div>
										<div className="info">
											<div className="model">
												<h4>{title}</h4>
											</div>
											<div className="maker">
												<h4>{company}</h4>
											</div>
											<div className="price">
												Price: <span>{price}$</span>
											</div>
											<div className="btns">
												<Link to={"/"}>
													<button
														type="button"
														className="main-btn btn-primary back-btn"
														onClick={() => {
															value.closeModal();
														}}
													>
														Continue shopping
													</button>
												</Link>
												<Link to="/cart">
													<button
														type="button"
														className="main-btn btn-success toCart-btn"
														onClick={() => {
															value.closeModal();
														}}
													>
														Go to cart
													</button>
												</Link>
												<button
													className="close-modal-btn main-btn btn-danger"
													onClick={() => {
														value.closeModal();
													}}
												>
													<svg width="32" height="32" viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				}}
			</ProductConsumer>
		</>
	);
};

export default Modal;
