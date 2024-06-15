// components/ProductGrid.js
import React from 'react';
import { products } from '../data/products';
import styles from './ProductGrid.module.css'; // Import CSS module

const ProductGrid = () => {
	return (
		<div>
			<div className={styles.productGrid}>
				{products.map((product) => (
					<div key={product.id} className={styles.productCard}>
						<img src={product.image} alt={product.name} />
						<div className={styles.productDetails}>
							<h3>{product.name}</h3>
							<p>${product.price.toFixed(2)}</p>
							<button>Add to Cart</button>
						</div>
					</div>
				))}
			</div>
			<div className={styles.viewAllButton}>
				<button>View All</button>
			</div>
		</div>
	);
};


export default ProductGrid;

