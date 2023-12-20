import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Button, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heading, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';

const Create = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const host = `${process.env.REACT_APP_HOST}/public`
  const getUser = async() => {
    const res = await axios({
      method : "get",
      url : `${process.env.REACT_APP_HOST}/getUser`,
      headers : {
        authToken : localStorage.getItem("token")
      }
    })
    if (res.data.success === true) {
      setUser(res.data.User)
    } else {
      alert("Log out and log in again because something went wrong")
    }
    // console.log(user);
  } 

  function getSem(arrayOfSemesters, year_no) {
    const fil = arrayOfSemesters.filter((ele) => {
      if (ele && ele.marksheet && typeof ele.marksheet === 'string') {
        const parts = ele.marksheet.split("_");
  
        if (parts.length > 1) {
          const semesterYear = parts[parts.length - 1].split(".")[0];
  
          if (semesterYear === String(year_no).trim()) {
            return true;
          }
        }
      }
  
      return false;
    });
  
    return fil;
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
      getUser()
      alert("Resume Deleted")
    }
  }

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/")
    }else {
      getUser()
    }
  }, [])
  return (
    <>
    {user && !user.resume &&  <ChakraProvider>
      <Box textAlign="center" p="8" marginBottom={'35%'}>
        <Button
          bg="#00b0ff"
          color="white"
          borderRadius="full"
          size="lg"
          boxShadow="lg"
          onClick={() => {
          navigate('/Resume')
          }}
        >
          <Box as={FaPlus} fontSize="2xl" mr="2" />
        </Button>
        <Text mt="4" fontSize="xl">
          Create new
        </Text>
      </Box>
    </ChakraProvider>}
    {user !== null && user.resume && <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"} key={1}>
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
          <Th color="White">CV</Th>
          <Th color="White">Academic Year/Semester</Th>
          <Th color="White">Post graduate Marksheet</Th>
          <Th color="White">Undergraduate/ Diploma Marksheet</Th>
          <Th color="White">12th Marksheet</Th>
          <Th color="White">11th Marksheet</Th>
          <Th color="White">10th Marksheet</Th>
          <Th color="White">Status</Th>
          <Th color="White">DownLoad</Th>
          <Th color="White">Delete</Th>
          {/* <Th color="White">Approve</Th>
          <Th color="White">Disapprove</Th>
          <Th color="White">Delete</Th> */}
        </Tr>
      </Thead>
      <Tbody>
          <Tr key={user._id}>
            <Td bg="white" color="black">
              {user.last_name}
            </Td>
            <Td bg="white" color="black">
            {user.first_name} 
            </Td>
            <Td>
              {/* <Link to={`/view/${user.id}`} color="#00b0ff"> */}
                {user.resume.father_name}
              {/* </Link> */}
            </Td>
            <Td>
            {/* <Link to={`/view/${user.id}`} color="#00b0ff"> */}
                {user.mobile}
              {/* </Link> */}

            </Td>
            <Td>
                {user.email}
            </Td>
            <Td>
                {/* {"passport photo"} */}
                {/* <img src={`/${host}/${user._id}/${user.passport}`} alt="passport" /> */}
                <img src={`${host}/${user._id}/${user.resume.passport}`} alt="candidate" />
            </Td>
            <Td>
                {/* {"candidate photo"} */}
                <img src={`${host}/${user._id}/${user.resume.candidate}`} alt="candidate" />
                {/* <img src={`/${host}/${user._id}/${user.candidate}`} alt="candidate" /> */}
            </Td>
            <Td>
                <button >View More</button>
            </Td>
           
            <Td >
                <p className='min-w-max h-[50px]'>Year 1/ semester 1</p>
                <p className='min-w-max h-[50px]'>Year 2/ semester 2</p>
                <p className='min-w-max h-[50px]'>Year 3/ semester 3</p>
            </Td>
            <Td >
                {/* {user.resume.post_graduate !== undefined && user.resume.post_graduate.length > 0 && user.resume.post_graduate.map((ele, i)=>{
                    const semNo = ele.marksheet.split("_")[ele.marksheet.split("_").length - 1].split(".")[0]
                  if(semNo !== i+1 ){return <a href={`${host}/${user._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer" className='h-[50px] whitespace-nowrap block'>
                    View and Download
                  </a>}else{
                    return <p>Not added</p>
                  }
                })} */}
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.post_graduate, 1)[0]? `${host}/${user._id}/${getSem(user.resume.post_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.post_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.post_graduate, 2)[0]? `${host}/${user._id}/${getSem(user.resume.post_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.post_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.post_graduate, 3)[0]? `${host}/${user._id}/${getSem(user.resume.post_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.post_graduate, 3)[0]? "View and Download" :"Not added" }</a>
            </Td>
            <Td>
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.under_graduate, 1)[0]? `${host}/${user._id}/${getSem(user.resume.under_graduate, 1)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.under_graduate, 1)[0]? "View and Download" :"Not added" }</a>
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.under_graduate, 2)[0]? `${host}/${user._id}/${getSem(user.resume.under_graduate, 2)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.under_graduate, 2)[0]? "View and Download" :"Not added" }</a>
                <a className='min-w-max h-[50px] block' href={getSem(user.resume.under_graduate, 3)[0]? `${host}/${user._id}/${getSem(user.resume.under_graduate, 3)[0].marksheet}` : "#"} target='_blank'>{getSem(user.resume.under_graduate, 3)[0]? "View and Download" :"Not added" }</a>
            </Td>
            <Td>
            <a href={`${host}/${user._id}/${user.resume.twelweth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer"> 
                    View and Download
                  </a>
            </Td>
            <Td>
            <a href={`${host}/${user._id}/${user.resume.eleventh.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                    View and Download
                  </a>
            </Td>
            <Td>
            <a href={`${host}/${user._id}/${user.resume.tenth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                    View and Download
                  </a>
            </Td>
            <Td >
              <p> {user.resume.status?user.resume.status==="true"||true?"Approved":"DisApproved":"Not Decided Yet"}</p>
            </Td>
            <Td >
              {/* <p> {user.resume.status?user.resume.status==="true"?"Approved":"DisApproved":"Not Decided Yet"}</p> */}
              {user.resume.status && (user.resume.status === "true" || true) ? (
  <a href={`/cv?email=${user.email}`} className="text-white">
    <button
      className="bg-green-500 text-white p-2 rounded-md"
      disabled={false}
    >
      Download
    </button>
  </a>
) : (
  <button className="bg-gray-500 text-white p-2 rounded-md" disabled={true}>
    Download
  </button>
)}

            </Td>
            <Td>
                        <button className='p-2 bg-red-700 rounded-md text-white' onClick={()=>deleteResume(user.resume._id , user._id)}>Delete</button>
                  </Td>
          </Tr>
        
      </Tbody>
    </Table>
  </Box>}
     
    </>
  );
};

export default Create;
