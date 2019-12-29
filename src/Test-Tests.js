define(["amber/boot", "require", "amber/core/SUnit"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Test-Tests");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-test"};

$core.addClass("TestTest", $globals.TestCase, [], "Test-Tests");

});
