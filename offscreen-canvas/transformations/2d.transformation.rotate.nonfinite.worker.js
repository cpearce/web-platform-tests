// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.rotate.nonfinite
// Description:rotate() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("rotate() with Infinity/NaN is ignored");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.translate(100, 10);
ctx.rotate(Infinity);
ctx.rotate(-Infinity);
ctx.rotate(NaN);
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -10, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");

t.done();

});
done();
