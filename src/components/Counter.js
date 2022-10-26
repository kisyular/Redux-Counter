import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	reset,
	incrementByAmount,
} from '../features/counter/counterSlice'

const Counter = () => {
	const [incrementAmount, setIncrementAmount] = useState(0)
	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()
	const addNumber = Number(incrementAmount) || 0

	const resetAll = () => {
		dispatch(reset())
		setIncrementAmount(0)
	}
	return (
		<section>
			<h1>Counter</h1>
			<p>Count: {count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>

			<input
				type='number'
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>
			<button onClick={() => dispatch(incrementByAmount(addNumber))}>
				Increment by amount
			</button>

			<button onClick={() => resetAll()}>Reset</button>
		</section>
	)
}

export default Counter
