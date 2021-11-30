import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default props => {
	const onClickNext = () => props.navigation.push(props.next, props.nextParams)
	const onClickBack = () => props.navigation.goBack()

	return (
		<View style={styles.container}>
			<View>
				{
					props.back
					? <Button title="Voltar" onPress={onClickBack} />
					: false
				}
				{
					props.next
					? <Button title="Avançar" onPress={onClickNext} />
					: false
				}
			</View>
			<View style={styles.childrenContainer}>
				{ props.children }
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	childrenContainer: {
		flex: 1
	}
})
