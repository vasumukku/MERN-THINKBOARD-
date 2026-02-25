
const Notes = require("../models/Notes")
const getallnotes = async(req, res) => {
  try{
    const notes = await Notes.find().sort({createdAt:-1}); //-1 will sort descending order (newest first)
    res.status(200).json(notes);
  }
  catch(e){
    console.log("Error in get all controllers "+e.message);
    res.status(400).json({message:"Internal server errror "})
  }
} 

const getOneNotes = async(req,res)=>{
  try{
    const finddata = await Notes.findById(req.params.id)
    if(!finddata){
      res.status(400).send("Note not found") 
    }
    res.json(finddata) 
  }
  catch(e){
    res.status(400).send("Somethinh went wrong "+e.message) 
  }
}

const createNotes =async (req, res) => {
   try{
      const {title,content}=req.body;
      // console.log(tittle , content)
      const newnotes = new Notes({title,content}) 
      await newnotes.save();
      res.status(201).json({message:newnotes})

   }
   catch(e){
      console.log("Error in create notes controllers "+e.message);
    res.status(500).json({message:"Internal server errror "})
   }
}


const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedData = await Notes.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // returns updated data
    );

    if (!updatedData) {
      return res.status(404).send("User note not found");
    }

    res.send("Data updated successfully");

  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deletNotes = async (req, res) => {
 try{
  const finddeletedata = await Notes.findByIdAndDelete(req.params.id) 
  if(!finddeletedata){
    res.status(404).send("Notes not found");
  }
  // res.send("Data deleted successfully") 
  res.json({
    message:"deleted successfully",
    data:finddeletedata
  })
 }
 catch(e){
    res.status(500).send(e.message);
 }
}


module.exports={
  getallnotes,
  getOneNotes,
  createNotes,
  updateNotes,
  deletNotes
}