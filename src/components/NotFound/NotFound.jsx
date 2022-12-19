import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="overlay">
				<div className="title">
					<h1>page not found</h1>
				</div>
				<div className="error">
					<span>404</span>
				</div>
				<div className="btns">
					<Link to="/">
						<button className="main-btn btn-primary">Home</button>
					</Link>
					<Link to="/cart">
						<button className="main-btn btn-success">Cart</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NotFound;
