import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";

export function Header() {
	return (
		<div className={styles.component}>
			<img src={Logo} alt="" />
		</div>
	);
}
