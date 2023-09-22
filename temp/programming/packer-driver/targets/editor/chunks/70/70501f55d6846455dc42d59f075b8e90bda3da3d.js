System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, EasyControllerEvent, EasyController, _crd;

  _export({
    EasyControllerEvent: void 0,
    EasyController: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc933ijiadBG47GZ61xXA52", "EasyController", undefined);

      __checkObsolete__(['_decorator', 'director']);

      _export("EasyControllerEvent", EasyControllerEvent = class EasyControllerEvent {});

      /**
      * Dispatched when camera rotating
      * @params rx: horizontal rotation
      * @params ry: vertical rotation.
      */
      EasyControllerEvent.CAMERA_ROTATE = 'EasyControllerEvent.CAMERA_ROTATE';

      /**
       * Dispatched when camera zooming
       * @params delta: amount of camera zoom
      */
      EasyControllerEvent.CAMERA_ZOOM = 'EasyControllerEvent.CAMERA_ZOOM';

      /**
       * Dispatched when the movement controller is moving
       * @param degree: direction in degrees, with positive X-axis as 0, increasing in a counter-clockwise direction.
       * @param strength: movement strength, [0.0, 1.0], can be used for fine-tuning the movement speed.
       */
      EasyControllerEvent.MOVEMENT = 'EasyControllerEvent.MOVEMENT';

      /**
       * Dispatched when the movement controller stops moving
       */
      EasyControllerEvent.MOVEMENT_STOP = 'EasyControllerEvent.MOVEMENT_STOP';

      /**
       * Dispatched when one of the buttons is pressed.
       * @param buttonName: string, indicates which button is pressed. 
       */
      EasyControllerEvent.BUTTON = 'EasyControllerEvent.BUTTON';

      _export("EasyController", EasyController = class EasyController {
        static on(type, callback, target) {
          director.getScene().on(type, callback, target);
        }

        static off(type, callback, target) {
          var _director$getScene;

          (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.off(type, callback, target);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70501f55d6846455dc42d59f075b8e90bda3da3d.js.map