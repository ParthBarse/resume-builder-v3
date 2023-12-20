import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, Table, Thead, Tbody, Tr, Th, Td, FormControl, Select } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Admin = () => {
  const [students, setStudents] = useState([]);
  const [disApproveComment, setDisAppoveComment] = useState('')
  const [popUp, setPopUp] = useState(false)
  const [disApproveStudent, setDisAppoveStudent] = useState(null)
  const [approvedStudents, setApprovedStudents] = useState(null)
  const [disApprovedStudents, setDisApprovedStudents] = useState(null)
  const [current, setCurrent] = useState("students")

  const approveResume = async(userEmail, resumeId) => {
    const res = await axios({
      method : "get",
      url : `http://20.197.17.85:5550/sendApprove?email=${userEmail}`
    })
    console.log(res);
    const res1 = await axios({
      method : "put",
      url : `${process.env.REACT_APP_HOST}/approveResume`,
      data : {resumeId}
    })
    alert("Resume appoved")
    getAllStudents()
  }

  const disApproveResume = async() => {
    const res = await axios({
      method : "get",
      url : `http://20.197.17.85:5550/sendDisapprove?email=${disApproveStudent.email}&comment=${disApproveComment}`
    })
    console.log(res);
    const res1 = await axios({
      method : "put",
      url : `${process.env.REACT_APP_HOST}/disApproveResume`,
      data : {resumeId : disApproveStudent.resume._id}
    })
    setPopUp(false)
    alert("Resume Disappoved")
    getAllStudents()
  }

  const getAllStudents = async() => {
    const res = await axios({
      method : "get",
      url : `${process.env.REACT_APP_HOST}/getAllStudents`,
      headers : {
        authToken : localStorage.getItem("token")
      }
    })
    if(res.data.success === true){
      setStudents(res.data.students)
      console.log(res.data.students);
    }
    console.log(res);
  }
  const getApprovedStudents = async() => {
    const res = await axios({
      method : "get",
      url : `${process.env.REACT_APP_HOST}/getAllStudents`,
      headers : {
        authToken : localStorage.getItem("token")
      }
    })
    if(res.data.students){
      const st = res.data.students.filter((ele)=>{
        return ele.resume.status ===  true
      })
      setApprovedStudents(st)
    }
  }
  const getDisApprovedStudents = async() => {
    const res = await axios({
      method : "get",
      url : `${process.env.REACT_APP_HOST}/getAllStudents`,
      headers : {
        authToken : localStorage.getItem("token")
      }
    })
    if(res.data.students){
        const st = res.data.students.filter((ele)=>{
        return ele.resume.status ===  false
      })
      setDisApprovedStudents(st)
      
    }
  }

  const deleteResume = async(resumeId, userId) => {
    console.log(resumeId);
    const res = await axios({
      method : "delete",
      url : `${process.env.REACT_APP_HOST}/deleteResume`,
      data : {
        resumeId : resumeId,
        userId : userId
      }
    })
    if(res.data.success === true){
      console.log(res.data);
      getAllStudents()
      alert("Resume Deleted")
    }
  }

  // const navigate = useNavigate()
  // const handleResumeChange = (studentResume) => {
  //   navigate("/resume")
  //   // changeResume({
  //   //   id : studentResume._id,
  //   //   register: {
  //   //     First_name: [],
  
  
  
  //   //   },
  //   //   files: {
  //   //     _id: "",
  //   //     passport: "",
  //   //     candidate: "",
  //   //     under_graduation_marksheet_1: "",
  //   //     under_graduation_marksheet_2: "",
  //   //     under_graduation_marksheet_3: "",
  //   //     post_graduation_marksheet_1: "",
  //   //     post_graduation_marksheet_2: "",
  //   //     post_graduation_marksheet_3: "",
  //   //     twelweth_marksheet: "",
  //   //     eleventh_marksheet: "",
  //   //     tenth_marksheet: "",
  //   //     signature: "",
  //   //     listening_module_marksheet: "",
  //   //     reading_module_marksheet: "",
  //   //     speaking_module_marksheet: "",
  //   //     writing_module_marksheet: "",
  //   //   },
  
  //   //   profile: {
  //   //     firstname: studentResume.given_name,
  //   //     lastname: studentResume.sur_name,
  //   //     father:  studentResume.father_name,
  //   //     Country_code: studentResume.country_code,
  //   //     phone: studentResume.contact_number,
  //   //     email: studentResume.email,
  //   //     linkedin: "",
  //   //     github: "",
  //   //     website: "",
  //   //     address: studentResume.address,
  //   //     passport_file_name: studentResume.passport,
  //   //     candidate: studentResume.candiate,
  //   //     country: studentResume.country,
  //   //     lang: studentResume.language_of_resume,
  //   //     birth: studentResume.birth_date,
  //   //     pod: studentResume.place_of_birth,
  //   //     pass: studentResume.passport_no,
  //   //     mari: studentResume.marital_status,
  //   //     Gender: studentResume.gender,
  //   //     CS: "",
  //   //     hobbi1: studentResume.hobbies,
  //   //     ComputerSkills1: studentResume.computer_skills,
  //   //     Pin: "",
  //   //     game: ""
  //   //   },
  
  
  //   //   edu: {
  //   //     post_graduate: studentResume.post_graduate,
  //   //     under_graduate: studentResume.under_graduate,
  //   //     blank_year: studentResume.blank_year,
  //   //     University: "",
  
  //   //     grad: studentResume.post_graduate_course,
  //   //     twelweth: studentResume.twelweth,
  
  
  //   //     eleventh: studentResume.eleventh,
  //   //     tenth: studentResume.tenth,
  //   //     first_to_ninth: studentResume.first_to_ninth,
  //   //     english_level: studentResume.english_level,
  //   //     mother_tongue: studentResume.mother_tongue,
  //   //     german: studentResume.german,
  
  //   //     Year1Array: [],
  //   //     from1Array: [],
  //   //     to1Array: [],
  //   //     file: [],
  
  
  
  //   //     Year2Array: [],
  
  //   //     to2Array: [],
  //   //     from2Array: [],
  
  
  //   //     to3: "",
  //   //     from3: "",
  //   //     to4: "",
  //   //     from4: "",
  //   //     to5: "",
  //   //     from5: "",
  //   //     to6: "",
  //   //     from6: "",
  //   //     to7: "",
  //   //     from7: "",
  //   //     to8: "",
  //   //     from8: "",
  //   //     quali: "",
  
  //   //     Ugrad: studentResume.under_graduate_course,
  //   //     summary: "",
  //   //     skills: "",
  
  //   //     University1: "",
  //   //     University2: "",
  //   //     University3: "",
  //   //     University4: "",
  //   //     University5: "",
  //   //     Reason: "",
  //   //     motherT: "",
  //   //     english: "",
  //   //     level: [],
  //   //     to9: [],
  //   //     from9: [],
  //   //     Certificate: [],
  //   //     fileA: [],
  //   //     fileB: [],
  //   //     fileC: [],
  //   //     fileD: [],
  //   //   },
  //   //   personal: {
  //   //     birthday: "",
  //   //     placesOf: "",
  //   //     passport: "",
  //   //     maritial: "",
  //   //     gender: "",
  //   //     computerSkills: "",
  //   //     hobbies: "",
  //   //     summary: "",
  //   //     skills: "",
  //   //     work: [],
  //   //   },
  //   //   declaration: {
  //   //     place: "",
  //   //     country: "",
  //   //     date: "",
  //   //     signature_photo: ""
  //   //   },
  
  //   //   work: {
  //   //     work_experience: studentResume.work_experience,
  //   //     internship: studentResume.internship,
  //   //     EmpName: "",
  //   //     Dept: "",
  //   //     from: "",
  //   //     to: "",
  //   //     from2: "",
  //   //     to2: "",
  //   //     Hosp: "",
  //   //     Dept2: "",
  //   //     from2A: [],
  //   //     to2A: [],
  //   //     HospA: [],
  //   //     Dept2A: [],
  //   //     Duty: [
  //   //       {
  //   //         dut: []
  //   //       }
  //   //     ],
  
  //   //     Dura: [
  //   //       {
  //   //         dur: []
  //   //       }
  //   //     ],
  //   //   },
  
  //   //   internship: {
  //   //     from: [],
  //   //     to: [],
  //   //     Hosp_name: [],
  //   //     Dept_name: [],
  //   //     Duty: [],
  //   //     Dura: [],
  //   //   }
  
  //   // })

  // }

useEffect(()=>{

  getAllStudents()
    getApprovedStudents()
    getDisApprovedStudents()
}, [])

function getSem(arrayOfSemesters, year_no) {
  const fil = arrayOfSemesters.filter((ele) => {
    // Check if 'marksheet' property exists and is a string
    if (ele.marksheet && typeof ele.marksheet === 'string') {
      // Splitting the 'marksheet' property into parts
      const parts = ele.marksheet.split("_");

      // Check if the split parts are in the expected format
      if (parts.length > 1) {
        const semesterYear = parts[parts.length - 1].split(".")[0];
        
        // Check if the split parts contain the expected values
        if (semesterYear === String(year_no).trim()) {
          return true; // Include the element in the filtered result
        }
      }
    }

    return false; // Exclude the element from the filtered result
  });

  return fil;
}
const user = {
  _id : "857301450afd17735c0f117e"
}
const host = `${process.env.REACT_APP_HOST}/public`
 
  return (
    <ChakraProvider >
      <FormControl>
              <Select
                placeholder="Select an option"
                onChange={(e) =>{setCurrent(e.target.value)
                  // const updateValue = {
                  //   ...resumeInfo.edu,
                  //   post_graduate : [
                  //     ...resumeInfo.edu.post_graduate , {...post_graduate[0], year_no : e.target.value }
                  //   ],
                  // };
                  // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  // setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="students" selected>All</option>
                <option value="approvedStudents">Approved</option>
                <option value="disApprovedStudents">DisApproved</option>
              </Select>
            </FormControl>
    
        {current === "students" ? students.length>0 ? <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"} key={1}>
          <Heading mb="4">Registered Students</Heading>
          <Table variant="simple" >
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Surname</Th>
                <Th color="White">Givenname</Th>
                <Th color="White">Father's Name</Th>
                <Th color="White">Mobile-no</Th>
                <Th color="White">Email-id</Th>
                <Th color="White">Passport Photo</Th>
                <Th color="White">Candidate Photo</Th>
                <Th color="White">View More</Th>
                <Th color="White">Download full CV</Th>
                <Th color="White">Download filter CV</Th>
                <Th color="White">Academic Year/Semester</Th>
                <Th color="White">Post graduate Marksheet</Th>
                <Th color="White">Undergraduate/ Diploma Marksheet</Th>
                <Th color="White">12th Marksheet</Th>
                <Th color="White">11th Marksheet</Th>
                <Th color="White">10th Marksheet</Th>
                <Th color="White">Language level</Th>
                <Th color="White">listening</Th>
                <Th color="White">speaking</Th>
                <Th color="White">reading</Th>
                <Th color="White">writing</Th>
                <Th color="White">Employer</Th>
                <Th color="White">Work Experience Certificate</Th>
                <Th color="White">Hospital Name</Th>
                <Th color="White">Internship Certificate</Th>
                <Th color="White">Motivation Letter</Th>
                <Th color="White">Approve</Th>
                <Th color="White">Disapprove</Th>
                <Th color="White">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, i) => (
                <Tr key={student._id}>
                  <Td bg="white" color="black">
                    {student.last_name}
                  </Td>
                  <Td bg="white" color="black">
                  {student.first_name} 
                  </Td>
                  <Td>
                    {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.resume.father_name}
                    {/* </Link> */}
                  </Td>
                  <Td>
                  {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.mobile}
                    {/* </Link> */}

                  </Td>
                  <Td>
                      {student.email}
                  </Td>
                  <Td>
                      {/* {"passport photo"} */}
                      {/* <img src={`/${host}/${user._id}/${student.passport}`} alt="passport" /> */}
                      <img src={`${host}/${student._id}/${student.resume.passport}`} alt="candidate" />
                  </Td>
                  <Td>
                      {/* {"candidate photo"} */}
                      <img src={`${host}/${student._id}/${student.resume.candidate}`} alt="candidate" />
                      {/* <img src={`/${host}/${user._id}/${student.candidate}`} alt="candidate" /> */}
                  </Td>
                  <Td>
                  <a href={`/edit?id=${student.email}`}><button >View More</button></a>
                  </Td>
                  <Td >
                      <a href={`/cv?email=${student.email}`}><button >Download Full CV</button></a>
                  </Td>
                  <Td>
                  <button >Download Filtered CV</button>
                  </Td>
                  <Td >
                      <p className='min-w-max h-[50px]'>Year 1/ semester 1</p>
                      <p className='min-w-max h-[50px]'>Year 2/ semester 2</p>
                      <p className='min-w-max h-[50px]'>Year 3/ semester 3</p>
                  </Td>
                  <Td >
                      {/* {student.resume.post_graduate !== undefined && student.resume.post_graduate.length > 0 && student.resume.post_graduate.map((ele, i)=>{
                          const semNo = ele.marksheet.split("_")[ele.marksheet.split("_").length - 1].split(".")[0]
                        if(semNo !== i+1 ){return <a href={`${host}/${student._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='h-[50px] whitespace-nowrap block'>
                          View and Download
                        </a>}else{
                          return <p>Not added</p>
                        }
                      })} */}
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                  </Td>
                  <Td>
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                      <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                  </Td>
                  <Td>
                  <a href={`${host}/${student._id}/${student.resume.twelweth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer"> 
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`${host}/${student._id}/${student.resume.eleventh.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`${host}/${student._id}/${student.resume.tenth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  B1
                  </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  listening module marksheet
                  </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Speaking module marksheet
                  </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/reading_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Reading module marksheet
                  </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/writing_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Writing module marksheet
                        </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Current/last
                        </a>
                  <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Employer 1
                        </a>
                        <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Employer 2
                        </a>
                        </div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  View & Download
                        </a>
                  <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  View & Download
                        </a>
                        <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  View & Download
                        </a>
                        </div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  recent
                        </a>
                  <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  Past
                        </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  view & download
                        </a>
                        <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  view & download
                        </a></div>
                  </Td>
                  <Td>
                  <div className='flex flex-col gap-2'>
                    <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                  view & Edit & Download
                        </a>
                  </div>
                  </Td>
                  <Td>
                        <button className='p-2 bg-green-700 rounded-md text-white' onClick={()=>approveResume(student.email, student.resume._id)}>Approve</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-yellow-600 rounded-md text-white' onClick={()=>{setPopUp(true); setDisAppoveStudent(student)}}>Disapprove</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-red-700 rounded-md text-white' onClick={()=>deleteResume(student.resume._id , student._id)}>Delete</button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box> : <h2 className='text-center text-5xl'>No Resume to show</h2> : null} 
       
       {current === "approvedStudents" ? approvedStudents && approvedStudents.length>0 ? <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"} key={2}>
          <Heading mb="4">Approved Students</Heading>
          <Table variant="simple" >
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Surname</Th>
                <Th color="White">Givenname</Th>
                <Th color="White">Father's Name</Th>
                <Th color="White">Mobile-no</Th>
                <Th color="White">Email-id</Th>
                <Th color="White">Passport Photo</Th>
                <Th color="White">Candidate Photo</Th>
                <Th color="White">View More</Th>
                <Th color="White">Download full CV</Th>
                <Th color="White">Download filter CV</Th>                <Th color="White">Academic Year/Semester</Th>
                <Th color="White">Post graduate Marksheet</Th>
                <Th color="White">Undergraduate/ Diploma Marksheet</Th>
                <Th color="White">12th Marksheet</Th>
                <Th color="White">11th Marksheet</Th>
                <Th color="White">10th Marksheet</Th>
                <Th color="White">Language level</Th>
                <Th color="White">listening</Th>
                <Th color="White">speaking</Th>
                <Th color="White">reading</Th>
                <Th color="White">writing</Th>
                <Th color="White">Employer</Th>
                <Th color="White">Work Experience Certificate</Th>
                <Th color="White">Hospital Name</Th>
                <Th color="White">Internship Certificate</Th>
                <Th color="White">Motivation Letter</Th> 
                <Th color="White">Approve</Th>
                <Th color="White">Disapprove</Th>
                <Th color="White">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {approvedStudents.map((student, i) => (
                <Tr key={student._id}>
                <Td bg="white" color="black">
                  {student.last_name}
                </Td>
                <Td bg="white" color="black">
                {student.first_name} 
                </Td>
                <Td>
                  {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                    {student.resume.father_name}
                  {/* </Link> */}
                </Td>
                <Td>
                {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                    {student.mobile}
                  {/* </Link> */}

                </Td>
                <Td>
                    {student.email}
                </Td>
                <Td>
                    {/* {"passport photo"} */}
                    {/* <img src={`/${host}/${user._id}/${student.passport}`} alt="passport" /> */}
                    <img src={`${host}/${student._id}/${student.resume.passport}`} alt="candidate" />
                </Td>
                <Td>
                    {/* {"candidate photo"} */}
                    <img src={`${host}/${student._id}/${student.resume.candidate}`} alt="candidate" />
                    {/* <img src={`/${host}/${user._id}/${student.candidate}`} alt="candidate" /> */}
                </Td>
                <Td>
                <a href={`/edit?id=${student.email}`}><button >View More</button></a>
                </Td>
                <Td >
                    <a href={`/cv?email=${student.email}`}><button >Download Full CV</button></a>
                </Td>
                <Td>
                <button >Download Filtered CV</button>
                </Td>
                <Td >
                    <p className='min-w-max h-[50px]'>Year 1/ semester 1</p>
                    <p className='min-w-max h-[50px]'>Year 2/ semester 2</p>
                    <p className='min-w-max h-[50px]'>Year 3/ semester 3</p>
                </Td>
                <Td >
                    {/* {student.resume.post_graduate !== undefined && student.resume.post_graduate.length > 0 && student.resume.post_graduate.map((ele, i)=>{
                        const semNo = ele.marksheet.split("_")[ele.marksheet.split("_").length - 1].split(".")[0]
                      if(semNo !== i+1 ){return <a href={`${host}/${student._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='h-[50px] whitespace-nowrap block'>
                        View and Download
                      </a>}else{
                        return <p>Not added</p>
                      }
                    })} */}
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                </Td>
                <Td>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.twelweth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer"> 
                        View and Download
                      </a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.eleventh.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                        View and Download
                      </a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.tenth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                        View and Download
                      </a>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                B1
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                listening module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Speaking module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/reading_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Reading module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/writing_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Writing module marksheet
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Current/last
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Employer 1
                      </a>
                      <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Employer 2
                      </a>
                      </div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                      <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                      </div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                recent
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Past
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & download
                      </a>
                      <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & download
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & Edit & Download
                      </a>
                </div>
                </Td>
                <Td>
                      <button className='p-2 bg-green-700 rounded-md text-white' onClick={()=>approveResume(student.email, student.resume._id)}>Approve</button>
                </Td>
                <Td>
                      <button className='p-2 bg-yellow-600 rounded-md text-white' onClick={()=>{setPopUp(true); setDisAppoveStudent(student)}}>Disapprove</button>
                </Td>
                <Td>
                      <button className='p-2 bg-red-700 rounded-md text-white' onClick={()=>deleteResume(student.resume._id , student._id)}>Delete</button>
                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </Box> : <h2 className='text-center text-5xl'>No Approved Resume to show</h2> : null} 
       
        {current === "disApprovedStudents" ? disApprovedStudents && disApprovedStudents.length>0 ? <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"} key={3}>
          <Heading mb="4">DisApproved Students</Heading>
          <Table variant="simple" >
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Surname</Th>
                <Th color="White">Givenname</Th>
                <Th color="White">Father's Name</Th>
                <Th color="White">Mobile-no</Th>
                <Th color="White">Email-id</Th>
                <Th color="White">Passport Photo</Th>
                <Th color="White">Candidate Photo</Th>
                <Th color="White">View More</Th>
                <Th color="White">Download full CV</Th>
                <Th color="White">Download filter CV</Th>                <Th color="White">Academic Year/Semester</Th>
                <Th color="White">Post graduate Marksheet</Th>
                <Th color="White">Undergraduate/ Diploma Marksheet</Th>
                <Th color="White">12th Marksheet</Th>
                <Th color="White">11th Marksheet</Th>
                <Th color="White">10th Marksheet</Th>
                <Th color="White">Language level</Th>
                <Th color="White">listening</Th>
                <Th color="White">speaking</Th>
                <Th color="White">reading</Th>
                <Th color="White">writing</Th>
                <Th color="White">Employer</Th>
                <Th color="White">Work Experience Certificate</Th>
                <Th color="White">Hospital Name</Th>
                <Th color="White">Internship Certificate</Th>
                <Th color="White">Motivation Letter</Th> 
                <Th color="White">Approve</Th>
                <Th color="White">Disapprove</Th>
                <Th color="White">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {disApprovedStudents.map((student, i) => (
                <Tr key={student._id}>
                <Td bg="white" color="black">
                  {student.last_name}
                </Td>
                <Td bg="white" color="black">
                {student.first_name} 
                </Td>
                <Td>
                  {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                    {student.resume.father_name}
                  {/* </Link> */}
                </Td>
                <Td>
                {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                    {student.mobile}
                  {/* </Link> */}

                </Td>
                <Td>
                    {student.email}
                </Td>
                <Td>
                    {/* {"passport photo"} */}
                    {/* <img src={`/${host}/${user._id}/${student.passport}`} alt="passport" /> */}
                    <img src={`${host}/${student._id}/${student.resume.passport}`} alt="candidate" />
                </Td>
                <Td>
                    {/* {"candidate photo"} */}
                    <img src={`${host}/${student._id}/${student.resume.candidate}`} alt="candidate" />
                    {/* <img src={`/${host}/${user._id}/${student.candidate}`} alt="candidate" /> */}
                </Td>
                <Td>
                <a href={`/edit?id=${student.email}`}><button >View More</button></a>
                </Td>
                <Td >
                    <a href={`/cv?email=${student.email}`}><button >Download Full CV</button></a>
                </Td>
                <Td>
                <button >Download Filtered CV</button>
                </Td>
                <Td >
                    <p className='min-w-max h-[50px]'>Year 1/ semester 1</p>
                    <p className='min-w-max h-[50px]'>Year 2/ semester 2</p>
                    <p className='min-w-max h-[50px]'>Year 3/ semester 3</p>
                </Td>
                <Td >
                    {/* {student.resume.post_graduate !== undefined && student.resume.post_graduate.length > 0 && student.resume.post_graduate.map((ele, i)=>{
                        const semNo = ele.marksheet.split("_")[ele.marksheet.split("_").length - 1].split(".")[0]
                      if(semNo !== i+1 ){return <a href={`${host}/${student._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='h-[50px] whitespace-nowrap block'>
                        View and Download
                      </a>}else{
                        return <p>Not added</p>
                      }
                    })} */}
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.post_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.post_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.post_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                </Td>
                <Td>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 1)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 2)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                    <a className='min-w-max h-[50px] block' href={getSem(student.resume.under_graduate, 3)[0]? `${host}/${student._id}/${getSem(student.resume.under_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(student.resume.under_graduate, 3)[0]? "View and Download" :"Not added" }</a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.twelweth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer"> 
                        View and Download
                      </a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.eleventh.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                        View and Download
                      </a>
                </Td>
                <Td>
                <a href={`${host}/${student._id}/${student.resume.tenth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                        View and Download
                      </a>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                B1
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                listening module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Speaking module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/reading_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Reading module marksheet
                </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                <a href={`${host}/${student._id}/writing_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Writing module marksheet
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Current/last
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Employer 1
                      </a>
                      <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Employer 2
                      </a>
                      </div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                      <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                View & Download
                      </a>
                      </div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                recent
                      </a>
                <a href={`${host}/${student._id}/speaking_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                Past
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & download
                      </a>
                      <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & download
                      </a></div>
                </Td>
                <Td>
                <div className='flex flex-col gap-2'>
                  <a href={`${host}/${student._id}/listening_module_marksheet.pdf`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='block whitespace-nowrap'>
                view & Edit & Download
                      </a>
                </div>
                </Td>
                <Td>
                      <button className='p-2 bg-green-700 rounded-md text-white' onClick={()=>approveResume(student.email, student.resume._id)}>Approve</button>
                </Td>
                <Td>
                      <button className='p-2 bg-yellow-600 rounded-md text-white' onClick={()=>{setPopUp(true); setDisAppoveStudent(student)}}>Disapprove</button>
                </Td>
                <Td>
                      <button className='p-2 bg-red-700 rounded-md text-white' onClick={()=>deleteResume(student.resume._id , student._id)}>Delete</button>
                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </Box> : <h2 className='text-center text-5xl'>No DisApproved Resume to show</h2> : null} 
       
    { popUp &&
          <div className='w-full h-full fixed top-0 left-0 flex items-center justify-center'>
            <div className='flex flex-col gap-2 bg-[#26495a]  w-1/2 p-4 rounded-sm'>
            <input type="text" placeholder='Write reason of disapproval' className='p-2 rounded-md outline-none' value={disApproveComment} onChange={(e)=>setDisAppoveComment(e.target.value)} />
            <button className='bg-yellow-500 text-white p-1 rounded-md' onClick={()=>setPopUp(false)}>Cancel</button>
            <button className='bg-red-700 text-white p-1 rounded-md' onClick={disApproveResume}>Disapprove</button>
          </div>
          </div>
        }
    </ChakraProvider>
  );
};

export default Admin;