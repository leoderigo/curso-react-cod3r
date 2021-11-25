import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default ({ min, max }) => {
	const random = Math.floor(Math.random() * (max - min + 1) + min)
	return (
		<Text style={styles.bigTxt}>
			O número gerado foi {random}!
		</Text>
	)
}
