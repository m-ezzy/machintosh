class app {
    constructor(name,x,y,zIndex,width,height,menuNumber,maxTextNumber,m1,m2,m3,m4,m5) {
        this.zIndex = zIndex;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.borderRadius = borderRadius;

        this.menusNames = [];
        this.menusText = [menuNumber][maxTextNumber];
    }

    giveStyle() {
        this.style.position = "absolute";
        this.style.zIndex = this.zIndex;
        this.style.width = this.width;
        this.style.height = this.height;
        this.style.left = this.x;
        this.style.top = this.y;
        this.style.borderRadius = this.borderRadius;

        this.style.backdropFilter = "blur(10px)";
    }
}