import React from 'react';
import './css/mask.css';

export default class Mask extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'m-main-ui ' + this.props.className}>
      	 {this.props.img}
      </div>
    );
  }
}
