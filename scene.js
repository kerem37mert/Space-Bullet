class Scene 
{
    width = 700;
    height = 500;
    background = "img/scene.png";

    sceneElement;

    constructor()
    {
        this.sceneElement = this.createScene();
    }

    createScene()
    {
        const scene = document.createElement("div");
        scene.style.width = `${this.width}px`;
        scene.style.height = `${this.height}px`;
        scene.style.position = "absolute";
        scene.style.left = "50%";
        scene.style.top = "50%";
        scene.style.transform = "translate(-50%,-50%)";
        scene.style.background = `url(${this.background})`;

        return scene;
    }
}