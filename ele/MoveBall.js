// MoveBall.js
class MoveBall {
    constructor({ startDom, endDom }) {
        this.startXy = MoveBall.getCenterCoordinates(startDom);
        this.endXy = MoveBall.getCenterCoordinates(endDom);
        this.verticalDom = MoveBall.cerateVerticalDom(startDom);
        this.horizontalDom = MoveBall.createHorizontalDom();
        this.verticalDom.appendChild(this.horizontalDom);
    }
    static ballW = 30;
    static ballH = 30;
    static getCenterCoordinates(domElement) {
        const rect = domElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        return { x: centerX, y: centerY };
    }
    static cerateVerticalDom(startDom) {
        const startXy = MoveBall.getCenterCoordinates(startDom);
        const verticalDom = document.createElement('div');
        verticalDom.style.position = 'fixed';
        verticalDom.style.top = `${startXy.y - MoveBall.ballH / 2}px`;
        verticalDom.style.left = `${startXy.x - MoveBall.ballW / 2}px`;
        verticalDom.style.zIndex = '999';
        return verticalDom;
    }
    static createHorizontalDom() {
        const horizontalDom = document.createElement('div');
        horizontalDom.style.width = `${MoveBall.ballW}px`;
        horizontalDom.style.height = `${MoveBall.ballH}px`;
        horizontalDom.style.borderRadius = '50%';
        horizontalDom.style.background = 'lightgreen';
        return horizontalDom;
    }
    getOffsetXy() {
        return {
            x: this.endXy.x - this.startXy.x,
            y: this.endXy.y - this.startXy.y,
        };
    }
    freeThrow() {
        document.body.appendChild(this.verticalDom);
        let verticalEasing =
            this.startXy.y < this.endXy.y ? 'cubic-bezier(.44,-1.43,1,1)' : 'cubic-bezier(0,0,.76,1.92)';
        let verticalAnimate = this.verticalDom.animate(
            [{ transform: `translate3d(0, ${this.getOffsetXy().y}px, 0)` }],
            {
                easing: verticalEasing,
                duration: 800,
                iterations: 1,
            }
        );
        this.horizontalDom.animate([{ transform: `translate3d(${this.getOffsetXy().x}px, 0, 0)` }], {
            easing: 'linear',
            duration: 800,
            iterations: 1,
        });
        verticalAnimate.onfinish = () => {
            this.verticalDom.remove();
        };
    }
}

