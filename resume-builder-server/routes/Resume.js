const express = require("express")
const router = express.Router()
const file = require("../models/file")
const fetchUser = require("../middleware/fetchUser")
const fs = require("fs")

const multer = require('multer')
const resume = require("../models/resume")
const user = require("../models/user")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      // return cb(null, `./public/${req.body._id}/`)
      const path = `./public/${req.body._id}/`
      fs.mkdirSync(path, { recursive: true })
      return cb(null, path)
    },
    filename: function (req, file, cb) {
      return cb(null, `${file.fieldname}.${file.originalname.split(".")[file.originalname.split(".").length-1]}`)
    }
  })
  
  const upload = multer({storage})

router.post("/createResume",fetchUser,  async(req, res)=>{
    const { given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate, passport, passport_no, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year, german } = req.body
    
    // if ( given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate, passport, passport_no, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year ) {
      const Resume = await resume.create(
        { given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate, passport, passport_no, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year, german }
      )
      const User = await user.findByIdAndUpdate(req.user.id, { $set : {resume : Resume}}, {new : true} )
        await Resume.save()
        await User.save()
      res.json({
        success : true,
        createdResume : Resume
      })
    // }
})

router.post("/addFiles", upload.fields([{ name: 'passport', maxCount: 1 }, { name: 'candidate', maxCount: 1 }, { name: 'post_graduation_marksheet_1', maxCount: 1 }, { name: 'post_graduation_marksheet_2', maxCount: 1 }, { name: 'post_graduation_marksheet_3', maxCount: 1 },  { name: 'under_graduation_marksheet_1', maxCount: 1 }, { name: 'under_graduation_marksheet_2', maxCount: 1 }, { name: 'under_graduation_marksheet_3', maxCount: 1 }, { name: 'twelweth_marksheet', maxCount: 1 }, { name: 'eleventh_marksheet', maxCount: 1 }, { name: 'tenth_marksheet', maxCount: 1 }, { name: 'signature', maxCount: 1 }, { name: 'listening_module_marksheet', maxCount: 1 }, { name: 'speaking_module_marksheet', maxCount: 1 }, { name: 'reading_module_marksheet', maxCount: 1 }, { name: 'writing_module_marksheet', maxCount: 1 }]), async(req, res)=>{
    
      res.json({
        success : true,
      })
    // }
})

router.put("/updateResume", upload.fields([{ name: 'passport', maxCount: 1 }, { name: 'candidate', maxCount: 1 }, { name: 'post_graduation_marksheet', maxCount: 1 }, { name: 'under_graduation_marksheet', maxCount: 1 }, { name: 'twelweth_marksheet', maxCount: 1 }, { name: 'eleventh_marksheet', maxCount: 1 }, { name: 'tenth_marksheet', maxCount: 1 },]), async(req, res)=>{
    const { updatedResume, resumeId } = req.body

    if (updatedResume, resumeId) {
      const Resume = await resume.findByIdAndUpdate(resumeId, updatedResume)
      console.log(req.body);
      res.json({
        success : true,
        updatedResume : Resume,
      })
      
    } else {
      res.json({
        success : false,
        message : "Fill All the fields",
      })
    }
})

router.delete("/deleteResume",  async(req, res)=>{
    const { resumeId, userId } = req.body

    if (resumeId) {
      const Resume = await resume.findByIdAndDelete(resumeId)
      const User = await user.updateOne(
        { _id: userId },
        { $unset: { resume: "" } }
      );
      res.json({
        success : true,
        Message : "Resume Deleted",
      })
      
    } else {
      res.json({
        success : false,
        message : "Fill All the fields",
      })
    }
})

router.put("/approveResume",  async(req, res)=>{
    const { resumeId } = req.body

    if (resumeId) {
      const User = await resume.updateOne(
        { _id: resumeId },
        { $set: { status : true } }
      );
      res.json({
        success : true,
        Message : "Resume Approved",
      })
      
    } else {
      res.json({
        success : false,
        message : "Fill All the fields",
      })
    }
})

router.put("/disApproveResume",  async(req, res)=>{
    const { resumeId } = req.body

    if (resumeId) {
      const User = await resume.updateOne(
        { _id: resumeId },
        { $set: { status : false } }
      );
      res.json({
        success : true,
        Message : "Resume DisApproved",
      })
      
    } else {
      res.json({
        success : false,
        message : "Fill All the fields",
      })
    }
})


module.exports = router