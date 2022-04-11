import React, { Component } from 'react'


function debounce(fn, wait) {
  let timer = null;
  let _this = this;
  let count = 0;
  return function() {
    timer && clearTimeout(timer);
    if (!count) {
      fn.apply(_this, arguments);
      timer = setTimeout(() => {
        count = 0;
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, arguments);
        count = 0;
      }, wait)
    }
    count++;
  }
}

let flag = true;
function throttle(fn ,wait) {
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.apply(this);
        flag = true;
      }, wait);
    }
    flag = false;
  }
}

export default class App extends Component {
  
  handleChange = (event) => {
    if ((event.type === 'keydown' && event.key === 'Enter') || event.type === 'click') {
      document.title = this.nodeValue.value
    }
  }

  showMsg = () => {
    console.log(1);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    console.log(document.documentElement.scrollTop);
  }

  render() {
    return (
      <div style={{height:'2000px'}}>
        <input ref={c=>this.nodeValue = c} onKeyDown={this.handleChange}/>
        <button onClick={this.handleChange} style={{display:'block', width:'500px'}}>点我换标题</button>
        <button onClick={debounce(this.showMsg, 500)}>防抖</button>
      </div>
    )
  }
}
