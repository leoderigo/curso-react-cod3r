import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements'

import UserForm from './views/UserForm'
import UserList from './views/UserList'
import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator()

export default () => {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={screenOptions}
					initialRouteName='UserList'
				>
					<Stack.Screen name='UserForm' component={UserForm} />
					<Stack.Screen
						name='UserList'
						component={UserList}
						options={({ navigation }) => ({
							title: 'Lista de Usuários',
							headerRight: () => (
								<Button
									onPress={() => navigation.navigate('UserForm')}
									type='clear'
									icon={<Icon name='add' size={25} color='white' />}
								/>
							)
						})}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	)
}

const screenOptions = {
	headerStyle: {
		backgroundColor: '#f4511e'
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold'
	}
}
