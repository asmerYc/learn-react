/*
 * @Author: your name
 * @Date: 2020-12-03 15:03:07
 * @LastEditTime: 2020-12-03 15:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//成功的将一个prop从父组件Board'传递'给了子组件Square 在React应用中数据通过props的传递。从组附件流向子组件
class Square extends React.Component {
  constructor(props){
    super(props);
    //在JavaScript Class中，每次你定义其子类的构造函数时，都需要调用super方法，
    //因此，在所有含有构造函数的React组件中，构造函数必须以super(props)开头
    this.state = {
      value:null,
    };
  }
  render() {
    //在Square组件的render方法中的onclick事件监听函数中调用this.state，我们就可以在每次<button>被点击的时候
    //通知React去重新渲染Square组件，组件更新后，Square组件的this.state.value的值会变成‘X’,
    //因此 我们在游戏棋盘上就能看见X了，点击任意一个方格，X就会出现了
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
