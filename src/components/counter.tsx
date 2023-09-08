import styles from "./Counter.module.css";

interface CounterProps {
	title: string;
	counter: string | number;
}

export function Counter(props: CounterProps) {
	return (
		<div className={styles.component}>
			<span className={styles.title}>{props.title}:</span>
			<span className={styles.counter}>{props.counter}</span>
		</div>
	);
}
