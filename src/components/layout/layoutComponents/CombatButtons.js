import React from 'react';
import {StyleSheet, View} from 'react-native';

const CombatButtons = () => {
  return (
    <View style={styles.combatButtonsContainer}>
      <View style={styles.row}>
        <View style={styles.button} />
        <View style={styles.button} />
      </View>
      <View style={styles.row}>
        <View style={styles.button} />
        <View style={styles.button} />
        <View style={styles.button} />
      </View>
      <View style={styles.row}>
        <View style={styles.button3} />
        <View style={styles.button4} />
        <View style={styles.button5} />
      </View>
      <View style={styles.rowCircleButton}>
        <View style={styles.button} />
        <View>
          <View style={styles.button2} />
          <View style={styles.button1} />
        </View>
        <View style={styles.bigButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  combatButtonsContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rowCircleButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginRight: 20,
  },
  button: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  button1: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: '-3%',
  },
  button2: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 10,
  },
  button3: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: '-5%',
  },
  button4: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  button5: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: '-1%',
  },
  bigButton: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default CombatButtons;
