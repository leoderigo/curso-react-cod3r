import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import TelaA from './screens/TelaA'
import TelaB from './screens/TelaB'
import TelaC from './screens/TelaC'

export default () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<TelaA />
			<TelaB />
			<TelaC />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	}
})
