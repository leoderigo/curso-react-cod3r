import React from 'react'
import { Button } from 'react-native'

export default ({ max, min, eventEmitter }) => {
	const generateNumber = (start, end) => Math.floor(Math.random() * (end - start + 1) + start)

	return (
		<Button
			title='Executar'
			onPress={() => eventEmitter(generateNumber(min, max), 'Valor gerado: ')}
		/>
	)
}
