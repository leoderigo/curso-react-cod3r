import  React from 'react'
import { StyleSheet, View } from 'react-native'

export default () => {
	return (
		<View style={styles.container}>
			<View style={styles.core} />
			<View style={styles.line} />
			<View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
			<View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
			<View style={[styles.line, { transform: [{ rotate: '225deg' }] }]} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	core: {
		height: 14,
		width: 14,
		borderRadius: 10,
		backgroundColor: '#000',
	},
	line: {
		position: 'absolute',
		height: 3,
		width: 20,
		borderRadius: 3,
		backgroundColor: '#000'
	}
})
