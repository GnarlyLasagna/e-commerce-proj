
// components/Header.js
import Link from 'next/link';
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
						<Link href="/about" className={styles.navLink}>
							About
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/contact" className={styles.navLink}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

