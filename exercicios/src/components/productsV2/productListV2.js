import React from 'react'
import { FlatList, Text } from 'react-native'

import styles from '../styles'
import products from './products'

export default () => {
	const generateList = ({ item }) => (
		<Text>{item.name} custa R$ {item.price}</Text>
	)
	return (
		<>
			<Text style={styles.bigTxt}>
				Lista de Produtos
			</Text>
			<FlatList
				data={products}
				keyExtractor={i => i.id}
				renderItem={generateList}
			/>
		</>
	)
}
