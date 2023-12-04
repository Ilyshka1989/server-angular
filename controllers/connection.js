module.exports.create = async function (req, res){
    const connection = new Connection({
        name: req.body.name,
        number: req.body.number 
    })
    await connection.commit()
    res.status(200).json(connection)
}