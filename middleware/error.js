const errorMiddleware = (req,res,next,error) =>  {
    return res.status(500).json({
        error
    })
}

module.exports = errorMiddleware;