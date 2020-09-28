# LIPS
Local Images Placeholder Service (v.0.2.0-beta.0)

```bash
$ npm start
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
$ npm start
```

## Features

  * Placeholder images creation on the fly in Node.js
  * Multiple formats (jpeg, png, webp)
  * Customizable sizes and colors

## Examples

```html
Create a 200x200 pixel jpeg image
<img src="http://localhost:3001/lips/" />

Create a 250x250 pixel jpeg image
<img src="http://localhost:3001/lips/250/" />

Create a 250x210 pixel jpeg image
<img src="http://localhost:3001/lips/250/210/" />

Create a 400x300 pixel jpeg image with red text and lime background
<img src="http://localhost:3001/lips/400/300/?tc=red&bc=00f00" />

Create a 400x300 pixel png image
<img src="http://localhost:3001/lips/400/300/?t=png" />

Create a 400x300 pixel poor quality jpeg
<img src="http://localhost:3001/lips/400/300/?q=0.2" />

Create a 400x300 pixel high quality webp
<img src="http://localhost:3001/lips/400/300/?t=webp&q=1" />
```

## Arguments

```js
http://localhost:3001/lips/{width}/{height}/?tc={text_color}&bc={background_color}&t={type}&q={quality}
```

Params:
- width: in pixel, must be higher than 0. Default: 200
- height: in pixel, must be higher than 0. Default: Same as width

Query
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
