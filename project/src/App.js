import React, { Component } from 'react'


export default class App extends Component {
  state = {
    titleValue: '',
    buttonDisable:true
  }

  handleChange = (event) => {
    const { value } = event.target;
    if (value !== '') {
      this.setState({buttonDisable: false})
    } else {
      this.setState({buttonDisable: true})
    }
    this.setState({ titleValue: value });
  }

  changeTitle = () => {
    document.title = this.state.titleValue;
  }

  render() {
    return (
      <div style={{ height: '2000px' }}>
        <input onChange={this.handleChange} />
        <button onClick={this.changeTitle} ref={c => this.titleButton = c} style={{ display: 'block', width: '500px' }} disabled = {this.state.buttonDisable}>点我换标题</button>
      </div>
    )
  }
}
