import React from 'react'
import { StyleSheet, View } from 'react-native'

import Square from './Square'

export default () => {
	return (
		<View style={styles.container}>
			<Square color='#ff7200' side={20} />
			<Square color='#00bfac' side={30} />
			<Square color='#f00' side={40} />
			<Square color='#090' side={50} />
			<Square color='#00f' side={60} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 350,
		width: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'baseline',
		backgroundColor: 'black'
	}
})
