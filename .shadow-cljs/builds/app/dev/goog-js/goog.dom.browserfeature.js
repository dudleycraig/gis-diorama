["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/browserfeature.js"],"~:js","goog.provide(\"goog.dom.BrowserFeature\");\ngoog.require(\"goog.userAgent\");\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_NO_OFFSCREEN_CANVAS\", false);\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_OFFSCREEN_CANVAS\", false);\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  try {\n    return Boolean((new self.OffscreenCanvas(0, 0)).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_(\"2d\"));\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = true;\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = true;\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT = false;\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.WEBKIT;\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Browser capability checks for the dom package.\n */\n\n\ngoog.provide('goog.dom.BrowserFeature');\n\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether we know at compile time that the browser doesn't\n * support OffscreenCanvas.\n */\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\n\n/**\n * @define {boolean} Whether we know at compile time that the browser supports\n * all OffscreenCanvas contexts.\n */\n// TODO(user): Eventually this should default to \"FEATURESET_YEAR >= 202X\".\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\n\n/**\n * Detects if a particular OffscreenCanvas context is supported.\n * @param {string} contextName name of the context to test.\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\n * @private\n */\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  'use strict';\n  // This code only gets removed because we forced @nosideeffects on\n  // the functions. See: b/138802376\n  try {\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\n\n/**\n * Whether the browser supports OffscreenCanvas 2D context.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\n\n/**\n * Whether attributes 'name' and 'type' can be added to an element after it's\n * created. False in Internet Explorer prior to version 9.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = true;\n\n/**\n * Whether we can use element.children to access an element's Element\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\n * nodes in the collection.)\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = true;\n\n/**\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\n * include text nodes in script and style tags. Not document-mode-dependent.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT = false;\n\n/**\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\n * element's parent if it is an Element.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\n    goog.userAgent.IE || goog.userAgent.WEBKIT;\n\n/**\n * Whether NoScope elements need a scoped element written before them in\n * innerHTML.\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\n","~:compiled-at",1666267692924,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.browserfeature.js\",\n\"lineCount\":18,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,yBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,gBAAb,CAAA;AAOAF,IAAKG,CAAAA,GAAIC,CAAAA,cAAeC,CAAAA,0BAAxB,GACIL,IAAKM,CAAAA,MAAL,CAAY,qCAAZ,EAAmD,KAAnD,CADJ;AAQAN,IAAKG,CAAAA,GAAIC,CAAAA,cAAeG,CAAAA,uBAAxB,GACIP,IAAKM,CAAAA,MAAL,CAAY,kCAAZ,EAAgD,KAAhD,CADJ;AASAN,IAAKG,CAAAA,GAAIC,CAAAA,cAAeI,CAAAA,sBAAxB,GAAiDC,QAAQ,CAACC,WAAD,CAAc;AAIrE,KAAI;AACF,WAAOC,OAAA,CAAuCC,CAA/B,IAAIC,IAAKC,CAAAA,eAAT,CAAyB,CAAzB,EAA4B,CAA5B,CAA+BF,EAAAA,UAA/B,CAA0CF,WAA1C,CAAR,CAAP;AADE,GAEF,QAAOK,EAAP,CAAW;;AAEb,SAAO,KAAP;AARqE,CAAvE;AAeAf,IAAKG,CAAAA,GAAIC,CAAAA,cAAeY,CAAAA,mBAAxB,GACI,CAAChB,IAAKG,CAAAA,GAAIC,CAAAA,cAAeC,CAAAA,0BAD7B,KAEKL,IAAKG,CAAAA,GAAIC,CAAAA,cAAeG,CAAAA,uBAF7B,IAGKP,IAAKG,CAAAA,GAAIC,CAAAA,cAAeI,CAAAA,sBAAxB,CAA+C,IAA/C,CAHL;AAUAR,IAAKG,CAAAA,GAAIC,CAAAA,cAAea,CAAAA,+BAAxB,GAA0D,IAA1D;AAQAjB,IAAKG,CAAAA,GAAIC,CAAAA,cAAec,CAAAA,0BAAxB,GAAqD,IAArD;AAOAlB,IAAKG,CAAAA,GAAIC,CAAAA,cAAee,CAAAA,kBAAxB,GAA6C,KAA7C;AAOAnB,IAAKG,CAAAA,GAAIC,CAAAA,cAAegB,CAAAA,+BAAxB,GACIpB,IAAKqB,CAAAA,SAAUC,CAAAA,EADnB,IACyBtB,IAAKqB,CAAAA,SAAUE,CAAAA,MADxC;AASAvB,IAAKG,CAAAA,GAAIC,CAAAA,cAAeoB,CAAAA,+BAAxB,GAA0DxB,IAAKqB,CAAAA,SAAUC,CAAAA,EAAzE;;\",\n\"sources\":[\"goog/dom/browserfeature.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Browser capability checks for the dom package.\\n */\\n\\n\\ngoog.provide('goog.dom.BrowserFeature');\\n\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser doesn't\\n * support OffscreenCanvas.\\n */\\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser supports\\n * all OffscreenCanvas contexts.\\n */\\n// TODO(user): Eventually this should default to \\\"FEATURESET_YEAR >= 202X\\\".\\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * Detects if a particular OffscreenCanvas context is supported.\\n * @param {string} contextName name of the context to test.\\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\\n * @private\\n */\\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\\n  'use strict';\\n  // This code only gets removed because we forced @nosideeffects on\\n  // the functions. See: b/138802376\\n  try {\\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\\n  } catch (ex) {\\n  }\\n  return false;\\n};\\n\\n/**\\n * Whether the browser supports OffscreenCanvas 2D context.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\\n\\n/**\\n * Whether attributes 'name' and 'type' can be added to an element after it's\\n * created. False in Internet Explorer prior to version 9.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = true;\\n\\n/**\\n * Whether we can use element.children to access an element's Element\\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\\n * nodes in the collection.)\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = true;\\n\\n/**\\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\\n * include text nodes in script and style tags. Not document-mode-dependent.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT = false;\\n\\n/**\\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\\n * element's parent if it is an Element.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\\n    goog.userAgent.IE || goog.userAgent.WEBKIT;\\n\\n/**\\n * Whether NoScope elements need a scoped element written before them in\\n * innerHTML.\\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"BrowserFeature\",\"ASSUME_NO_OFFSCREEN_CANVAS\",\"define\",\"ASSUME_OFFSCREEN_CANVAS\",\"detectOffscreenCanvas_\",\"goog.dom.BrowserFeature.detectOffscreenCanvas_\",\"contextName\",\"Boolean\",\"getContext\",\"self\",\"OffscreenCanvas\",\"ex\",\"OFFSCREEN_CANVAS_2D\",\"CAN_ADD_NAME_OR_TYPE_ATTRIBUTES\",\"CAN_USE_CHILDREN_ATTRIBUTE\",\"CAN_USE_INNER_TEXT\",\"CAN_USE_PARENT_ELEMENT_PROPERTY\",\"userAgent\",\"IE\",\"WEBKIT\",\"INNER_HTML_NEEDS_SCOPED_ELEMENT\"]\n}\n"]