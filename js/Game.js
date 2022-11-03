class Game {
  constructor() {}

  getGameState(){
    var gameStateRef= database.ref("gamestate")
    gameStateRef.on("value",(data)=>{
    myGamestate= data.val()
    })
  }

  updateGameState(stateNumber){
    database.ref("/").update({
      gamestate:stateNumber
    })
  }

  
  handleElements(){
    myform.hideform()
    myform.title.position(40,50)
    myform.title.class("gameTitleAfterChange")
  }

  start(){
    myform = new Form()
    myform.display()

    myplayer= new Player()
    myplayer.getPlayerCount()
   } 

 
   play(){
    this.handleElements()
 
   }
 
   end(){
 
   }
 

  
}
