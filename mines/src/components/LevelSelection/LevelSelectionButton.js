import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default props => {
	const stylesButton = [styles.button]
	if (props.easy) stylesButton.push(styles.easy)
	if (props.medium) stylesButton.push(styles.medium)
	if (props.hard) stylesButton.push(styles.hard)

	return (
		<TouchableOpacity onPress={props.onClick} style={[stylesButton]}>
			<Text style={styles.label}>
				{ props.label }
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 300,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	easy: {
		backgroundColor: '#009900'
	},
	medium: {
		backgroundColor: '#999900'
	},
	hard: {
		backgroundColor: '#990000'
	},
	label: {
		fontSize: 28
	}
})
