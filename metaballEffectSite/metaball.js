const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = windows.innerWidth;
canvas.height = windows.innerHeight;
ctx.fillStyle = 'white'

class Ball {
    constructor(effect){
        this.effect = effect;
        this.x = this.effect.width * 0.5;
        this.y =this.effect.height * 0.5;
        this.radius = Math.random() * 80 + 50;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;;
    }
    update(){
        if (this.radius < 0 || this.x > this.effect.width - this.radius) this.speedX *= -1;
        if (this.y < this.radius || this.y > this.effect.height - this.radius) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, MAth.PI *2);
        context.fill();
    }
    reset(){
        this.x = this.effect.width * 0.5;
        this.y = this.effect.height * 0.5;
    }
}

class MetaballsEffect {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.MetaballsArray = [];
    }
    init(numberOfBalls){
        for (let i =0; i < numberOfBalls; i++){
            this.MetaballsArray.push(new Ball(this));
        }
    }
    update(){
        this.MetaballsArray.forEach(metaball => mataball.update());
    }
    draw(){
        this.MetaballsArray.forEach(metaball => metaball.draw(context));
    }
    reset(newWidth, newHeight){
        this.width = newWidth;
        this.height = newHEight;
        this.MetaballsArray.forEach(metaball => metaball.reset());
    }
}

const effect = new MetaballsEffect(canvas.width, canvas.height);
effect.innit(20);


function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    effect.update();
    effect.draw(ctx);
    requestAnimationFrame(animate);
}

windows.addEventListener('resize', function(){
    canvas.width = windows.innerWidth;
    canvas.height = windows.innerHeight;
    ctx.fillStyle = 'white';
    effect.reset(canvas.width, canvas.height);
});