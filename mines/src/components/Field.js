import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import params from '../params'
import Flag from './Flag'
import Mine from './Mine'

export default props => {
	const  { mined, opened, nearMines, exploded, flagged } = props
	const stylesField = [styles.field]

	if (opened) stylesField.push(styles.opened)
	if (exploded) stylesField.push(styles.exploded)
	if (flagged) stylesField.push(styles.flagged)
	if (!opened) stylesField.push(styles.regular)

	let color

	if (nearMines > 0) {
		if (nearMines === 1) color = '#2a28d7'
		if (nearMines === 2) color = '#2b520f'
		if (nearMines > 2 && nearMines < 6) color = '#f9060a'
		if (nearMines >= 6) color = '#f221a9'
	}

	return (
		<TouchableWithoutFeedback onPress={props.onClick} onLongPress={props.onSelect}>
			<View style={stylesField}>
				{
					opened && !mined && nearMines > 0
					? <Text style={[styles.label, { color }]}>{ nearMines }</Text>
					: (
						opened && mined
							? <Mine />
							: (!opened && flagged ? <Flag /> : false)
					)
				}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	field: {
		height: params.blockSize,
		width: params.blockSize,
		borderWidth: params.borderSize
	},
	regular: {
		backgroundColor: '#999',
		borderLeftColor: '#ccc',
		borderTopColor: '#ccc',
		borderRightColor: '#333',
		borderBottomColor: '#333'
	},
	opened: {
		backgroundColor: '#999',
		borderColor: '#777',
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		fontSize: params.fontSize,
		fontWeight: 'bold',
	},
	exploded: {
		backgroundColor: '#ff0000',
		borderColor: '#ff0000'
	},
})
