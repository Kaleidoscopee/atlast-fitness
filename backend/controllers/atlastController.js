const atlastGET = (req, res) => {
    res.status(200).json({ message: 'See Workout' })
}


//exporting atlastGET above
module.exports = {    
    atlastGET,
}