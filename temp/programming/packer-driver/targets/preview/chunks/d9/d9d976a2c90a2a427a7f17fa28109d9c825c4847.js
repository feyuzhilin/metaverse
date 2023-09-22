System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UI_Joystick, _dec, _class, _crd, ccclass, property, RoosterJumpEntry;

  function _reportPossibleCrUseOfUI_Joystick(extras) {
    _reporterNs.report("UI_Joystick", "../kylins_easy_controller/UI_Joystick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UI_Joystick = _unresolved_2.UI_Joystick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb644EreiZDYIqjgHIPb0bj", "RoosterJumpEntry", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoosterJumpEntry", RoosterJumpEntry = (_dec = ccclass('RoosterJumpEntry'), _dec(_class = class RoosterJumpEntry extends Component {
        start() {
          (_crd && UI_Joystick === void 0 ? (_reportPossibleCrUseOfUI_Joystick({
            error: Error()
          }), UI_Joystick) : UI_Joystick).inst.setButtonVisible('btn_slot_1', false);
          (_crd && UI_Joystick === void 0 ? (_reportPossibleCrUseOfUI_Joystick({
            error: Error()
          }), UI_Joystick) : UI_Joystick).inst.setButtonVisible('btn_slot_2', false);
          (_crd && UI_Joystick === void 0 ? (_reportPossibleCrUseOfUI_Joystick({
            error: Error()
          }), UI_Joystick) : UI_Joystick).inst.setButtonVisible('btn_slot_3', false);
          (_crd && UI_Joystick === void 0 ? (_reportPossibleCrUseOfUI_Joystick({
            error: Error()
          }), UI_Joystick) : UI_Joystick).inst.setButtonVisible('btn_slot_4', false);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9d976a2c90a2a427a7f17fa28109d9c825c4847.js.map