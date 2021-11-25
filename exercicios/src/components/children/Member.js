import React from 'react'
import { Text } from 'react-native'

import styles from '../styles'

export default props => {
	// console.warn(props.name)
	const name = props.name.charAt(0).toUpperCase() + props.name.slice(1)
	const lastName = props.lastName.charAt(0).toUpperCase() + props.lastName.slice(1)
	return (
		<Text style={styles.bigTxt}>
			{`${name} ${lastName}`}
		</Text>
	)
}
