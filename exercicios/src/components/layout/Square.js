import React from 'react'
import { View } from 'react-native'

export default props => {
	const side = props.side || 50
	return (
		<View style={{
			height: side,
			width: side,
			backgroundColor: props.color || '#000'
		}}>
			
		</View>
	)
}
