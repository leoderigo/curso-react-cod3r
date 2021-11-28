import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import LevelSelectionButton from './LevelSelection/LevelSelectionButton'

export default props => {
	return (
		<Modal
			visible={props.visible}
			onTouchCancel={props.onCancel}
		>
			<View style={styles.container}>
				<Text style={styles.label}>
					Escolha o nível
				</Text>
				<LevelSelectionButton onClick={() => props.onLevelSelection(0.1)} label='Fácil' easy />
				<LevelSelectionButton onClick={() => props.onLevelSelection(0.2)} label='Médio' medium />
				<LevelSelectionButton onClick={() => props.onLevelSelection(0.3)} label='Difícil' hard />
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	label: {
		fontSize: 24
	}
})
