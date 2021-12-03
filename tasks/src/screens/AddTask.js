import React, { useEffect, useState } from 'react'
import {
	Modal,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

export default props => {
	const [description, setDescription] = useState(null)
	const [estimatedAt, setEstimatedAt] = useState(new Date())
	const [showDatePicker, setShowDatePicker] = useState(false)

	const saveTask = () => {
		props.onSave({
			description, estimatedAt: estimatedAt?.toISOString()
		})
		setDescription(null)
		setEstimatedAt(new Date())
	}

	const getDatePicker = () => {
		let datePicker = (
			<DateTimePicker
				value={estimatedAt}
				is24Hour

				mode='date'
				onChange={(event, date) => {
					setEstimatedAt(date || estimatedAt || new Date())
					setShowDatePicker(false)
				}}
			/>
		)

		const dateString = moment(estimatedAt).format('dddd, D [de] MMMM')

		if (Platform.OS === 'android') {
			datePicker = (
				<View>
					<TouchableOpacity
						onPress={() => setShowDatePicker(true)}
					>
						<Text style={styles.dateString}>
							{ dateString[0].toUpperCase() + dateString.substr(1) }
						</Text>
					</TouchableOpacity>
					{ showDatePicker && datePicker }
				</View>
			)
		}

		return datePicker
	}

	return (
		<Modal
			transparent
			visible={props.isVisible}
			onRequestClose={props.onCancel}
			animationType='slide'
		>
			<TouchableWithoutFeedback onPress={props.onCancel}>
				<View style={styles.background} />
			</TouchableWithoutFeedback>
			<View style={styles.container}>
				<Text style={styles.label}>Nova Tarefa</Text>
				<TextInput
					style={styles.descInput}
					placeholder='Insira a descrição'
					value={description}
					onChangeText={text => setDescription(text)}
				/>
				{ getDatePicker() }
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={[styles.buttons, styles.buttonCancel]}
						onPress={props.onCancel}
					>
						<Text style={styles.buttonLabel}>
							Cancelar
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.buttons, styles.buttonSave]}
						onPress={saveTask}
					>
						<Text style={[styles.buttonLabel, { color: '#fff' }]}>
							Salvar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		flex: 1
	},
	container: {
		backgroundColor: '#fff',
	},
	label: {
		fontFamily: commonStyles.fontFamily,
		backgroundColor: commonStyles.colors.today,
		color: commonStyles.colors.secondary,
		fontSize: 20,
		padding: 15,
		textAlign: 'center'
	},
	descInput: {
		margin: 15,
		borderBottomColor: '#e3e3e3',
		borderBottomWidth: 1,
	},
	buttonsContainer: {
		flexDirection: 'row',
		// marginBottom: 15
	},
	buttons: {
		padding: 15,
		paddingBottom: 20,
		flex: 1,
		alignItems: 'center',
	},
	buttonCancel: {
		backgroundColor: commonStyles.colors.today
	},
	buttonSave: {
		backgroundColor: '#2ed573'
		// backgroundColor: commonStyles.colors.today
	},
	buttonLabel: {
		color: '#fff',
		textTransform: 'uppercase',
		paddingTop: 5
	},
	dateString: {
		fontFamily: commonStyles.fontFamily,
		fontSize: 20,
		padding: 15
	}
})
