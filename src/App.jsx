import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";
import Modal from "./components/Modal/Modal";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/details" element={<Details />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Modal />
		</>
	);
}

export default App;
