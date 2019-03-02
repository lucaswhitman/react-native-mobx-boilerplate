import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Canvas from 'react-native-canvas';

const screenWidth = Math.round(Dimensions.get('window').width);
const center = screenWidth / 2;
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 36
  },
  container: {
    alignItems: 'center',
    flex:1,
    flexDirection: 'column',
    width:screenWidth,
    height:screenHeight,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  canvas: {
    alignItems: 'center',
    flex:1,
    flexDirection: 'row',
    width:screenWidth,
    height:screenHeight,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});

export default class CanvasScreen extends Component {
  public render(): JSX.Element {
    return (
        <View style={styles.container}>
          <Text style={styles.headerContainer}>My Circles</Text>
          <Canvas style={styles.container} ref={this.handleCanvas}/>
        </View>
    );
  }

  private handleCanvas = (canvas: any) => {
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    const lineWidth = 1;

    const ctx = canvas.getContext('2d');
    const oneRad = 2 * Math.PI;

    const circleCenter = screenHeight - screenHeight * .3;
    const radiusOffset = screenHeight * 0.14;

    // draw rings
    ctx.beginPath();
    ctx.arc(center, circleCenter, screenWidth + radiusOffset, 0, oneRad);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, circleCenter, screenWidth, 0, oneRad);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, circleCenter, screenWidth - radiusOffset, 0, oneRad);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, circleCenter, screenWidth - radiusOffset*2, 0, oneRad);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }

}
