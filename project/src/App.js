import React, { Component } from 'react'


// function debounce(fn, wait) {
//   let timer = null;
//   let _this = this;
//   let count = 0;
//   return function () {
//     timer && clearTimeout(timer);
//     if (!count) {
//       fn.apply(_this, arguments);
//       timer = setTimeout(() => {
//         count = 0;
//       }, wait)
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(_this, arguments);
//         count = 0;
//       }, wait)
//     }
//     count++;
//   }
// }

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
