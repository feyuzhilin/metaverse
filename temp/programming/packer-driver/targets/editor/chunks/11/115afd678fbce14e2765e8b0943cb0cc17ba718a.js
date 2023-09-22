System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Input, KeyCode, input, director, EasyControllerEvent, _dec, _class, _class2, _crd, ccclass, property, UI_Joystick;

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "./EasyController", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
      director = _cc.director;
    }, function (_unresolved_2) {
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d3fdUMUH1Fq4G13IWj7Lf2", "UI_Joystick", undefined);

      __checkObsolete__(['_decorator', 'Node', 'EventTouch', 'Touch', 'Component', 'UITransform', 'Input', 'EventKeyboard', 'KeyCode', 'v2', 'Vec3', 'input', 'Scene', 'director', 'EventMouse', 'macro', 'view', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);
      /****
       * split screen into three parts.
       * ---------------------------------------------
       *                                              |
       *           1.camera rotation zone             |
       *                                              |
       *----------------------------------------------|
       *                      |                       |
       * 2.movement ctrl zone  | 3.camera rotation zone|
       *                      |                       |
       * ----------------------------------------------
       * 
       * multi-touch for camera zoom.
       *  */

      _export("UI_Joystick", UI_Joystick = (_dec = ccclass('UI_Joystick'), _dec(_class = (_class2 = class UI_Joystick extends Component {
        constructor(...args) {
          super(...args);
          this._ctrlRoot = null;
          this._ctrlPointer = null;
          this._checkerCamera = null;
          this._buttons = null;
          this._cameraSensitivity = 0.1;
          this._distanceOfTwoTouchPoint = 0;
          this._movementTouch = null;
          this._cameraTouchA = null;
          this._cameraTouchB = null;
          this._scene = null;
          this._key2buttonMap = {};
          this._keys = [];
          this._degree = 0;
          this._key2dirMap = null;
        }

        static get inst() {
          return this._inst;
        }

        onLoad() {
          UI_Joystick._inst = this;
        }

        start() {
          let checkerCamera = this.node.getChildByName('checker_camera').getComponent(UITransform);
          checkerCamera.node.on(Input.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
          checkerCamera.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);
          let checkerMovement = this.node.getChildByName('checker_movement').getComponent(UITransform);
          checkerMovement.node.on(Input.EventType.TOUCH_START, this.onTouchStart_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_END, this.onTouchUp_Movement, this);
          checkerMovement.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);
          this._checkerCamera = checkerCamera;
          this._ctrlRoot = this.node.getChildByName('ctrl').getComponent(UITransform);
          this._ctrlRoot.node.active = false;
          this._ctrlPointer = this._ctrlRoot.node.getChildByName('pointer');
          this._buttons = this.node.getChildByName('buttons');
          this._key2buttonMap[KeyCode.KEY_J] = 'btn_slot_0';
          this._key2buttonMap[KeyCode.KEY_K] = 'btn_slot_1';
          this._key2buttonMap[KeyCode.KEY_L] = 'btn_slot_2';
          this._key2buttonMap[KeyCode.KEY_U] = 'btn_slot_3';
          this._key2buttonMap[KeyCode.KEY_I] = 'btn_slot_4';
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this._scene = director.getScene();
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          UI_Joystick._inst = null;
        }

        bindKeyToButton(keyCode, btnName) {
          this._key2buttonMap[keyCode] = btnName;
        }

        setButtonVisible(btnName, visible) {
          var _this$_buttons;

          let node = (_this$_buttons = this._buttons) == null ? void 0 : _this$_buttons.getChildByName(btnName);

          if (node) {
            node.active = visible;
          }
        }

        getButtonByName(btnName) {
          return this._buttons.getChildByName(btnName);
        }

        onTouchStart_Movement(event) {
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let x = touch.getUILocationX();
            let y = touch.getUILocationY();

            if (!this._movementTouch) {
              //we sub halfWidth,halfHeight here.
              //because, the touch event use left bottom as zero point(0,0), ui node use the center of screen as zero point(0,0)
              //this._ctrlRoot.setPosition(x - halfWidth, y - halfHeight, 0);
              let halfWidth = this._checkerCamera.width / 2;
              let halfHeight = this._checkerCamera.height / 2;
              this._ctrlRoot.node.active = true;

              this._ctrlRoot.node.setPosition(x - halfWidth, y - halfHeight, 0);

              this._ctrlPointer.setPosition(0, 0, 0);

              this._movementTouch = touch;
            }
          }
        }

        onTouchMove_Movement(event) {
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              let halfWidth = this._checkerCamera.width / 2;
              let halfHeight = this._checkerCamera.height / 2;
              let x = touch.getUILocationX();
              let y = touch.getUILocationY();
              let pos = this._ctrlRoot.node.position;
              let ox = x - halfWidth - pos.x;
              let oy = y - halfHeight - pos.y;
              let len = Math.sqrt(ox * ox + oy * oy);

              if (len <= 0) {
                return;
              }

              let dirX = ox / len;
              let dirY = oy / len;
              let radius = this._ctrlRoot.width / 2;

              if (len > radius) {
                len = radius;
                ox = dirX * radius;
                oy = dirY * radius;
              }

              this._ctrlPointer.setPosition(ox, oy, 0); // degree 0 ~ 360 based on x axis.


              let degree = Math.atan(dirY / dirX) / Math.PI * 180;

              if (dirX < 0) {
                degree += 180;
              } else {
                degree += 360;
              }

              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, degree, len / radius);
            }
          }
        }

        onTouchUp_Movement(event) {
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP);

              this._movementTouch = null;
              this._ctrlRoot.node.active = false;
            }
          }
        }

        getDistOfTwoTouchPoints() {
          let touchA = this._cameraTouchA;
          let touchB = this._cameraTouchB;

          if (!touchA || !touchB) {
            return 0;
          }

          let dx = touchA.getLocationX() - touchB.getLocationX();
          let dy = touchB.getLocationY() - touchB.getLocationY();
          return Math.sqrt(dx * dx + dy * dy);
        }

        onTouchStart_CameraCtrl(event) {
          let touches = event.getAllTouches();
          this._cameraTouchA = null;
          this._cameraTouchB = null;

          for (let i = touches.length - 1; i >= 0; i--) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              continue;
            }

            if (this._cameraTouchA == null) {
              this._cameraTouchA = touches[i];
            } else if (this._cameraTouchB == null) {
              this._cameraTouchB = touches[i];
              break;
            }
          }

          this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
        }

        onTouchMove_CameraCtrl(event) {
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID(); //two touches, do camera zoom.

            if (this._cameraTouchA && this._cameraTouchB) {
              console.log(touchID, this._cameraTouchA.getID(), this._cameraTouchB.getID());
              let needZoom = false;

              if (touchID == this._cameraTouchA.getID()) {
                this._cameraTouchA = touch;
                needZoom = true;
              }

              if (touchID == this._cameraTouchB.getID()) {
                this._cameraTouchB = touch;
                needZoom = true;
              }

              if (needZoom) {
                let newDist = this.getDistOfTwoTouchPoints();
                let delta = this._distanceOfTwoTouchPoint - newDist;

                this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                  error: Error()
                }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, delta);

                this._distanceOfTwoTouchPoint = newDist;
              }
            } //only one touch, do camera rotate.
            else if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              let dt = touch.getDelta();
              let rx = dt.y * this._cameraSensitivity;
              let ry = -dt.x * this._cameraSensitivity;

              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, rx, ry);
            }
          }
        }

        onTouchUp_CameraCtrl(event) {
          let touches = event.getAllTouches();
          let hasTouchA = false;
          let hasTouchB = false;

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID();

            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              hasTouchA = true;
            } else if (this._cameraTouchB && touchID == this._cameraTouchB.getID()) {
              hasTouchB = true;
            }
          }

          if (!hasTouchA) {
            this._cameraTouchA = null;
          }

          if (!hasTouchB) {
            this._cameraTouchB = null;
          }
        }

        onKeyDown(event) {
          let keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this._keys.indexOf(keyCode) == -1) {
              this._keys.push(keyCode);

              this.updateDirection();
            }
          } else {
            let btnName = this._key2buttonMap[keyCode];

            if (btnName) {
              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).BUTTON, btnName);
            }
          }
        }

        onKeyUp(event) {
          let keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            let index = this._keys.indexOf(keyCode);

            if (index != -1) {
              this._keys.splice(index, 1);

              this.updateDirection();
            }
          }
        }

        onMouseWheel(event) {
          let delta = event.getScrollY() * 0.1;
          console.log(delta);

          this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, delta);
        }

        onButtonSlot(event) {
          let btnName = event.target.name;

          this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).BUTTON, btnName);
        }

        updateDirection() {
          if (this._key2dirMap == null) {
            this._key2dirMap = {};
            this._key2dirMap[0] = -1;
            this._key2dirMap[KeyCode.KEY_A] = 180;
            this._key2dirMap[KeyCode.KEY_D] = 0;
            this._key2dirMap[KeyCode.KEY_W] = 90;
            this._key2dirMap[KeyCode.KEY_S] = 270;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = 135;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = 45;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = 225;
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = 315;
            this._key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this._key2dirMap[KeyCode.KEY_D];
            this._key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this._key2dirMap[KeyCode.KEY_A];
            this._key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this._key2dirMap[KeyCode.KEY_S];
            this._key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this._key2dirMap[KeyCode.KEY_W];
          }

          let keyCode0 = this._keys[this._keys.length - 1] || 0;
          let keyCode1 = this._keys[this._keys.length - 2] || 0;
          this._degree = this._key2dirMap[keyCode1 * 1000 + keyCode0];

          if (this._degree == null || this._degree < 0) {
            this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
              error: Error()
            }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP);
          } else {
            this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
              error: Error()
            }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this._degree, 1.0);
          }
        }

      }, _class2._inst = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=115afd678fbce14e2765e8b0943cb0cc17ba718a.js.map