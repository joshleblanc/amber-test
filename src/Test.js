define(["amber/boot", "require", "amber/core/Kernel-Objects", "amber/web/Web"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Test");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-test"};

$core.addClass("Router", $globals.Object, [], "Test");

$core.setSlots($globals.Router.a$cls, ["app"]);
$core.addMethod(
$core.method({
selector: "add:with:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aString"],
source: "add: anObject with: aString\x0a\x09|body|\x0a\x09body := 'body' asJQuery.\x0a\x09self app path: aString do: [ :req :res | body empty. anObject new appendToJQuery: body ].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["asJQuery", "path:do:", "app", "empty", "appendToJQuery:", "new"]
}, function ($methodClass){ return function (anObject,aString){
var self=this,$self=this;
var body;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
body="body"._asJQuery();
$recv($self._app())._path_do_(aString,(function(req,res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(body)._empty();
return $recv($recv(anObject)._new())._appendToJQuery_(body);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({req:req,res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:with:",{anObject:anObject,aString:aString,body:body})});
//>>excludeEnd("ctx");
}; }),
$globals.Router.a$cls);

$core.addMethod(
$core.method({
selector: "app",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "app\x0a\x09app ifNil: [\x0a\x09\x09app := (require value: 'crayon') crayon create.\x0a\x09].\x0a\x09^app.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifNil:", "create", "crayon", "value:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self.app;
if(($receiver = $1) == null || $receiver.a$nil){
$self.app=$recv($recv($recv(require)._value_("crayon"))._crayon())._create();
$self.app;
} else {
$1;
}
return $self.app;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"app",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Router.a$cls);

$core.addMethod(
$core.method({
selector: "load",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "load\x0a\x09self app load.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["load", "app"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._app())._load();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Router.a$cls);

$core.addMethod(
$core.method({
selector: "navigate:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "navigate: aString\x0a\x09self app navigate: aString.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["navigate:", "app"]
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._app())._navigate_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigate:",{aString:aString})});
//>>excludeEnd("ctx");
}; }),
$globals.Router.a$cls);


$core.addClass("Test", $globals.Widget, [], "Test");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09Router add: Home with: '/'.\x0a\x09Router add: TestPage with: '/test'.\x0a\x09Router load.",
referencedClasses: ["Router", "Home", "TestPage"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:with:", "load"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Router)._add_with_($globals.Home,"/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:with:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Router)._add_with_($globals.TestPage,"/test");
$recv($globals.Router)._load();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Test);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["augmentPage", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Test.a$cls);

});
