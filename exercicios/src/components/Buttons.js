import React from 'react'
import { Button } from 'react-native'

export default () => {
	const btn1OnPress = () => console.warn('Botão 1 pressionado')
	return (
		<>
			<Button
				title="Botão 1"
				onPress={btn1OnPress}
			/>
			<Button
				title="Botão 2"
				onPress={function () {
					console.warn('Botão 2 pressionado')
				}}
			/>
			<Button
				title="Botão 3"
				onPress={() => console.warn('Botão 3 pressionado')}
			/>
		</>
	)
}
