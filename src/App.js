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


    this.addFighter = this.addFighter.bind(this);
    this.addGoblin = this.addGoblin.bind(this);











  
ArrowKeysReact.config({

left:() => {
if (board[this.state.selectedRow][this.state.selectedCol]!= null && board[this.state.selectedRow][this.state.selectedCol-1]== null && board[this.state.selectedRow][this.state.selectedCol]!= board[this.state.selectedRow][0]){
var newBoard = this.state.board.slice() //copy the array
newBoard[this.state.selectedRow][this.state.selectedCol-1] = board[this.state.selectedRow][this.state.selectedCol] //execute the manipulations
newBoard[this.state.selectedRow][this.state.selectedCol] = null //execute the manipulations
this.setState({board: newBoard}) //set the new state

  this.setState({
    selectedCol:this.state.selectedCol-1
  }) 



}
  else{alert("Please select a character and move to a valid (unoccupied) location")}
},
right:() => {
if (board[this.state.selectedRow][this.state.selectedCol]!= null && board[this.state.selectedRow][this.state.selectedCol+1]== null && board[this.state.selectedRow][this.state.selectedCol]!= board[this.state.selectedRow][20]){

var newBoard = this.state.board.slice() //copy the array
newBoard[this.state.selectedRow][this.state.selectedCol+1] = board[this.state.selectedRow][this.state.selectedCol] //execute the manipulations
newBoard[this.state.selectedRow][this.state.selectedCol] = null //execute the manipulations
this.setState({board: newBoard}) //set the new state

  this.setState({
    selectedCol:this.state.selectedCol+1

  })

}
  else{alert("Please select a character and move to a valid (unoccupied) location")}
},
up:() => {
try{  
if (board[this.state.selectedRow][this.state.selectedCol]!= null && board[this.state.selectedRow-1][this.state.selectedCol]== null){

var newBoard = this.state.board.slice() //copy the array
newBoard[this.state.selectedRow-1][this.state.selectedCol] = board[this.state.selectedRow][this.state.selectedCol] //execute the manipulations
newBoard[this.state.selectedRow][this.state.selectedCol] = null //execute the manipulations
this.setState({board: newBoard}) //set the new state

  this.setState({
    selectedRow:this.state.selectedRow-1

  })

}
  else{alert("Please select a character and move to a valid (unoccupied) location")}
  }
  catch(err){

  }
},
down:() => {
try{
if (board[this.state.selectedRow][this.state.selectedCol]!= null && board[this.state.selectedRow+1][this.state.selectedCol]== null){

var newBoard = this.state.board.slice() //copy the array
newBoard[this.state.selectedRow+1][this.state.selectedCol] = board[this.state.selectedRow][this.state.selectedCol] //execute the manipulations
newBoard[this.state.selectedRow][this.state.selectedCol] = null //execute the manipulations
this.setState({board: newBoard}) //set the new state


  this.setState({
    selectedRow:this.state.selectedRow+1

  })

}
  else{alert("Please select a character and move to a valid (unoccupied) location")}
 }
 catch(err){} 
}


})




  }






  selectSpace(row, col){
    this.setState({
      selectedRow:row,
      selectedCol:col
    })
  }


addFighterTEST(){
  if(this.state.board[this.state.selectedRow][this.state.selectedCol] != null){
  alert('yes')
  //alert(this.state.selectedRow)
}}

addFighter(){
  if(this.state.board[this.state.selectedRow][this.state.selectedCol] == null){
  var newBoard = this.state.board.slice() //copy the array
  
  var c = Creatures.createFighter();
  newBoard[this.state.selectedRow][this.state.selectedCol] = c //execute the manipulations
  this.setState({board: newBoard}) //set the new state
  this.selectSpace(-1,-1)
}
else{alert("There is already a character here!")}
}

addGoblin(){
  if(this.state.board[this.state.selectedRow][this.state.selectedCol] == null){
  var newBoard = this.state.board.slice() //copy the array
  
  var g = Creatures.createGoblin();
  newBoard[this.state.selectedRow][this.state.selectedCol] = g //execute the manipulations
  this.setState({board: newBoard}) //set the new state
  this.selectSpace(-1,-1)
}
else{alert("There is already a character here!")}
}


removeToken(){
  if(this.state.board[this.state.selectedRow][this.state.selectedCol] != null){
  var newBoard = this.state.board.slice() //copy the array
  newBoard[this.state.selectedRow][this.state.selectedCol] = null //execute the manipulations
  this.setState({board: newBoard}) //set the new state



}
else{alert("There is no character here!")}
}



  render() {
    console.log(this.state.board);
    var row = 0;
    var col = 0;
    return (
      <div>
      <button onClick = {() => {alert('Welcome adventurer!\n\nAdd heros by selecting a square and pressing the Add Fighter button.\n\nAdd enemies by selecting a squaure and pressing the Add Goblin Button.\n\nRemove either by pressing the token and selecting Remove Token button\n\n Move a character by selecting the token and using the arrow keys.\n\n Have fun!')}}>Instructions</button>

      <button onClick = {() => {this.removeToken()}}>Remove token </button>
      <button onClick = {() => {this.addFighter()}}>Add fighter</button>
      <button onClick = {() => {this.addGoblin()}}>Add goblin</button>

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
    </div>


    )
  }

}

export default App;
