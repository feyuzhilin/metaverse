System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, v3, RigidBody, Vec3, find, Camera, SkeletalAnimation, AnimationClip, Collider, EasyController, EasyControllerEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, v3_1, CharacterMovement;

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
      v3 = _cc.v3;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      find = _cc.find;
      Camera = _cc.Camera;
      SkeletalAnimation = _cc.SkeletalAnimation;
      AnimationClip = _cc.AnimationClip;
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      EasyController = _unresolved_2.EasyController;
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d197aTs7v1GkpwypdJ1ezJ8", "CharacterMovement", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'v3', 'RigidBody', 'Vec3', 'find', 'Camera', 'SkeletalAnimation', 'AnimationClip', 'Collider', 'ICollisionEvent']);

      ({
        ccclass,
        property
      } = _decorator);
      v3_1 = v3();

      _export("CharacterMovement", CharacterMovement = (_dec = ccclass('CharacterMovement'), _dec2 = property(Camera), _dec3 = property(AnimationClip), _dec4 = property(AnimationClip), _dec5 = property(AnimationClip), _dec6 = property(AnimationClip), _dec7 = property(AnimationClip), _dec(_class = (_class2 = class CharacterMovement extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mainCamera", _descriptor, this);

          _initializerDefineProperty(this, "velocity", _descriptor2, this);

          _initializerDefineProperty(this, "jumpVelocity", _descriptor3, this);

          _initializerDefineProperty(this, "maxJumpTimes", _descriptor4, this);

          this._curJumpTimes = 0;

          _initializerDefineProperty(this, "idleAnimClip", _descriptor5, this);

          _initializerDefineProperty(this, "moveAnimClip", _descriptor6, this);

          _initializerDefineProperty(this, "jumpBeginAnimClip", _descriptor7, this);

          _initializerDefineProperty(this, "jumpLoopAnimClip", _descriptor8, this);

          _initializerDefineProperty(this, "jumpLandAnimClip", _descriptor9, this);

          this._rigidBody = void 0;
          this._isMoving = false;
          this._velocityScale = 1.0;
          this._isInTheAir = false;
          this._currentVerticalVelocity = 0.0;
          this._anim = void 0;
          this._tmp = v3();
        }

        start() {
          if (!this.mainCamera) {
            var _find;

            this.mainCamera = (_find = find('Main Camera')) == null ? void 0 : _find.getComponent(Camera);
          }

          this._rigidBody = this.node.getComponent(RigidBody);
          this._anim = this.node.getComponent(SkeletalAnimation);

          if (this._anim) {
            let clipArr = [this.idleAnimClip, this.moveAnimClip, this.jumpBeginAnimClip, this.jumpLoopAnimClip, this.jumpLandAnimClip];

            for (let i = 0; i < clipArr.length; ++i) {
              let clip = clipArr[i];

              if (clip) {
                if (!this._anim.getState(clip.name)) {
                  this._anim.addClip(clip);
                }
              }
            }

            if (this.idleAnimClip) {
              this._anim.play(this.idleAnimClip.name);
            }
          }

          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementRelease, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).BUTTON, this.onJump, this);
          let myCollider = this.getComponent(Collider);
          myCollider == null ? void 0 : myCollider.on('onCollisionEnter', target => {
            if (target.otherCollider != target.selfCollider) {
              this.onLand();
            }
          });
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementRelease, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onJump, this);
        }

        update(deltaTime) {
          if (this._isMoving) {
            this._tmp.set(this.node.forward);

            this._tmp.multiplyScalar(-1.0);

            this._tmp.multiplyScalar(this.velocity * this._velocityScale);

            if (this._rigidBody) {
              this._rigidBody.getLinearVelocity(v3_1);

              this._tmp.y = v3_1.y;

              this._rigidBody.setLinearVelocity(this._tmp);
            } else {
              this._tmp.multiplyScalar(deltaTime);

              this._tmp.add(this.node.position);

              this.node.setPosition(this._tmp);
            }
          }

          if (this._isInTheAir) {
            if (this.jumpBeginAnimClip && this._anim) {
              let state = this._anim.getState(this.jumpBeginAnimClip.name);

              if (state.isPlaying && state.current >= state.duration) {
                if (this.jumpLoopAnimClip) {
                  this._anim.crossFade(this.jumpLoopAnimClip.name);
                }
              }
            }

            if (!this._rigidBody) {
              this._currentVerticalVelocity -= 9.8 * deltaTime;
              let oldPos = this.node.position;
              let nextY = oldPos.y + this._currentVerticalVelocity * deltaTime;

              if (nextY <= 0) {
                this.onLand();
                nextY = 0.0;
              }

              this.node.setPosition(oldPos.x, nextY, oldPos.z);
            }
          }
        }

        onLand() {
          this._isInTheAir = false;
          this._currentVerticalVelocity = 0.0;
          this._curJumpTimes = 0;

          if (this.moveAnimClip) {
            if (this._isMoving) {
              this._anim.crossFade(this.moveAnimClip.name, 0.5);
            } else {
              this._anim.crossFade(this.idleAnimClip.name, 0.5);
            }
          }
        }

        onMovement(degree, offset) {
          let cameraRotationY = 0;

          if (this.mainCamera) {
            cameraRotationY = this.mainCamera.node.eulerAngles.y;
          }

          this._velocityScale = offset; //2D界面是 正X 为 0， 3D场景是 正前方为0，所以需要 - 90 度。（顺时针转90度）

          this._tmp.set(0, cameraRotationY + degree - 90 + 180, 0);

          this.node.setRotationFromEuler(this._tmp);

          if (this._anim) {
            if (!this._isMoving && !this._isInTheAir) {
              if (this.moveAnimClip) {
                this._anim.crossFade(this.moveAnimClip.name, 0.1);
              }
            }

            if (this.moveAnimClip) {
              this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale;
            }
          }

          this._isMoving = true;
        }

        onMovementRelease() {
          if (!this._isInTheAir && this.idleAnimClip) {
            var _this$_anim;

            (_this$_anim = this._anim) == null ? void 0 : _this$_anim.crossFade(this.idleAnimClip.name, 0.5);
          }

          this._isMoving = false;

          if (this._rigidBody) {
            this._rigidBody.setLinearVelocity(Vec3.ZERO);
          }
        }

        onJump(btnName) {
          console.log(btnName);

          if (btnName != 'btn_slot_0') {
            return;
          }

          if (this._curJumpTimes >= this.maxJumpTimes) {
            return;
          }

          if (this._curJumpTimes == 0 || true) {
            if (this.jumpBeginAnimClip) {
              var _this$_anim2;

              (_this$_anim2 = this._anim) == null ? void 0 : _this$_anim2.crossFade(this.jumpBeginAnimClip.name);
            }
          }

          this._curJumpTimes++;

          if (this._rigidBody) {
            this._rigidBody.getLinearVelocity(v3_1);

            v3_1.y = this.jumpVelocity;

            this._rigidBody.setLinearVelocity(v3_1);
          } else {
            this._currentVerticalVelocity = this.jumpVelocity;
          }

          this._isInTheAir = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jumpVelocity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxJumpTimes", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "idleAnimClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveAnimClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jumpBeginAnimClip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "jumpLoopAnimClip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "jumpLandAnimClip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05f583953705094ec7558100c1743cbdf967d8c7.js.map