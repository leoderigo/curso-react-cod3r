import React, { Component } from 'react'
import { Alert, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-community/async-storage'

import img from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = {
	showDoneTasks: true,
	visibleTasks: [],
	tasks: []
}

export default class TaskList extends Component {

	state = {
		showAddTask: false,
	}

	// state = {
	// 	showDoneTasks: true,
	// 	showAddTask: false,
	// 	visibleTasks: [],
	// 	tasks: [
	// 		{
	// 			id: Math.random(),
	// 			description: 'Beber água',
	// 			estimatedAt: new Date().toISOString(),
	// 			doneAt: new Date().toISOString()
	// 		},
	// 		{
	// 			id: Math.random(),
	// 			description: 'Estudar',
	// 			estimatedAt: new Date().toISOString()
	// 		},
	// 	]
	// }

	componentDidMount = async () => {
		const state = JSON.parse(await AsyncStorage.getItem('state'))
		this.setState({ ...this.state, ...(state || initialState) }, this.filterTasks)
	}

	toggleTask = taskId => {
		const tasks = [...this.state.tasks]
		tasks.forEach(task => taskId !== task.id || (task.doneAt = task.doneAt
				? null
				: new Date().toISOString()
			)
		)
		this.setState({ tasks }, this.filterTasks)
	}

	filterTasks = () => {
		const visibleTasks = this.state.showDoneTasks
			? this.state.tasks
			: this.state.tasks.filter(t => !t.doneAt)
		this.setState({ visibleTasks })
		AsyncStorage.setItem('state', JSON.stringify(this.state))
	}

	showDoneTasks = () => {
		this.setState({
			showDoneTasks: !this.state.showDoneTasks
		}, this.filterTasks)
	}

	onCancelAddTask = () => this.setState({ showAddTask: false })

	onSaveAddTask = task => {
		if (task.description?.trim()) {
			this.setState({
				tasks: [...this.state.tasks, { ...task, id: Math.random() }],
				showAddTask: false
			}, this.filterTasks)

			return
		}

		Alert.alert('Ops!', 'Adicione uma descrição')
	}

	onDeleteTask = taskId => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== taskId)
		})
		this.filterTasks()
	}

	render() {
		const today = moment().locale('pt-br').format('dddd, D [de] MMMM')
		const todayFormatted = today[0].toUpperCase() + today.substr(1)
		return (
			<SafeAreaView style={styles.container}>
				<AddTask
					isVisible={this.state.showAddTask}
					onCancel={this.onCancelAddTask}
					onSave={this.onSaveAddTask}
				/>
				<ImageBackground source={img} style={styles.img}>
					<View style={styles.eyeBar}>
						<Icon
							onPress={this.showDoneTasks}
							name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
							size={25}
							color='white'
						/>
					</View>
					<View style={styles.dateBar}>
						<Text style={styles.periodLabel}>Hoje</Text>
						<Text style={styles.dateLabel}>{ todayFormatted }</Text>
					</View>
				</ImageBackground>
				<View style={styles.taskList}>
					<FlatList
						data={this.state.visibleTasks}
						keyExtractor={i => i.id}
						renderItem={({ item: task }) => (
							<Task
								{...task}
								toggleTask={this.toggleTask}
								onDelete={this.onDeleteTask}
							/>
						)}
					/>
				</View>
				<TouchableOpacity
					style={styles.addTaskButton}
					activeOpacity={0.7}
					onPress={() => this.setState({ showAddTask: true })}
				>
					<Icon name='plus' size={25} color='#fff' />
				</TouchableOpacity>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	img: {
		flex: 3,
		justifyContent: 'flex-end',
		padding: 15
	},
	taskList: {
		flex: 7
	},
	eyeBar: {
		flexDirection: 'row',
		height: 30,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	dateBar: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	periodLabel: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		fontSize: 50,
	},
	dateLabel: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.secondary,
		fontSize: 20,
	},
	addTaskButton: {
		position: 'absolute',
		height: 60,
		width: 60,
		bottom: 15,
		right: 15,
		backgroundColor: commonStyles.colors.today,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
