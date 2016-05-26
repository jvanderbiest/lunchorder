![lunchorder.be](src/logos/png/lunchorder-white-md-925x250.png?raw=true "Lunch Catalog")
![Azure Build Status][azure-build-status]

# Lunch Order
The purpose of this repository is to write clean and reusable / testable javascript. It should also be possible to host multiple backend services and easily switch between them.
In its current state this is more like a pet-project, it is not intended as a complete product but may eventually end up as such.

## As a finished product it should
- authenticate users
	- should support multiple authentication providers by using [passport.js]
	- should support user profile
- have an editable lunch catalog for multiple sandwich shops
	- persisted in firebase, editable by administrator
- list the lunch catalog and have multiple order possibilities for multiple users
- send the order to snackbar at a specified time
- credit the users after a succesfull order
- have a pluggable backend system
- have a configurable front-end system

## What it currently can do
- Authenticate users

# Used technologies
Currently the following technologies are used 
- [node.js]
- [angular2]
- [firebase]

Setup your own development environment? [See the wiki.](https://github.com/jvanderbiest/lunchorder/wiki/Developer-Guide)

   [angular2]: <https://github.com/angular/angular>
   [node.js]: <https://nodejs.org/en/download/>
   [firebase]: <http://www.firebase.com>
   [passport.js]: <http://passportjs.org/>
   [azure-build-status]: https://vanderbiest.visualstudio.com/_apis/public/build/definitions/e3edf0fd-275f-44f0-9169-5cb245cc4bfa/3/badge "Azure Build Status"   
