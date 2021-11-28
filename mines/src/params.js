import { Dimensions } from 'react-native'

const params = {
	header: 0.15,
	difficult: 0.1,
	blockSize: 30,
	borderSize: 5,
	fontSize: 15,
	getColumnsAmout() {
		const width = Dimensions.get('window').width
		return Math.floor(width / this.blockSize)
	},
	getRowsAmount() {
		const height = Dimensions.get('window').height
		return Math.floor(height * (1 - this.header) / this.blockSize)
	}
}

export default params
