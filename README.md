# pula-common-util

A collection of lightweight common javasccript utility functions I use for day to day frontend development. feel free to use

## Installation

npm install pula-common-util --save-dev

## Usage

include "/dist/util.js"
this would create a global 'util_' object where you can access functions
ex: util_.functionname();

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

- 1.0.0
project started

## Author
pulasthi@pulasthibandara.com


##documentation

####dom functions

1) **add class**
```javascript
	util_.addClass( element, className );
```

   	element can be a dom element or an array of elements

2) **remove class**
```javascript
	util_removeClass( element, className );
```

	element can be a dom element or an array of elements

####parse functions

1) **convert px in css values to number**
```javascript
	util_.cssToNumber( string );
```

####ajax

1) **promisified ajax request**
```javascript
	util_.xhrRequest(params);
```

```javascript
	params : {
		url: string,
		method: string, \\'GET', 'POST', 'PUT', 'DELETE'
		headers: object,
		params: string || object, \\object will be converted to a uri encoded string
	}
```


