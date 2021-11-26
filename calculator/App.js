import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import CalculatorButton from './src/components/CalculatorButton'
import Display from './src/components/Display'

export default () => {
	const [displayValue, setDisplayValue] = useState('0')
	const [operationValue, setOperationValue] = useState(0)
	const [operationLabel, setOperationLabel] = useState(null)
	const [clearNumbers, setClearNumbers] = useState(true)

	const addDigit = d => {
		if (displayValue.includes('.') && d === '.' && !clearNumbers) return
		if (displayValue === '0' || clearNumbers) {
			setDisplayValue(d)
			setClearNumbers(false)
		} else setDisplayValue(displayValue + d)
	}

	const removeDigit = () => displayValue.length === 1
		? setDisplayValue('0')
		: setDisplayValue(displayValue.substr(0, displayValue.length - 1))

	const clearDigits = () => {
		if (displayValue === '0') {
			setOperationValue(0)
			setOperationLabel(null)
		} else setDisplayValue('0')
	}

	const addOperation = op => {
		if (op === '=') {
			const result = calculate(operationLabel)
			setOperationLabel(null)
			setClearNumbers(true)
			setOperationValue(0)
			setDisplayValue(`${result}`)
			return
		}

		if (!operationLabel) {
			setOperationLabel(op)
			setOperationValue(+displayValue)
			setClearNumbers(true)
			return
		}

		const result = calculate(operationLabel)
		setOperationLabel(op)
		setOperationValue(result)
		setClearNumbers(true)
	}

	const calculate = op => {
		if (op === '+') return operationValue + (+displayValue)
		if (op === '-') return operationValue - (+displayValue)
		if (op === '*') return operationValue * (+displayValue)
		if (op === '/') return operationValue / (+displayValue)
		else return displayValue
	}

	return (
		<SafeAreaView style={styles.container}>
			<Display value={displayValue} lastResult={operationValue} operation={operationLabel} />
			<View style={styles.buttonsContainer}>
				<CalculatorButton onClick={clearDigits} double label='C' />
				<CalculatorButton onClick={removeDigit} label='<' />
				<CalculatorButton onClick={() => addOperation('/')} operation label='/' />
				<CalculatorButton onClick={() => addDigit('9')} label='9' />
				<CalculatorButton onClick={() => addDigit('8')} label='8' />
				<CalculatorButton onClick={() => addDigit('7')} label='7' />
				<CalculatorButton onClick={() => addOperation('*')} operation label='*' />
				<CalculatorButton onClick={() => addDigit('6')} label='6' />
				<CalculatorButton onClick={() => addDigit('5')} label='5' />
				<CalculatorButton onClick={() => addDigit('4')} label='4' />
				<CalculatorButton onClick={() => addOperation('-')} operation label='-' />
				<CalculatorButton onClick={() => addDigit('3')} label='3' />
				<CalculatorButton onClick={() => addDigit('2')} label='2' />
				<CalculatorButton onClick={() => addDigit('1')} label='1' />
				<CalculatorButton onClick={() => addOperation('+')} operation label='+' />
				<CalculatorButton onClick={() => addDigit('0')} label='0' />
				<CalculatorButton onClick={() => addDigit('.')} label='.' />
				<CalculatorButton onClick={() => addOperation('=')} double operation label='=' />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})
