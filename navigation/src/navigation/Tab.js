import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'

const Tab = createBottomTabNavigator()

export default () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'TelaA')
					iconName = focused
						? 'information-circle'
						: 'information-circle-outline'
				else if (route.name === 'TelaB')
					iconName = focused
						? 'information-circle'
						: 'information-circle-outline';
				else if (route.name === 'TelaC')
					iconName = focused ? 'information-circle-outline' : 'list';

				return <Ionicons name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: 'red',
			tabBarInactiveTintColor: 'blue',
			tabBarShowLabel: false
		})}
		initialRouteName='TelaB'
	>
		<Tab.Screen name='TelaA'component={TelaA} />
		<Tab.Screen name='TelaB' component={TelaB} />
		<Tab.Screen name='TelaC' component={TelaC} />
	</Tab.Navigator>
)
