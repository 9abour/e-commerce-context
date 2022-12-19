import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar-container">
				<div className="left-side">
					<div className="logo">
						<Link to="/">
							<svg width="45" height="45" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M21.025 11.05V19q0 .825-.587 1.413q-.588.587-1.413.587h-14q-.825 0-1.412-.587q-.588-.588-.588-1.413v-7.95q-.575-.525-.887-1.35q-.313-.825-.013-1.8l1.05-3.4q.2-.65.713-1.075Q4.4 3 5.075 3h13.9q.675 0 1.175.412q.5.413.725 1.088l1.05 3.4q.3.975-.012 1.775q-.313.8-.888 1.375Zm-6.8-1.05q.675 0 1.025-.463q.35-.462.275-1.037l-.55-3.5h-1.95v3.7q0 .525.35.913q.35.387.85.387Zm-4.5 0q.575 0 .938-.387q.362-.388.362-.913V5h-1.95l-.55 3.5q-.1.6.263 1.05q.362.45.937.45Zm-4.45 0q.45 0 .787-.325q.338-.325.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075Q4.55 10 5.275 10Zm13.5 0q.725 0 1.05-.575q.325-.575.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825q.337.325.787.325Z"
								/>
							</svg>
						</Link>
					</div>
					<div className="products">
						<Link to="/products">Products</Link>
					</div>
				</div>
				<div className="cart ">
					<Link to="/cart">
						<div className="cart-icon main-btn btn-success">
							<svg width="28" height="28" viewBox="0 0 16 16">
								<path
									fill="#39e58c"
									d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
								/>
							</svg>
						</div>
					</Link>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
