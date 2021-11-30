import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import StepStack from '../components/StepStack'

const Stack = createNativeStackNavigator()

export default () => (
	<Stack.Navigator initialRouteName='TelaA'>
		<Stack.Screen
			name='TelaA'
			options={{
				headerShown: false
			}}
		>
			{props => (
				<StepStack {...props} next='TelaB'>
					<TelaA />
				</StepStack>
			)}
		</Stack.Screen>
		<Stack.Screen name='TelaB'>
			{props => (
				<StepStack
					{...props}
					next='TelaC'
					back
					nextParams={{ number: Math.random() * 100 }}
				>
					<TelaB />
				</StepStack>
			)}
		</Stack.Screen>
		<Stack.Screen name='TelaC'>
			{props => (
				<StepStack
					{...props}
					next='TelaC'
					back
					nextParams={{ number: Math.random() * 100 }}
				>
					<TelaC {...props} />
				</StepStack>
			)}
		</Stack.Screen>
	</Stack.Navigator>
)
