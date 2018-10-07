import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './dnd/creatures.js'

class App extends Component {

  constructor(){
    super();
    var board = Creatures.randomBoard();
    this.state = {
      board,
      selectedRow:null,
      selectedCol:null,
    }
  }
  selectSpace(row, col){
    this.setState({
      selectedRow:row,
      selectedCol:col
    })
  }

  render() {
    console.log(this.state.board);
    var row = 0;
    var col = 0;
    return (
      <table>
        <tbody>
          {
            this.state.board.map((row, rowIndex) => {
              return (
                <tr>
                  {
                    row.map((creature, colIndex) => {
                      var color = "white";
                      if(rowIndex == this.state.selectedRow && colIndex == this.state.selectedCol ){
                        color = "green";
                      }
                      return (<td style={{backgroundColor:color}} onClick={() => this.selectSpace(rowIndex, colIndex)}>{creature?creature.marker:''}</td>);
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
