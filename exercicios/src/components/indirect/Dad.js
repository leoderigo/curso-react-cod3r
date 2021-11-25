import React, { useState } from 'react'
import { Text } from 'react-native'

import styles from '../styles'
import Daugther from './Daugther'

export default () => {
	const [message, setMessage] = useState('')
	const [number, setNumber] = useState(0)

	const insertValues = (value, text) => {
		setNumber(value)
		setMessage(text)
	}

	return (
		<>
			<Text style={styles.bigTxt}>{ message + number }</Text>
			<Daugther
				max={28}
				min={18}
				eventEmitter={insertValues}
			/>
		</>
	)
}
