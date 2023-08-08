import React from 'react';
import {View, StyleSheet} from 'react-native';
import Gamepad from './layoutComponents/Gamepad';
import CombatButtons from './layoutComponents/CombatButtons';

const Layout = ({position, setPosition}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tops}>
        <View style={styles.topLeft}>
          <View style={styles.statsInner}>
            <View style={styles.mana} />
            <View style={styles.hp} />
            <View style={styles.exp} />
            <View style={styles.avatar} />
          </View>
          <View style={styles.statsEvents}>
            <View style={styles.eventButton} />
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.topInner}>
            <View style={styles.targetHP} />
            <View style={styles.targetLevel} />
          </View>
        </View>
        <View style={styles.topRight}>
          <View style={styles.topRightInner}>
            <View style={styles.reTeleport} />
            <View style={styles.battle} />
            <View style={styles.miniMap} />
          </View>
        </View>
      </View>
      <View style={styles.bottoms}>
        <View style={styles.bottomLeft}>
          <View style={styles.run} />
          <Gamepad position={position} setPosition={setPosition} />
          <View style={styles.leftBottomBar} />
        </View>
        <View style={styles.bottom} />
        <View style={styles.bottomRight}>
          <View style={styles.bottomRightInner}>
            <CombatButtons />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  tops: {
    flexDirection: 'row',
    flex: 2,
  },
  topLeft: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  statsInner: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mana: {
    height: '17%',
    width: '60%',
    backgroundColor: 'blue',
    borderTopRightRadius: 25,
  },
  hp: {
    height: '17%',
    width: '75%',
    backgroundColor: 'red',
    borderTopRightRadius: 25,
  },
  exp: {
    height: '12%',
    width: '60%',
    backgroundColor: 'yellow',
    borderBottomRightRadius: 25,
  },
  avatar: {
    position: 'absolute',
    left: '4%',
    height: '60%',
    width: '34%',
    borderRadius: 50,
    backgroundColor: 'black',
  },
  statsEvents: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventButton: {
    height: '40%',
    width: '75%',
    backgroundColor: 'yellow',
  },
  top: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  topInner: {
    height: '95%',
    width: '100%',
    marginTop: '2%',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  targetLevel: {
    height: '26%',
    width: '10%',
    borderRadius: 50,
    backgroundColor: 'black',
  },
  targetHP: {
    height: '26%',
    width: '50%',
    backgroundColor: 'red',
    marginLeft: -10,
  },
  topRight: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  topRightInner: {
    height: '85%',
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  reTeleport: {
    height: '29%',
    width: '11%',
    borderRadius: 50,
    backgroundColor: 'white',
  },
  battle: {
    height: '29%',
    width: '11%',
    borderRadius: 50,
    backgroundColor: 'red',
    marginLeft: '3%',
  },
  miniMap: {
    height: '100%',
    width: '38%',
    borderRadius: 100,
    backgroundColor: 'brown',
  },
  bottoms: {
    flex: 5,
    flexDirection: 'row',
  },
  bottomLeft: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '2%',
  },
  run: {
    height: '10%',
    width: '9%',
    borderRadius: 25,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  leftBottomBar: {
    height: '11%',
    width: '85%',
    backgroundColor: 'gray',
  },
  bottom: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  bottomRight: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  bottomRightInner: {
    height: '95%',
    width: '95%',
    margin: '3%',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Layout;
