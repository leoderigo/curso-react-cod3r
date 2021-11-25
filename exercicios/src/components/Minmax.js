import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default props => (
	<Text style={styles.bigTxt}>
		O valor {props.max} é maior que o valor {props.min}!
	</Text>
)
