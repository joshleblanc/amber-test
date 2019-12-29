define(["amber/boot", "require", "amber/web/Web"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Test-Pages");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-test"};

$core.addClass("Home", $globals.Widget, [], "Test-Pages");
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html p with: 'home'.\x0a\x09html with: (Link new with: 'To Test'; href: '/test').",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "p", "new", "href:"]
}, function ($methodClass){ return function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$recv($recv(html)._p())._with_("home");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Link)._new();
$recv($2)._with_("To Test");
$1=$recv($2)._href_("/test");
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html})});
//>>excludeEnd("ctx");
}; }),
$globals.Home);



$core.addClass("TestPage", $globals.Widget, [], "Test-Pages");
$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "as yet unclassified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html p with: 'test'.\x0a\x09html with: (Link new href: '/'; with: 'To Home').",
referencedClasses: ["Link"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "p", "href:", "new"]
}, function ($methodClass){ return function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$recv($recv(html)._p())._with_("test");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Link)._new();
$recv($2)._href_("/");
$1=$recv($2)._with_("To Home");
$recv(html)._with_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html})});
//>>excludeEnd("ctx");
}; }),
$globals.TestPage);


});
