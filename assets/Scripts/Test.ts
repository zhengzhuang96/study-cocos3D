/*
 * @Author: {zhengzhuang}
 * @Date: 2024-09-21 17:41:09
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-09-21 17:45:27
 * @Description:
 */
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    start() {
        console.log('test');
    }

    update(deltaTime: number) {
        console.log('test update', deltaTime);
    }
}


