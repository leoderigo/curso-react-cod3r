import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Stack from './Stack'
import Tab from './Tab'
// import Drawer from './Drawer'

export default () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<NavigationContainer>
				{/* <Drawer /> */}
				<Tab />
				{/* <Stack /> */}
			</NavigationContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	}
})
