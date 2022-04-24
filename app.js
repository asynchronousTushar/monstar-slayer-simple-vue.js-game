new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.playerHealth -= this.controlDamage(15, 7);
            this.monsterHealth -= this.controlDamage(15, 7);
            this.checkWin();
        },
        specialAttack: function () {
            this.playerHealth -= this.controlDamage(15, 7);
            this.monsterHealth -= this.controlDamage(25, 10);
            this.checkWin();
        },
        heal: function () {
            if (this.playerHealth <= 85) {
                this.playerHealth += 15;
            }
            return;
        },
        giveUp: function () {
            this.gameIsRunning = false;
            return;
        },
        controlDamage: function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! Wanna play again?")) {
                    this.startGame();
                    return;
                } else {
                    this.gameIsRunning = false;
                    return;
                }
            }
            else if (this.playerHealth <= 0) {
                alert("You Lost!");
                this.gameIsRunning = false;
                return;
            }
            return;
        }
    }
})