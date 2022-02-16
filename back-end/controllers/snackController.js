const express =require('express');
const snacks = express.Router();
const {getAllSnacks, getOneSnack, createSnack, deleteSnack, updateSnack}= require('../queries/snacks.js')
const confirmHealth = require('../confirmHealth.js')
const {checkName, capitization, capitalization} = require('../validation/helpers.js')

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
snacks.post('/',checkName,async(req,res)=>{
    let {body} =req;
    body = {...body, is_healthy: confirmHealth(body), name: capitalization(body.name) }
    // body.name = capitalization(body.name);
    // // confirmHealth(body);
    try{
        if(!body.image){
            body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
        }
        const createdSnack = await createSnack(body);
        if(createdSnack.id){
            res.status(200).json({success: true , "payload": createdSnack});
        } else {
            res.status(500).json({success: false , "payload":"creation error"})
        }
    }catch{
        console.log(err)
    }
})


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

//UPDATE

snacks.put("/:id", async(req,res)=>{
    const {id} = req.params;
    const {body} = req;
    const updatedSnack = await updateSnack(id,body);
    if(updatedSnack.id){
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({error: "Snack not found"})
    }
})


module.exports =snacks;