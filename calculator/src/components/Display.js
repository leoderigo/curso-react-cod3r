import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => {
	return (
		<View style={styles.displayContainer}>
			<Text>
				{props.lastResult} {props.operation}
			</Text>
			<Text style={styles.displayValue}>
				{ props.value }
			</Text>
		</View>
	)
}

const styles= StyleSheet.create({
	displayContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.6)'
	},
	displayValue: {
		fontSize: 48,
		color: '#ffffff'
	}
})
