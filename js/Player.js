class Player {
  constructor() {
    this.positionX=0
    this.positionY=0
    this.name=null
    this.index=0
  }

  getPlayerCount() {
    var PlayerCountRef = database.ref("playerCount");
    PlayerCountRef.on("value", (data) => {
      myPlayerCount = data.val();
    });
  }

  updatePlayerCount(CountNumber) {
    database.ref("/").update({
      playerCount: CountNumber,
    });
  }
}
