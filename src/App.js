import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './dnd/creatures.js'

class App extends Component {

  constructor(){
    super();
    var board = Creatures.randomBoard();
    this.state = {
      board
    }
    //test
  }

  render() {
    console.log(this.state.board);
    var row = 0;
    var col = 0;
    return (
      <table>
        <tbody>
          {
            this.state.board.map((row) => {
              col = 0
              return (
                <tr>
                  {
                    row.map((creature) => {
                      return (<td>{creature?creature.marker:''}</td>);
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

}

export default App;
