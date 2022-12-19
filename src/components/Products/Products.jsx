import "./Products.scss";
import { ProductConsumer } from "../../context";
import Product from "./Product";

const Products = () => {
	return (
		<>
			<div className="container">
				<div className="main-products">
					<ProductConsumer>
						{value => {
							return value.products.map(product => {
								return <Product key={product.id} products={product} />;
							});
						}}
					</ProductConsumer>
				</div>
			</div>
		</>
	);
};
export default Products;
