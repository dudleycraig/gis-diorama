["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/error.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.debug.Error\");\n  goog.module.declareLegacyNamespace();\n  function DebugError(msg = undefined, cause = undefined) {\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(this, DebugError);\n    } else {\n      const stack = (new Error()).stack;\n      if (stack) {\n        this.stack = stack;\n      }\n    }\n    if (msg) {\n      this.message = String(msg);\n    }\n    if (cause !== undefined) {\n      this.cause = cause;\n    }\n    this.reportErrorToServer = true;\n  }\n  goog.inherits(DebugError, Error);\n  DebugError.prototype.name = \"CustomError\";\n  exports = DebugError;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Provides a base class for custom Error objects such that the\n * stack is correctly maintained.\n *\n * You should never need to throw DebugError(msg) directly, Error(msg) is\n * sufficient.\n */\n\ngoog.module('goog.debug.Error');\ngoog.module.declareLegacyNamespace();\n\n\n\n/**\n * Base class for custom error objects.\n * @param {*=} msg The message associated with the error.\n * @param {{\n *    message: (?|undefined),\n *    name: (?|undefined),\n *    lineNumber: (?|undefined),\n *    fileName: (?|undefined),\n *    stack: (?|undefined),\n *    cause: (?|undefined),\n * }=} cause The original error object to chain with.\n * @constructor\n * @extends {Error}\n */\nfunction DebugError(msg = undefined, cause = undefined) {\n  // Attempt to ensure there is a stack trace.\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, DebugError);\n  } else {\n    const stack = new Error().stack;\n    if (stack) {\n      /** @override */\n      this.stack = stack;\n    }\n  }\n\n  if (msg) {\n    /** @override */\n    this.message = String(msg);\n  }\n\n  if (cause !== undefined) {\n    /** @type {?} */\n    this.cause = cause;\n  }\n\n  /**\n   * Whether to report this error to the server. Setting this to false will\n   * cause the error reporter to not report the error back to the server,\n   * which can be useful if the client knows that the error has already been\n   * logged on the server.\n   * @type {boolean}\n   */\n  this.reportErrorToServer = true;\n}\ngoog.inherits(DebugError, Error);\n\n\n/** @override @type {string} */\nDebugError.prototype.name = 'CustomError';\n\n\nexports = DebugError;\n","~:compiled-at",1666267692871,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.error.js\",\n\"lineCount\":27,\n\"mappings\":\"AAcA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,kBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAkBAC,UAASA,WAAU,CAACC,GAAA,GAAMC,SAAP,EAAkBC,KAAA,GAAQD,SAA1B,CAAqC;AAEtD,QAAIE,KAAMC,CAAAA,iBAAV;AACED,WAAMC,CAAAA,iBAAN,CAAwB,IAAxB,EAA8BL,UAA9B,CAAA;AADF,UAEO;AACL,YAAMM,QAAoBA,CAAZ,IAAIF,KAAJ,EAAYE,EAAAA,KAA1B;AACA,UAAIA,KAAJ;AAEE,YAAKA,CAAAA,KAAL,GAAaA,KAAb;AAFF;AAFK;AAQP,QAAIL,GAAJ;AAEE,UAAKM,CAAAA,OAAL,GAAeC,MAAA,CAAOP,GAAP,CAAf;AAFF;AAKA,QAAIE,KAAJ,KAAcD,SAAd;AAEE,UAAKC,CAAAA,KAAL,GAAaA,KAAb;AAFF;AAYA,QAAKM,CAAAA,mBAAL,GAA2B,IAA3B;AA7BsD;AA+BxDZ,MAAKa,CAAAA,QAAL,CAAcV,UAAd,EAA0BI,KAA1B,CAAA;AAIAJ,YAAWW,CAAAA,SAAUC,CAAAA,IAArB,GAA4B,aAA5B;AAGAC,SAAA,GAAUb,UAAV;AAzDA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/debug/error.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Provides a base class for custom Error objects such that the\\n * stack is correctly maintained.\\n *\\n * You should never need to throw DebugError(msg) directly, Error(msg) is\\n * sufficient.\\n */\\n\\ngoog.module('goog.debug.Error');\\ngoog.module.declareLegacyNamespace();\\n\\n\\n\\n/**\\n * Base class for custom error objects.\\n * @param {*=} msg The message associated with the error.\\n * @param {{\\n *    message: (?|undefined),\\n *    name: (?|undefined),\\n *    lineNumber: (?|undefined),\\n *    fileName: (?|undefined),\\n *    stack: (?|undefined),\\n *    cause: (?|undefined),\\n * }=} cause The original error object to chain with.\\n * @constructor\\n * @extends {Error}\\n */\\nfunction DebugError(msg = undefined, cause = undefined) {\\n  // Attempt to ensure there is a stack trace.\\n  if (Error.captureStackTrace) {\\n    Error.captureStackTrace(this, DebugError);\\n  } else {\\n    const stack = new Error().stack;\\n    if (stack) {\\n      /** @override */\\n      this.stack = stack;\\n    }\\n  }\\n\\n  if (msg) {\\n    /** @override */\\n    this.message = String(msg);\\n  }\\n\\n  if (cause !== undefined) {\\n    /** @type {?} */\\n    this.cause = cause;\\n  }\\n\\n  /**\\n   * Whether to report this error to the server. Setting this to false will\\n   * cause the error reporter to not report the error back to the server,\\n   * which can be useful if the client knows that the error has already been\\n   * logged on the server.\\n   * @type {boolean}\\n   */\\n  this.reportErrorToServer = true;\\n}\\ngoog.inherits(DebugError, Error);\\n\\n\\n/** @override @type {string} */\\nDebugError.prototype.name = 'CustomError';\\n\\n\\nexports = DebugError;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"DebugError\",\"msg\",\"undefined\",\"cause\",\"Error\",\"captureStackTrace\",\"stack\",\"message\",\"String\",\"reportErrorToServer\",\"inherits\",\"prototype\",\"name\",\"exports\"]\n}\n"]