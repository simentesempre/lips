const cLogger = data => {
    if(process.env.NODE_ENV !== 'production') console.log( ...data)
}
module.exports = cLogger