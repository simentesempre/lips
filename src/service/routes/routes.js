const Lips = require('../../lips')
const lips = new Lips()

const get = (req, res) => {
    const args = lips.createArgumentsObject(req.params, req.query)
    const {
        data, 
        type,
        status,
        error
    } = lips.create(args, false)

    if(status) {
        const image = Buffer.from(data.split(",")[1], 'base64');
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