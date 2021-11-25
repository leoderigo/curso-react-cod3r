import React from 'react'
import Son from './Son'

export default () => {
	const x = 19
	const y = 20
	return (
		<>
			<Son a={x} b={y} />
			<Son a={x + 60} b={y + 60} />
		</>
	)
}
