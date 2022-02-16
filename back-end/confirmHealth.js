

const confirmHealth = (snack) => {
    const {protein, added_sugar, fiber} = snack
    if(isNaN(protein) || isNaN(added_sugar) || isNaN(fiber) ){
        return null
    }
    else if((protein >= 5 || fiber >= 5) && added_sugar < 5 ){
        return true
    }else { return false }
};

module.exports = confirmHealth;
