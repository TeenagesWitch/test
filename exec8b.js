// 02
const readline = require('readline');

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
    this.isComputer = false;
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
    this.player2 = player2 || new Player('Computer');
    this.player2.isComputer = player2 == null;
  }

  getRandomItem() {
    return {
      health: Math.random() < 0.5 ? 10 : 0,
      power: Math.random() < 0.5 ? 10 : 0,
    };
  }

  async takeTurn(player, opponent) {
    console.log(player.showStatus());

    if (player.isComputer) {
      let choice = Math.random() < 0.5 ? 'item' : 'attack';
      if (choice === 'item') {
        let item = this.getRandomItem();
        player.useItem(item);
        console.log(`Player ${player.name} used item: Health +${item.health}, Power +${item.power}`);
      } else {
        opponent.hit(player.power);
        console.log(`Player ${player.name} attacked Player ${opponent.name}`);
      }
    } else {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

      let choice = await question('Do you want to use an item or attack? (item/attack): ');

      if (choice.toLowerCase() === 'item') {
        let item = this.getRandomItem();
        player.useItem(item);
        console.log(`Player ${player.name} used item: Health +${item.health}, Power +${item.power}`);
      } else {
        opponent.hit(player.power);
        console.log(`Player ${player.name} attacked Player ${opponent.name}`);
      }

      rl.close();
    }
  }

  async start() {
    console.log('Game started!');
    let turns = 0;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`Turn ${++turns}`);
      await this.takeTurn(this.player1, this.player2);
      if (this.player2.health <= 0) break;

      await this.takeTurn(this.player2, this.player1);
      console.log('-----------------------------');
    }

    let winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
    console.log(`Player ${winner} wins in ${turns} turns!`);
  }
}

// Example usage:
const playerA = new Player('A');
const game = new ShootingGame(playerA);
game.start();