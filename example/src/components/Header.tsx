import { RoundButton } from './RoundButton';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import * as React from 'react';
import ArrowLeft from '../icons/ArrowLeft';

export const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ width: width / 3 }}>
        <RoundButton icon={<ArrowLeft />} />
      </View>
      <View
        style={[
          styles.titleContainer,
          {
            width: width / 3,
          },
        ]}
      >
        <Text style={styles.title}>Header</Text>
      </View>
      <View style={{ width: width / 3 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
