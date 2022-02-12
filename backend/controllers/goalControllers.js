//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals= (req,res)=>{
    res.status(200).json({message:"Get Goals"});
}
//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals= (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message:"Set Goals"})
}
//@desc Update Goal
//@route PUT /api/goals
//@access Private
const updateGoal= (req,res)=>{
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}
//@desc Delete Goal
//@route DELETE /api/goals
//@access Private
const deleteGoal= (req,res)=>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
}


module.exports={
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}