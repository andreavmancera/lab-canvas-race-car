class Game {
    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.bg = new Background(this.ctx);
        this.player = new Player(this.ctx, 50, 50);
    }

    start() {
        this.intervalId = setInterval(() => {
			this.clear();
            this.draw();
            this.move();
            
		}, 1000 / 60);
    }

    draw() {
        this.bg.draw();
        this.player.draw();
    }

    move() {
        this.player.move()
    }

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};


    onKeyDown(event) {
        this.player.onKeyDown(event);
    }

    onKeyUp(event) {
        this.player.onKeyUp(event);
    }
}