import { _decorator, Component, EventTouch, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraContraller')
export class CameraContraller extends Component {
    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchStart(event: EventTouch) {
        console.log('event-start', event.getLocation(), this.node);
    }

    onTouchEnd(event: EventTouch) {
        console.log('event-end', event.getLocation());
    }

    onTouchMove(event: EventTouch) {
        // 设置倍率
        const scaleX = 0.07;
        const scaleY = 0.02;

        this.node.setPosition(
            this.node.position.x + event.getDeltaX() * scaleX,
            this.node.position.y + event.getDeltaY() * scaleY,
            this.node.position.z
        )
    }

    update(deltaTime: number) {

    }
}


