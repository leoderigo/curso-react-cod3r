import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'

import UserContext from '../context/UserContext'

export default ({ navigation, route }) => {
	const [user, setUser] = useState(route.params || { })
	const { dispatch } = useContext(UserContext)
	const saveUser = () => {
		dispatch({
			type: user.id ? 'update' : 'create',
			payload: user,
			stateName: 'users'
		})
		navigation.goBack()
	}

	return (
		<View style={styles.form}>
			<Text>Nome</Text>
			<TextInput
				style={styles.input}
				placeholder='Primeiro nome'
				value={user.name}
				onChangeText={name => setUser({ ...user, name })}
			/>
			<Text>Apelido</Text>
			<TextInput
				style={styles.input}
				placeholder='Nome de usuário'
				value={user.nickname}
				onChangeText={nickname => setUser({ ...user, nickname })}
			/>
			<Text>Avatar</Text>
			<TextInput
				style={styles.input}
				placeholder='URL da imagem'
				value={user.avatar}
				onChangeText={avatar => setUser({ ...user, avatar })}
			/>
			<Button title='Salvar' onPress={saveUser} />
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		padding: 12
	},
	input: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		height: 40,
		marginBottom: 10
	}
})
