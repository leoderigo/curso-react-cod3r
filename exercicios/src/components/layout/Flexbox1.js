import React from 'react'
import { StyleSheet, View } from 'react-native'

import Square from './Square'

export default () => {
	return (
		<View style={styles.container}>
			<Square color='#ff7200' />
			<Square color='#00bfac' />
			<Square color='#f00' />
			<Square color='#090' />
			<Square color='#00f' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'space-between',
		backgroundColor: 'black'
	}
})
