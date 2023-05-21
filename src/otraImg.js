import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset, 
  VrButton, 
  Environment
} from 'react-360';

export default class otraImg extends React.Component {
 constructor(props){
  super(props);
  this.state={
    backgroundIndex: 0,
    backgrounds: [
      'static_assets/calle 19 (8).jpg',
      'static_assets/calle 19 (9).jpg',
      
    ],
    image:{
      src: '1.jpg',
      width: 100,
      height:100,
    }

   
  }
 }

 handleButtonClick = () => {
  const { backgroundIndex, backgrounds } = this.state;
  const newBackgroundIndex = (backgroundIndex + 1) % backgrounds.length;
  const newBackground = backgrounds[newBackgroundIndex];
  this.setState({ backgroundIndex: newBackgroundIndex });
  Environment.setBackgroundImage(newBackground);
}

  render() {
    const{image}= this.state;

    return (
      <View style={styles.panel}>
        <Image source={asset(image.src)} style={{width: image.width, height: image.height}} />
        <VrButton onClick={this.handleButtonClick}>
        <Text>Change Background</Text>
      </VrButton>
      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

