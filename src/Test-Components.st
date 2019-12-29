Smalltalk createPackage: 'Test-Components'!
Widget subclass: #Link
	slots: {#href. #text}
	package: 'Test-Components'!

!Link methodsFor: 'not yet classified'!

href: aString
	href := aString.
!

navigate
	Router navigate: href.
!

renderOn: html
	html a with: text; href: href; onClick: [ :e | e preventDefault. self navigate ].
!

with: aString
	text := aString.
! !

