// Code The Spaceship Component Here
import React from 'react';

export class Spaceship extends React.Component {
    static defaultProps = {
      speed: 'slow',
      hasRockets: false,
      colors: `['black,'red']`
    }

    render(){
      return (
        <div>
        {this.props.name}
        {this.props.speed}
        {this.hasRockets}
        {this.props.colors}
        </div>
      );
    }
  }

export default Spaceship;
