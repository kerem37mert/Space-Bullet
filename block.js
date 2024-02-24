class Block
{
    top = 0;
    left = 0;
    width = 50;
    height = 50;
    health = 10;
    view = "red";

    blockElement;

    constructor(left, health, view)
    {
        this.left = left;
        this.health = health;
        this.view = view;
        this.blockElement = this.createBlock();
    }

    createBlock()
    {
        const block = document.createElement("div");
        block.style.width = `${this.width}px`;
        block.style.height = `${this.height}px`;
        block.style.position = "absolute";
        block.style.top = `${this.top}%`;
        block.style.left = `${this.left}%`;
        block.style.transform = `translate(-${this.left}%,-${this.top}%)`;
        block.style.background = this.view;
        block.style.display = "flex";
        block.style.justifyContent = "center";
        block.style.alignItems = "center";
        block.style.fontWeight = "bold";
        block.innerHTML = this.health;

        return block;
    }
}