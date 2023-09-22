import { _decorator, Component, Node } from 'cc';
import { UI_Joystick } from '../easy_controller/UI_Joystick';
const { ccclass, property } = _decorator;

@ccclass('RoosterJumpEntry')
export class RoosterJumpEntry extends Component {
    start() {
        UI_Joystick.inst.setButtonVisible('btn_slot_1',false);
        UI_Joystick.inst.setButtonVisible('btn_slot_2',false);
        UI_Joystick.inst.setButtonVisible('btn_slot_3',false);
        UI_Joystick.inst.setButtonVisible('btn_slot_4',false);
    }

    update(deltaTime: number) {
        
    }
}

