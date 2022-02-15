const express =require('express');
const snacks = express.Router();
const {getAllSnacks, getOneSnack, deleteSnack}= require('../queries/snacks.js')

// snacks.get('/' , (req,res)=>{
//     res.json({status : 'ok'})
// })

//INDEX
snacks.get('/', async (req,res)=>{ 
    try{
        const allSnacks = await getAllSnacks();
        if(allSnacks[0]){
            res.status(200).json({success: true  , "payload" : allSnacks});
            // console.log(allSnacks)
        } else{
            res.status(500).json({err:'server error'})
            console.log(allSnacks)
        }        
    }catch(err){
        console.log(err)
    }
})

//SHOW ask why the returning object chnage their syntax rules
snacks.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const snack = await getOneSnack(id);
        if(snack.id){
            res.status(200).json({success: true  , "payload" : snack});
            // console.log(snack.name)
        } else{
            res.status(404).json({success: false , "payload": "not found"})
        }
    } catch(err){
        console.log(err)
    }
})
//POST/CREATE
snacks.post('/',(async(req,res)=>{
    const {body} =req;
    try{
        const createdSnack = await createSnack(body);
        if(createdSnack.id){
            res.status(200).json(createdSnack);
        } else {
            res.status(500).json({error:"creation error"})
        }
    }catch{
        console.log(err)
    }
}))


//DELETE 
snacks.delete("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const deletedSnack = await  deleteSnack(id);
        if(deletedSnack.id){
            res.status(200).json({success: true  , "payload" : deletedSnack})
        } else{
            res.status(404).json({success: false , "payload": deletedSnack})
        }
    } catch(err){
        console.log(err)
    }
})



module.exports =snacks;