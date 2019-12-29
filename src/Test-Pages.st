Smalltalk createPackage: 'Test-Pages'!
(Smalltalk packageAt: 'Test-Pages' ifAbsent: [ self error: 'Package not created: Test-Pages' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Widget subclass: #Home
	slots: {}
	package: 'Test-Pages'!

!Home methodsFor: 'as yet unclassified'!

renderOn: html
	html p with: 'home'.
	html with: (Link new with: 'To Test'; href: '/test').
! !

Widget subclass: #TestPage
	slots: {}
	package: 'Test-Pages'!

!TestPage methodsFor: 'as yet unclassified'!

renderOn: html
	html p with: 'test'.
	html with: (Link new href: '/'; with: 'To Home').
! !

