import React from 'react'
import { StyleSheet, View } from 'react-native'

import Field from './Field'

export default props => (
	<View style={styles.container}>
		{
			props.board.map((row, r) => (
				<View style={{ flexDirection: 'row' }} key={r}>
					{
						row.map((field, c) => (
							<Field
								{...field}
								onClick={() => props.onOpenField(r, c)}
								onSelect={() => props.onFlagField(r, c)}
								key={c}
							/>
						))
					}
				</View>
			))
		}
	</View>
)

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee'
	}
})
