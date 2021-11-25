import React, { useState } from 'react'
import { Button, Text } from 'react-native'

export default ({ start = 0, step = 1 }) => {
	const [value, setValue] = useState(start)
	const inc = () => setValue(value + step)
	const dec = () => setValue(value - step)

	return (
		<>
			<Text>{value}</Text>
			<Button title=' + ' onPress={inc} />
			<Button title=' - ' onPress={dec} />
		</>
	)
}
