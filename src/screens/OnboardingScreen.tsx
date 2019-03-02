import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import CommonStore from '../stores/CommonStore';

const localStyles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

//todo: internationalize when this is really real for real.
const slides = [
  {
    key: 'somethun',
    title: 'Batman',
    text: 'It\'s not who I am underneath, but what I do that defines me.',
    image: require('../assets/beard-1.jpg'),
    imageStyle: localStyles.image,
    backgroundColor: '#59b2ab'
  },
  {
    key: 'somethun-dos',
    title: 'Hellboy',
    text: 'I\'m gonna be sore in the morning...',
    image: require('../assets/beard-2.jpg'),
    imageStyle: localStyles.image,
    backgroundColor: '#cc9820'
  },
  {
    key: 'somethun1',
    title: 'Robocop',
    text: 'My friends call me Murphy. You call me... Robocop.',
    image: require('../assets/beard-3.jpg'),
    imageStyle: localStyles.image,
    backgroundColor: '#22bcb5'
  }
];

export interface IOnboardingScreenProps {
  CommonStore?: any;
}

@inject('CommonStore')
@observer
export default class OnboardingScreen extends Component<IOnboardingScreenProps> {
  public render(): JSX.Element {
    return (
      <AppIntroSlider slides={slides} onDone={this.done} />
    );
  }

  private done(): void {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    CommonStore.setHasSeenOnboarding(true);
  }
}
