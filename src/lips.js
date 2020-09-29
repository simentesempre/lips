const { createCanvas } = require('canvas')
const cLogger = require('./utils/cLogger')

class Lips {
    constructor(
        defaults = {   
            defaultWidth: 200,
            defaultTextColor: '333333',
            defaultBgColor: 'eeeeee',
            defaultType: 'jpeg',
            defaultQuality: 0.65,
        },
        options = {
            allowedColors: require('../data/validColors.json'),
            allowedTypes: ['jpeg', 'png', 'webp'],
            allowedHexColor:new RegExp(/^([0-9a-f]{6})$/i),
            maxFontSize: 80,
            font: 'Verdana',
            allowedParams: ['w', 'h', 'tc', 'bc', 't', 'q'],
        }
    ) {
        this.defaults = defaults,  
        this.options = options     
    }

    create(args = this.defaults, element = true){
        const { status, validatedArgs, error } = this.validateArguments(args)
        
        if(status) {
            const { w, h, tc, bc, t, q } = validatedArgs
            const canvas = createCanvas(w, h)
            const ctx = canvas.getContext('2d')
    
            ctx.fillStyle = bc
            ctx.fillRect(0, 0, w, h)
    
            ctx.fillStyle = tc
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            ctx.font = `${this.calcFontSize(w)}px ${this.options.font}`
            ctx.fillText(`${w}x${h}`, w/2, h/2)
            const data = canvas.toDataURL(t, q)
            if(!element) {
                const response = {
                    data, 
                    type: t,
                    status,
                    error
                }
                cLogger(['Image created', response])
                return response
            } else {
                return this.createElement(args = this.defaults)
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

    createElement(args){    
        const {
            data, 
            type,
            status,
            error
        } = this.create(args)

        if(status){
            const img = document.createElement('img')
            img.src = data
            return {
                data: img, 
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

    createArgumentsObject( params, query ){
        const args = {}
        if (params.w) args.w = params.w
        if (params.h) args.h = params.h
        if (query.tc) args.tc = query.tc
        if (query.bc) args.bc = query.bc
        if (query.t) args.t = query.t
        if (query.q) args.q = query.q
        return args
    }

    validateArguments( args ){
        const validatedArgs = {}
        const { w, h, tc, bc, t, q } = args
        let status = true
        let error = ''
    
        const width = parseInt(w)
        validatedArgs.w = ( isNaN(width) ||  width <= 0) ? this.defaults.defaultWidth : width
        const height = parseInt(h)
        validatedArgs.h = ( isNaN(height) || height <= 0) ? validatedArgs.w : height

        const isValidColor = this.isValidColor(tc)
        if ( isValidColor === '0') { 
            validatedArgs.tc = `#${this.defaults.defaultTextColor}`
        } else if  (isValidColor === '1' ){
            validatedArgs.tc = tc
        } else if (isValidColor === '2' ) {
            validatedArgs.tc = `#${tc}`
        } else {
            status = false
            error = 'Text color must be a valid html color or hex color without the prepending #'
            validatedArgs.tc = ``
        }

        let isValidBgColor = this.isValidColor(bc)
        if ( isValidBgColor === '0') { 
            validatedArgs.bc = `#${this.defaults.defaultBgColor}`
        } else if  (isValidBgColor === '1' ){
            validatedArgs.bc = bc
        } else if (isValidBgColor === '2' ) {
            validatedArgs.bc = `#${bc}`
        } else {
            status = false
            error = 'Background color must be a valid html color or hex color without the prepending #'
            validatedArgs.bc = ``
        }
    
        validatedArgs.t = `image/${this.options.allowedTypes.indexOf(t) > -1 ? t : this.defaults.defaultType}`
    
        const quality = parseFloat(q)
        validatedArgs.q = ( !typeof quality === 'number' || quality <= 0 || quality > 1) ? this.defaults.defaultQuality : quality
        return { status, validatedArgs, error }
    }

    isValidColor(c) {
        if ( typeof c !== 'string' ) return '0'
        if ( this.options.allowedColors.indexOf(c) > -1 ) return '1'
        if ( c.match(this.options.allowedHexColor) ) return '2'
    }

    calcFontSize(w) { return w < 800 ? w / 10 : this.options.maxFontSize  }
}

module.exports = Lips