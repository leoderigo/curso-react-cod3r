import React, { Component } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import Number from './Number'

export default class Mega extends Component {

	state = {
		size: this.props.size || 6,
		values: []
	}

	changeSize = (length) => this.setState({ size: length ? +length : '' })

	generateNumbers = () => {
		let numbers = []
		for (let i = 0; i < this.state.size; i++)
			numbers.push(this.refreshNumber(numbers))
		this.setState({ values: numbers.sort((a, b) => a - b) })
	}

	refreshNumber = arr => {
		const value = Math.floor(Math.random() * (60) + 1)
		return arr.includes(value) ? this.refreshNumber(arr) : value 
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>
					Gerador de Mega Sena ({this.state.size})
				</Text>
				<TextInput
					style={styles.sizeInput}
					keyboardType='numeric'
					value={`${this.state.size}`}
					onChangeText={this.changeSize}
					placeholder='Quantidade de números'
				/>
				<Button title='Gerar' onPress={this.generateNumbers} />
				<FlatList
					// style={}
					keyExtractor={(value, i) => i}
					data={this.state.values}
					renderItem={({ item }) => <Number value={item} />}
					// numColumns={3}
					contentContainerStyle={styles.list}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24
	},
	sizeInput: {
		textAlign: 'center'
	},
	list: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: 'red',
		flexWrap: 'wrap'
	}
})
