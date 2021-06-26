class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  updateRank(){
    var p="ranks/rank"+this.rank
    database.ref("/").set({
      name:this.name,
      rank:this.rank
    })
    }

  getCarsAtEnd(){
    database.ref("carAtEnd").on("value",(data)=>{
      this.rank=data.val();
    })

  }

  updateCarsAtEnd(carAt){
    database.ref("/").update({
      carAtEnd:carAt
    })
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })


  }

  static getRank(){
    var playerInfoRef = database.ref('ranks');
    playerInfoRef.on("value",(data)=>{
      winner = data.val();
    })

  }
}
