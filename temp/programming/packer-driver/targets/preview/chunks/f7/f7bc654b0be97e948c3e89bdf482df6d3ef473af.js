System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, macro, view, game, profiler, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FullScreenCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      screen = _cc.screen;
      macro = _cc.macro;
      view = _cc.view;
      game = _cc.game;
      profiler = _cc.profiler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3adeHs1ohAOLMzNRNZmf98", "FullScreenCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'macro', 'view', 'director', 'game', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FullScreenCtrl", FullScreenCtrl = (_dec = ccclass('FullScreenCtrl'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class FullScreenCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnEnterFullScreen", _descriptor, this);

          _initializerDefineProperty(this, "btnExitFullScreen", _descriptor2, this);
        }

        start() {
          game.frameRate = 59;
        }

        onToggleStats() {
          if (profiler.isShowingStats()) {
            profiler.hideStats();
          } else {
            profiler.showStats();
          }
        }

        onEnterFullScreen() {
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          screen.requestFullScreen();
        }

        onExitFullScreen() {
          screen.exitFullScreen();
        }

        update() {
          var isFullScreen = screen.fullScreen();
          this.btnEnterFullScreen.active = !isFullScreen;
          this.btnExitFullScreen.active = isFullScreen;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnEnterFullScreen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnExitFullScreen", [_dec3], {
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
//# sourceMappingURL=f7bc654b0be97e948c3e89bdf482df6d3ef473af.js.map