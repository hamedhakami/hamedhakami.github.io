(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.TitleGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Key Visuals for IranCard New Year Campaign:\n“Nowruz’s Known For The Fun!”", "55px 'Roobert'", "#FFFFFF");
	this.text.lineHeight = 68;
	this.text.lineWidth = 789;
	this.text.parent = this;
	this.text.setTransform(210.9,362.6,1.1278,1.1278);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208.7,360.4,894.3,232.30000000000007);


(lib.RightColumnGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("COMPANY   ERTEBAT FARDA (IRANCARD)\nYEAR   2023\n\nWith the arrival of Nowruz holidays, a campaign was lunched for IranCard customers to offer them the use of entertainment services with IranCard; the concept behind it was that IranCard is with them during the holidays as well. I designed these four key visuals based on the four IranCard levels (blue, silver, gold, and platinum).\nAlso, a number of secondary visuals were designed to introduce IranCard services in different cities of Iran, so that customers can use IranCard offers during the holidays.", "21px 'Roobert'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 539;
	this.text.alpha = 0.60000000;
	this.text.parent = this;
	this.text.setTransform(1251.2,170.35,1.1278,1.1278);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1249,168.1,612.4000000000001,431.69999999999993);


(lib.MovingRightColumn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.RightColumnGroup("synched",0);
	this.instance.setTransform(1513.75,460.85,0.85,0.85,0,0,0,1391,460.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1278.95,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1158.2,211.9,755.3999999999999,367);


(lib.MovingImages = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TitleGroup("synched",0);
	this.instance.setTransform(1463.75,460.85,0.85,0.85,0,0,0,1391,460.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1278.95,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,375.3,944.9000000000001,197.59999999999997);


// stage content:
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

	this.actionFrames = [52];
	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Slider_6
	this.instance = new lib.MovingImages("synched",29,false);
	this.instance.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(3));

	// Mask_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBjEAqEMAAAhTvMAyAAAAMAAABTvg");
	mask.setTransform(954,269.25);

	// Right_Column3
	this.instance_1 = new lib.MovingRightColumn("synched",0,false);
	this.instance_1.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(25));

	// Mask_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EBKEAqEMAAAhTvMAyAAAAMAAABTvg");
	mask_1.setTransform(794,269.25);

	// Right_Column2
	this.instance_2 = new lib.MovingRightColumn("synched",0,false);
	this.instance_2.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(28));

	// Mask_1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EAxEAqEMAAAhTvMAyAAAAMAAABTvg");
	mask_2.setTransform(634,269.25);

	// Right_Column1
	this.instance_3 = new lib.MovingRightColumn("synched",0,false);
	this.instance_3.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(31));

	// Mask_6_copy_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EBjEA7rMAAAg+NMAyAAAAMAAAA+Ng");
	mask_3.setTransform(954,381.875);

	// Slider_6_copy_copy
	this.instance_4 = new lib.MovingImages("synched",0,false);
	this.instance_4.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).wait(22));

	// Mask_5_copy_copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EBKEA7rMAAAg+KMAyAAAAMAAAA+Kg");
	mask_4.setTransform(794,381.875);

	// Slider_5_copy_copy
	this.instance_5 = new lib.MovingImages("synched",0,false);
	this.instance_5.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).wait(25));

	// Mask_4_copy_copy (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EAxEA7nMAAAg+FMAyAAAAMAAAA+Fg");
	mask_5.setTransform(634,381.45);

	// Slider_4_copy_copy
	this.instance_6 = new lib.MovingImages("synched",0,false);
	this.instance_6.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).wait(28));

	// Mask_3_copy_copy (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EAYEA8KMAAAg/PMAyAAAAMAAAA/Pg");
	mask_6.setTransform(474,385);

	// Slider_3_copy_copy
	this.instance_7 = new lib.MovingImages("synched",0,false);
	this.instance_7.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).wait(31));

	// Mask_3_copy_copy_copy (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EgA7A8KMAAAg/PMAx/AAAMAAAA/Pg");
	mask_7.setTransform(314,385);

	// Slider_3_copy_copy_copy
	this.instance_8 = new lib.MovingImages("synched",0,false);
	this.instance_8.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(34));

	// Mask_3_copy_copy_copy_copy (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EgY/A8KMAAAg/PMAx/AAAMAAAA/Pg");
	mask_8.setTransform(148,385);

	// Slider_3_copy_copy_copy_copy
	this.instance_9 = new lib.MovingImages("synched",0,false);
	this.instance_9.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).wait(37));

	// Mask_6_copy (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("EBjEAcmIAAqgMAyAAAAIAAKgg");
	mask_9.setTransform(954,182.95);

	// Slider_6_copy
	this.instance_10 = new lib.MovingImages("synched",0,false);
	this.instance_10.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).wait(28));

	// Mask_5_copy (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("EBKEAclIAAqfMAyAAAAIAAKfg");
	mask_10.setTransform(794,182.925);

	// Slider_5_copy
	this.instance_11 = new lib.MovingImages("synched",0,false);
	this.instance_11.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).wait(31));

	// Mask_4_copy (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("EAxEAcmIAAqfMAyAAAAIAAKfg");
	mask_11.setTransform(634,182.95);

	// Slider_4_copy
	this.instance_12 = new lib.MovingImages("synched",0,false);
	this.instance_12.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).wait(34));

	// Mask_3_copy (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("AYEcmIAAqrMAyAAAAIAAKrg");
	mask_12.setTransform(474,182.975);

	// Slider_3_copy
	this.instance_13 = new lib.MovingImages("synched",0,false);
	this.instance_13.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(16).to({_off:false},0).wait(37));

	// Mask_3_copy_copy (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	mask_13.graphics.p("Ag7cmIAAqrMAx/AAAIAAKrg");
	mask_13.setTransform(314,182.975);

	// Slider_3_copy_copy
	this.instance_14 = new lib.MovingImages("synched",0,false);
	this.instance_14.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).wait(40));

	// Mask_3_copy_copy_copy (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	mask_14.graphics.p("A4/cmIAAqrMAx/AAAIAAKrg");
	mask_14.setTransform(148,182.975);

	// Right_Column_Text
	this.instance_15 = new lib.MovingImages("synched",0,false);
	this.instance_15.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).wait(43));

	// Mask_6 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	mask_15.graphics.p("EBjEAjOMAAAhGbMAyAAAAMAAABGbg");
	mask_15.setTransform(954,73.4);

	// Slider_6
	this.instance_16 = new lib.MovingImages("synched",0,false);
	this.instance_16.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).wait(34));

	// Mask_5 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	mask_16.graphics.p("EBKEAjNMAAAhGZMAyAAAAMAAABGZg");
	mask_16.setTransform(794,72.475);

	// Slider_5
	this.instance_17 = new lib.MovingImages("synched",0,false);
	this.instance_17.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({_off:false},0).wait(37));

	// Mask_4 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	mask_17.graphics.p("EAxEAjJMAAAhGRMAyAAAAMAAABGRg");
	mask_17.setTransform(634,72.85);

	// Slider_4
	this.instance_18 = new lib.MovingImages("synched",0,false);
	this.instance_18.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_17;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13).to({_off:false},0).wait(40));

	// Mask_3_copy (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	mask_18.graphics.p("EAYEAjJMAAAhGRMAyAAAAMAAABGRg");
	mask_18.setTransform(474,72.85);

	// Slider_3_copy
	this.instance_19 = new lib.MovingImages("synched",0,false);
	this.instance_19.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_18;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).wait(43));

	// Mask_3 (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	mask_19.graphics.p("EgA7AjJMAAAhGRMAx/AAAMAAABGRg");
	mask_19.setTransform(314,72.85);

	// Slider_3
	this.instance_20 = new lib.MovingImages("synched",0,false);
	this.instance_20.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_19;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).wait(46));

	// Mask_3_copy (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	mask_20.graphics.p("EgY/AjJMAAAhGRMAx/AAAMAAABGRg");
	mask_20.setTransform(148,72.85);

	// Slider_3_copy
	this.instance_21 = new lib.MovingImages("synched",0,false);
	this.instance_21.setTransform(1379,308.8,1,1,0,0,0,1391,460.8);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_20;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).wait(49));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1901.6,426.9);
// library properties:
lib.properties = {
	id: 'F4B9FF46F9F8BF45AF45F2A472091E15',
	width: 1920,
	height: 455,
	fps: 40,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
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
an.compositions['F4B9FF46F9F8BF45AF45F2A472091E15'] = {
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