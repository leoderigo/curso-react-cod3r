import React from 'react'
import { Text } from 'react-native'

import styles from '../styles'

export default ({ a, b }) => {
	return (
		<>
			<Text style={styles.bigTxt}>{a}</Text>
			<Text style={styles.bigTxt}>{b}</Text>
		</>
	)
}
