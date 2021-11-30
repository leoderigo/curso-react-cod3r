import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default props => {
	return (
		<View style={[styles.container, { backgroundColor: props.bgColor || '#000' }]}>
			<Text style={[styles.label, { color: props.color || '#fff' }]}>
				{ props.children }
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	label: {
		fontSize: 32
	}
})
