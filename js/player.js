class Player {
    constructor(ctx, x, y){
        this.ctx = ctx;
        this.x = 250;
        this.y = 400;
        this.width = 25;
        this.height = 50;
        this.img = new Image();
        this.img.src = "./images/car.png";
        this.isReady = false;
        this.img.onload = () => {
            this.isReady = true;
        }
        this.speed = 0;
        this.isMovingRight = false;
        this.isMovingLeft = false;
    };

    draw() {
        if (this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        };
    }

    move() {
        if (this.isMovingRight) {
            this.x += this.speed;
            this.speed += 0.7;
        }

        if (this.isMovingLeft) {
            this.x -= this.speed;
            this.speed += 0.7;
        }
        
        if (this.x > (this.ctx.canvas.width / 2) - 130) {
			this.isMovingRight = false;
		}
        if (this.x < 100) {
			this.isMovingLeft = false;
		}
    }

    onKeyDown(event) {
		if (event.keyCode === 39 && this.x < (this.ctx.canvas.width / 2) - 130) {
			this.isMovingRight = true;
		}

        if (event.keyCode === 37 && this.x > 100) {
			this.isMovingLeft = true;
		}
	}

    onKeyUp(event) {
		if (event.keyCode === 39) {
			this.isMovingRight = false;
            this.speed = 1;
		}
        if (event.keyCode === 37) {
			this.isMovingLeft = false;
            this.speed = 1;
		}
	}

   
};
