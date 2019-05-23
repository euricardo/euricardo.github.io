webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-image-editor> </app-image-editor>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_image_editor_util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(utilService) {
        this.utilService = utilService;
        this.title = 'app';
    }
    AppComponent.prototype.onCropCancel = function () {
        this.utilService.canvasCommand('STOP_CROP', {});
    };
    AppComponent.prototype.onCropFinish = function () {
        this.utilService.canvasCommand('FINISH_CROP', {});
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "selectedToolType", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_image_editor_util_service__["a" /* UtilService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_editor_image_editor_module__ = __webpack_require__("../../../../../src/app/image-editor/image-editor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__image_editor_image_editor_module__["a" /* ImageEditorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.postJson = function (json) {
        this.http.post('YOUR_API_ENDPOINT', json, {}).subscribe(function (res) {
            // Handle Res
        }, function (err) {
            // Handle Error
        });
        // console.log(json);
    };
    ApiService.prototype.getJson = function () {
        // return this.http.get("YOUR_API_ENDPOINT");
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/canvas/canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas-wrapper {\n  border: 1px dashed #ccc;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='canvas-wrapper'>\n  <canvas id='canvas'></canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-editor/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric__ = __webpack_require__("../../../../fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fabric__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fabric_customise_controls__ = __webpack_require__("../../../../fabric-customise-controls/dist/customiseControls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fabric_customise_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fabric_customise_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/image-editor/api.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CanvasComponent = (function () {
    function CanvasComponent(utilService, renderer, zone, apiService) {
        var _this = this;
        this.utilService = utilService;
        this.renderer = renderer;
        this.zone = zone;
        this.apiService = apiService;
        // Undo/Redo 
        this.isRedoing = false;
        this.history = [];
        // Editor properties
        this.screenReductionFactor = 180;
        this.aspectRatioList = [(6 / 6), (8 / 6), (7 / 5), (6 / 4)];
        // Global Scope Tool values
        this.globalFilterValues = {
            brightness: 0,
            contrast: 0,
            saturation: 0,
            hue: 0,
            noise: 0,
            blur: 0,
            pixelate: 0,
            sharpen: false,
            emboss: false,
            grayscale: false,
            vintage: false,
            sepia: false,
            polaroid: false
        };
        // Tool default values
        this.defaultTextProps = {
            text: 'Sample Text',
            color: '#7F7F7F',
            opacity: 1,
            fontFamily: 'Roboto',
            fontSize: 24,
            fontWeight: 'normal',
            fontStyle: 'normal',
            underline: false,
            linethrough: false,
            textAlign: 'left',
            lineHeight: 1.6,
            charSpacing: 0
        };
        // canvas size preperty
        this.size = {
            height: Math.round(window.innerHeight - this.screenReductionFactor),
            width: Math.round((window.innerHeight - this.screenReductionFactor) * this.aspectRatioList[3]),
        };
        this.addImageSubscription = utilService.addImageToCanvas$.subscribe(function (url) {
            _this.addImageOnCanvas(url);
        });
        this.addImageFilterSubscription = utilService.addImageFilter$.subscribe(function (_a) {
            var filterScope = _a.filterScope, filterProps = _a.filterProps;
            switch (filterScope) {
                case 'SINGLE':
                    _this.applyFilterOnSingle(filterProps);
                    break;
                case 'ALL':
                    _this.applyFilterOnAll(filterProps);
                    break;
                default:
                    _this.applyFilterOnAll(filterProps);
                    break;
            }
        });
        this.onUpdateTextSubscription = utilService.onUpdateText$.subscribe(function (textProps) {
            switch (_this.toolType) {
                case 'TEXT':
                    _this.onUpdateText(textProps);
                    break;
                case 'TEXT:EDITING':
                    _this.onUpdateTextEditing(textProps);
                    break;
                default:
                    break;
            }
        });
        this.onUpdateShapeMaskSubscription = utilService.onUpdateShapeMask$.subscribe(function (shapeMaskProps) {
            _this.onUpdateShapeMask(shapeMaskProps);
        });
        this.onPanStateSubscription = utilService.panState$.subscribe(function (props) {
            switch (props) {
                case true:
                    _this.canvas.selection = false;
                    _this.canvas.forEachObject(function (o) {
                        o.selectable = false;
                    });
                    break;
                default:
                    _this.canvas.selection = true;
                    _this.canvas.forEachObject(function (o) {
                        o.selectable = true;
                    });
                    break;
            }
        });
        this.onUpdateStateSubscription = this.utilService.changeState$.subscribe(function (action) {
            switch (action) {
                case 'undo':
                    _this.undo();
                    break;
                case 'redo':
                    _this.redo();
                    break;
                default:
                    break;
            }
        });
        this.canvasCommandSubscription = utilService.canvasCommand$.subscribe(function (_a) {
            var toolType = _a.toolType, option = _a.option;
            switch (toolType) {
                case 'ADD_FILTER':
                    if (_this.activeObjectType === 'image') {
                        _this.toolType = 'FILTER:SINGLE';
                        _this.utilService.changeToolType('FILTER:SINGLE', _this.getActiveFilter(_this.activeObject));
                    }
                    else if (_this.activeObjectType === '') {
                        _this.toolType = 'FILTER:ALL';
                        _this.utilService.changeToolType('FILTER:ALL', _this.globalFilterValues);
                    }
                    break;
                case 'FILTER:ALL':
                    _this.cleanSelect();
                    _this.toolType = 'FILTER:ALL';
                    _this.utilService.changeToolType('FILTER:ALL', _this.globalFilterValues);
                    break;
                case 'ADD_TEXT':
                    _this.onAddText();
                    break;
                case 'CLEAN_SELECT':
                    _this.cleanSelect();
                    break;
                case 'BACK_TO_MAIN_MENU':
                    // turn off drawing mode
                    _this.stopPenMode();
                    // if object type is image and in filter single mode, don't clear selection
                    if (_this.activeObjectType !== 'image' && _this.toolType !== 'FILTER:ALL') {
                        _this.cleanSelect();
                    }
                    _this.toolType = 'MAIN';
                    break;
                case 'DELETE':
                    _this.removeSelection();
                    _this.onObjectDeselected();
                    break;
                case 'BRING_FORWARD':
                    _this.bringForward();
                    break;
                case 'SEND_BACKWARD':
                    _this.sendBackward();
                    break;
                case 'START_CROP':
                    _this.startCrop();
                    _this.utilService.changeToolType('CROP', {});
                    break;
                case 'STOP_CROP':
                    _this.onObjectDeselected();
                    break;
                case 'FINISH_CROP':
                    _this.cropSelectedWindow();
                    break;
                case 'FLIP:X':
                    _this.flipSelectedImage();
                    break;
                case 'CLONE':
                    _this.clone();
                    break;
                case 'ADD_SHAPE_MASK':
                    _this.addShapeMask(option);
                    break;
                case 'DOWNLOAD_CURRENT_CANVAS':
                    _this.downloadCurrentCanvas(option);
                    break;
                case 'UPLOAD_CURRENT_CANVAS':
                    _this.rasterizeJSON;
                    break;
                case 'PEN':
                    _this.startPenMode();
                    break;
                default:
                    break;
            }
        });
        this.changeCanvasSizeSubscription = utilService.changeCanvasSize$.subscribe(function (_a) {
            var orientation = _a.orientation, aspectRatio = _a.aspectRatio;
            if (orientation === 'LANDSCAPE') {
                _this.size.height = Math.round(window.innerHeight - _this.screenReductionFactor);
                _this.size.width = Math.round((window.innerHeight - _this.screenReductionFactor) * _this.aspectRatioList[aspectRatio]);
            }
            else {
                _this.size.height = Math.round(window.innerHeight - _this.screenReductionFactor);
                _this.size.width = Math.round((window.innerHeight - _this.screenReductionFactor) * Math.pow(_this.aspectRatioList[aspectRatio], -1));
            }
            _this.canvas.setWidth(_this.size.width);
            _this.canvas.setHeight(_this.size.height);
        });
        this.onUpdatePenSubscription = this.utilService.onChangeBrush$.subscribe(function (props) {
            var self = _this;
            // this.canvas.freeDrawingBrush.width = parseInt(props.width,10) || 1;
            // this.canvas.freeDrawingBrush.color = props.color;
            // this.canvas.
            if (props.style === 'hline') {
                _this.canvas.freeDrawingBrush = _this.vLinePatternBrush;
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color;
            }
            else if (props.style === 'vline') {
                _this.canvas.freeDrawingBrush = _this.hLinePatternBrush;
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color;
            }
            else if (props.style === 'square') {
                _this.canvas.freeDrawingBrush = _this.squarePatternBrush;
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color;
            }
            else if (props.style === 'diamond') {
                _this.canvas.freeDrawingBrush = _this.diamondPatternBrush;
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color;
            }
            else if (props.style === 'texture') {
                _this.canvas.freeDrawingBrush = _this.texturePatternBrush;
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color;
            }
            else {
                _this.canvas.freeDrawingBrush = new fabric[props.style + 'Brush'](self.canvas);
                _this.canvas.freeDrawingBrush.width = parseInt(props.width, 10) || 1;
                _this.canvas.freeDrawingBrush.color = props.color || '#000000';
            }
            // this.canvas.renderAll();
        });
    }
    // ------------------------------- image --------------------------------------
    CanvasComponent.prototype.onSelectImage = function (imageObject) {
        this.utilService.changeToolType('FILTER:SINGLE', this.getActiveFilter(imageObject));
    };
    CanvasComponent.prototype.addImageOnCanvas = function (url) {
        var _this = this;
        var self = this;
        if (url) {
            fabric.Image.fromURL(url, function (image) {
                var scaleXFactor = (_this.size.width - 20) / image.width;
                var scaleYFactor = scaleXFactor;
                image.set({
                    left: 0,
                    top: 0,
                    scaleX: scaleXFactor,
                    scaleY: scaleYFactor,
                    angle: 0,
                });
                _this.extend(image, _this.randomId());
                _this.canvas.add(image);
                //   this.canvas.setBackgroundImage(image, self.canvas.renderAll.bind(self.canvas), {
                //     scaleX: self.canvas.width / image.width,
                //     scaleY: self.canvas.height / image.height
                //  });
                // console.log(image)
                _this.selectItemAfterAdded(image);
            });
        }
    };
    CanvasComponent.prototype.applyFilterOnSingle = function (filterProps) {
        if (this.activeObjectType === 'image') {
            this.activeObject.filters = this.generateFilterArray(filterProps);
            this.activeObject.applyFilters();
            this.canvas.renderAll();
        }
    };
    CanvasComponent.prototype.applyFilterOnAll = function (filterProps) {
        this.globalFilterValues = filterProps;
        var globalFilter = this.generateFilterArray(filterProps);
        this.canvas.forEachObject(function (object) {
            if (object.type === 'image') {
                object.filters = globalFilter;
                object.applyFilters();
            }
        });
        this.canvas.renderAll();
    };
    // ------------------------------- undo/redo --------------------------------
    CanvasComponent.prototype.undo = function () {
        if (this.canvas._objects.length > 0) {
            this.history.push(this.canvas._objects.pop());
            this.canvas.discardActiveObject();
            this.canvas.renderAll();
        }
    };
    CanvasComponent.prototype.redo = function () {
        if (this.history.length > 0) {
            this.isRedoing = true;
            this.canvas.add(this.history.pop());
        }
    };
    // ------------------------------- image flip --------------------------------
    CanvasComponent.prototype.flipSelectedImage = function () {
        if (this.activeObjectType === 'image') {
            this.activeObject.flipX = this.activeObject.flipX ? !this.activeObject.flipX : true;
            this.canvas.renderAll();
        }
        else {
            this.utilService.openSnackBar("No image selected", 800);
        }
    };
    // ------------------------------- cropping -----------------------------------
    CanvasComponent.prototype.startCrop = function () {
        var self = this;
        // console.log('cropping started');
        this.cleanSelect();
        this.overlay = new fabric.Rect({
            left: 0,
            top: 0,
            fill: '#000000',
            opacity: 0.5,
            width: self.canvas.getWidth(),
            height: self.canvas.getHeight(),
        });
        this.canvas.add(this.overlay);
        this.canvas.forEachObject(function (object) {
            object.selectable = false;
        });
        this.croppingWindow = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'transparent',
            borderColor: '#ffffff',
            cornerColor: '#ffffff',
            borderOpacityWhenMoving: 1,
            hasRotatingPoint: false,
            padding: 0,
            width: 200,
            height: 200,
        });
        this.canvas.add(this.croppingWindow);
        this.selectItemAfterAdded(this.croppingWindow);
        this.canvas.renderAll();
    };
    CanvasComponent.prototype.cropSelectedWindow = function () {
        var _this = this;
        var width = this.croppingWindow.getScaledWidth();
        var height = this.croppingWindow.getScaledHeight();
        this.canvas.forEachObject(function (object) {
            if (object.type === 'image') {
                var objectWidth = object.getScaledWidth();
                var objectHeight = object.getScaledHeight();
                var x_1 = (objectWidth / 2) - (_this.croppingWindow.left - object.left);
                var y_1 = (objectHeight / 2) - (_this.croppingWindow.top - object.top);
                x_1 = x_1 * (1 / object.scaleX);
                y_1 = y_1 * (1 / object.scaleY);
                object.clipTo = function (ctx) {
                    ctx.rect((object.flipX ? 1 : -1) * x_1, -y_1, (object.flipX ? -1 : 1) * width * (1 / object.scaleX), height * (1 / object.scaleY));
                };
                object.left = -Math.abs(_this.croppingWindow.left);
                object.top = -Math.abs(_this.croppingWindow.top);
                object.setCoords();
            }
        });
        this.canvas.setWidth(width);
        this.canvas.setHeight(height);
        this.stopCrop();
    };
    CanvasComponent.prototype.stopCrop = function () {
        this.canvas.remove(this.overlay);
        this.canvas.remove(this.croppingWindow);
        this.canvas.forEachObject(function (object) {
            object.selectable = true;
        });
        this.canvas.renderAll();
        this.croppingWindow = undefined;
        this.overlay = undefined;
    };
    // ------------------------------- image cloning ------------------------------
    CanvasComponent.prototype.clone = function () {
        if (this.activeObjectType === 'image') {
            var clone = fabric.util.object.clone(this.activeObject);
            clone.set({ left: 10, top: 10 });
            this.canvas.add(clone);
            this.selectItemAfterAdded(clone);
        }
        else {
            this.utilService.openSnackBar('No image selected', 800);
        }
    };
    // ------------------------------- text -------------------------------------
    CanvasComponent.prototype.onSelectText = function (textObject) {
        this.utilService.changeToolType(this.toolType, {
            fontFamily: textObject['fontFamily'],
            fontSize: textObject['fontSize'],
            fontWeight: textObject['fontWeight'],
            fontStyle: textObject['fontStyle'],
            color: textObject['fill'],
            opacity: textObject['opacity'],
            underline: textObject['underline'],
            linethrough: textObject['linethrough'],
            textAlign: textObject['textAlign'],
            lineHeight: textObject['lineHeight'],
            charSpacing: textObject['charSpacing']
        });
    };
    CanvasComponent.prototype.onSelectTextEditing = function (textObject) {
        if (textObject.isEditing) {
            var startIndex = textObject.selectionStart;
            var endIndex = textObject.selectionEnd;
            if (startIndex !== endIndex) {
                this.utilService.changeToolType(this.toolType, textObject.getSelectionStyles()[0]);
            }
            else {
                this.utilService.changeToolType(this.toolType, {
                    isSelectionInactive: true
                });
            }
        }
    };
    CanvasComponent.prototype.onAddText = function () {
        var textObject = new fabric.Textbox(this.defaultTextProps['text'], {
            left: 10,
            top: 10,
            angle: 0,
            fontFamily: this.defaultTextProps['fontFamily'],
            fontSize: this.defaultTextProps['fontSize'],
            fontWeight: this.defaultTextProps['fontWeight'],
            fontStyle: this.defaultTextProps['fontStyle'],
            fill: this.defaultTextProps['color'],
            opacity: this.defaultTextProps['opacity'],
            underline: this.defaultTextProps['underline'],
            linethrough: this.defaultTextProps['linethrough'],
            textAlign: this.defaultTextProps['textAlign'],
            hasRotatingPoint: true,
            type: "i-text"
            // lockScalingX:true,
            // lockScalingY:true,
        });
        this.extend(textObject, this.randomId());
        this.canvas.add(textObject);
        this.selectItemAfterAdded(textObject);
    };
    CanvasComponent.prototype.onUpdateText = function (textProps) {
        // console.log(textProps, "Text Props")
        if (this.activeObjectType === 'i-text') {
            this.activeObject.set('fontFamily', textProps.fontFamily);
            this.activeObject.set('fontSize', textProps.fontSize);
            this.activeObject.set('fontWeight', textProps.fontWeight);
            this.activeObject.set('fontStyle', textProps.fontStyle);
            this.activeObject.set('fill', textProps.color);
            this.activeObject.set('opacity', textProps.opacity);
            this.activeObject.set('underline', textProps.underline);
            this.activeObject.set('linethrough', textProps.linethrough);
            this.activeObject.set('textAlign', textProps.textAlign);
            this.activeObject.set('lineHeight', textProps.lineHeight);
            this.activeObject.set('charSpacing', textProps.charSpacing);
        }
        this.canvas.renderAll();
    };
    CanvasComponent.prototype.onUpdateTextEditing = function (textProps) {
        if (this.activeObjectType === 'i-text') {
            if (this.activeObject.isEditing) {
                this.activeObject.setSelectionStyles(textProps);
            }
        }
        this.canvas.renderAll();
    };
    // ------------------------------- shape mask -------------------------------
    CanvasComponent.prototype.addShapeMask = function (shapeMaskProps) {
        var shapeToAdd;
        switch (shapeMaskProps.shape) {
            case 'RECTANGLE':
                shapeToAdd = new fabric.Rect({
                    top: 25,
                    left: 25,
                    height: 100,
                    width: 100,
                    fill: shapeMaskProps.color,
                    opacity: shapeMaskProps.opacity
                });
                break;
            case 'TRIANGLE':
                shapeToAdd = new fabric.Triangle({
                    top: 25,
                    left: 25,
                    height: 100,
                    width: 100,
                    fill: shapeMaskProps.color,
                    opacity: shapeMaskProps.opacity
                });
                break;
            case 'CIRCLE':
                shapeToAdd = new fabric.Circle({
                    top: 25,
                    left: 25,
                    radius: 50,
                    fill: shapeMaskProps.color,
                    opacity: shapeMaskProps.opacity
                });
                break;
            default:
                break;
        }
        shapeToAdd.setShadow({
            color: "rgba(0,0,0," + shapeMaskProps.shadowAmount + ")",
            blur: shapeMaskProps.shadowBlur,
            offsetX: shapeMaskProps.shadowOffsetX,
            offsetY: shapeMaskProps.shadowOffsetY
        });
        this.canvas.add(shapeToAdd);
        this.selectItemAfterAdded(shapeToAdd);
    };
    CanvasComponent.prototype.onSelectShapeMask = function () {
        if (this.activeObject) {
            // console.log(this.activeObject.shadow);
            this.utilService.changeToolType('SHAPE_MASK', {
                color: this.activeObject.fill,
                opacity: this.activeObject.opacity,
                shadowAmount: this.activeObject.shadow.color.split(',')[3].split(')')[0],
                shadowBlur: this.activeObject.shadow.blur,
                shadowOffsetX: this.activeObject.shadow.offsetX,
                shadowOffsetY: this.activeObject.shadow.offsetY
            });
        }
    };
    CanvasComponent.prototype.onUpdateShapeMask = function (shapeMaskProps) {
        if (this.activeObject && this.activeObjectType === 'shape-mask') {
            this.activeObject.set('fill', shapeMaskProps.color);
            this.activeObject.set('opacity', shapeMaskProps.opacity);
            this.activeObject.setShadow({
                color: "rgba(0,0,0," + shapeMaskProps.shadowAmount + ")",
                blur: shapeMaskProps.shadowBlur,
                offsetX: shapeMaskProps.shadowOffsetX,
                offsetY: shapeMaskProps.shadowOffsetY
            });
            this.canvas.renderAll();
        }
    };
    // ------------------------------- Pen --------------------------------------
    CanvasComponent.prototype.startPenMode = function () {
        this.canvas.isDrawingMode = true;
        this.canvas.forEachObject(function (object) {
            // keep the drawing objects selectable
            object.selectable = false;
        });
        this.cleanSelect();
        this.utilService.changeToolType('PEN', {});
    };
    CanvasComponent.prototype.stopPenMode = function () {
        this.canvas.isDrawingMode = false;
    };
    // ------------------------------- utility ----------------------------------
    CanvasComponent.prototype.getActiveFilter = function (imageObject) {
        var activeFilter = {
            brightness: 0,
            contrast: 0,
            saturation: 0,
            hue: 0,
            noise: 0,
            blur: 0,
            pixelate: 0,
            sharpen: false,
            emboss: false,
            grayscale: false,
            vintage: false,
            sepia: false,
            polaroid: false
        };
        imageObject.filters.map(function (filter) {
            switch (filter.type) {
                case 'Brightness':
                    activeFilter = __assign({}, activeFilter, { brightness: filter.brightness });
                    break;
                case 'Contrast':
                    activeFilter = __assign({}, activeFilter, { contrast: filter.contrast });
                    break;
                case 'Saturation':
                    activeFilter = __assign({}, activeFilter, { saturation: filter.saturation });
                    break;
                case 'HueRotation':
                    activeFilter = __assign({}, activeFilter, { hue: filter.rotation });
                    break;
                case 'Noise':
                    activeFilter = __assign({}, activeFilter, { noise: filter.noise });
                    break;
                case 'Blur':
                    activeFilter = __assign({}, activeFilter, { blur: filter.blur });
                    break;
                case 'Pixelate':
                    activeFilter = __assign({}, activeFilter, { pixelate: filter.blocksize });
                    break;
                case 'Grayscale':
                    activeFilter = __assign({}, activeFilter, { grayscale: true });
                    break;
                case 'Vintage':
                    activeFilter = __assign({}, activeFilter, { vintage: true });
                    break;
                case 'Sepia':
                    activeFilter = __assign({}, activeFilter, { sepia: true });
                    break;
                case 'Polaroid':
                    activeFilter = __assign({}, activeFilter, { polaroid: true });
                    break;
                case 'Convolute':
                    if (filter.matrix === [0, -1, 0, -1, 5, -1, 0, -1, 0]) {
                        activeFilter = __assign({}, activeFilter, { sharpen: true });
                    }
                    if (filter.matrix === [1, 1, 1, 1, 0.7, -1, -1, -1, -1]) {
                        activeFilter = __assign({}, activeFilter, { emboss: true });
                    }
                    break;
                default:
                    break;
            }
        });
        return activeFilter;
    };
    CanvasComponent.prototype.generateFilterArray = function (filterProps) {
        var filterArray = [];
        if (filterProps.brightness !== 0) {
            filterArray.push(new fabric.Image.filters.Brightness({
                brightness: filterProps.brightness
            }));
        }
        if (filterProps.contrast !== 0) {
            filterArray.push(new fabric.Image.filters.Contrast({
                contrast: filterProps.contrast
            }));
        }
        if (filterProps.saturation !== 0) {
            filterArray.push(new fabric.Image.filters.Saturation({
                saturation: filterProps.saturation
            }));
        }
        if (filterProps.hue !== 0) {
            filterArray.push(new fabric.Image.filters.HueRotation({
                rotation: filterProps.hue
            }));
        }
        if (filterProps.noise !== 0) {
            filterArray.push(new fabric.Image.filters.Noise({
                noise: filterProps.noise
            }));
        }
        if (filterProps.blur !== 0) {
            filterArray.push(new fabric.Image.filters.Blur({
                blur: filterProps.blur
            }));
        }
        if (filterProps.pixelate !== 0) {
            filterArray.push(new fabric.Image.filters.Pixelate({
                blocksize: filterProps.pixelate
            }));
        }
        if (filterProps.sharpen) {
            filterArray.push(new fabric.Image.filters.Convolute({
                matrix: [0, -1, 0,
                    -1, 5, -1,
                    0, -1, 0]
            }));
        }
        if (filterProps.emboss) {
            filterArray.push(new fabric.Image.filters.Convolute({
                matrix: [1, 1, 1,
                    1, 0.7, -1,
                    -1, -1, -1]
            }));
        }
        if (filterProps.grayscale) {
            filterArray.push(new fabric.Image.filters.Grayscale({
                mode: 'lightness'
            }));
        }
        if (filterProps.vintage) {
            filterArray.push(new fabric.Image.filters.Vintage());
        }
        if (filterProps.sepia) {
            filterArray.push(new fabric.Image.filters.Sepia());
        }
        if (filterProps.polaroid) {
            filterArray.push(new fabric.Image.filters.Polaroid());
        }
        return filterArray;
    };
    CanvasComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.discardActiveObject();
        this.canvas.setActiveObject(obj).renderAll();
    };
    CanvasComponent.prototype.getActiveSelection = function () {
        var selectionList = this.canvas.getActiveObjects();
        if (selectionList.length === 1) {
            var activeObject = selectionList[0];
            switch (activeObject.type) {
                case 'image':
                    return {
                        type: 'image',
                        activeObject: activeObject
                    };
                case 'i-text':
                    return {
                        type: 'i-text',
                        activeObject: activeObject
                    };
                case 'rect':
                    if (this.croppingWindow === undefined) {
                        return {
                            type: 'shape-mask',
                            activeObject: activeObject
                        };
                    }
                    else {
                        return {
                            type: 'cropping-window',
                            activeObject: activeObject
                        };
                    }
                case 'triangle':
                    return {
                        type: 'shape-mask',
                        activeObject: activeObject
                    };
                case 'circle':
                    return {
                        type: 'shape-mask',
                        activeObject: activeObject
                    };
                default:
                    return {
                        type: 'UNKNOWN'
                    };
            }
        }
        else {
            return {
                type: 'group',
                activeObjectList: selectionList
            };
        }
    };
    CanvasComponent.prototype.cleanSelect = function () {
        this.canvas.discardActiveObject().renderAll();
    };
    CanvasComponent.prototype.removeSelection = function () {
        var _this = this;
        if (this.activeObjectType === 'group') {
            this.activeObjectList.map(function (activeObject, index) {
                _this.canvas.remove(activeObject);
            }, this);
        }
        else {
            this.canvas.remove(this.activeObject);
        }
        this.cleanSelect();
    };
    CanvasComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    CanvasComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    CanvasComponent.prototype.bringForward = function () {
        if (this.activeObjectType !== 'group' && this.activeObject !== undefined) {
            this.activeObject.bringForward();
            this.canvas.discardActiveObject().renderAll();
        }
    };
    CanvasComponent.prototype.sendBackward = function () {
        if (this.activeObjectType !== 'group' && this.activeObject !== undefined) {
            this.activeObject.sendBackwards();
            this.canvas.discardActiveObject().renderAll();
        }
    };
    CanvasComponent.prototype.downloadCurrentCanvas = function (e) {
        var image = new Image();
        image.src = this.canvas.toDataURL('png');
        var w = window.open("");
        w.document.write(image.outerHTML);
    };
    // ------------------------- Canvas Event Handlers --------------------------
    CanvasComponent.prototype.onObjectSelected = function () {
        var activeObjectSelection = this.getActiveSelection();
        this.activeObjectType = activeObjectSelection.type;
        if (this.activeObjectType === 'group') {
            this.activeObjectList = activeObjectSelection.activeObjectList;
            this.utilService.onSelectionCreated(this.activeObjectList, this.activeObjectType, {});
            this.utilService.changeToolType('DEACTIVATE', {});
        }
        else {
            this.activeObject = activeObjectSelection.activeObject;
            switch (this.activeObjectType) {
                case 'i-text':
                    this.toolType = 'TEXT';
                    this.onSelectText(this.activeObject);
                    break;
                case 'image':
                    if (this.toolType === 'FILTER:ALL') {
                        this.toolType = 'FILTER:SINGLE';
                        this.onSelectImage(this.activeObject);
                    }
                    break;
                case 'shape-mask':
                    this.toolType = 'SHAPE_MASK';
                    this.onSelectShapeMask();
                    break;
                default:
                    break;
            }
            this.utilService.onSelectionCreated(this.activeObject, this.activeObjectType, {});
        }
    };
    CanvasComponent.prototype.onObjectDeselected = function () {
        // Turn off crop mode
        if (this.croppingWindow) {
            this.stopCrop();
        }
        switch (this.activeObjectType) {
            case 'image':
                // Don't change to MAIN menu for image
                if (this.toolType === 'FILTER:SINGLE') {
                    this.toolType = 'FILTER:ALL';
                }
                this.activeObjectType = '';
                this.activeObject = undefined;
                this.activeObjectList = [];
                this.utilService.changeToolType(this.toolType, this.activeObject);
                this.utilService.onSelectionCreated(this.activeObject, this.activeObjectType, {});
                break;
            default:
                this.toolType = 'MAIN';
                this.activeObjectType = '';
                this.activeObject = undefined;
                this.activeObjectList = [];
                this.utilService.changeToolType(this.toolType, this.activeObject);
                this.utilService.onSelectionCreated(this.activeObject, this.activeObjectType, {});
                break;
        }
    };
    CanvasComponent.prototype.onEnterningTextEditingMode = function () {
        var activeObjectSelection = this.getActiveSelection();
        this.toolType = 'TEXT:EDITING';
        this.activeObjectType = activeObjectSelection.type;
        this.activeObject = activeObjectSelection.activeObject;
        if (this.activeObjectType === 'i-text') {
            this.onSelectTextEditing(this.activeObject);
        }
    };
    CanvasComponent.prototype.onExitingTextEditingMode = function () {
        this.toolType = 'MAIN';
        this.activeObjectType = '';
        this.activeObject = undefined;
        this.activeObjectList = [];
        this.utilService.changeToolType(this.toolType, undefined);
    };
    CanvasComponent.prototype.onTextSelectionChange = function () {
        if (this.activeObjectType === 'i-text') {
            this.onSelectTextEditing(this.activeObject);
        }
    };
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // Setting up editor default setting
        this.toolType = 'MAIN';
        this.activeObjectType = '';
        this.activeObject = undefined;
        this.activeObjectList = [];
        // Setting up fabric object on canvas
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: '#B3E5FC',
            backgroundColor: '#ffffff'
        });
        this.canvas._stateProperties = true;
        fabric.textureSize = 4096;
        fabric.Object.prototype.customiseCornerIcons({
            settings: {
                borderColor: 'black',
                cornerSize: 10,
                cornerShape: 'circle',
                cornerBackgroundColor: '#2376C8',
                cornerPadding: 10
            }
        }, function () {
            self.canvas.renderAll();
        });
        // Initializing backend
        var webglBackend = new fabric.WebglFilterBackend();
        // var canvas2dBackend = new fabric.Canvas2dFilterBackend()
        fabric.filterBackend = fabric.initFilterBackend();
        // Default size of canvas
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
        // Keep Stacking Order On Select
        this.canvas.preserveObjectStacking = true;
        // Setup event listeners for canvas
        this.canvas.on({
            'selection:created': function (event) {
                // console.log('selection active');
                _this.onObjectSelected();
            },
            'selection:updated': function (event) {
                // same things as in created
                // console.log('selection updated');
                _this.onObjectSelected();
            },
            'selection:cleared': function (event) {
                // console.log('selection inactive');
                _this.onObjectDeselected();
            },
            'text:editing:entered': function (event) {
                // console.log('editing entered');
                _this.onEnterningTextEditingMode();
            },
            'text:editing:exited': function (event) {
                console.log('editing exit');
                _this.onExitingTextEditingMode();
            },
            'text:selection:changed': function (event) {
                // using preselected text object to optimize
                // console.log('selection change');
                _this.onTextSelectionChange();
            },
            'text:changed': function (event) {
                // console.log('text changed');
            },
            'object:added': function (event) {
                if (!_this.isRedoing) {
                    _this.history = [];
                }
                _this.isRedoing = false;
            },
            'mouse:down': function (opt) {
                var evt = opt.e;
                if (evt.altKey === true) {
                    this.isDragging = true;
                    this.selection = false;
                    this.lastPosX = evt.clientX;
                    this.lastPosY = evt.clientY;
                }
            },
            'mouse:move': function (opt) {
                if (this.isDragging) {
                    var e = opt.e;
                    this.viewportTransform[4] += e.clientX - this.lastPosX;
                    this.viewportTransform[5] += e.clientY - this.lastPosY;
                    this.requestRenderAll();
                    this.lastPosX = e.clientX;
                    this.lastPosY = e.clientY;
                }
            },
            'mouse:up': function (opt) {
                this.isDragging = false;
                this.selection = true;
            },
            'object:moving': function (e) {
                var obj = e.target;
                // if object is too big ignore
                if (obj.getScaledHeight() > obj.canvas.height || obj.getScaledWidth() > obj.canvas.width) {
                    return;
                }
                obj.setCoords();
                // top-left  corner
                if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
                    obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
                    obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
                }
                // bot-right corner
                if (obj.getBoundingRect().top + obj.getBoundingRect().height > obj.canvas.height || obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
                    obj.top = Math.min(obj.top, obj.canvas.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
                    obj.left = Math.min(obj.left, obj.canvas.width - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
                }
            }
        });
        if (fabric.PatternBrush) {
            this.vLinePatternBrush = new fabric.PatternBrush(this.canvas);
            this.vLinePatternBrush.getPatternSrc = function () {
                var patternCanvas = fabric.document.createElement('canvas');
                patternCanvas.width = patternCanvas.height = 10;
                var ctx = patternCanvas.getContext('2d');
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(0, 5);
                ctx.lineTo(10, 5);
                ctx.closePath();
                ctx.stroke();
                return patternCanvas;
            };
            this.hLinePatternBrush = new fabric.PatternBrush(this.canvas);
            this.hLinePatternBrush.getPatternSrc = function () {
                var patternCanvas = fabric.document.createElement('canvas');
                patternCanvas.width = patternCanvas.height = 10;
                var ctx = patternCanvas.getContext('2d');
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(5, 0);
                ctx.lineTo(5, 10);
                ctx.closePath();
                ctx.stroke();
                return patternCanvas;
            };
            this.squarePatternBrush = new fabric.PatternBrush(this.canvas);
            this.squarePatternBrush.getPatternSrc = function () {
                var squareWidth = 10, squareDistance = 2;
                var patternCanvas = fabric.document.createElement('canvas');
                patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
                var ctx = patternCanvas.getContext('2d');
                ctx.fillStyle = this.color;
                ctx.fillRect(0, 0, squareWidth, squareWidth);
                return patternCanvas;
            };
            this.diamondPatternBrush = new fabric.PatternBrush(this.canvas);
            this.diamondPatternBrush.getPatternSrc = function () {
                var squareWidth = 10, squareDistance = 5;
                var patternCanvas = fabric.document.createElement('canvas');
                var rect = new fabric.Rect({
                    width: squareWidth,
                    height: squareWidth,
                    angle: 45,
                    fill: this.color
                });
                var canvasWidth = rect.getBoundingRect().width;
                patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
                rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });
                var ctx = patternCanvas.getContext('2d');
                rect.render(ctx);
                return patternCanvas;
            };
        }
        this.loadCanvasFromJSON();
    };
    CanvasComponent.prototype.loadCanvasFromJSON = function () {
        // this.apiService.getJson().subscribe((json) => {
        //   this.canvas.loadFromJSON(json, () => {
        //     this.canvas.renderAll();
        //   });
        // })
    };
    ;
    CanvasComponent.prototype.rasterizeJSON = function () {
        var json = JSON.stringify(this.canvas, null, 2);
        console.log(json, "This is json");
        this.apiService.postJson(json);
    };
    CanvasComponent.prototype.ngOnDestroy = function () {
        this.canvas.off();
        // this.windowResizeSubscription.unsubscribe();
        // this.objectResizeSubscription.unsubscribe();
        this.onUpdatePenSubscription.unsubscribe();
        this.addImageSubscription.unsubscribe();
        this.addImageFilterSubscription.unsubscribe();
        this.onUpdateTextSubscription.unsubscribe();
        this.onUpdateShapeMaskSubscription.unsubscribe();
        this.canvasCommandSubscription.unsubscribe();
    };
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-canvas',
            template: __webpack_require__("../../../../../src/app/image-editor/canvas/canvas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/canvas/canvas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/image-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editor-container {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  overflow: hidden;\n}\n\n.menubar-container {\n  padding-left: 3rem;\n  height: 55px;\n  z-index: 9999;\n  position: absolute;\n  background: #4f4f4f; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */ /* Firefox 3.5 - 3.6 */\n  box-shadow: 0px 1px 2px 1px #000; /*     Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.work-panel {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  outline: none;\n  height: 43.4rem;\n}\n\n.canvas-container {\n  outline: none;\n  padding: 16px;\n  outline: none;\n  background: #ffffff;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.sidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 5rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 48px;\n  z-index: 9999;\n}\n\n.sidebar .btn-group {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.btn-group button.btn.btn-secondary {\n  border: none;\n}\n\n.zoom-controls {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  z-index: 9999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/image-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-container\">\n    <div class=\"menubar-container\">\n        <app-menubar></app-menubar>\n\n    </div>\n    <div class=\"sidebar\">\n        <app-toolbar></app-toolbar>\n        <app-image-picker></app-image-picker>\n    </div>\n    <div class=\"work-panel\">\n        <div class='canvas-container' id='canvas-container' [style.transform]=\"'scale(' + c + ')'\">\n            <app-canvas id=\"app-canvas\"></app-canvas>\n        </div>\n        <div class=\"btn-group zoom-controls\">\n            <button class=\"btn btn-primary\" (click)=\"zoomOut()\">\n                <i class=\"material-icons icons\">remove</i>\n            </button>\n            <button class=\"btn btn-primary\">{{(c*100).toFixed()}}%</button>\n            <button class=\"btn btn-primary\" (click)=\"zoomIn()\">\n                <i class=\"material-icons icons\">add</i>\n            </button>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-editor/image-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageEditorComponent = (function () {
    function ImageEditorComponent(utilService, snackBar, zone) {
        var _this = this;
        this.utilService = utilService;
        this.snackBar = snackBar;
        this.zone = zone;
        this.c = 1;
        this.openSnackBarSubscription = utilService.openSnackBar$.subscribe((function (_a) {
            var message = _a.message, duration = _a.duration;
            _this.snackBar.open(message, undefined, {
                duration: duration
            });
        }));
    }
    ImageEditorComponent.prototype.ngOnInit = function () {
    };
    ImageEditorComponent.prototype.zoomOut = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.c > 0.3) {
                _this.c = _this.c - 0.1;
            }
        });
    };
    ImageEditorComponent.prototype.zoomIn = function () {
        var _this = this;
        this.zone.run(function () {
            if (_this.c < 2.0) {
                _this.c = _this.c + 0.1;
            }
        });
    };
    ImageEditorComponent.prototype.ngOnDestroy = function () {
        this.openSnackBarSubscription.unsubscribe();
    };
    ImageEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-image-editor',
            template: __webpack_require__("../../../../../src/app/image-editor/image-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/image-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], ImageEditorComponent);
    return ImageEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/image-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_canvas_component__ = __webpack_require__("../../../../../src/app/image-editor/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_editor_component__ = __webpack_require__("../../../../../src/app/image-editor/image-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_picker_image_picker_component__ = __webpack_require__("../../../../../src/app/image-editor/image-picker/image-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menubar_menubar_component__ = __webpack_require__("../../../../../src/app/image-editor/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_service__ = __webpack_require__("../../../../../src/app/image-editor/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toolbar_main_tools_main_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbar_filter_tools_filter_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toolbar_text_tools_text_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toolbar_crop_tools_crop_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toolbar_shape_mask_tools_shape_mask_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbar_pen_tools_pen_tools_component__ = __webpack_require__("../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ImageEditorModule = (function () {
    function ImageEditorModule() {
    }
    ImageEditorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__["a" /* PerfectScrollbarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__canvas_canvas_component__["a" /* CanvasComponent */], __WEBPACK_IMPORTED_MODULE_6__image_editor_component__["a" /* ImageEditorComponent */], __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_8__image_picker_image_picker_component__["a" /* ImagePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menubar_menubar_component__["a" /* MenubarComponent */], __WEBPACK_IMPORTED_MODULE_12__toolbar_main_tools_main_tools_component__["a" /* MainToolsComponent */], __WEBPACK_IMPORTED_MODULE_13__toolbar_filter_tools_filter_tools_component__["a" /* FilterToolsComponent */], __WEBPACK_IMPORTED_MODULE_14__toolbar_text_tools_text_tools_component__["a" /* TextToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__toolbar_crop_tools_crop_tools_component__["a" /* CropToolsComponent */], __WEBPACK_IMPORTED_MODULE_16__toolbar_shape_mask_tools_shape_mask_tools_component__["a" /* ShapeMaskToolsComponent */], __WEBPACK_IMPORTED_MODULE_17__toolbar_pen_tools_pen_tools_component__["a" /* PenToolsComponent */],],
            exports: [__WEBPACK_IMPORTED_MODULE_6__image_editor_component__["a" /* ImageEditorComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_11__api_service__["a" /* ApiService */]]
        })
    ], ImageEditorModule);
    return ImageEditorModule;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/image-picker/image-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.thumbnail-wrapper {\n  position: relative;\n  z-index: 8;\n  height: 100%;\n  overflow-y:auto;\n  max-height:23rem;\n \n  display: inline-block;\n  width: calc(49% - 8px);\n  margin: 0px 4px 4px 4px;\n}\n\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #8d8c8c;\n}\n\n\n\n.thumbnail:hover {\n  cursor: pointer;\n  border: 1px solid #bd40ee;\n}\n/* .btn.btn-secondary,\n.sidebar,\n.photo-slider{\n  background: #4F4F4F;\n} */\n\n.photo-slider{\n  width:15rem;\n  height:25rem;\n  border-radius: 0.25rem;\n    /* max-height: 23rem; */\n  /* overflow-y:scroll; */\n  position: absolute;\n  top:5rem;\n  left:4rem;\n}\n\n.upload-header{\n  height:2.5rem;  \n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  position:-webkit-sticky;\n  position:sticky;\n  z-index: 9999;\n  top:0;\n  left:0;\nwidth:100%;\n}\n\n.holder{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.empty-state{\n  text-align:center;\n  margin-top: 5rem;\n}\n.empty-state img{\n  width: 6rem;\n  height:6rem;\n  \n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/image-picker/image-picker.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"holder\">\n    <button matTooltip=\"Upload Images\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" id='upload-file-button'  (click)=\"show()\"> <i class=\"material-icons icons\">add_a_photo</i>\n      <input type=\"file\" id=\"upload-file-input\" style=\"display:none;\" multiple accept=\"image/*\" (change)=\"onUpload($event)\"/>\n    </button>\n    <button matTooltip=\"Delete Selected\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"onRemoveObjectFromCanvas()\" *ngIf=\"selection!==undefined\"><i class=\"material-icons\">delete_forever</i></button>\n  </div>\n  <div class=\"photo-slider\" *ngIf=\"showLibrary\">\n  <div class=\"upload-header text-center\">\n          <button class=\"btn btn-secondary mt-1 btn-link btn-sm\" (click)=\"onUploadButtonTrigger()\" >Upload From Computer</button>\n          <button class=\"btn btn-secondary close-library btn-sm pr-0 pb-0 pull-right mt-1\"  (click)=\"dismiss()\"> <i class=\"material-icons icons\">clear</i>\n          </button>\n  </div>\n  <ng-container *ngIf=\"fileUrlList.length > 0;else empty\">\n      <perfect-scrollbar style=\"max-width:25rem; max-height: 22rem;\">\n          <div *ngFor=\"let url of fileUrlList\" class=\"thumbnail-wrapper\" >\n              <img [src]=\"url\" (click)=\"addImageOnCanvas(url);\" class=\"thumbnail\" />\n            </div>\n        </perfect-scrollbar>\n  </ng-container>\n<ng-template #empty>\n    <div class=\"empty-state\">\n        <img src=\"../../../assets/img/empty.svg\" alt=\"No Images In Your Library\">\n        <span class=\"header\">Whoops Daisy!!</span>\n        <span class=\"message\">You dont have any images uploaded yet. Get started by clicking the button below.</span>\n        <button class=\"btn btn-warning btn-lg mt-2 btn-sm\" id='upload-file-button'  (click)=\"onUploadButtonTrigger()\"> Upload Pictures\n          <input type=\"file\" id=\"upload-file-input\" style=\"display:none;\" multiple accept=\"image/*\" (change)=\"onUpload($event)\"/>\n        </button>\n    </div>\n</ng-template>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/image-editor/image-picker/image-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagePickerComponent = (function () {
    function ImagePickerComponent(utilService) {
        var _this = this;
        this.utilService = utilService;
        this.fileUrlList = [];
        this.showLibrary = false;
        this.selection = undefined;
        this.onSelectionCreatedSubscription = utilService.onSelectionCreated$.subscribe(function (_a) {
            var selection = _a.selection;
            _this.selection = selection;
        });
        this.index = 1;
        this.orientation = 'LANDSCAPE';
    }
    ImagePickerComponent.prototype.onUploadButtonTrigger = function () {
        this.fileInputElement.click();
    };
    ImagePickerComponent.prototype.show = function () {
        this.showLibrary = true;
    };
    ImagePickerComponent.prototype.dismiss = function () {
        // console.log("Dismissed")
        this.showLibrary = false;
    };
    ImagePickerComponent.prototype.onUpload = function (event) {
        var _this = this;
        if (event.target.files) {
            for (var i = 0, file = void 0; file = event.target.files[i]; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.fileUrlList = _this.fileUrlList.concat([event.target['result']]);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    ImagePickerComponent.prototype.onClearByIndex = function (indexToRemove) {
        this.fileUrlList = this.fileUrlList.filter(function (url, index) { return index !== indexToRemove; });
    };
    ImagePickerComponent.prototype.onClearAll = function () {
        this.fileUrlList = [];
    };
    ImagePickerComponent.prototype.onRemoveObjectFromCanvas = function () {
        this.utilService.canvasCommand('DELETE', {});
    };
    ImagePickerComponent.prototype.addImageOnCanvas = function (url) {
        this.utilService.addImageToCanvas(url);
    };
    ImagePickerComponent.prototype.changeAspectRatio = function (index) {
        this.index = index;
        this.utilService.changeCanvasSize(this.orientation, index);
    };
    ImagePickerComponent.prototype.changeOrientation = function (orientation) {
        this.orientation = orientation;
        this.utilService.changeCanvasSize(orientation, this.index);
    };
    ImagePickerComponent.prototype.ngOnInit = function () {
        this.fileInputElement = document.getElementById('upload-file-input');
    };
    ImagePickerComponent.prototype.ngOnDestroy = function () {
        this.onSelectionCreatedSubscription.unsubscribe();
    };
    ImagePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-image-picker',
            template: __webpack_require__("../../../../../src/app/image-editor/image-picker/image-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/image-picker/image-picker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], ImagePickerComponent);
    return ImagePickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/menubar/menubar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menubar-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width:100%;\n z-index: 9999;\n  margin: 0px 16px 0px 16px;\n  width: calc(100vw - 32px);\n  height: 100%;\n}\n\n.project-name-wrapper {\n  margin: 8px 0px 8px 0px;\n  width: 15vw;\n}\n\napp-shape-mask-tools{\n  width: 100% !important;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menubar\" class=\"menubar-wrapper\">\n  <app-text-tools [selectedToolType]=\"selectedToolType\" [activeObjectProps]=\"activeObjectProps\" *ngIf=\"selectedToolType==='TEXT' || selectedToolType==='TEXT:EDITING'\"></app-text-tools>\n  <app-crop-tools [selectedToolType]=\"selectedToolType\" *ngIf=\"selectedToolType==='CROP'\"></app-crop-tools>\n  <app-pen-tools [selectedToolType]=\"selectedToolType\" [activeObjectProps]=\"activeObjectProps\" *ngIf=\"selectedToolType==='PEN'\"></app-pen-tools>\n  <app-filter-tools [selectedToolType]=\"selectedToolType\" [activeObjectProps]=\"activeObjectProps\" *ngIf=\"selectedToolType==='FILTER:ALL' || selectedToolType==='FILTER:SINGLE'\"></app-filter-tools>\n  <app-shape-mask-tools [selectedToolType]=\"selectedToolType\" [activeObjectProps]=\"activeObjectProps\" *ngIf=\"selectedToolType==='SHAPE_MASK'\"></app-shape-mask-tools>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/image-editor/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenubarComponent = (function () {
    function MenubarComponent(utilService) {
        var _this = this;
        this.utilService = utilService;
        this.selectedToolTypeList = [
            'MAIN',
            'TEXT',
            'TEXT:EDITING',
            'CROP',
            'PREVIEW',
            'FILTER:ALL',
            'FILTER:SINGLE',
            'SHAPE_MASK',
            'PEN',
            'DEACTIVATE'
        ];
        this.selectedToolType = this.selectedToolTypeList[1];
        this.onChangeToolTypeSubscription = utilService.changeToolType$.subscribe(function (_a) {
            var toolType = _a.toolType, activeObjectProps = _a.activeObjectProps;
            if (activeObjectProps) {
                _this.activeObjectProps = activeObjectProps;
            }
            _this.onChangeToolType(toolType);
        });
        this.onSelectionCreatedSubscription = utilService.onSelectionCreated$.subscribe(function (_a) {
            var selection = _a.selection, selectionType = _a.selectionType;
            _this.selectionType = selectionType;
            _this.selection = selection;
        });
    }
    MenubarComponent.prototype.onChangeToolType = function (toolType) {
        this.selectedToolType = toolType;
    };
    MenubarComponent.prototype.ngOnInit = function () {
        this.projectName = "New Project";
    };
    MenubarComponent.prototype.ngOnDestroy = function () {
        this.onChangeToolTypeSubscription.unsubscribe();
        this.onSelectionCreatedSubscription.unsubscribe();
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-menubar',
            template: __webpack_require__("../../../../../src/app/image-editor/menubar/menubar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/menubar/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n<button  class=\"btn btn-secondary btn-sm\" (click)=\"onCropCancel()\">CANCEL</button>\n<button class=\"btn btn-secondary btn-sm\" (click)=\"onCropFinish()\">CROP</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CropToolsComponent = (function () {
    function CropToolsComponent(utilService) {
        this.utilService = utilService;
    }
    CropToolsComponent.prototype.onCropCancel = function () {
        this.utilService.canvasCommand('STOP_CROP', {});
    };
    CropToolsComponent.prototype.onCropFinish = function () {
        this.utilService.canvasCommand('FINISH_CROP', {});
    };
    CropToolsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CropToolsComponent.prototype, "selectedToolType", void 0);
    CropToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-crop-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/crop-tools/crop-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], CropToolsComponent);
    return CropToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* component globals */\n\n.icons {\n  color: #dddbdb;\n}\n\n.slider-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0px 8px 0px 0px;\n}\n\n.slider {\n  width: 100%;\n}\n\n.picker-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 2px 0px 0px 4px;\n}\n\n.panel-container {\n  width: 100%;\n  margin: 8px 0px 0px 0px;\n}\n\n/* component specific */\n\n.ilter-scope-container {\n  margin: 4px 0px 0px 0px;\n}\n\n.button-container {\n  width: 100%;\n  margin: 8px 0px 0px 0px;\n}\n\n.button {\n  width: calc(100% - 16px);\n  margin: 0px 8px 0px 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <button   class=\"btn btn-secondary\" data-toggle=\"button\" [ngClass]=\"emboss ? 'active-button' : '' \"  (click)=\"togglePreset('emboss'); emboss = !emboss\">EMBOSS</button>\n    <button  class=\"btn btn-secondary\"  [ngClass]=\"grayscale ? 'active-button' : '' \" (click)=\"togglePreset('grayscale'); grayscale = !grayscale\">GRAYSCALE</button>\n    <button  class=\"btn btn-secondary\" [ngClass]=\"vintage ? 'active-button' : '' \" (click)=\"togglePreset('vintage'); vintage = !vintage\">VINTAGE</button>\n    <button  class=\"btn btn-secondary\" [ngClass]=\"sepia ? 'active-button' : '' \" (click)=\"togglePreset('sepia'); sepia = !sepia\">SEPIA</button>\n    <button  class=\"btn btn-secondary\" [ngClass]=\"polaroid ? 'active-button' : '' \"  (click)=\"togglePreset('polaroid'); polaroid = !polaroid\">POLAROID</button>\n  "

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterToolsComponent = (function () {
    function FilterToolsComponent(utilService) {
        this.utilService = utilService;
        this.panelType = 'PRESET';
    }
    FilterToolsComponent.prototype.onPanelChange = function (panelType) {
        this.panelType = panelType;
    };
    FilterToolsComponent.prototype.toggleScope = function (filterScope) {
        this.filterScope = filterScope;
        if (this.filterScope === 'ALL') {
            this.utilService.canvasCommand('FILTER:ALL', {});
        }
    };
    FilterToolsComponent.prototype.togglePreset = function (presetType) {
        this.filterValues = __assign({}, this.filterValues, (_a = {}, _a["" + presetType] = !this.filterValues["" + presetType], _a));
        this.onFilterUpdate();
        var _a;
    };
    FilterToolsComponent.prototype.onFilterUpdate = function () {
        this.utilService.addImageFilter(this.filterScope, this.filterValues);
    };
    FilterToolsComponent.prototype.onSetToDefault = function (filterType) {
        switch (filterType) {
            case 'brightness':
                this.filterValues = __assign({}, this.filterValues, { brightness: 0 });
                break;
            case 'contrast':
                this.filterValues = __assign({}, this.filterValues, { contrast: 0 });
                break;
            case 'saturation':
                this.filterValues = __assign({}, this.filterValues, { saturation: 0 });
                break;
            case 'hue':
                this.filterValues = __assign({}, this.filterValues, { hue: 0 });
                break;
            case 'noise':
                this.filterValues = __assign({}, this.filterValues, { noise: 0 });
                break;
            case 'blur':
                this.filterValues = __assign({}, this.filterValues, { blur: 0 });
                break;
            case 'pixelate':
                this.filterValues = __assign({}, this.filterValues, { pixelate: 0 });
                break;
            default:
                break;
        }
        this.onFilterUpdate();
    };
    FilterToolsComponent.prototype.ngOnInit = function () {
        this.filterScope = this.filterScope;
        this.filterValues = this.activeObjectProps;
    };
    FilterToolsComponent.prototype.ngOnChanges = function () {
        if (this.selectedToolType === 'FILTER:ALL') {
            this.filterScope = 'ALL';
        }
        else if (this.selectedToolType === 'FILTER:SINGLE') {
            this.filterScope = 'SINGLE';
        }
        this.filterValues = this.activeObjectProps;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FilterToolsComponent.prototype, "selectedToolType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FilterToolsComponent.prototype, "activeObjectProps", void 0);
    FilterToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-filter-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/filter-tools/filter-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], FilterToolsComponent);
    return FilterToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons {\n  color: #dddbdb;\n}\n.btn.btn-secondary,\n.sidebar{\n  background: #4F4F4F;\n}\n\n.btn.btn-secondary{\n  border:none;\n}\n\n.btn-group button.btn.btn-secondary{\n  border:none;\n}\n\n.holder{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"holder\">\n    <button matTooltip=\"Crop\" matTooltipPosition=\"right\" (click)=\"canvasCommand('START_CROP',$event)\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">crop</i></button>\n      <button matTooltip=\"Clone Image\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\" (click)=\"canvasCommand('CLONE',$event)\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">content_copy</i></button>\n      <button matTooltip=\"Text\" matTooltipPosition=\"right\" (click)=\"canvasCommand('ADD_TEXT',$event)\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">text_fields</i></button>\n      <button matTooltip=\"Flip Horizontally\" matTooltipPosition=\"right\" (click)=\"canvasCommand('FLIP:X',$event)\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">flip</i></button>\n      <button matTooltip=\"Photo Filter\" matTooltipPosition=\"right\" (click)=\"canvasCommand('ADD_FILTER',$event)\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">format_paint</i></button>\n      <button matTooltip=\"Shape Mask\" matTooltipPosition=\"right\" (click)=\"onChangeToolType('SHAPE_MASK')\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">filter_b_and_w</i></button>\n     \n      <button matTooltip=\"Pen\" matTooltipPosition=\"right\" (click)=\"canvasCommand('PEN',$event)\" class=\"btn btn-secondary btn-sm\" [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">mode_edit</i></button>\n      <button matTooltip=\"Save Photo\" matTooltipPosition=\"right\" (click)=\"canvasCommand('UPLOAD_CURRENT_CANVAS', $event)\" class=\"btn btn-secondary btn-sm\"\n      [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">cloud_upload</i></button>\n      <button matTooltip=\"Save Photo\" matTooltipPosition=\"right\" (click)=\"canvasCommand('DOWNLOAD_CURRENT_CANVAS', $event)\" class=\"btn btn-secondary btn-sm\"\n      [disabled]=\"selectedToolType==='DEACTIVATE'\"><i class=\"material-icons\" [ngClass]=\"{'icons':selectedToolType!=='DEACTIVATE'}\">save</i></button>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainToolsComponent = (function () {
    function MainToolsComponent(utilService) {
        this.utilService = utilService;
    }
    MainToolsComponent.prototype.onChangeToolType = function (toolType) {
        this.utilService.changeToolType(toolType, {});
    };
    MainToolsComponent.prototype.canvasCommand = function (toolType, e) {
        this.utilService.canvasCommand(toolType, { e: e });
    };
    MainToolsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MainToolsComponent.prototype, "selectedToolType", void 0);
    MainToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/main-tools/main-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], MainToolsComponent);
    return MainToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* component globals */\n\n.icons {\n  color: #dddbdb;\n}\n\n\n.slider-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0px 8px 0px 0px;\n}\n\n.slider {\n  width: 100%;\n}\n\n.picker-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* component specific */\n\n.font-size-text {\n  height: 40px;\n  width: 40px;\n  color: #eeeeee;\n  line-height: 40px;\n  vertical-align: middle;\n  text-align: center;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- text align -->\n<div *ngIf=\"selectedToolType!=='TEXT:EDITING'\" class=\"btn-toolbar justify-content-between\" role=\"toolbar\">\n  <div class=\"btn-group mr-2\" role=\"group\">\n    <button matTooltip=\"Color Picker\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" [(colorPicker)]=\"color\" (colorPickerChange)=\"onUpdateBrush()\"\n      [cpWidth]=\"196\" [cpPosition]=\"'bottom'\" [cpPositionOffset]=\"'50%'\" [cpPositionRelativeToArrow]=\"true\" [cpSaveClickOutside]=\"true\">\n      <i [style.color]=\"color \" class=\"material-icons icons\">color_lens</i>\n    </button>\n    <button matTooltip=\"Pencil\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('Pencil')\">\n      <i [ngClass]=\"{'active-icon':brushType==='left'}\" class=\"material-icons icons\">border_color</i>\n    </button>\n\n    <button matTooltip=\"Circle\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('Circle')\">\n      <i [ngClass]=\"{'active-icon':brushType==='center'}\" class=\"material-icons icons\">bubble_chart</i>\n    </button>\n\n    <button matTooltip=\"Spray\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('Spray')\">\n      <i [ngClass]=\"{'active-icon':brushType==='right'}\" class=\"material-icons icons\">blur_on</i>\n    </button>\n\n    <button matTooltip=\"Circle Pattern\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('Pattern')\">\n      <i [ngClass]=\"{'active-icon':brushType==='justify'}\" class=\"material-icons icons\">grain</i>\n    </button>\n\n    <button matTooltip=\"Horizontal Pattern\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('hline')\">\n      <i [ngClass]=\"{'active-icon':brushType==='left'}\" class=\"material-icons icons\">border_horizontal</i>\n    </button>\n\n    <button matTooltip=\"Vertical Pattern\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('vline')\">\n      <i [ngClass]=\"{'active-icon':brushType==='center'}\" class=\"material-icons icons\">border_vertical</i>\n    </button>\n\n    <button matTooltip=\"Square Pattern\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('square')\">\n      <i [ngClass]=\"{'active-icon':brushType==='right'}\" class=\"material-icons icons\">view_comfy</i>\n    </button>\n    <button matTooltip=\"Diamond Pattern\" matTooltipPosition=\"below\" class=\"btn btn-secondary\" (click)=\"setBrushType('diamond')\">\n      <i [ngClass]=\"{'active-icon':brushType==='justify'}\" class=\"material-icons icons\">texture</i>\n    </button>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-sm-6\">\n      <input type=\"number\" matTooltip=\"Brush Size\" matTooltipPosition=\"below\" class=\"form-control form-control-sm\" placeholder=\"Brush Size\"\n        [disabled]=\"isSelectionInactive\" min=\"1\" step=\"1\" thumb-label=\"true\" [(ngModel)]=\"width\" (change)=\"onUpdateBrush()\">\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PenToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PenToolsComponent = (function () {
    function PenToolsComponent(utilService) {
        this.utilService = utilService;
        this.width = 30;
    }
    PenToolsComponent.prototype.ngOnInit = function () {
        this.setBrushType("Pencil");
    };
    PenToolsComponent.prototype.setBrushType = function (brushtype) {
        this.style = brushtype;
        this.onUpdateBrush();
    };
    PenToolsComponent.prototype.onUpdateBrush = function () {
        this.utilService.onChangeBrush({
            color: this.color,
            width: this.width,
            shadow: this.shadow,
            style: this.style,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PenToolsComponent.prototype, "selectedToolType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PenToolsComponent.prototype, "activeObjectProps", void 0);
    PenToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pen-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/pen-tools/pen-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], PenToolsComponent);
    return PenToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\n    width:100% !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"btn-group pr-4\" role=\"group\" aria-label=\"First group\">\n    <button matTooltip=\"Add Rectangle Mask mr-4\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"addShapeMask('RECTANGLE')\"><i class=\"material-icons icons\">crop_landscape</i></button>\n    <button matTooltip=\"Add Circle Mask\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"addShapeMask('CIRCLE')\"><i class=\"material-icons icons\">panorama_fish_eye</i></button>\n    <button matTooltip=\"Add Triangle Mask\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"addShapeMask('TRIANGLE')\"><i class=\"material-icons icons\">change_history</i></button>\n    <button matTooltip=\"Color Picker\" matTooltipPosition=\"above\" [disabled]=\"isSelectionInactive\" type=\"button\" class=\"btn btn-secondary\" [(colorPicker)]=\"color\"\n    (colorPickerChange)=\"onUpdateShapeMask()\" [cpWidth]=\"196\" [cpDisableInput]=\"true\" [cpPosition]=\"'bottom'\" [cpPositionOffset]=\"'50%'\"\n    [cpPositionRelativeToArrow]=\"true\" [cpSaveClickOutside]=\"true\">\n  <i [style.color]=\"color\" class=\"material-icons icons\">color_lens</i>\n  </button>\n  </div>\n    <div class=\"row\">\n        <div class=\"col-sm-1\">\n            <input matTooltip=\"Opacity\" matTooltipPosition=\"below\"  min=\"0\" step=\"0.1\" max=\"1\" type=\"number\" class=\"form-control form-control-sm mt-1\" placeholder=\"Opacity\" [(ngModel)]=\"opacity\" (change)=\"onUpdateShapeMask()\">\n        </div>\n        <div class=\"col-sm-1\">\n            <input matTooltip=\"Shadow Size\" matTooltipPosition=\"below\" type=\"number\" class=\"form-control form-control-sm mt-1\" placeholder=\"Shadow\" min=\"0\" step=\"1\" max=\"20\" thumb-label=\"true\" [(ngModel)]=\"shadowAmount\" (change)=\"onUpdateShapeMask()\">\n        </div>\n        <div class=\"col-sm-1\">\n            <input matTooltip=\"Shadow Blur\" matTooltipPosition=\"below\" type=\"number\" class=\"form-control form-control-sm mt-1\" placeholder=\"Shadow Blur\" min=\"0\" step=\"1\" max=\"20\" thumb-label=\"true\" [(ngModel)]=\"shadowBlur\" (change)=\"onUpdateShapeMask()\">\n        </div>\n        <div class=\"col-sm-1\">\n            <input matTooltip=\"Shadow X\" matTooltipPosition=\"below\" type=\"number\" class=\"form-control form-control-sm mt-1\" placeholder=\"Shadow OffsetX\" min=\"-20\" step=\"1\" max=\"20\" thumb-label=\"true\" [(ngModel)]=\"shadowOffsetX\" (change)=\"onUpdateShapeMask()\">\n        </div>\n        <div class=\"col-sm-1\">\n            <input matTooltip=\"Shadow Y\" matTooltipPosition=\"below\" type=\"number\" class=\"form-control form-control-sm mt-1\" placeholder=\"Shadow OffsetY\" min=\"-20\" step=\"1\" max=\"20\" [(ngModel)]=\"shadowOffsetY\" (change)=\"onUpdateShapeMask()\">\n        </div>\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeMaskToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShapeMaskToolsComponent = (function () {
    function ShapeMaskToolsComponent(utilService) {
        this.utilService = utilService;
    }
    ShapeMaskToolsComponent.prototype.onUpdateShapeMask = function () {
        this.utilService.onUpdateShapeMask({
            color: this.color,
            opacity: this.opacity,
            shadowAmount: this.shadowAmount,
            shadowBlur: this.shadowBlur,
            shadowOffsetX: this.shadowOffsetX,
            shadowOffsetY: this.shadowOffsetY
        });
    };
    ShapeMaskToolsComponent.prototype.addShapeMask = function (shape) {
        this.utilService.canvasCommand('ADD_SHAPE_MASK', {
            shape: shape,
            color: this.color,
            opacity: this.opacity,
            shadowAmount: this.shadowAmount,
            shadowBlur: this.shadowBlur,
            shadowOffsetX: this.shadowOffsetX,
            shadowOffsetY: this.shadowOffsetY
        });
    };
    ShapeMaskToolsComponent.prototype.ngOnInit = function () {
        this.color = this.activeObjectProps.color ? this.activeObjectProps.color : '#F0E58C';
        this.opacity = this.activeObjectProps.opacity ? this.activeObjectProps.opacity : 0.5;
        this.shadowAmount = this.activeObjectProps.shadowAmount ? this.activeObjectProps.shadowAmount : 0;
        this.shadowBlur = this.activeObjectProps.shadowBlur ? this.activeObjectProps.shadowBlur : 0;
        this.shadowOffsetX = this.activeObjectProps.shadowOffsetX ? this.activeObjectProps.shadowOffsetX : 0;
        this.shadowOffsetY = this.activeObjectProps.shadowOffsetY ? this.activeObjectProps.shadowOffsetY : 0;
    };
    ShapeMaskToolsComponent.prototype.ngOnChanges = function () {
        this.color = this.activeObjectProps.color;
        this.opacity = this.activeObjectProps.opacity;
        this.shadowAmount = this.activeObjectProps.shadowAmount;
        this.shadowBlur = this.activeObjectProps.shadowBlur;
        this.shadowOffsetX = this.activeObjectProps.shadowOffsetX;
        this.shadowOffsetY = this.activeObjectProps.shadowOffsetY;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShapeMaskToolsComponent.prototype, "selectedToolType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShapeMaskToolsComponent.prototype, "activeObjectProps", void 0);
    ShapeMaskToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shape-mask-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/shape-mask-tools/shape-mask-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], ShapeMaskToolsComponent);
    return ShapeMaskToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pl-0 pr-0\">\n  <div class=\"col-sm-5\">\n    <div class=\"btn-toolbar justify-content-between\" role=\"toolbar\">\n\n      <div class=\"btn-group\" role=\"group\">\n        <button matTooltip=\"Bold\" matTooltipPosition=\"below\" [disabled]=\"isSelectionInactive\" type=\"button\" class=\"btn btn-secondary\"\n          (click)=\"toggleBold()\">\n          <i [ngClass]=\"{'active-icon':fontWeight==='bold','icons':!isSelectionInactive}\" class=\"material-icons\">format_bold</i>\n        </button>\n        <button matTooltip=\"Italic\" matTooltipPosition=\"below\" [disabled]=\"isSelectionInactive\" type=\"button\" class=\"btn btn-secondary\"\n          (click)=\"toggleItalic()\">\n          <i [ngClass]=\"{'active-icon':fontStyle==='italic','icons':!isSelectionInactive}\" class=\"material-icons\">format_italic</i>\n        </button>\n        <button matTooltip=\"Underline\" matTooltipPosition=\"below\" [disabled]=\"isSelectionInactive\" type=\"button\" class=\"btn btn-secondary\"\n          (click)=\"toggleUnderline()\">\n          <i [ngClass]=\"{'active-icon':underline,'icons':!isSelectionInactive}\" class=\"material-icons\">format_underlined</i>\n        </button>\n        <button matTooltip=\"Strikeout\" matTooltipPosition=\"below\" [disabled]=\"isSelectionInactive\" type=\"button\" class=\"btn btn-secondary\"\n          (click)=\"toggleLinethrough()\">\n          <i [ngClass]=\"{'active-icon':linethrough,'icons':!isSelectionInactive}\" class=\"material-icons\">strikethrough_s</i>\n        </button>\n        <button matTooltip=\"Color Picker\" matTooltipPosition=\"below\" [disabled]=\"isSelectionInactive\" class=\"btn btn-secondary\" [(colorPicker)]=\"color\"\n          (colorPickerChange)=\"onUpdateText()\" [cpWidth]=\"196\" [cpDisableInput]=\"true\" [cpPosition]=\"'bottom'\" [cpPositionOffset]=\"'50%'\"\n          [cpPositionRelativeToArrow]=\"true\" [cpSaveClickOutside]=\"true\">\n          <i [style.color]=\"color \" class=\"material-icons icons\">color_lens</i>\n        </button>\n        <button matTooltip=\"Left Align\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"setTextAlign('left')\">\n          <i [ngClass]=\"{'active-icon':textAlign==='left'}\" class=\"material-icons icons\">format_align_left</i>\n        </button>\n        <button matTooltip=\"Center Align\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"setTextAlign('center')\">\n          <i [ngClass]=\"{'active-icon':textAlign==='center'}\" class=\"material-icons icons\">format_align_center</i>\n        </button>\n        <button matTooltip=\"Right Align\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"setTextAlign('right')\">\n          <i [ngClass]=\"{'active-icon':textAlign==='right'}\" class=\"material-icons icons\">format_align_right</i>\n        </button>\n        <button matTooltip=\"Center Justify\" matTooltipPosition=\"below\" type=\"button\" class=\"btn btn-secondary\" (click)=\"setTextAlign('justify')\">\n          <i [ngClass]=\"{'active-icon':textAlign==='justify'}\" class=\"material-icons icons\">format_align_justify</i>\n        </button>\n    \n      </div>\n    \n    \n    </div>\n  </div>\n  <div class=\"col-sm-7\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-2\">\n        <input type=\"number\" matTooltip=\"Font Size\" matTooltipPosition=\"below\" class=\"form-control form-control-sm mt-1\" placeholder=\"Font Size\"\n          [disabled]=\"isSelectionInactive\" min=\"0\" thumb-label=\"true\" [(ngModel)]=\"fontSize\" (change)=\"onUpdateText()\"ß>\n      </div>\n      <div class=\"col-sm-2\">\n        <input type=\"number\" matTooltip=\"Line Height\" matTooltipPosition=\"below\" class=\"form-control form-control-sm mt-1\" placeholder=\"Line Height\"\n          [(ngModel)]=\"lineHeight\" (change)=\"onUpdateText()\">\n      </div>\n      <div class=\"col-sm-2\">\n        <input type=\"number\" matTooltip=\"Opacity\" matTooltipPosition=\"below\" class=\"form-control form-control-sm mt-1\" min=\"0\" step=\"0.1\"\n          max=\"1\" placeholder=\"Opacity\" [(ngModel)]=\"opacity\" (change)=\"onUpdateText()\">\n      </div>\n      <div class=\"col-sm-2\">\n        <input type=\"number\" matTooltip=\"Spacing\" matTooltipPosition=\"below\" class=\"form-control form-control-sm mt-1\" placeholder=\"Spacing\"\n          [(ngModel)]=\"charSpacing\" (change)=\"onUpdateText()\">\n      </div>\n      <div class=\"col-sm-3\">\n        <select name=\"font\" matTooltip=\"Font Family\" matTooltipPosition=\"below\" class=\"form-control form-control-sm mt-1\" placeholder=\"Font Family\"\n          [disabled]=\"isSelectionInactive\" placeholder=\"Font family\" [(ngModel)]=\"fontFamily\" [(value)]=\"fontFamily\" (change)=\"onUpdateText()\">\n          <option value=\"font\" disabled>Font</option>\n          <option *ngFor=\"let font of fontList\" [value]=\"font\">\n            {{ font }}\n          </option>\n        </select>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader__ = __webpack_require__("../../../../webfontloader/webfontloader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webfontloader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextToolsComponent = (function () {
    function TextToolsComponent(utilService) {
        this.utilService = utilService;
        this.fontList = ['Open Sans', 'Abel', 'Lato', 'Rubik', 'Source Sans Pro', 'Comfortaa', 'Quicksand', 'Pacifico', 'Montserrat', 'Oswald', 'Raleway', 'Jua', 'Nunito', 'Dosis', 'Lobster', 'Varela Round', 'Bowlby One SC', 'Passion One', 'Permanent Marker', 'Concert One', 'Bangers', 'Monoton', 'Fredoka One'];
    }
    TextToolsComponent.prototype.onUpdateText = function () {
        // console.log(this.fontFamily);
        if (this.selectedToolType === 'TEXT') {
            this.utilService.onUpdateText({
                color: this.color,
                opacity: this.opacity,
                fontFamily: this.fontFamily,
                fontSize: this.fontSize,
                fontWeight: this.fontWeight,
                fontStyle: this.fontStyle,
                underline: this.underline,
                linethrough: this.linethrough,
                textAlign: this.textAlign,
                lineHeight: this.lineHeight,
                charSpacing: this.charSpacing
            });
        }
        else if (this.selectedToolType === 'TEXT:EDITING') {
            this.utilService.onUpdateText({
                fill: this.color,
                fontFamily: this.fontFamily,
                fontSize: this.fontSize,
                fontWeight: this.fontWeight,
                fontStyle: this.fontStyle,
                underline: this.underline,
                linethrough: this.linethrough,
            });
        }
        // this.loadFontAndUse('Abel');
    };
    TextToolsComponent.prototype.toggleBold = function () {
        this.fontWeight = this.fontWeight === 'normal' ? 'bold' : 'normal';
        this.onUpdateText();
    };
    TextToolsComponent.prototype.toggleItalic = function () {
        this.fontStyle = this.fontStyle === 'normal' ? 'italic' : 'normal';
        this.onUpdateText();
    };
    TextToolsComponent.prototype.toggleUnderline = function () {
        this.underline = !this.underline;
        this.onUpdateText();
    };
    TextToolsComponent.prototype.toggleLinethrough = function () {
        this.linethrough = !this.linethrough;
        this.onUpdateText();
    };
    TextToolsComponent.prototype.setTextAlign = function (alignment) {
        this.textAlign = alignment;
        this.onUpdateText();
    };
    TextToolsComponent.prototype.ngOnInit = function () {
        if (this.activeObjectProps && this.selectedToolType === 'TEXT') {
            this.color = this.activeObjectProps.color;
            this.opacity = this.activeObjectProps.opacity;
            this.fontFamily = this.activeObjectProps.fontFamily;
            this.fontSize = this.activeObjectProps.fontSize;
            this.fontStyle = this.activeObjectProps.fontStyle;
            this.underline = this.activeObjectProps.underline;
            this.linethrough = this.activeObjectProps.linethrough;
            this.textAlign = this.activeObjectProps.textAlign;
            this.lineHeight = this.activeObjectProps.lineHeight;
            this.charSpacing = this.activeObjectProps.charSpacing;
        }
        this.isSelectionInactive = false;
        this.loadFonts();
    };
    TextToolsComponent.prototype.ngAfterViewInit = function () {
    };
    TextToolsComponent.prototype.ngOnChanges = function () {
        if (this.activeObjectProps && this.selectedToolType === 'TEXT') {
            this.color = this.activeObjectProps.color;
            this.opacity = this.activeObjectProps.opacity;
            this.fontFamily = this.activeObjectProps.fontFamily;
            this.fontWeight = this.activeObjectProps.fontWeight;
            this.fontSize = this.activeObjectProps.fontSize;
            this.fontStyle = this.activeObjectProps.fontStyle;
            this.underline = this.activeObjectProps.underline;
            this.linethrough = this.activeObjectProps.linethrough;
            this.textAlign = this.activeObjectProps.textAlign;
            this.lineHeight = this.activeObjectProps.lineHeight;
            this.charSpacing = this.activeObjectProps.charSpacing;
        }
        else if (this.activeObjectProps && this.selectedToolType === 'TEXT:EDITING') {
            this.color = this.activeObjectProps['fill'] || '#7F7F7F';
            this.fontFamily = this.activeObjectProps['fontFamily'] || 'Roboto';
            this.fontSize = this.activeObjectProps['fontSize'] || 24;
            this.fontWeight = this.activeObjectProps['fontWeight'] || 'normal';
            this.fontStyle = this.activeObjectProps['fontStyle'] || 'normal';
            this.underline = this.activeObjectProps['underline'] || false;
            this.linethrough = this.activeObjectProps['linethrough'] || false;
            this.isSelectionInactive = this.activeObjectProps.isSelectionInactive || false;
        }
    };
    TextToolsComponent.prototype.loadFonts = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_webfontloader__["load"]({
            google: {
                families: self.fontList
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TextToolsComponent.prototype, "selectedToolType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TextToolsComponent.prototype, "activeObjectProps", void 0);
    TextToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-text-tools',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/text-tools/text-tools.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], TextToolsComponent);
    return TextToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n\n.icon-panel {\n  height: 5%;\n  min-height: 40px;\n  width: calc(100% - 8px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 4px 4px 8px 4px;\n  border-bottom: 1px solid #dddbdb;\n}\n\n.icons {\n  color: #dddbdb;\n}\n\n.active-icon {\n  color: #69f0ae;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.main-tool-slider {\n  height: 95%;\n  position: relative;\n  z-index: 9;\n\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.main-tool-slider > * + * {\n  margin: 16px 15px 0px 0px;\n}\n\n.main-tool-slider button:nth-child(3n + 1) {\n  margin: 16px 15px 0px 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-wrapper\">\n  <button matTooltip=\"Main Menu\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" *ngIf=\"selectedToolType!=='MAIN' && selectedToolType!=='DEACTIVATE'\"\n    (click)=\"backToMainMenu()\">\n    <i class=\"material-icons icons\">arrow_back</i>\n  </button>\n  <button matTooltip=\"Bring Forward\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"bringForward()\">\n    <i class=\"material-icons\" [ngClass]=\"{'icons':selection!==undefined && selectionType!=='group'}\">flip_to_front</i>\n  </button>\n  <button matTooltip=\"Send Back\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"sendBackward()\">\n    <i class=\"material-icons\" [ngClass]=\"{'icons':selection!==undefined && selectionType!=='group'}\">flip_to_back</i>\n  </button>\n  <div class=\"spacer\"></div>\n  <button matTooltip=\"Undo\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"changeState('undo')\">\n    <i class=\"material-icons icons\">undo</i>\n  </button>\n  <button matTooltip=\"Redo\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"changeState('redo')\">\n    <i class=\"material-icons icons\">redo</i>\n  </button>\n  <!-- <button matTooltip=\"Toggle Pan Tool\" matTooltipPosition=\"right\" class=\"btn btn-secondary btn-sm\" (click)=\"togglePan()\"><i class=\"material-icons icons\">pan_tool</i></button> -->\n  <div class=\"main-tool-slider\">\n    <app-main-tools [selectedToolType]=\"selectedToolType\" *ngIf=\"selectedToolType==='MAIN' || selectedToolType==='DEACTIVATE'\"></app-main-tools>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-editor/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__("../../../../../src/app/image-editor/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = (function () {
    function ToolbarComponent(utilService) {
        var _this = this;
        this.utilService = utilService;
        this.selectedToolTypeList = [
            'MAIN',
            'TEXT',
            'TEXT:EDITING',
            'CROP',
            'PREVIEW',
            'FILTER:ALL',
            'FILTER:SINGLE',
            'SHAPE_MASK',
            'PEN',
            'DEACTIVATE'
        ];
        this.panState = false;
        this.selectedToolType = this.selectedToolTypeList[0];
        this.onChangeToolTypeSubscription = utilService.changeToolType$.subscribe(function (_a) {
            var toolType = _a.toolType, activeObjectProps = _a.activeObjectProps;
            if (activeObjectProps) {
                _this.activeObjectProps = activeObjectProps;
            }
            _this.onChangeToolType(toolType);
        });
        this.onSelectionCreatedSubscription = utilService.onSelectionCreated$.subscribe(function (_a) {
            var selection = _a.selection, selectionType = _a.selectionType;
            _this.selectionType = selectionType;
            _this.selection = selection;
        });
    }
    ToolbarComponent.prototype.onChangeToolType = function (toolType) {
        this.selectedToolType = toolType;
    };
    ToolbarComponent.prototype.cleanSelect = function () {
        this.utilService.canvasCommand('CLEAN_SELECT', {});
        this.onChangeToolType('MAIN');
    };
    ToolbarComponent.prototype.backToMainMenu = function () {
        this.utilService.canvasCommand('BACK_TO_MAIN_MENU', {});
        this.onChangeToolType('MAIN');
    };
    ToolbarComponent.prototype.bringForward = function () {
        this.utilService.canvasCommand('BRING_FORWARD', {});
    };
    ToolbarComponent.prototype.sendBackward = function () {
        this.utilService.canvasCommand('SEND_BACKWARD', {});
    };
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.changeState = function (action) {
        this.utilService.changeState(action);
    };
    ToolbarComponent.prototype.togglePan = function () {
        this.panState = !this.panState;
        this.utilService.togglePanState(this.panState);
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this.onChangeToolTypeSubscription.unsubscribe();
        this.onSelectionCreatedSubscription.unsubscribe();
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/image-editor/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-editor/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_service__["a" /* UtilService */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-editor/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtilService = (function () {
    function UtilService() {
        var _this = this;
        // --------------------- Add Image To Canvas ------------------------------
        this.addImageToCanvasSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.addImageToCanvas$ = this.addImageToCanvasSource.asObservable();
        this.addImageToCanvas = function (url) {
            _this.addImageToCanvasSource.next(url);
        };
        // --------------------- Adding Image filter ------------------------------
        this.addImageFilterSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.addImageFilter$ = this.addImageFilterSource.asObservable();
        this.addImageFilter = function (filterScope, filterProps) {
            _this.addImageFilterSource.next({ filterScope: filterScope, filterProps: filterProps });
        };
        // --------------------- Edit Text ----------------------------------------
        this.onUpdateTextSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onUpdateText$ = this.onUpdateTextSource.asObservable();
        this.onUpdateText = function (textProps) {
            _this.onUpdateTextSource.next(textProps);
        };
        // ---------------------- Edit shape mask ---------------------------------
        this.onUpdateShapeMaskSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onUpdateShapeMask$ = this.onUpdateShapeMaskSource.asObservable();
        this.onUpdateShapeMask = function (shapeMaskProps) {
            _this.onUpdateShapeMaskSource.next(shapeMaskProps);
        };
        //------------------------ Edit brush props ------------------------------
        this.onChangeBrushSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onChangeBrush$ = this.onChangeBrushSource.asObservable();
        this.onChangeBrush = function (brushProps) {
            // console.log("Brush Props",brushProps);
            _this.onChangeBrushSource.next(brushProps);
        };
        // --------------------- On Change Tool type ------------------------------
        this.changeToolTypeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.changeToolType$ = this.changeToolTypeSource.asObservable();
        this.changeToolType = function (toolType, activeObjectProps) {
            if (activeObjectProps) {
                _this.changeToolTypeSource.next({
                    toolType: toolType,
                    activeObjectProps: activeObjectProps
                });
            }
            else {
                _this.changeToolTypeSource.next({
                    toolType: toolType
                });
            }
        };
        // ----------------------- Object selection ---------------------------------
        this.onSelectionCreatedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onSelectionCreated$ = this.onSelectionCreatedSource.asObservable();
        this.onSelectionCreated = function (selection, selectionType, extraOptions) {
            _this.onSelectionCreatedSource.next({ selection: selection, selectionType: selectionType, extraOptions: extraOptions });
        };
        //------------------------ canvas command -----------------------------------
        this.canvasCommandSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.canvasCommand$ = this.canvasCommandSource.asObservable();
        this.canvasCommand = function (toolType, option) {
            _this.canvasCommandSource.next({ toolType: toolType, option: option });
        };
        //------------------------ open snackbar -------------------------------------
        this.openSnackBarSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.openSnackBar$ = this.openSnackBarSource.asObservable();
        this.openSnackBar = function (message, duration) {
            _this.openSnackBarSource.next({ message: message, duration: duration });
        };
        //------------------------ change canvas size ---------------------------------
        this.changeCanvasSizeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.changeCanvasSize$ = this.changeCanvasSizeSource.asObservable();
        this.changeCanvasSize = function (orientation, aspectRatio) {
            _this.changeCanvasSizeSource.next({ orientation: orientation, aspectRatio: aspectRatio });
        };
        // ----------------------- undo/redo ------------------------------------------
        this.changeStateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.changeState$ = this.changeStateSource.asObservable();
        this.changeState = function (action) {
            _this.changeStateSource.next(action);
        };
        // ----------------------- pan control ------------------------------------------
        this.panStateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.panState$ = this.changeStateSource.asObservable();
        this.togglePanState = function (action) {
            _this.panStateSource.next(action);
        };
    }
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    // Disabling Prod logging
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map