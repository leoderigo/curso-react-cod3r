import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default () => <Text style={styles.bigTxt}>Comp Oficial</Text>

const Comp1 = () => <Text style={styles.bigTxt}>Comp 01</Text>
const Comp2 = () => <Text style={styles.bigTxt}>Comp 02</Text>

export { Comp1, Comp2 }
