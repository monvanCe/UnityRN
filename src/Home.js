import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import UnityView from '@azesmway/react-native-unity';

import Layout from './components/layout/Layout';

const App = () => {
  const unityRef = useRef();
  const [position, setPosition] = useState((value = {x: 0, y: 0}));

  useEffect(() => {
    unityRef.current.postMessage(
      'Text',
      'UpdateText',
      `${Math.floor(position.x)},${Math.floor(position.y)}`,
    );
    unityRef.current.postMessage(
      'Cube',
      'MessageRN',
      `${Math.floor(position.x)},${Math.floor(position.y)}`,
    );
  }, [position]);

  return (
    <View style={{flex: 1}}>
      <UnityView
        ref={unityRef}
        style={{flex: 1}}
        onUnityMessage={result =>
          console.log('onUnityMessage', result.nativeEvent.message)
        }
      />
      <Layout position={position} setPosition={setPosition} />
    </View>
  );
};

export default App;
