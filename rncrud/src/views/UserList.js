import React, { useContext } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'

import UserContext from '../context/UserContext'

export default ({ navigation }) => {
	const { state, dispatch } = useContext(UserContext)
	const onDelete = user => {
		Alert.alert('Excluir', 'Deseja apagar esse usuário?', [
			{
				text: 'Sim',
				onPress: () => dispatch({
					type: 'delete',
					payload: user,
					stateName: 'users'
				})
			},
			{
				text: 'Não'
			}
		])
	}
	const renderUsers = ({ item: user }) => (
		<ListItem
			key={user.id}
			onPress={() => navigation.navigate('UserForm', user)}
		>
			<Avatar source={{ uri: user.avatar }} />
			<ListItem.Content>
				<ListItem.Title>{ user.nickname }</ListItem.Title>
				<ListItem.Subtitle>{ user.name }</ListItem.Subtitle>
			</ListItem.Content>
			<Icon
				name='edit'
				size={25}
				color='orange'
				onPress={() => navigation.navigate('UserForm', user)}
			/>
			<Icon
				name='delete'
				size={25}
				color='red'
				onPress={() => onDelete(user)}
			/>
		</ListItem>
	)
	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={state.users}
				renderItem={renderUsers}
			/>
		</View>
	)
}
