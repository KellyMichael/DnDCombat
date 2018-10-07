var createGoblin = (name) => ({
  type:'Goblin',
  marker:'G',
  health:7,
  ac:12,
  attack:{
    atkBonus:4,
    die:6,
    dmgBonus:3,
  }
})

var createFighter = (name) => ({
  type:'Fighter',
  marker:'F',
  //marker:,
  health:12,
  ac:15,
  attack:{
    atkBonus:4,
    die:8,
    dmgBonus:2,
  }
})

var randomBoard = (b_width, b_height) => {
  var board = []
  for(let i = 0; i < 10; i++){
    let row = []
    for(let j = 0; j < 21; j++){
      var result = Math.random();
      var creature = null;
      if(result < 0.00000001){
        creature = createGoblin();
      } else if (result < 0.0000000000001){
        creature = createFighter();
      }
      row.push(creature)
    }
    board.push(row)
  }
  return board
}

export default {
    createGoblin, randomBoard,
  createFighter

}
