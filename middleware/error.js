const errorMiddleware = (error,req,res,next) =>  {
    console.log(error)
    return res.status(500).json({
        error: `something went wrong`
    })
}

module.exports = errorMiddleware;