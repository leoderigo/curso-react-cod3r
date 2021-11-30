import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import TelaD from '../screens/TelaD'

const Drawer = createDrawerNavigator()

export default () => (
	<Drawer.Navigator initialRouteName='TelaD'>
		<Drawer.Screen name='TelaA' component={TelaA} />
		<Drawer.Screen name='TelaB' component={TelaB} />
		<Drawer.Screen name='TelaC' component={TelaC} />
		<Drawer.Screen name='TelaD' component={TelaD} />
	</Drawer.Navigator>
)
