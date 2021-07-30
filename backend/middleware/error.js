// express
class erroRes extends Error{
    constructor(status, message) {
        this.status = status
        this.message = message
        return res.status(this.status).json(this.message);
    }
}

module.exports = erroRes;