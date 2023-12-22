import { FC, useState } from "react";
import styles from './counter-page.module.scss'

const Counter: FC = () => {
	const [count, setCount] = useState(0);

	const inc = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button className={styles.button} onClick={inc}>increment</button>
		</div>
	)
}

export default Counter
