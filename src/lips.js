const { createCanvas } = require('canvas')

class Lips {
    constructor(
        allowedColors = require('./validColors.json'),
        defaultWidth = 200,
        defaultHeight = 200,
        defaultTextColor = '333333',
        defaultBgColor = 'eeeeee',
        defaultType = 'jpeg',
        defaultQuality = 0.65,
        allowedTypes = ['jpeg', 'png', 'webp'],
        allowedHexColor = new RegExp(/^([0-9a-f]{6})$/i),
        maxFontSize = 80,
        font = 'Verdana'
    ) {
        this.allowedColors = allowedColors,
        this.defaultWidth = defaultWidth,
        this.defaultHeight = defaultHeight,
        this.defaultTextColor = defaultTextColor,
        this.defaultBgColor = defaultBgColor,
        this.defaultType = defaultType,
        this.defaultQuality = defaultQuality,
        this.allowedTypes = allowedTypes,
        this.allowedHexColor = allowedHexColor,
        this.maxFontSize = maxFontSize,
        this.font = 'font'       
    }

    create = (w = this.defaultWidth, h = this.defaultHeight, tc = this.defaultTextColor, bc = this.defaultBgColor, t = this.defaultType , q = this.defaultQuality) => {
        const { status, args, error } = this.validateArguments(w, h, tc, bc, t, q)
    
        if(status) {
            const { width, height, text_color, background_color, type, quality } = args
            const canvas = createCanvas(width, height)
            const ctx = canvas.getContext('2d')
    
            ctx.fillStyle = background_color
            ctx.fillRect(0, 0, width, height)
    
            ctx.fillStyle = text_color
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            ctx.font = `${this.calcFontSize(width)}px ${this.font}`
            ctx.fillText(`${width}x${height}`, width/2, height/2)
            const data = canvas.toDataURL(type, quality).split(",")[1]
            return {
                data, 
                type,
                status,
                error
            }
        } else {
            return {
                data: false, 
                type: false,
                status,
                error
            }
        }
    }

    validateArguments = ( w, h, tc, bc, t, q ) => {
        let args = {}
        let status = true
        let error = ''
    
        const width = parseInt(w)
        args.width = ( isNaN(width) ||  width <= 0) ? this.defaultWidth : width
        const height = parseInt(h)
        args.height = ( isNaN(height) || height <= 0) ? this.defaultHeight : height
    
        if ( !typeof tc === 'string' || this.isValidColor(tc) === '0') { 
            status = false
            error = 'Text color must be a valid html color or hex color without the prepending #'
            args.text_color = `#${this.defaultTextColor}`
        } else {
            if (this.isValidColor(tc) === '1' ) args.text_color = tc
            if (this.isValidColor(tc) === '2' ) args.text_color = `#${tc}`
        }
    
        if ( !typeof bc === 'string' || this.isValidColor(bc) === '0') { 
            status = false
            error = 'Background color must be a valid html color or hex color without the prepending #'
            args.background_color = `#${this.defaultBgColor}`
        } else {
            if (this.isValidColor(bc) === '1' ) args.background_color = bc
            if (this.isValidColor(bc) === '2' ) args.background_color = `#${bc}`
        }
    
        args.type = `image/${this.allowedTypes.indexOf(t) > -1 ? t : this.defaultType}`
    
        const quality = parseFloat(q)
        args.quality = ( !typeof quality === 'number' || quality <= 0 || quality > 1) ? this.defaultQuality : quality
    
        return { status, args, error }
    }

    isValidColor = c => {
        if ( this.allowedColors.indexOf(c) > -1 ) return '1'
        if ( c.match(this.allowedHexColor) ) return '2'
        return '0'
    }

    calcFontSize = w => w < 800 ? w / 10 : this.maxFontSize
}

module.exports = Lips