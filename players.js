const player = {
  stamina: 80, // выносливость
  height: 187, // рост
  age: 37, // возраст
  fatigue: 10,
  health: 80,
  playerPhisical: {
    power: 77, // сила удара
    dexterity: 82, // ловкость
  },
  playerShoots: {
    heading: 90, // игра головой
    powerShoot: 94, // сила удара
    preciseShoot: 94 // точность удара
  },
  goToTraning: function () {
    this.stamina++
    this.playerPhisical.power++
    this.playerShoots.powerShoot++
    this.fatigue--
    this.health++
  },
  skipTraning: function () {
    this.stamina - 2
    this.playerPhisical.power--
    this.playerShoots.powerShoot--
    this.fatigue++
  },
  useDope: function () {
    this.stamina + 10,
      this.fatigue = 0
    this.playerPhisical.power + 5
    this.dexterity + 2
    this.health - 20
  },
  theSmoke: function () {
    this.playerPhisical.dexterity - 10
    this.health - 5
    this.stamina - 10
  },
  getInjured: function () {
    this.health - 30
    this.fatigue + 10
    this.dexterity - 30
    this.stamina - 20
  }
}