// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker: 2d.composite.solid.source-over
// 
// 

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');


ctx.fillStyle = 'rgba(0, 255, 255, 1.0)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-over';
ctx.fillStyle = 'rgba(255, 255, 0, 1.0)';
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 255,255,0,255, "50,25", "255,255,0,255", 5);

t.done();

});
done();
