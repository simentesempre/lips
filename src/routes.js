const Lips = require('./lips')
const lips = new Lips()

const get = (req, res) => {

    const { w, h, tc, bc, t, q } = req.params
    let args = []
    if (w) args.push(w)
    if (h) args.push(h)
    if (tc) args.push(tc)
    if (bc) args.push(bc)
    if (t) args.push(t)
    if (q) args.push(q)

    const {
        data, 
        type,
        status,
        error
    } = lips.create(...args)
    if(status) {
        const image = Buffer.from(data, 'base64');
        res.writeHead(200, {
            'Content-Type': type,
            'Content-Length': image.length
        })
        res.end(image)
    } else {
        res.status(400).send(error)
    }
}

module.exports = { get }