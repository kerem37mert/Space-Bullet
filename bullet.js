class Bullet
{
    width =  20;
    height = 20;
    top = 80;
    left;
    view = "img/bullet.png";
    damage = 1;
    speed = 50; // smaller, faster

    bulletElement;

    constructor(left)
    {
        this.left = left;
        this.bulletElement = this.createBullet();
    }

    createBullet()
    {
        const bullet = document.createElement("div");
        bullet.style.width = `${this.width}px`;
        bullet.style.height = `${this.height}px`;
        bullet.style.position = "absolute";
        bullet.style.left = `${this.left}%`;
        bullet.style.top = `${this.top}%`;
        bullet.style.transform = `translate(-${this.left}%,-${this.top}%)`;
        bullet.style.background = `url(${this.view})`;

        return bullet;
    }

    move(blocks)
    {
        setInterval(() => {
            if(this.top <= 10)
            {
                
                let block = blocks[this.left / 10];

                if(!block.health <= 0)
                {
                    block.health -= this.damage;
                    block.blockElement.innerHTML = block.health;
                    point++;
                    barPoint.innerHTML = `Puan: ${point}`;
                }

                this.bulletElement.style.display = "none";
                this.top = 1000;
            }    
            else
            {
                this.top -= 1;
                this.bulletElement.style.top = `${this.top}%`;
            } 
        }, this.speed);

    }
}