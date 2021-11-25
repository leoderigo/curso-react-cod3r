import React from 'react'
import { Text } from 'react-native'
import If from './If'

import styles from './styles'

export default props => {
	const user = props.user || { }
	return (
		<>
			<If test={user && user.name && user.email}>
				<Text>Usuário Logado</Text>
				<Text style={styles.bigTxt}>
					Nome: {user.name}
				</Text>
				<Text style={styles.bigTxt}>
					Email: {user.email}
				</Text>
			</If>
		</>
	)
}
