class hoverAnimation {
    constructor(dom) {
        this.dom = dom;
        this.color = '#916968';
        this.spanBox = null;
        this.inTime = null;
        this.outTime = null;
        this.canIn = true;
    }

    create() {
        const dom = this.dom;
        dom.addEventListener("mouseenter", (e) => {
            console.log(1);
            if (this.canIn) {
                this.inTime = new Date().getTime();
                this.spanBox = document.createElement("span");
                dom.appendChild(this.spanBox);
                let top = e.clientY - e.target.offsetTop;
                let left = e.clientX - e.target.offsetLeft;
                dom.style.position = "relative";
                dom.style.overflow = "hidden";
                this.spanBox.style.top = top + "px";
                this.spanBox.style.left = left + "px";
                this.spanBox.style.position = "absolute";
                this.spanBox.style.width = 0 + "px";
                this.spanBox.style.height = 0 + "px";
                this.spanBox.style.transform = "translate(-50%, -50%)";
                this.spanBox.style.cursor = "pointer";
                this.spanBox.style["background-color"] = this.color;
                this.spanBox.style["border-radius"] = "50%";
                this.spanBox.animate(
                    [
                        {
                            width: 0,
                            height: 0,
                        },
                        {
                            width: 1200 + "px",
                            height: 1200 + "px",
                        },
                    ],
                    {
                        duration: 100,
                        fill: "forwards",
                        easing: "ease-in-out",
                    }
                );
                this.canIn = false;
            }
        });
        dom.addEventListener("mouseleave", (e) => {
            console.log(2, this.spanBox);
            this.outTime = new Date().getTime();
            let passTime = this.outTime - this.inTime;
            if (passTime < 500) {
                setTimeout(this.animationOut(e), 500 - passTime);
            } else {
                this.animationOut(e);
            }
            
        })
    }

    setStyle(color) {
        this.color = color;
    }

    animationOut(e) {
        const dom = this.dom;
        let top = e.clientY - e.target.offsetTop;
        let left = e.clientX - e.target.offsetLeft;
        this.spanBox.style.top = top + "px";
        this.spanBox.style.left = left + "px";
        this.spanBox.animate(
            [
                {
                    width: 1200 + "px",
                    height: 1200 + "px",
                },
                {
                    width: 0,
                    height: 0,
                },
            ],
            {
                duration: 100,
                fill: "forwards",
                easing: "ease-in-out",
            }
        );
        this.canIn = true;
        if (this.canIn) {
            dom.removeChild(this.spanBox);
        }
    }
}

export default hoverAnimation;