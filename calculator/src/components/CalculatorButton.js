import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'



export default props => {
	const stylesButton = [styles.button]
	if (props.double) stylesButton.push(styles.doubleButton)
	if (props.operation) stylesButton.push(styles.operationButton)

	return (
		<TouchableHighlight onPress={props.onClick}>
			<Text style={stylesButton}>
				{ props.label }
			</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		height: Dimensions.get('window').width / 4,
		width: Dimensions.get('window').width / 4,
		backgroundColor: '#f0f0f0',
		fontSize: 32,
		textAlign: 'center',
		textAlignVertical: 'center',
		borderWidth: 1,
		borderColor: '#fff'
	},
	doubleButton: {
		width: Dimensions.get('window').width / 2
	},
	operationButton: {
		backgroundColor: '#ff0000',
		color: '#ffffff'
	}
})
