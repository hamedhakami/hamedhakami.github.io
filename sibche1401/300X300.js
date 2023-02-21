(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300X300_atlas_1", frames: [[0,0,1404,451],[0,1186,1301,449],[0,453,845,731]]},
		{name:"300X300_atlas_2", frames: [[579,757,441,434],[0,757,577,577],[757,0,229,64],[0,0,755,755]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["300X300_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["300X300_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["300X300_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["300X300_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["300X300_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["300X300_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["300X300_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOH1QgwglgfhEQghhJAFhIIgEmOIEJgdIACGZQABCmgCAJQgRBbgvAVQgOAHgOAAQgeAAghgagAl/kGQAIiHAxhBQAwhABxAAQA+AABhAiQAqAPASADQBqAiAcAAQAjAAAPgUQAOgSAMgwIB4AXQgIB4gtBAQgtBAheAAQhRAAiFgqQgUgIgzgQQg3gRggAAQgkAAgPAXQgQAWgNA0g");
	this.shape.setTransform(0.025,0.0639);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-52.6,76.9,105.4);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHHzQgvgkgghFQgihIgBhGIgEmPIEJgdIACGaQABClgCAKQgSBbgsAUQgMAGgNAAQgdAAgggbgAl/kFQAIiHAxhBQAwhABxAAQA+AABhAhQAqAPASAEQBqAhAcAAQAjAAAPgTQAOgSAMgwIB4AXQgIB3gtBBQgtA/heAAQhRAAiFgqQgUgIgzgQQg3gQggAAQgkAAgPAWQgQAWgNA0g");
	this.shape.setTransform(0.025,0.0092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-52.6,76.9,105.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-109.3,-104.25,0.5,0.5);

	this.instance_1 = new lib.Image();
	this.instance_1.setTransform(-123.8,-123.8,0.3279,0.3279);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-144.4,-144.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.4,-144.3,288.5,288.5);


(lib.Noon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An4KDQiOiEAAjgQAAiDAliYQAmiZBKi8IC8BGQh0FdAICwQAEBqBXBDQBYBCCoAAQBvAABwgbQBxgbBOg8QBOg8AAhbQAAhdghiwQggizgximIDghdQA0DLAgCiQAfCiAACJQAAAwgCATQgKChhZB2QhZB1ikA/QikA/jeAAQkMgCiPiFgAgwnTIihiPIAAgKICNidIAKAAICgCPIAAAKIiMCdg");
	this.shape.setTransform(73.7234,88.6061,1.1392,1.1392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,177.2);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-42.4,-36.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-42.4,-36.2,422.5,365.5), null);


(lib._2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqoMmIgHkIQA0AAAmgCQEKgOCdhMQCehMA0iTIkoAAQjSAAhkhjQhlhiAAjEQAAkVB0i3QB1i3DlAAQDtAACIC7QCIC7AUFXIDTgBQBBAAAuAuQAtAvABBAQgBBBgtAwQguAwhBAAIjiACQg0EijWCKQjWCJl5ASQggAAhggEgAl4msQguBXgBB1QAABPAtAaQAsAbBjAAIEoAAQgkmpjuAAQhzAAgwBZg");
	this.shape.setTransform(68.75,81.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,162.1);


(lib._2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqoMmIgHkIQA0AAAmgCQEKgOCdhMQCehMA0iTIkoAAQjSAAhkhjQhlhiAAjEQAAkVB0i3QB1i3DlAAQDtAACIC7QCIC7AUFXIDTgBQBBAAAuAuQAtAvABBAQgBBBgtAwQguAwhBAAIjiACQg0EijWCKQjWCJl5ASQggAAhggEgAl4msQguBXgBB1QAABPAtAaQAsAbBjAAIEoAAQgkmpjuAAQhzAAgwBZg");
	this.shape.setTransform(68.75,81.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,162.1);


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsXMmIgHkIQA0AAAmgCQEKgOCdhMQCehMA1iTIkpAAQjSAAhkhjQhlhiAAjEQAAkVB0i3QB1i3DlAAQDuAACHC7QCIC7AUFXIGxgDQBBAAAtAvQAvAvgBBAQABBAgvAwQgtAxhBAAInAADQg0EijVCKQjXCJl5ASQggAAhggEgAnnmsQguBXgBB1QAABPAtAaQAsAbBjAAIEpAAQgkmpjvAAQhzAAgwBZg");
	this.shape.setTransform(79.85,81.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.7,162.1);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGJFQgEgEgUANQgVAMgOgPQgVgYg4gvIgHxYIEKgdIAFS3QAAAeAEAOIgQAAQg+AAg2gtg");
	this.shape.setTransform(13.75,62.6364);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,125.3);


(lib.Sale_No = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vav
	this.instance = new lib._2("synched",0);
	this.instance.setTransform(-311.05,-103.85,1,1,0,0,0,62.6,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).to({x:-376.45,y:-103},5).to({x:-311.05,y:-103.85},5).wait(19).to({startPosition:0},0).to({_off:true},1).wait(17));

	// Alef
	this.instance_1 = new lib._1("synched",0);
	this.instance_1.setTransform(145,-211.9,1,1,0,0,0,13.4,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-302.5},5).to({y:-211.9},5).wait(22).to({startPosition:0},0).to({_off:true},1).wait(17));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-305.75,-247.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:true},1).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439,-337.6,835.3,315.70000000000005);


