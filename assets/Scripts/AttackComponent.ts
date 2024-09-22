/*
 * @Author: {zhengzhuang}
 * @Date: 2024-09-22 15:27:13
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-09-22 15:56:50
 * @Description:
 */
import { _decorator, Component, EventTouch, input, Input, instantiate, Node, Prefab, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackComponent')
export class AttackComponent extends Component {

    @property(Prefab)
    public attackPrefab: Prefab;

    @property(Node)
    public sphereParent: Node;

    /**
     * 速率
     */
    @property
    public attackSpeed: number = 200;

    start() {
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        // input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchEnd(event: EventTouch) {
        const attack = instantiate(this.attackPrefab);
        attack.setParent(this.sphereParent);
        // attack.setPosition(0, 0, 0);
        attack.setWorldPosition(this.node.position)

        const rgd = attack.getComponent(RigidBody);
        rgd.setLinearVelocity(new Vec3(0, 0, -this.attackSpeed));
    }

    update(deltaTime: number) {

    }
}


