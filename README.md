# LIPS
Local Images Placeholder Service

```bash
$ npm run lips
Lips ready at http://localhost:3001
```
```html
<img src="http://localhost:3001/lips/250/200/" />
```

## Quick Start

```bash
$ git clone https://github.com/simentesempre/lips.git
$ cd lips
$ npm install
$ npm run server
```

## Features

  * Placeholder images creation on the fly in Node.js
  * Multiple formats (jpeg, png, webp)
  * Customizable sizes and colors

## Examples

```html
Create a 200x200 pixel jpeg image
<img src="http://localhost:3001/lips/" />

Create a 250x200 pixel jpeg image
<img src="http://localhost:3001/lips/250/200/" />

Create a 400x300 pixel jpeg image with red text and lime background
<img src="http://localhost:3001/lips/400/300/red/00f00/" />

Create a 400x300 pixel png image
<img src="http://localhost:3001/lips/400/300/d/d/png/" />

Create a 400x300 pixel poor quality jpeg
<img src="http://localhost:3001/lips/400/300/d/d/jpeg/0.2/" />

Create a 400x300 pixel high quality webp
<img src="http://localhost:3001/lips/400/300/d/d/webp/1/" />
```

## Arguments

```js
http://localhost:3001/lips/{width}/{height}/{text_color}/{background_color}/{type}/{quality}/
```

- width: in pixel, must be higher than 0. Default: 200
- height: in pixel, must be higher than 0. Default: 200
- text_color: valid Html color or Hex color. Default: #333333
- background_color: valid Html color or Hex color. Default: #eeeeee
- type: valide MIME image type, available formats are 'jpeg', 'png', 'webp'. Default: 'jpeg'
- quality: jpeg and webp compression, valid values are between 0 and 1. Default: 0.65

## Options

- -p, --port: Set the local port (Default to 3001)

```bash
npm run server -- -p 1337
```

## License

[ISC](LICENSE)