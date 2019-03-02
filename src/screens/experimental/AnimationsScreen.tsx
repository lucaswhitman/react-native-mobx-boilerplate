import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const xOffset = new Animated.Value(0);

interface IAvatarProps {
  index: number;
  text: string;
}

class Avatar extends Component<IAvatarProps> {
  public render(): JSX.Element {
    return (
      <View style={styles.scrollPage}>
        <Animated.View style={[styles.circle, this.transitionAnimation(this.props.index)]}>
          <Image
            style={styles.userThumb}
            source={{uri: 'https://i.imgur.com/8lR7TfZ.jpg'}}
          />
          <Text style={styles.text}>{this.props.text}</Text>
        </Animated.View>
      </View>
    );
  }

  private transitionAnimation(index: number): any {
    return {
      transform: [
        { perspective: 800 },
        /*
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        */
        {
          translateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [100, 0, 100]
          })
        }
        /*
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ['-45deg', '0deg', '45deg']
          })
        }
        */
      ]
    };
  }
}

export default class AnimationsScreen extends Component {
  public render(): JSX.Element {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal={true}
        pagingEnabled={true}
        style={styles.scrollView}
      >
        <Avatar text='Screen 1' index={0} />
        <Avatar text='Screen 2' index={1} />
        <Avatar text='Screen 3' index={2} />
        <Avatar text='Screen 4' index={3} />
        <Avatar text='Screen 5' index={4} />
        <Avatar text='Screen 6' index={5} />
        <Avatar text='Screen 7' index={6} />
        <Avatar text='Screen 8' index={7} />
        <Avatar text='Screen 9' index={8} />
        <Avatar text='Screen 10' index={9} />
        <Avatar text='Screen 11' index={10} />
        <Avatar text='Screen 12' index={11} />
      </Animated.ScrollView>
    );
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
  scrollView: {
    flexDirection: 'row',
    backgroundColor: '#00d4ff'
  },
  scrollPage: {
    width: SCREEN_WIDTH/2,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white'
  },
  text: {
    position: 'absolute',
    color: 'red'
  },
  userThumb: {
    width: 90,
    height: 90,
    borderRadius: 45
  }
});
