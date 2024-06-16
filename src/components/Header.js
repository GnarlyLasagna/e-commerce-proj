// components/Header.js

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`${styles.header} ${styles.fixed}`}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="/" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/products" className={styles.navLink}>
							Products
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/about" className={styles.navLink}>
							About
						</Link>
					</li>
				</ul>
				<div className={styles.cartIcon}>
					<Link href="/cart">
						<FontAwesomeIcon icon={faShoppingCart} size="lg" />
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;


