import React from 'react'
import { StyleSheet, View } from 'react-native'

import Square from './Square'

export default () => {
	return (
		<View style={styles.container}>
			<View style={styles.v0}></View>
			<View style={styles.v1}></View>
			<View style={styles.v2}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		width: 100,
		backgroundColor: '#000'
	},
	v0: {
		height: 300,
		backgroundColor: '#f00'
	},
	v1: {
		flexGrow: 9,
		backgroundColor: '#090'
	},
	v2: {
		flexGrow: 1,
		backgroundColor: '#00f'
	},
})
