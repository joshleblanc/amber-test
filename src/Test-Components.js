define(["amber/boot", "require", "amber/web/Web"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Test-Components");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-test"};

$core.addClass("Link", $globals.Widget, ["href", "text"], "Test-Components");
$core.addMethod(
$core.method({
selector: "href:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "href: aString\x0a\x09href := aString.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.href=aString;
return self;

}; }),
$globals.Link);

$core.addMethod(
$core.method({
selector: "navigate",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "navigate\x0a\x09Router navigate: href.",
referencedClasses: ["Router"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["navigate:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Router)._navigate_($self.href);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"navigate",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Link);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html a with: text; href: href; onClick: [ :e | e preventDefault. self navigate ].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "a", "href:", "onClick:", "preventDefault", "navigate"]
}, function ($methodClass){ return function (html){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._a();
$recv($1)._with_($self.text);
$recv($1)._href_($self.href);
$recv($1)._onClick_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(e)._preventDefault();
return $self._navigate();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html})});
//>>excludeEnd("ctx");
}; }),
$globals.Link);

$core.addMethod(
$core.method({
selector: "with:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "with: aString\x0a\x09text := aString.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (aString){
var self=this,$self=this;
$self.text=aString;
return self;

}; }),
$globals.Link);


});
