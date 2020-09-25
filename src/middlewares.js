const logger = (req, res, next) => {
    let current_datetime = new Date()
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds()
    const method = req.method
    const url = req.url
    const log = `[${formatted_date}] ${method}:${url}`
    console.log(log)
    next()
}

module.exports = { logger }