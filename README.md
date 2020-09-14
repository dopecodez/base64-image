# NODE-BASE64-IMG [![Build Status](https://travis-ci.org/dopecodez/base64-image.svg?branch=master)](https://travis-ci.org/dopecodez/base64-image) [![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dopecodez/base64-image/issues) [![Test Coverage](https://api.codeclimate.com/v1/badges/84f7953e0bd19f4db04a/test_coverage)](https://codeclimate.com/github/dopecodez/base64-image/test_coverage)

A base64-image converter and vice-versa for node with modern ES6.

Convert your base64 strings to images or convert your images to base64 string. Build with native support for async/await and promises. Supports png, jpg, jpeg and gif images.

Newly released and actively maintained. Small unpacked size.

# INSTALLATION

```
$ npm install node-base64-img
```

## Highlights

- [base64Img](#base64Img)
- [toBase64](#toBase64)
- [Contributing](#contributing)

## base64Img

It's a simple library with two functions plus types exposed.

```js
const base64Img = require('base64img');

(async () => {
	try {
		const response = await base64Img('base64String', './', 'sample', {type: 'jpeg'});	
	} catch (error) {
		console.log(error);
		//=> 'Internal server error ...'
	}
})();
```
The first argument for the default function is the `base64` string. This can be any valid base64 string, it will throw an error in case the base64 is invalid.

The second argument is the path where you want to save the image. This can be relative or absolute.

The third argument is the filename which can be any valid string.

The method will return a `base64ImgResult` object type which is exported in `types`.

```js
interface base64ImgResult {
    path: string,
    mimeType: string
}
```
The mimeType and path parameters can be useful in case you want to save the path or know what type your image was saved as.

The `type` parameter in the `base64ImgOptions` is not required. If specified, it will create an image of the given type. If not present, the type will be inferred from the image type section of the base64 image string. If no type portion exists for base64 string, it will default to `png`.

## toBase64

```js
const base64Img = require('base64img');

(async () => {
	try {
		const response = await base64Img.toBase64('somepath/sample.png');	
	} catch (error) {
		console.log(error);
		//=> 'Internal server error ...'
	}
})();
```
The `toBase64` function converts the given image to `base64` string and returns the same. The given imagePath can be any valid path in your filesystem or any image url on the web.

```js
const base64Img = require('base64img');

(async () => {
	try {
		const response = await base64Img.toBase64('hhttps://upload.wikimedia.org/wikipedia/en/f/f3/Dilbert-20050910.png');	
	} catch (error) {
		console.log(error);
		//=> 'Internal server error ...'
	}
})();
```

## Contributing

Before opening a pull request please make sure your changes follow the
[contribution guidelines][1].

[1]: https://github.com/dopecodez/pingman/blob/master/CONTRIBUTING.md


