System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, v3, EasyController, EasyControllerEvent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, v3_1, v3_2, ROTATION_STRENGTH, ThirdPersonCamera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyController(extras) {
    _reporterNs.report("EasyController", "./EasyController", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      EasyController = _unresolved_2.EasyController;
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "195f1/tNVtIs5euOncQEpW0", "ThirdPersonCamera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      v3_1 = v3();
      v3_2 = v3();
      ROTATION_STRENGTH = 20.0;

      _export("ThirdPersonCamera", ThirdPersonCamera = (_dec = ccclass('ThirdPersonCamera'), _dec2 = property(Node), _dec(_class = (_class2 = class ThirdPersonCamera extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "lookAtOffset", _descriptor2, this);

          _initializerDefineProperty(this, "zoomSensitivity", _descriptor3, this);

          _initializerDefineProperty(this, "lenMin", _descriptor4, this);

          _initializerDefineProperty(this, "lenMax", _descriptor5, this);

          _initializerDefineProperty(this, "len", _descriptor6, this);

          _initializerDefineProperty(this, "rotateVHSeparately", _descriptor7, this);

          _initializerDefineProperty(this, "tweenTime", _descriptor8, this);

          this._targetLen = 0;
          this._targetAngles = v3();
        }

        start() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, this.onCameraZoom, this);
          this._targetLen = this.len;

          this._targetAngles.set(this.node.eulerAngles);
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, this.onCameraZoom, this);
        }

        lateUpdate(deltaTime) {
          if (!this.target) {
            return;
          }

          var t = Math.min(deltaTime / this.tweenTime, 1.0); //rotation

          v3_1.set(this.node.eulerAngles);
          Vec3.lerp(v3_1, v3_1, this._targetAngles, t);
          this.node.setRotationFromEuler(v3_1); //lookat

          v3_1.set(this.target.worldPosition);
          v3_1.add(this.lookAtOffset); //len and position

          this.len = this.len * (1.0 - t) + this._targetLen * t;
          v3_2.set(this.node.forward);
          v3_2.multiplyScalar(this.len);
          v3_1.subtract(v3_2);
          this.node.setPosition(v3_1);
        }

        onCameraRotate(deltaX, deltaY) {
          var eulerAngles = this.node.eulerAngles;

          if (this.rotateVHSeparately) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
              deltaY = 0;
            } else {
              deltaX = 0;
            }
          }

          this._targetAngles.set(eulerAngles.x + deltaX * ROTATION_STRENGTH, eulerAngles.y + deltaY * ROTATION_STRENGTH, eulerAngles.z);
        }

        onCameraZoom(delta) {
          this._targetLen += delta * this.zoomSensitivity;

          if (this._targetLen < this.lenMin) {
            this._targetLen = this.lenMin;
          }

          if (this._targetLen > this.lenMax) {
            this._targetLen = this.lenMax;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zoomSensitivity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lenMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lenMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "len", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rotateVHSeparately", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tweenTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2d9bc0e82136d7c761f195df06e07ca6e8a5c9e.js.map