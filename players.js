function theAce(player) {
    return `The ACE is ${player.toUpperCase()}!!!!!!!!`;
  }
  
  function theDud(player) {
    return `${player.toUpperCase()} is DRAGGING!!!!!!!!`;
  }

  function score(player, score) {
    let playerScore=Number(score)
    if(playerScore >=15) {
    return `${player.toUpperCase()} is on fire with a Score of ${playerScore}`
    } else if (playerScore >=5) {
        return `${player} is doing well with a Score of ${playerScore}`
    } else if (playerScore >0) {
        return `At least ${player} has a Score of ${playerScore}`
    } else {
        return `${player.toUpperCase()} really needs to Score, they are at ${playerScore}`
    }
  }
  
  module.exports = {
    theAce,
    theDud,
    score
  }
