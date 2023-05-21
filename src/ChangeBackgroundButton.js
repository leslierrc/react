import React from 'react';
import { VrButton, Environment, Text } from 'react-360';

class ChangeBackgroundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIndex: 0,
      backgrounds: [
        'calle 19 (8).jpg',
        'calle 19 (9).jpg',
        'calle 19 (10).jpg',
      ],
    };
  }

  handleButtonClick = () => {
    const { backgroundIndex, backgrounds } = this.state;
    const newBackgroundIndex = (backgroundIndex + 1) % backgrounds.length;
    const newBackground = backgrounds[newBackgroundIndex];
    this.setState({ backgroundIndex: newBackgroundIndex });
    Environment.setBackgroundImage(newBackground);
  }

  render() {
    return (
      <VrButton onClick={this.handleButtonClick}>
        <Text>Change Background</Text>
      </VrButton>
    );
  }
}

export default ChangeBackgroundButton;