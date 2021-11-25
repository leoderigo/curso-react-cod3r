import React from 'react'
import { Text } from 'react-native'

import styles from '../styles'
import products from './products'

export default () => {
	const generateList = () => products.map(p => (
		<Text key={p.id}>{p.name} custa R$ {p.price}</Text>
	))
	return (
		<>
			<Text style={styles.bigTxt}>
				Lista de Produtos
			</Text>
			{generateList()}
		</>
	)
}
