import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({ value }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>
				{ value }
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: '#000'
	},
	number: {
		fontSize: 24,
		color: '#fff'
	}
})
