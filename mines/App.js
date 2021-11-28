import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Alert, Vibration } from 'react-native'
import Header from './src/components/Header'
import LevelSelection from './src/components/LevelSelection'

import MineField from './src/components/MineField'
import {
  cloneBoard,
  createMinedBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame
} from './src/functions'
import params from './src/params'

export default () => {

  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmout()
  const minesAmount = difficult => Math.ceil(rows * columns * difficult)
  const [board, setBoard] = useState(createMinedBoard(rows, columns, minesAmount(params.difficult)))
  let clonedBoard = cloneBoard(board)
  let lost = false
  let won = false
  const [gameStop, setGameStop] = useState(false)
  const [levelSelectionVisible, setLevelSelectionVisible] = useState(false)

  const onOpenField = (row, column) => {
    if (gameStop) return
    openField(clonedBoard, row, column)
    lost = hadExplosion(clonedBoard)
    won = wonGame(clonedBoard)

    if (lost) {
      showMines(clonedBoard)
      setGameStop(true)
      Alert.alert('KKKKKKKK burrão')
    }
    if (won) {
      setGameStop(true)
      Alert.alert('Aee po, te amo lindeza <3')
    }
    setBoard(clonedBoard)
  }

  const onFlagField = (row, column) => {
    invertFlag(clonedBoard, row, column)
    won = wonGame(clonedBoard)
    setBoard(clonedBoard)
  }

  const onNewGame = () => {
    clonedBoard = createMinedBoard(rows, columns, minesAmount(params.difficult))
    setBoard(clonedBoard)
    setGameStop(false)
  }

  const onLevelSelection = difficult => {
    params.difficult = difficult
    onNewGame()
    setLevelSelectionVisible(false)
    console.log('escolheu o level')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onNewGame={onNewGame}
        onLevelClick={() => setLevelSelectionVisible(true)}
        flagsAmount={minesAmount(params.difficult) - flagsUsed(clonedBoard)}
      />
      <View style={styles.board}>
        <MineField onOpenField={onOpenField} board={board} onFlagField={onFlagField} />
      </View>
      <LevelSelection
        onLevelSelection={onLevelSelection}
        visible={levelSelectionVisible}
        onCancel={() => setLevelSelectionVisible(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa'
  }
})
