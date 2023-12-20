const express = require("express")
const router = express.Router()
const user = require("../models/user")
const fetchUser = require("../middleware/fetchUser")
const jwt = require("jsonwebtoken")
const bcypt = require("bcryptjs")
require("dotenv").config()

const jwt_secret = process.env.jwt_secret


router.post("/register", async (req, res) => {

    try {
        const { first_name, last_name, mobile, email, password, security } = req.body
        console.log(first_name);
        if (first_name, last_name, mobile, email, password, security) {
            const alreadyUserWithEmail = await user.findOne({ email })
            const alreadyUserWithMobile = await user.findOne({ mobile })

            if (alreadyUserWithEmail || alreadyUserWithMobile) {
                res.json({ success: false, message: "This email or phone is already in use" })
            } else {
                const salt = await bcypt.genSalt(5);
                const hashedPassword = await bcypt.hash(password, salt)

                const createdUser = await user.create({
                    first_name, last_name, mobile, email, password: hashedPassword, security
                })

                const data = {
                    user: {
                        id: createdUser._id,
                        userName: createdUser.first_name + " " + createdUser.last_name,
                    }
                }
                const authToken = jwt.sign(data, jwt_secret)

                createdUser.save()
                res.json({ success: true, createdUser, authToken })
            }
        } else {
            res.json({ success: false, message: "Please Enter all info" })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

})

router.get("/getCompleteStudent", async (req, res) => {

    try {

        const { email } = req.body

        const Student = await user.findOne({ email })

        res.json({

            success: true,

            student: Student

        })

    } catch (error) {

        res.json({

            success: false,

            message: error.message

        })

    }

})

router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body

        if (email, password) {
            const foundUser = await user.findOne({ email })
            if (!foundUser) {
                res.json({ success: false, message: "Login with correct creds" })
            } else {

                const comPassword = await bcypt.compare(password, foundUser.password)
                console.log(password, foundUser.password);
                console.log(comPassword);
                if (comPassword) {
                    console.log(12);
                    const data = {
                        user: {
                            id: foundUser._id,
                            userName: foundUser.first_name + foundUser.last_name,
                        }
                    }
                    const authToken = jwt.sign(data, jwt_secret)

                    res.json({ success: true, foundUser, authToken })
                } else {
                    res.json({ success: false, message: "Login with correct creds" })
                }
            }
        } else {
            res.json({ success: false, message: "Please Enter all info" })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

})

router.get("/getUser", fetchUser, async (req, res) => {
    try {
        if (req.user) {
            const User = await user.findOne({ "_id": req.user.id }).populate("resume")
            res.json({ success: true, User })
        } else {
            res.json({ success: false, message: "Login with correct creds" })
        }

    } catch (error) {
        res.json({ success: false, message: error.message })
    }


})

router.get("/getStudentByEmail/:email", fetchUser, async (req, res) => {
    try {
        if (req.user) {
            const email = req.params.email;
            
            // Assuming you have a 'user' model with an 'email' field
            const student = await user.findOne({ email }).populate("resume");

            if (student && student.resume) {
                console.log(student);
                res.json({
                    success: true,
                    student: student
                });
            } else {
                res.json({
                    success: false,
                    message: "Student not found or does not have a resume."
                });
            }
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
});



router.get("/getAllStudents", fetchUser, async (req, res) => {
    try {
        if (req.user) {
            const allStudents = await user.find({}).populate("resume")
            const studentsWithResumes = allStudents.filter((ele) => {
                return ele.resume !== undefined || null || ""
            })
            console.log(studentsWithResumes);
            res.json({
                success: true,
                students: studentsWithResumes
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


module.exports = router