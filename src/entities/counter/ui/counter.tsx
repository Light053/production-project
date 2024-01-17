import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/button";
import { CounterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/get-counter-value/get-counter-value";

interface CounterProps {
}

export const Counter: FC<CounterProps> = (props) => {
	const { } = props

	const dispatch = useDispatch()
	const value = useSelector(getCounterValue)

	const increment = () => {
		dispatch(CounterActions.increment())
	}

	const decrement = () => {
		dispatch(CounterActions.decrement())
	}

	return (
		<div >
			<h1 data-testid='counter-value'>{value}</h1>

			<Button
				onClick={increment}
				theme={ButtonTheme.OUTLINE}
				data-testid="increment"
			>
				increment
			</Button>

			<Button
				onClick={decrement}
				theme={ButtonTheme.OUTLINE}
				data-testid="decrement">
				decrement
			</Button>
		</div>
	)
}