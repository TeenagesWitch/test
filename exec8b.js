// 02
class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    hit(power) {
      this.health -= power;
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
  }
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      return {
        health: Math.random() < 0.5 ? 10 : 0,
        power: Math.random() < 0.5 ? 10 : 0,
      };
    }
  
    start() {
      console.log('Game started!');
  
      while (this.player1.health > 0 && this.player2.health > 0) {
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());
  
        let item1 = this.getRandomItem();
        let item2 = this.getRandomItem();
  
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        console.log(`Player ${this.player1.name} gets item: Health +${item1.health}, Power +${item1.power}`);
        console.log(`Player ${this.player2.name} gets item: Health +${item2.health}, Power +${item2.power}`);
  
        this.player1.hit(this.player2.power);
        this.player2.hit(this.player1.power);
  
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());
        console.log('-----------------------------');
      }
  
      let winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
      console.log(`Winner is ${winner}`);
    }
  }
  
  // Example usage:
  const playerA = new Player('A');
  const playerB = new Player('B');
  const game = new ShootingGame(playerA, playerB);
  game.start();  