// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker: 2d.composite.globalAlpha.invalid
// 
// 

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.globalAlpha = 0.5;
var a = ctx.globalAlpha; // might not be exactly 0.5, if it is rounded/quantised, so remember for future comparisons
ctx.globalAlpha = Infinity;
_assertSame(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = -Infinity;
_assertSame(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = NaN;
_assertSame(ctx.globalAlpha, a, "ctx.globalAlpha", "a");

t.done();

});
done();
