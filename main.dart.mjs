// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It should return a JS Array containing 2 elements. The first
  //   should be the bytes for the wasm module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The second
  //   should be the result of using the JS 'import' API on the js file path.
  async instantiate(additionalImports, {loadDeferredWasm, loadDynamicModule} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            _4: (o, c) => o instanceof c,
      _7: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._7(f,arguments.length,x0) }),
      _8: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._8(f,arguments.length,x0) }),
      _9: (o, a) => o + a,
      _37: x0 => new Array(x0),
      _39: x0 => x0.length,
      _41: (x0,x1) => x0[x1],
      _42: (x0,x1,x2) => { x0[x1] = x2 },
      _43: x0 => new Promise(x0),
      _45: (x0,x1,x2) => new DataView(x0,x1,x2),
      _47: x0 => new Int8Array(x0),
      _48: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _49: x0 => new Uint8Array(x0),
      _51: x0 => new Uint8ClampedArray(x0),
      _53: x0 => new Int16Array(x0),
      _55: x0 => new Uint16Array(x0),
      _57: x0 => new Int32Array(x0),
      _59: x0 => new Uint32Array(x0),
      _61: x0 => new Float32Array(x0),
      _63: x0 => new Float64Array(x0),
      _65: (x0,x1,x2) => x0.call(x1,x2),
      _70: (decoder, codeUnits) => decoder.decode(codeUnits),
      _71: () => new TextDecoder("utf-8", {fatal: true}),
      _72: () => new TextDecoder("utf-8", {fatal: false}),
      _73: (s) => +s,
      _74: x0 => new Uint8Array(x0),
      _75: (x0,x1,x2) => x0.set(x1,x2),
      _76: (x0,x1) => x0.transferFromImageBitmap(x1),
      _77: x0 => x0.arrayBuffer(),
      _78: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._78(f,arguments.length,x0) }),
      _79: x0 => new window.FinalizationRegistry(x0),
      _80: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _81: (x0,x1) => x0.unregister(x1),
      _82: (x0,x1,x2) => x0.slice(x1,x2),
      _83: (x0,x1) => x0.decode(x1),
      _84: (x0,x1) => x0.segment(x1),
      _85: () => new TextDecoder(),
      _87: x0 => x0.click(),
      _88: x0 => x0.buffer,
      _89: x0 => x0.wasmMemory,
      _90: () => globalThis.window._flutter_skwasmInstance,
      _91: x0 => x0.rasterStartMilliseconds,
      _92: x0 => x0.rasterEndMilliseconds,
      _93: x0 => x0.imageBitmaps,
      _120: x0 => x0.remove(),
      _121: (x0,x1) => x0.append(x1),
      _122: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _125: (x0,x1) => x0.removeChild(x1),
      _202: x0 => x0.stopPropagation(),
      _203: x0 => x0.preventDefault(),
      _205: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _249: x0 => x0.select(),
      _250: (x0,x1) => x0.execCommand(x1),
      _252: x0 => x0.unlock(),
      _253: x0 => x0.getReader(),
      _254: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _255: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _256: (x0,x1) => x0.item(x1),
      _257: x0 => x0.next(),
      _258: x0 => x0.now(),
      _259: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._259(f,arguments.length,x0) }),
      _260: (x0,x1) => x0.addListener(x1),
      _261: (x0,x1) => x0.removeListener(x1),
      _262: (x0,x1) => x0.matchMedia(x1),
      _263: (x0,x1) => x0.revokeObjectURL(x1),
      _264: x0 => x0.close(),
      _265: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _266: x0 => new window.ImageDecoder(x0),
      _267: x0 => ({frameIndex: x0}),
      _268: (x0,x1) => x0.decode(x1),
      _269: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._269(f,arguments.length,x0) }),
      _270: (x0,x1) => x0.getModifierState(x1),
      _271: (x0,x1) => x0.removeProperty(x1),
      _272: (x0,x1) => x0.prepend(x1),
      _273: x0 => x0.disconnect(),
      _274: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._274(f,arguments.length,x0) }),
      _275: x0 => x0.blur(),
      _276: x0 => x0.hasFocus(),
      _277: (x0,x1) => x0.hasAttribute(x1),
      _278: (x0,x1) => x0.getModifierState(x1),
      _282: (x0,x1) => x0.appendChild(x1),
      _283: (x0,x1) => x0.createTextNode(x1),
      _284: (x0,x1) => x0.removeAttribute(x1),
      _285: x0 => x0.getBoundingClientRect(),
      _286: (x0,x1) => x0.contains(x1),
      _287: (x0,x1) => x0.observe(x1),
      _288: x0 => x0.disconnect(),
      _289: (x0,x1) => x0.closest(x1),
      _290: (x0,x1) => x0.getAttribute(x1),
      _700: () => globalThis.window.flutterConfiguration,
      _701: x0 => x0.assetBase,
      _707: x0 => x0.debugShowSemanticsNodes,
      _708: x0 => x0.hostElement,
      _709: x0 => x0.multiViewEnabled,
      _710: x0 => x0.nonce,
      _712: x0 => x0.fontFallbackBaseUrl,
      _716: x0 => x0.console,
      _717: x0 => x0.devicePixelRatio,
      _718: x0 => x0.document,
      _719: x0 => x0.history,
      _720: x0 => x0.innerHeight,
      _721: x0 => x0.innerWidth,
      _722: x0 => x0.location,
      _723: x0 => x0.navigator,
      _724: x0 => x0.visualViewport,
      _725: x0 => x0.performance,
      _727: x0 => x0.URL,
      _729: (x0,x1) => x0.getComputedStyle(x1),
      _730: x0 => x0.screen,
      _731: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._731(f,arguments.length,x0) }),
      _732: (x0,x1) => x0.requestAnimationFrame(x1),
      _737: (x0,x1) => x0.warn(x1),
      _739: (x0,x1) => x0.debug(x1),
      _740: x0 => globalThis.parseFloat(x0),
      _741: () => globalThis.window,
      _742: () => globalThis.Intl,
      _743: () => globalThis.Symbol,
      _744: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      _746: x0 => x0.clipboard,
      _747: x0 => x0.maxTouchPoints,
      _748: x0 => x0.vendor,
      _749: x0 => x0.language,
      _750: x0 => x0.platform,
      _751: x0 => x0.userAgent,
      _752: (x0,x1) => x0.vibrate(x1),
      _753: x0 => x0.languages,
      _754: x0 => x0.documentElement,
      _755: (x0,x1) => x0.querySelector(x1),
      _758: (x0,x1) => x0.createElement(x1),
      _761: (x0,x1) => x0.createEvent(x1),
      _762: x0 => x0.activeElement,
      _765: x0 => x0.head,
      _766: x0 => x0.body,
      _768: (x0,x1) => { x0.title = x1 },
      _771: x0 => x0.visibilityState,
      _772: () => globalThis.document,
      _773: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._773(f,arguments.length,x0) }),
      _774: (x0,x1) => x0.dispatchEvent(x1),
      _782: x0 => x0.target,
      _784: x0 => x0.timeStamp,
      _785: x0 => x0.type,
      _787: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _793: x0 => x0.baseURI,
      _794: x0 => x0.firstChild,
      _798: x0 => x0.parentElement,
      _800: (x0,x1) => { x0.textContent = x1 },
      _801: x0 => x0.parentNode,
      _803: x0 => x0.isConnected,
      _807: x0 => x0.firstElementChild,
      _809: x0 => x0.nextElementSibling,
      _810: x0 => x0.clientHeight,
      _811: x0 => x0.clientWidth,
      _812: x0 => x0.offsetHeight,
      _813: x0 => x0.offsetWidth,
      _814: x0 => x0.id,
      _815: (x0,x1) => { x0.id = x1 },
      _818: (x0,x1) => { x0.spellcheck = x1 },
      _819: x0 => x0.tagName,
      _820: x0 => x0.style,
      _822: (x0,x1) => x0.querySelectorAll(x1),
      _823: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _825: (x0,x1) => { x0.tabIndex = x1 },
      _826: (x0,x1) => x0.focus(x1),
      _827: x0 => x0.scrollTop,
      _828: (x0,x1) => { x0.scrollTop = x1 },
      _829: x0 => x0.scrollLeft,
      _830: (x0,x1) => { x0.scrollLeft = x1 },
      _831: x0 => x0.classList,
      _833: (x0,x1) => { x0.className = x1 },
      _835: (x0,x1) => x0.getElementsByClassName(x1),
      _836: (x0,x1) => x0.attachShadow(x1),
      _839: x0 => x0.computedStyleMap(),
      _840: (x0,x1) => x0.get(x1),
      _846: (x0,x1) => x0.getPropertyValue(x1),
      _847: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _848: x0 => x0.offsetLeft,
      _849: x0 => x0.offsetTop,
      _850: x0 => x0.offsetParent,
      _852: (x0,x1) => { x0.name = x1 },
      _853: (x0,x1) => { x0.content = x1 },
      _854: x0 => x0.content,
      _858: (x0,x1) => { x0.src = x1 },
      _859: x0 => x0.naturalWidth,
      _860: x0 => x0.naturalHeight,
      _864: (x0,x1) => { x0.crossOrigin = x1 },
      _866: (x0,x1) => { x0.decoding = x1 },
      _867: x0 => x0.decode(),
      _871: (x0,x1) => { x0.nonce = x1 },
      _876: (x0,x1) => { x0.width = x1 },
      _878: (x0,x1) => { x0.height = x1 },
      _882: (x0,x1) => x0.getContext(x1),
      _938: x0 => x0.width,
      _939: x0 => x0.height,
      _941: (x0,x1) => x0.fetch(x1),
      _942: x0 => x0.status,
      _944: x0 => x0.body,
      _945: x0 => x0.arrayBuffer(),
      _948: x0 => x0.read(),
      _949: x0 => x0.value,
      _950: x0 => x0.done,
      _952: x0 => x0.name,
      _953: x0 => x0.x,
      _954: x0 => x0.y,
      _957: x0 => x0.top,
      _958: x0 => x0.right,
      _959: x0 => x0.bottom,
      _960: x0 => x0.left,
      _972: x0 => x0.height,
      _973: x0 => x0.width,
      _974: x0 => x0.scale,
      _975: (x0,x1) => { x0.value = x1 },
      _977: (x0,x1) => { x0.placeholder = x1 },
      _979: (x0,x1) => { x0.name = x1 },
      _980: x0 => x0.selectionDirection,
      _981: x0 => x0.selectionStart,
      _982: x0 => x0.selectionEnd,
      _985: x0 => x0.value,
      _987: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _988: x0 => x0.readText(),
      _989: (x0,x1) => x0.writeText(x1),
      _991: x0 => x0.altKey,
      _992: x0 => x0.code,
      _993: x0 => x0.ctrlKey,
      _994: x0 => x0.key,
      _995: x0 => x0.keyCode,
      _996: x0 => x0.location,
      _997: x0 => x0.metaKey,
      _998: x0 => x0.repeat,
      _999: x0 => x0.shiftKey,
      _1000: x0 => x0.isComposing,
      _1002: x0 => x0.state,
      _1003: (x0,x1) => x0.go(x1),
      _1005: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1006: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1007: x0 => x0.pathname,
      _1008: x0 => x0.search,
      _1009: x0 => x0.hash,
      _1013: x0 => x0.state,
      _1016: (x0,x1) => x0.createObjectURL(x1),
      _1018: x0 => new Blob(x0),
      _1020: x0 => new MutationObserver(x0),
      _1021: (x0,x1,x2) => x0.observe(x1,x2),
      _1022: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1022(f,arguments.length,x0,x1) }),
      _1025: x0 => x0.attributeName,
      _1026: x0 => x0.type,
      _1027: x0 => x0.matches,
      _1028: x0 => x0.matches,
      _1032: x0 => x0.relatedTarget,
      _1034: x0 => x0.clientX,
      _1035: x0 => x0.clientY,
      _1036: x0 => x0.offsetX,
      _1037: x0 => x0.offsetY,
      _1040: x0 => x0.button,
      _1041: x0 => x0.buttons,
      _1042: x0 => x0.ctrlKey,
      _1046: x0 => x0.pointerId,
      _1047: x0 => x0.pointerType,
      _1048: x0 => x0.pressure,
      _1049: x0 => x0.tiltX,
      _1050: x0 => x0.tiltY,
      _1051: x0 => x0.getCoalescedEvents(),
      _1054: x0 => x0.deltaX,
      _1055: x0 => x0.deltaY,
      _1056: x0 => x0.wheelDeltaX,
      _1057: x0 => x0.wheelDeltaY,
      _1058: x0 => x0.deltaMode,
      _1065: x0 => x0.changedTouches,
      _1068: x0 => x0.clientX,
      _1069: x0 => x0.clientY,
      _1072: x0 => x0.data,
      _1075: (x0,x1) => { x0.disabled = x1 },
      _1077: (x0,x1) => { x0.type = x1 },
      _1078: (x0,x1) => { x0.max = x1 },
      _1079: (x0,x1) => { x0.min = x1 },
      _1080: x0 => x0.value,
      _1081: (x0,x1) => { x0.value = x1 },
      _1082: x0 => x0.disabled,
      _1083: (x0,x1) => { x0.disabled = x1 },
      _1084: (x0,x1) => { x0.placeholder = x1 },
      _1087: (x0,x1) => { x0.name = x1 },
      _1089: (x0,x1) => { x0.autocomplete = x1 },
      _1090: x0 => x0.selectionDirection,
      _1091: x0 => x0.selectionStart,
      _1093: x0 => x0.selectionEnd,
      _1096: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1097: (x0,x1) => x0.add(x1),
      _1100: (x0,x1) => { x0.noValidate = x1 },
      _1101: (x0,x1) => { x0.method = x1 },
      _1102: (x0,x1) => { x0.action = x1 },
      _1103: (x0,x1) => new OffscreenCanvas(x0,x1),
      _1109: (x0,x1) => x0.getContext(x1),
      _1111: x0 => x0.convertToBlob(),
      _1128: x0 => x0.orientation,
      _1129: x0 => x0.width,
      _1130: x0 => x0.height,
      _1131: (x0,x1) => x0.lock(x1),
      _1150: x0 => new ResizeObserver(x0),
      _1153: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1153(f,arguments.length,x0,x1) }),
      _1161: x0 => x0.length,
      _1162: x0 => x0.iterator,
      _1163: x0 => x0.Segmenter,
      _1164: x0 => x0.v8BreakIterator,
      _1165: (x0,x1) => new Intl.Segmenter(x0,x1),
      _1166: x0 => x0.done,
      _1167: x0 => x0.value,
      _1168: x0 => x0.index,
      _1172: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _1173: (x0,x1) => x0.adoptText(x1),
      _1174: x0 => x0.first(),
      _1175: x0 => x0.next(),
      _1176: x0 => x0.current(),
      _1182: x0 => x0.hostElement,
      _1183: x0 => x0.viewConstraints,
      _1186: x0 => x0.maxHeight,
      _1187: x0 => x0.maxWidth,
      _1188: x0 => x0.minHeight,
      _1189: x0 => x0.minWidth,
      _1190: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1190(f,arguments.length,x0) }),
      _1191: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1191(f,arguments.length,x0) }),
      _1192: (x0,x1) => ({addView: x0,removeView: x1}),
      _1193: x0 => x0.loader,
      _1194: () => globalThis._flutter,
      _1195: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1196: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1196(f,arguments.length,x0) }),
      _1197: f => finalizeWrapper(f, function() { return dartInstance.exports._1197(f,arguments.length) }),
      _1198: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _1199: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1199(f,arguments.length,x0) }),
      _1200: x0 => ({runApp: x0}),
      _1201: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1201(f,arguments.length,x0,x1) }),
      _1202: x0 => x0.length,
      _1203: () => globalThis.window.ImageDecoder,
      _1204: x0 => x0.tracks,
      _1206: x0 => x0.completed,
      _1208: x0 => x0.image,
      _1214: x0 => x0.displayWidth,
      _1215: x0 => x0.displayHeight,
      _1216: x0 => x0.duration,
      _1219: x0 => x0.ready,
      _1220: x0 => x0.selectedTrack,
      _1221: x0 => x0.repetitionCount,
      _1222: x0 => x0.frameCount,
      _1270: (x0,x1) => x0.createElement(x1),
      _1276: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1277: x0 => x0.preventDefault(),
      _1278: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1278(f,arguments.length,x0) }),
      _1279: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1280: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _1281: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1281(f,arguments.length,x0) }),
      _1282: (x0,x1) => ({type: x0,callback: x1}),
      _1283: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1283(f,arguments.length,x0) }),
      _1284: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1284(f,arguments.length,x0) }),
      _1285: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1285(f,arguments.length,x0) }),
      _1286: x0 => x0.type,
      _1287: x0 => x0.callback,
      _1294: x0 => x0.arrayBuffer(),
      _1295: x0 => x0.getAsFile(),
      _1296: x0 => x0.webkitGetAsEntry(),
      _1297: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1297(f,arguments.length,x0) }),
      _1298: (x0,x1) => x0.getAsString(x1),
      _1299: x0 => x0.slice(),
      _1300: x0 => x0.cancel(),
      _1301: x0 => x0.stream(),
      _1302: x0 => new ReadableStreamDefaultReader(x0),
      _1303: x0 => x0.read(),
      _1305: x0 => ({type: x0}),
      _1306: (x0,x1) => new Blob(x0,x1),
      _1310: x0 => new Worker(x0),
      _1311: (x0,x1) => x0.append(x1),
      _1312: x0 => globalThis.URL.createObjectURL(x0),
      _1313: (x0,x1) => x0.getElementById(x1),
      _1314: (x0,x1) => x0.createElement(x1),
      _1315: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1316: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1316(f,arguments.length,x0) }),
      _1317: x0 => x0.remove(),
      _1318: x0 => x0.click(),
      _1327: () => new FileReader(),
      _1328: (x0,x1) => x0.readAsArrayBuffer(x1),
      _1333: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1334: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1340: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1341: () => globalThis.Notification.requestPermission(),
      _1342: x0 => ({name: x0}),
      _1343: (x0,x1) => new Worker(x0,x1),
      _1344: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1344(f,arguments.length,x0) }),
      _1345: (x0,x1) => x0.postMessage(x1),
      _1346: x0 => x0.terminate(),
      _1347: x0 => x0.decode(),
      _1348: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1349: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1350: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1350(f,arguments.length,x0) }),
      _1351: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1351(f,arguments.length,x0) }),
      _1352: x0 => x0.send(),
      _1353: () => new XMLHttpRequest(),
      _1355: (x0,x1) => x0.getItem(x1),
      _1356: (x0,x1) => x0.removeItem(x1),
      _1357: (x0,x1,x2) => x0.setItem(x1,x2),
      _1372: (x0,x1) => x0.querySelector(x1),
      _1373: (x0,x1) => x0.item(x1),
      _1375: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1375(f,arguments.length,x0) }),
      _1376: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1376(f,arguments.length,x0) }),
      _1377: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1377(f,arguments.length,x0) }),
      _1378: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1378(f,arguments.length,x0) }),
      _1379: (x0,x1) => x0.removeChild(x1),
      _1380: x0 => new Blob(x0),
      _1384: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
      _1385: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
      _1386: x0 => globalThis.firebase_core.getApp(x0),
      _1387: () => globalThis.firebase_core.getApp(),
      _1389: (x0,x1) => ({next: x0,error: x1}),
      _1391: x0 => globalThis.firebase_messaging.getMessaging(x0),
      _1392: x0 => globalThis.firebase_messaging.deleteToken(x0),
      _1393: (x0,x1) => globalThis.firebase_messaging.getToken(x0,x1),
      _1395: (x0,x1) => globalThis.firebase_messaging.onMessage(x0,x1),
      _1399: x0 => x0.title,
      _1400: x0 => x0.body,
      _1401: x0 => x0.image,
      _1402: x0 => x0.messageId,
      _1403: x0 => x0.collapseKey,
      _1404: x0 => x0.fcmOptions,
      _1405: x0 => x0.notification,
      _1406: x0 => x0.data,
      _1407: x0 => x0.from,
      _1408: x0 => x0.analyticsLabel,
      _1409: x0 => x0.link,
      _1410: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1410(f,arguments.length,x0) }),
      _1411: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1411(f,arguments.length,x0) }),
      _1413: () => globalThis.firebase_core.SDK_VERSION,
      _1419: x0 => x0.apiKey,
      _1421: x0 => x0.authDomain,
      _1423: x0 => x0.databaseURL,
      _1425: x0 => x0.projectId,
      _1427: x0 => x0.storageBucket,
      _1429: x0 => x0.messagingSenderId,
      _1431: x0 => x0.measurementId,
      _1433: x0 => x0.appId,
      _1435: x0 => x0.name,
      _1436: x0 => x0.options,
      _1437: (x0,x1) => x0.debug(x1),
      _1438: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1438(f,arguments.length,x0) }),
      _1439: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1439(f,arguments.length,x0,x1) }),
      _1440: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
      _1441: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _1442: (x0,x1) => x0.createScriptURL(x1),
      _1443: (x0,x1,x2) => x0.createScript(x1,x2),
      _1444: (x0,x1) => x0.appendChild(x1),
      _1445: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1445(f,arguments.length,x0) }),
      _1447: Date.now,
      _1449: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1450: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1451: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1452: () => typeof dartUseDateNowForTicks !== "undefined",
      _1453: () => 1000 * performance.now(),
      _1454: () => Date.now(),
      _1455: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1456: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1457: () => new WeakMap(),
      _1458: (map, o) => map.get(o),
      _1459: (map, o, v) => map.set(o, v),
      _1460: x0 => new WeakRef(x0),
      _1461: x0 => x0.deref(),
      _1468: () => globalThis.WeakRef,
      _1472: s => JSON.stringify(s),
      _1473: s => printToConsole(s),
      _1474: (o, p, r) => o.replaceAll(p, () => r),
      _1475: (o, p, r) => o.replace(p, () => r),
      _1476: Function.prototype.call.bind(String.prototype.toLowerCase),
      _1477: s => s.toUpperCase(),
      _1478: s => s.trim(),
      _1479: s => s.trimLeft(),
      _1480: s => s.trimRight(),
      _1481: (string, times) => string.repeat(times),
      _1482: Function.prototype.call.bind(String.prototype.indexOf),
      _1483: (s, p, i) => s.lastIndexOf(p, i),
      _1484: (string, token) => string.split(token),
      _1485: Object.is,
      _1486: o => o instanceof Array,
      _1487: (a, i) => a.push(i),
      _1488: (a, i) => a.splice(i, 1)[0],
      _1490: (a, l) => a.length = l,
      _1491: a => a.pop(),
      _1492: (a, i) => a.splice(i, 1),
      _1493: (a, s) => a.join(s),
      _1494: (a, s, e) => a.slice(s, e),
      _1495: (a, s, e) => a.splice(s, e),
      _1496: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1497: a => a.length,
      _1499: (a, i) => a[i],
      _1500: (a, i, v) => a[i] = v,
      _1502: o => o instanceof ArrayBuffer,
      _1503: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1505: o => o instanceof Uint8Array,
      _1506: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1507: o => o instanceof Int8Array,
      _1508: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1509: o => o instanceof Uint8ClampedArray,
      _1510: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1511: o => o instanceof Uint16Array,
      _1512: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1513: o => o instanceof Int16Array,
      _1514: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1515: o => o instanceof Uint32Array,
      _1516: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1517: o => o instanceof Int32Array,
      _1518: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1520: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1521: o => o instanceof Float32Array,
      _1522: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1523: o => o instanceof Float64Array,
      _1524: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1525: (t, s) => t.set(s),
      _1526: l => new DataView(new ArrayBuffer(l)),
      _1527: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1528: o => o.byteLength,
      _1529: o => o.buffer,
      _1530: o => o.byteOffset,
      _1531: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1532: (b, o) => new DataView(b, o),
      _1533: (b, o, l) => new DataView(b, o, l),
      _1534: Function.prototype.call.bind(DataView.prototype.getUint8),
      _1535: Function.prototype.call.bind(DataView.prototype.setUint8),
      _1536: Function.prototype.call.bind(DataView.prototype.getInt8),
      _1537: Function.prototype.call.bind(DataView.prototype.setInt8),
      _1538: Function.prototype.call.bind(DataView.prototype.getUint16),
      _1539: Function.prototype.call.bind(DataView.prototype.setUint16),
      _1540: Function.prototype.call.bind(DataView.prototype.getInt16),
      _1541: Function.prototype.call.bind(DataView.prototype.setInt16),
      _1542: Function.prototype.call.bind(DataView.prototype.getUint32),
      _1543: Function.prototype.call.bind(DataView.prototype.setUint32),
      _1544: Function.prototype.call.bind(DataView.prototype.getInt32),
      _1545: Function.prototype.call.bind(DataView.prototype.setInt32),
      _1548: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _1549: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _1550: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _1551: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _1552: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _1553: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _1566: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1567: (handle) => clearTimeout(handle),
      _1568: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1569: (handle) => clearInterval(handle),
      _1570: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1571: () => Date.now(),
      _1576: o => Object.keys(o),
      _1577: x0 => new WebSocket(x0),
      _1578: (x0,x1) => new WebSocket(x0,x1),
      _1579: (x0,x1) => x0.send(x1),
      _1580: x0 => x0.close(),
      _1581: () => new XMLHttpRequest(),
      _1582: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1583: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1584: (x0,x1) => x0.getResponseHeader(x1),
      _1585: (x0,x1) => x0.send(x1),
      _1586: x0 => x0.abort(),
      _1587: x0 => x0.send(),
      _1590: (x0,x1,x2) => x0.open(x1,x2),
      _1591: x0 => x0.getAllResponseHeaders(),
      _1592: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _1593: (x0,x1) => globalThis.fetch(x0,x1),
      _1594: (x0,x1) => x0.get(x1),
      _1595: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1595(f,arguments.length,x0,x1,x2) }),
      _1596: (x0,x1) => x0.forEach(x1),
      _1597: x0 => x0.abort(),
      _1598: () => new AbortController(),
      _1599: x0 => x0.getReader(),
      _1602: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1602(f,arguments.length,x0) }),
      _1603: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1603(f,arguments.length,x0) }),
      _1609: (x0,x1) => x0.key(x1),
      _1622: x0 => x0.trustedTypes,
      _1623: (x0,x1) => { x0.text = x1 },
      _1631: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _1632: (x0,x1) => x0.exec(x1),
      _1633: (x0,x1) => x0.test(x1),
      _1634: x0 => x0.pop(),
      _1636: o => o === undefined,
      _1638: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _1640: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _1641: o => o instanceof RegExp,
      _1642: (l, r) => l === r,
      _1643: o => o,
      _1644: o => o,
      _1645: o => o,
      _1646: b => !!b,
      _1647: o => o.length,
      _1649: (o, i) => o[i],
      _1650: f => f.dartFunction,
      _1651: () => ({}),
      _1652: () => [],
      _1654: () => globalThis,
      _1655: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _1656: (o, p) => p in o,
      _1657: (o, p) => o[p],
      _1658: (o, p, v) => o[p] = v,
      _1659: (o, m, a) => o[m].apply(o, a),
      _1661: o => String(o),
      _1662: (p, s, f) => p.then(s, f),
      _1663: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _1664: o => [o],
      _1665: (o0, o1) => [o0, o1],
      _1666: (o0, o1, o2) => [o0, o1, o2],
      _1667: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _1668: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1669: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1670: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1671: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1672: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1673: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1674: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1675: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1676: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1677: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1678: x0 => new ArrayBuffer(x0),
      _1679: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _1680: x0 => x0.input,
      _1681: x0 => x0.index,
      _1682: x0 => x0.groups,
      _1683: x0 => x0.flags,
      _1684: x0 => x0.multiline,
      _1685: x0 => x0.ignoreCase,
      _1686: x0 => x0.unicode,
      _1687: x0 => x0.dotAll,
      _1688: (x0,x1) => { x0.lastIndex = x1 },
      _1689: (o, p) => p in o,
      _1690: (o, p) => o[p],
      _1691: (o, p, v) => o[p] = v,
      _1692: (o, p) => delete o[p],
      _1693: x0 => x0.random(),
      _1694: (x0,x1) => x0.getRandomValues(x1),
      _1695: () => globalThis.crypto,
      _1696: () => globalThis.Math,
      _1697: Function.prototype.call.bind(Number.prototype.toString),
      _1698: Function.prototype.call.bind(BigInt.prototype.toString),
      _1699: Function.prototype.call.bind(Number.prototype.toString),
      _1700: (d, digits) => d.toFixed(digits),
      _1704: (x0,x1) => globalThis.Object.getOwnPropertyDescriptor(x0,x1),
      _1705: (x0,x1) => globalThis.Reflect.get(x0,x1),
      _1706: f => finalizeWrapper(f, function() { return dartInstance.exports._1706(f,arguments.length) }),
      _1707: () => globalThis.document,
      _1727: x0 => x0.src,
      _1728: (x0,x1) => { x0.src = x1 },
      _1729: x0 => x0.naturalWidth,
      _1730: x0 => x0.naturalHeight,
      _1746: x0 => x0.status,
      _1747: (x0,x1) => { x0.responseType = x1 },
      _1749: x0 => x0.response,
      _1786: x0 => x0.readyState,
      _1788: (x0,x1) => { x0.timeout = x1 },
      _1790: (x0,x1) => { x0.withCredentials = x1 },
      _1791: x0 => x0.upload,
      _1792: x0 => x0.responseURL,
      _1793: x0 => x0.status,
      _1794: x0 => x0.statusText,
      _1796: (x0,x1) => { x0.responseType = x1 },
      _1797: x0 => x0.response,
      _1798: x0 => x0.responseText,
      _1809: x0 => x0.loaded,
      _1810: x0 => x0.total,
      _1857: (x0,x1) => { x0.draggable = x1 },
      _1873: x0 => x0.style,
      _2230: (x0,x1) => { x0.target = x1 },
      _2232: (x0,x1) => { x0.download = x1 },
      _2257: (x0,x1) => { x0.href = x1 },
      _2802: (x0,x1) => { x0.accept = x1 },
      _2816: x0 => x0.files,
      _2842: (x0,x1) => { x0.multiple = x1 },
      _2860: (x0,x1) => { x0.type = x1 },
      _3112: (x0,x1) => { x0.type = x1 },
      _3120: (x0,x1) => { x0.crossOrigin = x1 },
      _3122: (x0,x1) => { x0.text = x1 },
      _3557: (x0,x1) => { x0.dropEffect = x1 },
      _3558: x0 => x0.effectAllowed,
      _3560: x0 => x0.items,
      _3561: x0 => x0.types,
      _3563: (x0,x1) => x0[x1],
      _3567: x0 => x0.length,
      _3568: x0 => x0.kind,
      _3569: x0 => x0.type,
      _3571: x0 => x0.dataTransfer,
      _3575: () => globalThis.window,
      _3615: x0 => x0.document,
      _3618: x0 => x0.location,
      _3637: x0 => x0.navigator,
      _3899: x0 => x0.trustedTypes,
      _3901: x0 => x0.localStorage,
      _3912: x0 => x0.protocol,
      _3916: x0 => x0.hostname,
      _3918: x0 => x0.port,
      _4007: x0 => x0.geolocation,
      _4010: x0 => x0.mediaDevices,
      _4012: x0 => x0.permissions,
      _4026: x0 => x0.userAgent,
      _4027: x0 => x0.vendor,
      _4037: x0 => x0.hardwareConcurrency,
      _4077: x0 => x0.data,
      _4184: (x0,x1) => { x0.onmessage = x1 },
      _4232: x0 => x0.length,
      _4462: x0 => x0.binaryType,
      _4463: (x0,x1) => { x0.binaryType = x1 },
      _6134: x0 => x0.type,
      _6135: x0 => x0.target,
      _6175: x0 => x0.signal,
      _6230: x0 => x0.baseURI,
      _6236: x0 => x0.firstChild,
      _6247: () => globalThis.document,
      _6328: x0 => x0.body,
      _6330: x0 => x0.head,
      _6660: (x0,x1) => { x0.id = x1 },
      _6684: (x0,x1) => { x0.innerHTML = x1 },
      _6687: x0 => x0.children,
      _7002: x0 => x0.pageX,
      _7003: x0 => x0.pageY,
      _7006: x0 => x0.offsetX,
      _7007: x0 => x0.offsetY,
      _8005: x0 => x0.value,
      _8007: x0 => x0.done,
      _8184: x0 => x0.size,
      _8185: x0 => x0.type,
      _8192: x0 => x0.name,
      _8198: x0 => x0.length,
      _8203: x0 => x0.result,
      _8700: x0 => x0.url,
      _8702: x0 => x0.status,
      _8704: x0 => x0.statusText,
      _8705: x0 => x0.headers,
      _8706: x0 => x0.body,
      _11105: (x0,x1) => { x0.display = x1 },
      _13043: () => globalThis.console,
      _13071: x0 => x0.name,
      _13072: x0 => x0.message,
      _13073: x0 => x0.code,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      S: new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
