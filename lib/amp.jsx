import React from 'react';
import Tone from 'tone';

class amp extends React.Component {
  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toMaster();
    this.playD4 = this.playD4.bind(this);
  }

  playD4() {
    this.synth.triggerAttackRelease('D4', '8n');
  }

  render() {
    return (<div>
      <button onClick={this.playD4}>D4</button>
    </div>);
  }
}

export default amp;
