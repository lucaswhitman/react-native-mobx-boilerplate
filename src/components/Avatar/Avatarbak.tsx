import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export interface IAvatarState {
}

export interface IAvatarProps {
  index: number;
}

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

class Avatar extends Component<IAvatarProps, IAvatarState> {
  private xOffset: Animated.Value = new Animated.Value(0);

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <View style={styles.scrollPage}>
        <Animated.View style={[styles.circle, this.transitionAnimation(this.props.index)]}>
          <Image
            style={styles.userThumb}
            source={{uri: 'https://i.imgur.com/8lR7TfZ.jpg'}}
          />
          <Text style={styles.text}>{this.props.index.toString()}</Text>
        </Animated.View>
      </View>
    );
  }

  private transitionAnimation = (index: number): any => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: this.xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        {
          rotateX: this.xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ['45deg', '0deg', '45deg']
          })
        },
        {
          rotateY: this.xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ['-45deg', '0deg', '45deg']
          })
        }
      ]
    };
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  userThumb: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  text: {
    position: 'absolute',
    color: 'red'
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20
  }
});

export default Avatar;
