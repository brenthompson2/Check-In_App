# Ionic App Development

This is where I am detailing my experience as I attempt to make mobile applications with the Ionic Framework

Current Status 09/03/17:

	- Projects:
		A) Developed a mobile application that gets a GitHub username from the user and displays all of the corresponding repositories.
			- Upon clicking on a repository it brings the user to the appropriate README
			- followed this tutorial: https://gonehybrid.com/build-your-first-mobile-app-with-ionic-2-angular-2
		B) Started working on the Awesome Inc Check-In App
			- As part of my AwesomeInc Internship they have asked me to develop a mobile app to keep running on an iPad by the entrance for guests to use to check in.
			- It has been a process but it is starting to come along nicely and the code is looking clean
			- It is still in desperate need of some graphic design and Sass work
	- Ionic:
		- Took some time to get used to a reactive programming paradigm as opposed to the object-oriented/sequential programming styles I was used to
		- Was overwhelmed with the amount of powerful tools I was using until I wrote out the explanations below

### Ionic:

	Frameworks:
		- Ionic 3
			- open-source SDK for building beautiful, native, and progressive hybrid mobile apps
			- On top of all the rest of this stuff, Ionic adds the UI elements that wrap to look nice on each different platform
		- Cordova by Apache
			- open-source command line tool that wraps HTML/CSS/JavaScript allowing the user to write one set of code to target nearly every phone or tablet on the market
			- (Adobe made Cordova proprietary and called it PhoneGap but Cordova is still alive and well)
		- Angular 2
			- open-source framework for building web & mobile applications
			- takes care of navigation, data binding, dependency injection, and much more
			- I am knowingly using it for:
				- importing Components like NavController and NavParams
				- *ngFor to make for loops
				- Angular Templates using {{ }} markup: <ion-card-header> {{ program.name }} </ion-card-header>
		- Node.js = lightweight and efficient JavaScript Runtime
			- npm = largest ecosystem of open source libraries in the world
			- must have to get Ionic
	Languages:
		- TypeScript
			- open-source, developed and maintained by Microsoft
			- strict, syntactical superset of JavaScript and adds optional static typing
		- JavaScript (ES7, ES6, ES5)
			- High-level, dynamic, weakly typed, object-based, multi-paradigm, interpreted programming language
				- multi-paradigm = event-driven, functional, imperative (oop & prototype based)
			- Used to make webpages interactive and provide online programs
			- Supported by all modern web browsers by means of their own JavaScript Engines
				- Based on the ECMAScript specification
				- some don't implement fully while many support additional features
			- JSON = lightweight data-interchange format that JavaScript objects are converted into and sent between the server and the browser
				- easy for humans to read and write & for computers to parse & generate
				- rules:
					- data in name/value pairs
					- data separated by commans
					- {} curly brackets hold objects
					- [] square brackets hold arrays
		- HTML = HyperText Markup Language
			- received from a web server or local storage and rendered into multimedia web pages
			- denoted structural semantics
		- CSS = Cascading Style Sheets
			- used for describing the presentation of a document written in a markup language
			- designed to enable the separation of presentation and content
				- improve content accessibility
				- provide more flexibility and control in the specification of presentation characteristics
				- enable multiple HTML pages to share formatting
				- reduce complexity & repetition in the structural content
		- Sass = Syntactically Awesome Style Sheets
			- "most mature, stable, and powerful professional grade CSS extension language in the world"
			- scripting language that is interpreted or compiled into CSS
			- the newer syntax uses block formatting like that of CSS and is a nested metalanguage (valid CSS is valid SCSS)
			- official implementation open-source and coded in ruby, although other implementations exist (PHP, C w/ libSass, Java w/ JSass & Vaadin)
			- Provides: variables, nesting, mixins, and inheritance
	Methodologies:
		- Hybrid Mobile App Development
			****** Ionic and NativeScript doesn't use the WebView but instead
			- leverages the power of common web technologies (HTML, CSS, JavaScript) to build cross-platform, yet progressively native mobile applications using the platform WebView
			- App Types:
				A) Native App = written in platform specific language and communicated directly with the OS/Device
					(android = Java; iOS = ObjectiveC or Swift; windows = C#)
				B) Web App = written in web languages and communicated to the OS/Device through a Web Browser application
				C) Hybrid App = written in web languages and wrapped in technology that embeds the web view using native styles and can access the native hardware
			- WebView:
				- Apple decided not to have mobile apps run in Safari's mobile browser but instead used UIWebView
					- Now they use WKWebView as the modern WebKit API in iOS8 & OS X Yosemite
				- Android originally relied on the WebKit rendering engine
					- after Android 4.4, each consecutive update of Android's OS brought along a new version of Chromium which uses the Blink rendering engine
					- Since 5.0, WebView is a 'system-level.apk' available in the Google Play store and can update itself in the background
				- Crosswalk is a project by intel that enables the user to deploy a web application with its own dedicated runtime
					- not dependent on third party or platform-dependent WebView
					- can be used on Android, iOS, Linux, and Tizen
			- Benifits:
				- one code goes cross-platform
				- allows web-developers to easily develop mobile apps w/o learning new, native code
				- minimized learning curve and quicker development by leveraging web technology as opposed to native application tooling and compiled languages
			- Drawbacks:
				- slow
				- "The biggest mistake we've made as a company is betting on HTML5 over native" - Mark Zuckerberg
				Rebuttal:
					- only a noticeable difference if many moving parts, lots of animation, and heavy GPU processing
		- Progressive Web Applications
			- use responsive layouts and UI components that look similar to those found in native mobile applications
		- Reactive Programming
			- an asynchronous programming paradigm concerned with data streams and dynamically responding to change
