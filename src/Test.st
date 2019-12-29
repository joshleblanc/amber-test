Smalltalk createPackage: 'Test'!
(Smalltalk packageAt: 'Test' ifAbsent: [ self error: 'Package not created: Test' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Router
	slots: {}
	package: 'Test'!

Router class slots: {#app}!

!Router class methodsFor: 'as yet unclassified'!

add: anObject with: aString
	|body|
	body := 'body' asJQuery.
	self app path: aString do: [ :req :res | body empty. anObject new appendToJQuery: body ].
!

app
	app ifNil: [
		app := (require value: 'crayon') crayon create.
	].
	^app.
!

load
	self app load.
!

navigate: aString
	self app navigate: aString.
! !

Widget subclass: #Test
	slots: {}
	package: 'Test'!

!Test methodsFor: 'starting'!

augmentPage
	Router add: Home with: '/'.
	Router add: TestPage with: '/test'.
	Router load.
! !

!Test class methodsFor: 'starting'!

start
	self new augmentPage
! !

