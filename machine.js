class Machine 
{

    width = 100;
    height = 100;
    left = 50;
    top = 100;
    view = "img/machine.png";

    machineElement;

    constructor()
    {
        this.machineElement = this.createMachine();
    }

    createMachine()
    {
        const machine = document.createElement("div");
        machine.style.width = `${this.width}px`;
        machine.style.height = `${this.height}px`;;
        machine.style.position = "absolute";
        machine.style.left = `${this.left}%`;
        machine.style.top = `${this.top}%`;
        machine.style.transform = `translate(-${this.left}%,-${this.top}%)`;
        machine.style.background = `url(${this.view})`;

        return machine;
    }
    
    moveLeft()
    {
        if(this.left != 0)
        {
            this.left -= 10;
            this.machineElement.style.left = `${this.left}%`;
            this.machineElement.style.transform = `translate(-${this.left}%,-${this.top}%)`;
        }
    }

    moveRight()
    {
        if(this.left != 100)
        {
            this.left += 10;
            this.machineElement.style.left = `${this.left}%`;
            this.machineElement.style.transform = `translate(-${this.left}%,-${this.top}%)`;
        }
    }
}