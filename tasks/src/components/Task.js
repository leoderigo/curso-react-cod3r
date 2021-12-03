import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

export default props => {
	const showedDate = moment(props.doneAt || props.estimatedAt)
		.locale('pt-bt')
		.format('dddd, D [de] MMMM')
	const formattedDate = showedDate[0].toUpperCase() + showedDate.substr(1)
	const renderRightActions = () => (
		<TouchableOpacity onPress={() => props.onDelete(props.id)} style={styles.rightButton}>
			<Icon name='trash-alt' size={20} color='#fff' />
		</TouchableOpacity>
	)
	const renderLeftActions = () => (
		<View style={styles.leftContainer}>
			<Icon name='trash-alt' size={25} color='#fff' />
			<Text style={styles.leftContainerText}>
				Excluir
			</Text>
		</View>
	)

	return (
		<Swipeable
			renderRightActions={renderRightActions}
			renderLeftActions={renderLeftActions}
			onSwipeableLeftOpen={() => props.onDelete(props.id)}
		>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)} >
					<View style={styles.checkContainer}>
						{ getCheck(props.doneAt, props.estimatedAt) }
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.labelContainer}>
					<Text style={[
						styles.labelDesc, props.doneAt ? { textDecorationLine: 'line-through' } : null
					]}>
						{ props.description }
					</Text>
					<Text>
						{ formattedDate }
					</Text>
				</View>
			</View>
		</Swipeable>
	)
}

const getCheck = (done) => done
	? (
		<View style={styles.checked}>
			<Icon name='check' size={20} color='white' />
		</View>
	)
	: (
		<View style={styles.pendding}></View>
	)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		alignItems: 'center',
		paddingVertical: 10,
		paddingRight: 5,
		backgroundColor: '#fff'
	},
	checkContainer: {
		flex: 1,
		alignItems: 'center'
	},
	labelContainer: {
		flex: 4
	},
	checked: {
		height: 25,
		width: 25,
		borderRadius: 25,
		backgroundColor: '#2ed573',
		alignItems: 'center',
		justifyContent: 'center'
	},
	labelDesc: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.taskText,
		fontSize: 15
	},
	pendding: {
		height: 25,
		width: 25,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#aaa'
	},
	rightButton: {
		backgroundColor: commonStyles.colors.today,
		paddingHorizontal: 20,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	leftContainer: {
		flex: 1,
		paddingLeft: 15,
		backgroundColor: commonStyles.colors.today,
		flexDirection: 'row',
		alignItems: 'center'
	},
	leftContainerText: {
		fontFamily: commonStyles.fontFamily,
		marginLeft: 15,
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 15
	}
})
