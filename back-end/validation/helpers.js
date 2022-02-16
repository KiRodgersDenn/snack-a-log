//helper functions

const checkName = (req, res, next) => {
    const {name} = req.body
    if(name){
        next();
    }else{
        res.status(422).json({ success: false , payload: "Must include name field"})
    }
}

const capitalization = (name) => {
    const words = name.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        if(words[i].length > 2){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    
    }

    return words.join(" ");
}

module.exports = { checkName, capitalization }