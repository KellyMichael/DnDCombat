import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './dnd/creatures.js'
import ArrowKeysReact from 'arrow-keys-react'
class App extends Component {

  constructor(){
    super();
    var board = Creatures.randomBoard();
    this.state = {
      board,
      selectedRow:null,
      selectedCol:null,
      }
  
ArrowKeysReact.config({

left:() => {
if(this.state.selectedRow != null){
  this.setState({
    selectedCol:this.state.selectedCol-1

  })

}

},
right:() => {
if(this.state.selectedRow != null){
  this.setState({
    selectedCol:this.state.selectedCol+1

  })

}
  
},
up:() => {
if(this.state.selectedRow != null){
  this.setState({
    selectedRow:this.state.selectedRow-1

  })

}
  
},
down:() => {
if(this.state.selectedRow != null){
  this.setState({
    selectedRow:this.state.selectedRow+1

  })

}
  
}


})




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
      <table {...ArrowKeysReact.events} tabIndex='1'>
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
