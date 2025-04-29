exports.read = async(req, res) => {
    res.send('hello reading')
}

exports.list = async(req, res) => {
    try {
        // console.log(g)
        res.send('hello list')
    } catch (error) {
        res.send('server error')
    }
}

exports.create = async(req, res) => {
    try {
        res.send('hello create')
    } catch (error) {
        res.send('server error')
    }
}

exports.update = async(req, res) => {
    try {
        res.send('hello update')
    } catch (error) {
        res.send('server error')
    }
}

exports.remove = async(req, res) => {
    try {
        res.send('hello delete')
    } catch (error) {
        res.send('server error')
    }
}
