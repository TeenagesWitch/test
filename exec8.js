class Employee {
  constructor() {
    this.workingHours = 0;
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateTotalSalary() {
    throw new Error('This method should be overridden by child classes');
  }
}

class FulltimeEmployee extends Employee {
  calculateTotalSalary() {
    let regularRate = 100000;
    let additionalRate = 75000;
    let regularHours = Math.min(this.workingHours, 6);
    let additionalHours = Math.max(this.workingHours - 6, 0);
    return (regularRate * regularHours) + (additionalRate * additionalHours);
  }
}

class ParttimeEmployee extends Employee {
  calculateTotalSalary() {
    let regularRate = 50000;
    let additionalRate = 30000;
    let regularHours = Math.min(this.workingHours, 6);
    let additionalHours = Math.max(this.workingHours - 6, 0);
    return (regularRate * regularHours) + (additionalRate * additionalHours);
  }
}

// Example usage:
const fulltimeEmployee = new FulltimeEmployee();
fulltimeEmployee.addWorkingHours(7);
console.log('Fulltime Employee Salary:', fulltimeEmployee.calculateTotalSalary()); // Output: 675000

const parttimeEmployee = new ParttimeEmployee();
parttimeEmployee.addWorkingHours(7);
console.log('Parttime Employee Salary:', parttimeEmployee.calculateTotalSalary()); // Output: 330000
  
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
  
      while (this.player1.health > 0 && this.player2.health > 0) {
        await this.takeTurn(this.player1, this.player2);
        if (this.player2.health <= 0) break;
  
        await this.takeTurn(this.player2, this.player1);
        console.log('-----------------------------');
      }
  
      let winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
      console.log(`Winner is ${winner}`);
    }
  }
  
  // Example usage:
  const playerA = new Player('A');
  const game = new ShootingGame(playerA);
  game.start();