(lib.iPhone_No = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Vav_3
	this.instance = new lib._2copy2("synched",0);
	this.instance.setTransform(-311.05,164.3,1,1,0,0,0,62.6,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({startPosition:0},0).to({x:-406.45},5).to({x:-311.05},5).wait(2).to({startPosition:0},0).to({_off:true},1).wait(17));

	// Noon
	this.instance_1 = new lib.Noon("synched",0);
	this.instance_1.setTransform(-84.95,157.6,1,1,0,0,0,73.7,88.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({startPosition:0},0).to({x:-93.75},5).to({x:-84.95},4).wait(6).to({startPosition:0},0).to({_off:true},1).wait(17));

	// Vav2
	this.instance_2 = new lib._2copy("synched",0);
	this.instance_2.setTransform(64.4,164.3,1,1,0,0,0,62.6,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({startPosition:0},0).to({x:53.2},5).to({x:64.4},5).wait(8).to({startPosition:0},0).to({_off:true},1).wait(17));

	// Alef_with_Kolah
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHHzQgvgkgghFQgihIgBhGIgEmPIEJgdIACGaQABClgCAKQgSBbgsAUQgMAGgNAAQgdAAgggbgAl/kFQAIiHAxhBQAwhABxAAQA+AABhAhQAqAPASAEQBqAhAcAAQAjAAAPgTQAOgSAMgwIB4AXQgIB3gtBBQgtA/heAAQhRAAiFgqQgUgIgzgQQg3gQggAAQgkAAgPAWQgQAWgNA0g");
	this.shape.setTransform(356.875,64.8092);

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(356.85,64.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(356.85,20.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},11).to({state:[]},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true,y:20.7},5).to({_off:false,y:64.8},5).wait(11).to({startPosition:0},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},5).to({_off:true,y:64.8},5).wait(29));

	// Layer_1_copy
	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(-279.35,20.75,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(-353.35,154.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},32).to({state:[]},1).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469,-31.9,864.3,278.09999999999997);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.setTransform(190.25,164.8,1,1,17.4023,0,0,190.2,164.7);
	this.instance.alpha = 0.2813;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-80.9,-96.5,512.5,475.2), null);


// stage content:
(lib._300X300 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [71];
	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(150,87.8,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39,cjs.Ease.backInOut).wait(33));

	// Title
	this.instance_1 = new lib.iPhone_No("single",0);
	this.instance_1.setTransform(80.3,226.5,0.1632,0.1632,0,0,0,-12,121);

	this.instance_2 = new lib.Sale_No("single",0);
	this.instance_2.setTransform(190.15,206.85,0.1632,0.1632,0,0,0,-173.7,-267.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{mode:"single",loop:undefined}},{t:this.instance_1,p:{mode:"single",loop:undefined}}]}).to({state:[{t:this.instance_2,p:{mode:"synched",loop:false}},{t:this.instance_1,p:{mode:"synched",loop:false}}]},39).wait(33));

	// Logo_Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsBoQgIgIAAgHQAAAHgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgMQAAgLAIgJQAIgHAMgBQALABAIAHQAIAJAAALQAAgLAIgJQAJgHALgBQAMABAIAHQAIAJAAALQAAAMgIAIQgIAIgMAAQgLAAgJgIgAgTBoQgIgIAAgMQAAgLAIgJQAIgHALgBQALABAJAHQAIAJAAALQAAAMgIAIQgJAIgLAAQgLAAgIgIgAiTBoQgIgIAAgHQAAAHgIAIQgIAIgMAAQgLAAgJgIQgIgIAAgHQAAAHgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgMQAAgLAIgJQAIgHAMgBQALABAIAHQAIAJAAALQAAgLAIgJQAJgHALgBQALABAJAHQAIAJAAALQAAgLAIgJQAIgHAMgBQALABAJAHQAIAJAAALQAAAMgIAIQgJAIgLAAQgMAAgIgIgAAxAnQgEAAAAgDIAAiNQAAgGAGAAIArAAQAGAAAAAGIAABTQAAAHAHAAIFeAAQAHAAAAAHIAAAUQAAAMgIAHQgIAIgLAAgAgUAnQgHABAAgHIAAiKQAAgGAHAAIApAAQAHAAAAAGIAAB1QAAAMgIAHQgIAIgLAAgAkbAnQgWAAgQgPQgSgSAAgXIAAgJQAAgMgKgJQgJgJgPABQgNAAgKAIQgLAIAAANIAAAJQAAA5gxgBQgEAAgCgBIgBgGIAAg3QAAgoAegZQAbgXAhAAQAfAAAYATQAZATAHAeIAGAVQADAHAKAAICjAAQADAAABgEIAAgJQAAgLgIgIQgIgIgLAAIhJAAQgMAAgLgFQgOgFgGgIQgGgKgCgUIAAgBQgBgGAHgBIBzAAQAoAAATAPQAbAWAAAoIAABDQAAAHgHgBg");
	this.shape.setTransform(150.0088,277.5421,0.9203,0.9203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(72));

	// Layer_1
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(173.6,141.55,1,1,0,0,0,190.2,164.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2196F3").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape_1.setTransform(150.05,149.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_3}]}).wait(72));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2196F3").s().p("A/TfUMAAAg+nMA+nAAAMAAAA+ng");
	this.shape_2.setTransform(150.3375,149.6438,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(72));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(52.5,30.3,362.5,325.2);
// library properties:
lib.properties = {
	id: 'DD77F837CCE27F428FF2289DF1A46E68',
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300X300_atlas_1.png", id:"300X300_atlas_1"},
		{src:"images/300X300_atlas_2.png", id:"300X300_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DD77F837CCE27F428FF2289DF1A46E68'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;