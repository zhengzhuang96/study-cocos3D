/*
 * @Author: {zhengzhuang}
 * @Date: 2024-09-22 16:10:04
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-09-22 16:10:28
 * @Description:
 */
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoDistroy')
export class AutoDistroy extends Component {
    start() {

    }

    update(deltaTime: number) {
        if (this.node.position.y < -10) {
            this.node.destroy();
        }
    }
}


