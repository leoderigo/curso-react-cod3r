import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Flag from './Flag'

export default props => {
	return (
		<View style={styles.container}>
			<View style={styles.difficult}>
				<TouchableOpacity
					onPress={props.onLevelClick}
					style={styles.flagButton}
				>
					<Flag bigger />
				</TouchableOpacity>
				<Text style={styles.remainingFlags}>
					{ props.flagsAmount }
				</Text>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.newGame}
					onPress={props.onNewGame}
				>
					<Text>Novo jogo</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	difficult: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	flagButton: {
		backgroundColor: '#999',
		height: 40,
		width: 75,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: 28,
		paddingRight: 30
	},
	buttons: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	remainingFlags: {
		fontSize: 32
	},
	newGame: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		backgroundColor: '#eee'
	}
})
