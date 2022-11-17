["^ ","~:resource-id",["~:shadow.build.classpath/resource","helix/impl/classes.js"],"~:js","goog.provide(\"helix.impl.classes\");\nhelix.impl.classes.createComponent = function createComponent(superclass, spec, statics) {\n  let component = class HelixComponent extends superclass {\n    constructor(props) {\n      super(props);\n      if (spec.constructor) {\n        spec.constructor.call(this, this);\n      }\n      for (let key in spec) {\n        if (key !== \"constructor\") {\n          let prop = spec[key];\n          if (typeof prop === \"function\") {\n            this[key] = prop.bind(this, this);\n          } else {\n            this[key] = prop;\n          }\n        }\n      }\n    }\n  };\n  for (let key in statics) {\n    let prop = statics[key];\n    if (typeof prop === \"function\") {\n      component[key] = prop.bind(component, component);\n    } else {\n      component[key] = prop;\n    }\n  }\n  return component;\n};\n","~:source","goog.provide(\"helix.impl.classes\");\n\nhelix.impl.classes.createComponent = function createComponent(superclass, spec, statics) {\n  let component = class HelixComponent extends superclass {\n    constructor(props) {\n      super(props);\n      if (spec.constructor) {\n        spec.constructor.call(this, this);\n      }\n\n      for (let key in spec) {\n        if (key !== \"constructor\") {\n          let prop = spec[key];\n          if (typeof prop === \"function\") {\n            this[key] = prop.bind(this, this);\n          } else {\n            this[key] = prop;\n          }\n        }\n      }\n    }\n  };\n\n  for (let key in statics) {\n    let prop = statics[key];\n    if (typeof prop === \"function\") {\n      component[key] = prop.bind(component, component);\n    } else {\n      component[key] = prop;\n    }\n  }\n\n  return component;\n}\n","~:compiled-at",1666268335936,"~:source-map-json","{\n\"version\":3,\n\"file\":\"helix.impl.classes.js\",\n\"lineCount\":31,\n\"mappings\":\"AAAAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAEAC,KAAMC,CAAAA,IAAKC,CAAAA,OAAQC,CAAAA,eAAnB,GAAqCC,QAASD,gBAAe,CAACE,UAAD,EAAaC,IAAb,EAAmBC,OAAnB,CAA4B;AACvF,MAAIC,YAAY,KAAMC,eAAN,QAA6BJ,WAA7B;AACdK,eAAW,CAACC,KAAD,CAAQ;AACjB,WAAA,CAAMA,KAAN,CAAA;AACA,UAAIL,IAAKI,CAAAA,WAAT;AACEJ,YAAKI,CAAAA,WAAYE,CAAAA,IAAjB,CAAsB,IAAtB,EAA4B,IAA5B,CAAA;AADF;AAIA,WAAK,IAAIC,GAAT,GAAgBP,KAAhB;AACE,YAAIO,GAAJ,KAAY,aAAZ,CAA2B;AACzB,cAAIC,OAAOR,IAAA,CAAKO,GAAL,CAAX;AACA,cAAI,MAAOC,KAAX,KAAoB,UAApB;AACE,gBAAA,CAAKD,GAAL,CAAA,GAAYC,IAAKC,CAAAA,IAAL,CAAU,IAAV,EAAgB,IAAhB,CAAZ;AADF;AAGE,gBAAA,CAAKF,GAAL,CAAA,GAAYC,IAAZ;AAHF;AAFyB;AAD7B;AANiB;AADL,GAAhB;AAoBA,OAAK,IAAID,GAAT,GAAgBN,QAAhB,CAAyB;AACvB,QAAIO,OAAOP,OAAA,CAAQM,GAAR,CAAX;AACA,QAAI,MAAOC,KAAX,KAAoB,UAApB;AACEN,eAAA,CAAUK,GAAV,CAAA,GAAiBC,IAAKC,CAAAA,IAAL,CAAUP,SAAV,EAAqBA,SAArB,CAAjB;AADF;AAGEA,eAAA,CAAUK,GAAV,CAAA,GAAiBC,IAAjB;AAHF;AAFuB;AASzB,SAAON,SAAP;AA9BuF,CAAzF;;\",\n\"sources\":[\"helix/impl/classes.js\"],\n\"sourcesContent\":[\"goog.provide(\\\"helix.impl.classes\\\");\\n\\nhelix.impl.classes.createComponent = function createComponent(superclass, spec, statics) {\\n  let component = class HelixComponent extends superclass {\\n    constructor(props) {\\n      super(props);\\n      if (spec.constructor) {\\n        spec.constructor.call(this, this);\\n      }\\n\\n      for (let key in spec) {\\n        if (key !== \\\"constructor\\\") {\\n          let prop = spec[key];\\n          if (typeof prop === \\\"function\\\") {\\n            this[key] = prop.bind(this, this);\\n          } else {\\n            this[key] = prop;\\n          }\\n        }\\n      }\\n    }\\n  };\\n\\n  for (let key in statics) {\\n    let prop = statics[key];\\n    if (typeof prop === \\\"function\\\") {\\n      component[key] = prop.bind(component, component);\\n    } else {\\n      component[key] = prop;\\n    }\\n  }\\n\\n  return component;\\n}\\n\"],\n\"names\":[\"goog\",\"provide\",\"helix\",\"impl\",\"classes\",\"createComponent\",\"helix.impl.classes.createComponent\",\"superclass\",\"spec\",\"statics\",\"component\",\"HelixComponent\",\"constructor\",\"props\",\"call\",\"key\",\"prop\",\"bind\"]\n}\n"]