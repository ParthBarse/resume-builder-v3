import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Select,
  VStack,
  Box,
  Input,
  SimpleGrid,
  extendTheme,
  Stack,
  Textarea,
  Text,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";


const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        whatsapp: {
          border: "1px solid green.500",
          _hover: {
            borderColor: "green.600",
          },
          _active: {
            borderColor: "green.700",
          },
        },
      },
    },
  },
});

const PersonalDetails = (props) => {

  

  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);


  const { resumeInfo, setResumeInfo, setPage } = props;
  const [workSection, setWorkSection] = React.useState([]);
  const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [semestersOfPostGraduate, setSemestersOfPostGraduate] = useState([""])
  const [semestersOfUnderGraduate, setSemestersOfUnderGraduate] = useState([""])
  const [blankYear, setBlankYear] = useState([""])
  const [educationData, setEducationData] = useState([]);
  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;
    const duplicate = () => {
      let arr = resumeInfo.professional.work;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.personal,
      work: resumeInfo.personal.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      personal: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPostGraduationFile, setSelectedPostGraduationFile] = useState({});
  const [selectedUnderGraduateFile, setSelectedUnderGraduateFile] = useState({});
  const [selectedFile11, setSelectedFile11] = useState(null);
  const [selectedFile12, setSelectedFile12] = useState(null);
  const [selectedFile10, setSelectedFile10] = useState(null);

  
  const [inputKey, setInputKey] = useState(Date.now());

  const handleDeleteFile = (i, fileIndex) => {
    setResumeInfo(prevInfo => {
      const newInfo = { ...prevInfo };
      if (newInfo.edu && newInfo.edu.fileE && newInfo.edu.fileE[i]) {
        newInfo.edu.fileE[i].splice(fileIndex, 1);
      }
      return newInfo;
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const [hobbies, setHobbies] = useState([""]);

  const handleInputChange = (index, value) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = value;
    setHobbies(updatedHobbies);
  };

  const handleAddInput = () => {
    setHobbies([...hobbies, ""]);
  };
  const [blocks4, setBlocks4] = useState([]);

  const addBlock4 = () => {
    const newBlock = { id: blocks4.length + 1 };
    setBlocks4([...blocks4, newBlock]);
  };

  const deleteBlock4 = (id) => {
    const updatedBlocks = blocks4.filter((block) => block.id !== id);
    setBlocks4(updatedBlocks);
  };
  const [hobbies1, setHobbies1] = useState([""]);

  const handleInputChange1 = (index, value) => {
    const updatedHobbies1 = [...hobbies1];
    updatedHobbies1[index] = value;
    setHobbies1(updatedHobbies1);
  };

  const handleAddInput1 = () => {
    setHobbies1([...hobbies1, ""]);
  };

  const [hobbies2, setHobbies2] = useState([""]);

  const handleInputChange2 = (index, value) => {
    const updatedHobbies2 = [...hobbies2];
    updatedHobbies2[index] = value;
    setHobbies2(updatedHobbies2);
  };

  const handleAddInput2 = () => {
    setHobbies2([...hobbies2, ""]);
  };

  const [hobbies3, setHobbies3] = useState([""]);

  const handleInputChange3 = (index, value) => {
    const updatedHobbies3 = [...hobbies3];
    updatedHobbies3[index] = value;
    setHobbies(updatedHobbies3);
  };

  const handleAddInput3 = () => {
    setHobbies3([...hobbies3, ""]);
  };
  const workExperienceForm = () => {};

  const [year1, setYear1] = useState([""]);
  const paragraphStyle = {
    color: "red",
  };

  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    const newBlock = { id: blocks.length + 1 };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id) => {
    const updatedBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(updatedBlocks);
  };

  const [blocks2, setBlocks2] = useState([]);

  const addBlock2 = () => {
    const newBlock = { id: blocks2.length + 1 };
    setBlocks2([...blocks2, newBlock]);
  };

  const deleteBlock2 = (id) => {
    const updatedBlocks = blocks2.filter((block) => block.id !== id);
    setBlocks2(updatedBlocks);
  };

  const [blocks3, setBlocks3] = useState([]);

  const addBlock3 = () => {
    const newBlock = { id: blocks3.length + 1 };
    setBlocks3([...blocks3, newBlock]);
  };

  const deleteBlock3 = (id) => {
    const updatedBlocks = blocks3.filter((block) => block.id !== id);
    setBlocks3(updatedBlocks);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setName(""); // Reset the name when the dropdown value changes
  };

  const removeBlock = (array, setArray) => {
    setArray([...array.slice(0, -1)])
  }


  const addOneBlock = (array, setArray) => {
    setArray([...array , ""])
  }

  const handleInput = (name, value, semesterIndex, file) => {

    // Create a copy of the post_graduate array
    const post_graduateArray = [...resumeInfo.edu.post_graduate];

    // Check if the semester object exists in the array
    if (!post_graduateArray[semesterIndex]) {
      post_graduateArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = post_graduateArray.map((obj, index) => {
      console.log(obj);
      if (index === semesterIndex) {
        // Add the new field to the second object
        return {
          ...obj,
          [name] : value,
        };
      }
      return obj; // Leave other objects unchanged
    });
    

    // Update the state with the modified post_graduate array
    if (file) {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          post_graduate: updatedArrayOfObjects,
        },
        files : {
          ...resumeInfo.files,
          [`post_graduation_marksheet_${resumeInfo.edu.post_graduate[semesterIndex].year_no}`] : file,
        }
      });
    } else {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          post_graduate: updatedArrayOfObjects,
        },
      });
    }
  };
  
  const handleInputUnderGraduate = (name, value, semesterIndex, file) => {

    // Create a copy of the post_graduate array
    const under_graduateArray = [...resumeInfo.edu.under_graduate];

    // Check if the semester object exists in the array
    if (!under_graduateArray[semesterIndex]) {
      under_graduateArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = under_graduateArray.map((obj, index) => {
      console.log(obj);
      if (index === semesterIndex) {
        // Add the new field to the second object
        return {
          ...obj,
          [name] : value,
        };
      }
      return obj; // Leave other objects unchanged
    });

    // console.log(updatedArrayOfObjects);
    
    // Update the state with the modified post_graduate array
    if (file) {
    setResumeInfo({
      ...resumeInfo,
      edu: {
        ...resumeInfo.edu,
        under_graduate: updatedArrayOfObjects,
      },
        files : {
          ...resumeInfo.files,
        [`under_graduation_marksheet_${resumeInfo.edu.under_graduate[semesterIndex].year_no}`]: file,
      }
      });
    } else {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          under_graduate: updatedArrayOfObjects,
        },
      });
    }
  };
  const handleInpuGerman = (name, value, file) => {

    if (file) {
    setResumeInfo({
      ...resumeInfo,
      edu: {
        ...resumeInfo.edu,
        german: {
          ...resumeInfo.edu.german,
          [name] : value
        },
      },
        files : {
          ...resumeInfo.files,
        [name]: file,
      }
      });
    } else {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          german: {
            ...resumeInfo.edu.german,
            [name] : value
          },
        },
      });
    }
  };
  
  const handleInputBlankYear = (name, value, semesterIndex) => {

    // Create a copy of the post_graduate array
    const blank_yearArray = [...resumeInfo.edu.blank_year];

    // Check if the semester object exists in the array
    if (!blank_yearArray[semesterIndex]) {
      blank_yearArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = blank_yearArray.map((obj, index) => {
      console.log(obj);
      if (index === semesterIndex) {
        // Add the new field to the second object
        return {
          ...obj,
          [name] : value,
        };
      }
      return obj; // Leave other objects unchanged
    });

    console.log(updatedArrayOfObjects);
    

    // Update the state with the modified post_graduate array
    setResumeInfo({
      ...resumeInfo,
      edu: {
        ...resumeInfo.edu,
        blank_year: updatedArrayOfObjects,
      },
    });
    
  };


  

  return (      

    <Stack>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
            <FormLabel  style={{ fontWeight: 'bold' }} >Post Graduation/Masters<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
              
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.edu,
                    grad:  e.target.value,
                  };
                  const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="postBSc">Post B.Sc.</option>
                <option value="postGrad">Post Graduation</option>
                <option value="master">Master Program</option>
                <option value="other">Any other course</option>
              </Select>
            </FormControl>
          </SimpleGrid><br/>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
{
  semestersOfPostGraduate.map((ele, i)=>{
    
    return <div>
               <br/>
               <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <FormLabel>Year/Semester<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                onChange={(e) => {
                  handleInput("year_no", e.target.value, i)
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
                <option value="3">Year 3/Semester 3</option>
                <option value="2">Year 2/Semester 2</option>
                <option value="1">Year 1/Semester 1</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
             
          
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    // const updateValue = {
                    //   ...resumeInfo.edu,
                    //   post_graduate : {
                    //     ...resumeInfo.edu.post_graduate[0], from_date : formattedDate 
                    // },
                    // };
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInput("from_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime()) ) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
                    handleInput("to_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={1} placeItems="center">
            <FormControl>
              <formlable>Upload Marksheets(pdf)<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
            </FormControl>

            <FormControl>
  <Input
    type="file"
    onChange={(e) => {
      const file = e.target.files[0];
      setSelectedPostGraduationFile(prevFiles => ({
        ...prevFiles,
        [i]: file, // Use the index as the key
      }));
      if (
        resumeInfo?.edu?.post_graduate &&
        resumeInfo.edu.post_graduate[i] &&
        resumeInfo.edu.post_graduate[i].year_no
      ) {
        const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1];
        handleInput("marksheet", `post_graduation_marksheet_${resumeInfo.edu.post_graduate[i].year_no}.${ext}`, i, e.target.files[0]);
      } else {
        console.error("Invalid data structure: post_graduate or year_no is undefined");
      }
    }}
    variant="whatsapp"
    w="100%"
  />
     {resumeInfo?.edu?.fileE[i] && (
  <div>
    <ul>
      Selected files:
      {resumeInfo.edu.fileE[i].map((file, fileIndex) => (
        <li style={{ display: 'inline' }}>
          {file.name}
        </li>
      ))}
    </ul>
  </div>
)}
  </FormControl>
  <FormControl>
  <Button 
    color="#00b0ff" 
    onClick={() => {
      const file = selectedPostGraduationFile[i];
      if (file) {
        window.open(URL.createObjectURL(file));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
        setSelectedPostGraduationFile(prevFiles => {
          const newFiles = { ...prevFiles };
          delete newFiles[i];
          return newFiles;
        });
        handleDeleteFile(i);
        handleAddInput();
      }}>
        Delete
      </Button>

</FormControl>

          </SimpleGrid><br/>
        

          
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />


 <br/>

     
    </div>
  })
}
<FormControl>
            <FormLabel>
              Name of school - university/ Schule -Universität <Text  as="span" fontWeight="bold" color="red">  * </Text>
            </FormLabel>
            <Input
              type="text"
              placeholder=" university/ Schule -Universität"
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.edu,
                  University: e.target.value,
                };
                const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                setResumeInfo(updateResumeInfo);
                handleAddInput("institute", e.target.value,0)
              }}
            />
          </FormControl>   <br/>   
            <Divider
                orientation="horizontal"
                borderColor="#2F4F4F"
                borderWidth="2px"
              />
              <br/>


          <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(semestersOfPostGraduate, setSemestersOfPostGraduate)}>
            Add
          </Button>
          <Button
            color="red"
            onClick={() => {
              // const lastBlock = blocks[blocks.length - 1];
              // if (lastBlock) {
              //   deleteBlock(lastBlock.id);
              // }
              removeBlock(semestersOfPostGraduate, setSemestersOfPostGraduate)
            }}
          >
            Delete
          </Button>
        </FormControl>
      </VStack>
      <br />

      <br /><br/>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
            <FormLabel style={{ fontWeight: 'bold' }}> Under Graduate Degree/Diploma <Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                // value={resumeInfo.edu.Ugrad}
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.edu,
                    Ugrad: e.target.value,
                  };
                  const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="	Under Graduate Degree">
                  {" "}
                  Under Graduate Degree
                </option>
                <option value="Diploma">Diploma</option>
              </Select>
            </FormControl><br/>
          </SimpleGrid>
 {
  semestersOfUnderGraduate.map((ele, i, arr)=>{
    return <div>
                
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
          <br />
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <FormLabel>Year/Semester<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                onChange={(e) => {
                  // const updateValue = {
                  //   ...resumeInfo.edu,
                  //   yea2: e.target.value,
                  // };
                  // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  // setResumeInfo(updateResumeInfo);
                  handleInputUnderGraduate("year_no" , e.target.value, i)
                }}
              >
                <option value="3">Year 3/Semester 3</option>
                <option value="2">Year 2/Semester 2</option>
                <option value="1">Year 1/Semester 1</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
               
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    // const updateValue = {
                    //   ...resumeInfo.edu,
                    //   from2: formattedDate,
                    // };
              
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputUnderGraduate("from_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
               
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    // const updateValue = {
                    //   ...resumeInfo.edu,
                    //   to2: formattedDate,
                    // };
              
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputUnderGraduate("to_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={1} placeItems="center">
            <FormControl>
              <formlable>Upload Marksheets(pdf)<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
            </FormControl>

            <FormControl>
            <FormControl>
            <Input
    type="file"
    onChange={(e) => {
      const file = e.target.files[0];
setSelectedUnderGraduateFile(prevFiles => ({
  ...prevFiles,
  [i]: file, // Use the index as the key
}));
      // Check if resumeInfo and edu are defined
      if (resumeInfo && resumeInfo.edu) {
        // Check if under_graduate is an array and i is a valid index
        const underGraduateArray = resumeInfo.edu.under_graduate;
        if (Array.isArray(underGraduateArray) && i >= 0 && i < underGraduateArray.length) {
          const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1];
          handleInputUnderGraduate(
            "marksheet",
            `under_graduation_marksheet_${underGraduateArray[i].year_no}.${ext}`,
            i,
            e.target.files[0]
            
          );
        } else {
          // Handle the case when under_graduate is not an array or i is invalid
          console.error("Invalid index or under_graduate is not an array");
        }
      } else {
        // Handle the case when resumeInfo or edu is not defined
        console.error("resumeInfo or edu is not defined");
      }
    }}
    variant="whatsapp"
    w="100%"
  />
  {/* {resumeInfo?.edu?.fileF[i] && (
    <div>
      <ul>
        Selected files:
        {resumeInfo.edu.fileF[i].map((file, fileIndex) => (
          <li  style={{ display: 'inline' }}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  )} */}
</FormControl>

           </FormControl>
           <FormControl>
            
          
           <Button 
    color="#00b0ff" 
    onClick={() => {
      const file = selectedUnderGraduateFile[i];
      if (file) {
        window.open(URL.createObjectURL(file));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedUnderGraduateFile(prevFiles => {
      const newFiles = { ...prevFiles };
      delete newFiles[i];
      return newFiles;
    });
    handleAddInput();
  }}>
    Delete
  </Button>
            </FormControl>
          </SimpleGrid>
        <br/>
        {i === arr.length - 1 && <div><FormControl>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
           
<br/>
              <FormLabel>
                Name of school - university/ Schule -Universität<Text  as="span" fontWeight="bold" color="red">  * </Text>
              </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder=" university/ Schule -Universität"
               
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.edu,
                    Universityz: e.target.value,
                  };
                  const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  setResumeInfo(updateResumeInfo);
                
                // handleInputUnderGraduate("institute", e.target.value, 0)
                }}
              /> 
            </FormControl> 
            <br/>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          /></div>}
    </div>
  })
 }
<br/>
          <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(semestersOfUnderGraduate, setSemestersOfUnderGraduate)}>
            Add
          </Button>
          <Button
            color="red"
            onClick={() => {
              // const lastBlock = blocks2[blocks2.length - 1];
              // if (lastBlock) {
              //   deleteBlock2(lastBlock.id);
              // }
              removeBlock(semestersOfUnderGraduate, setSemestersOfUnderGraduate)
            }}
          >
            Delete
          </Button>
        </FormControl>
      </VStack>
      <br />

      <br /><br/>

      <FormControl>
      <FormLabel style={{ fontWeight: 'bold', }}>12th Standard<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /><br/>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">

      <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
             
          
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      twelweth: {...resumeInfo.edu.twelweth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      twelweth: {...resumeInfo.edu.twelweth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={10} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
        </FormControl>

        <FormControl>
        <Input
            type="file"
         
            onChange={(e) => {
              const file = e.target.files[0];
        setSelectedFile12(file);
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                twelweth_marksheet : e.target.files[0],
              };
              const updateedu = {
                ...resumeInfo.edu,
                twelweth: {...resumeInfo.edu.twelweth, marksheet:`twelweth_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="100%"
          />{resumeInfo?.edu?.fileG[0] && (
            <div>
              <ul>
                Selected files:
                {resumeInfo.edu.fileG[0].map((file, fileIndex) => (
                  <li  style={{ display: 'inline' }}>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </FormControl>
          <FormControl>
          <Button 
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile12) {
        window.open(URL.createObjectURL(selectedFile12));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile12(null);
    handleAddInput();
  }}>
    Delete
  </Button>
  </FormControl>
        
       
      </SimpleGrid><br/>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität<Text  as="span" fontWeight="bold" color="red">  * </Text>
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.twelweth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                twelweth: {...resumeInfo.edu.twelweth, institute :e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>11th Standard<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
      <br/>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
      <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
             
          
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      eleventh: {...resumeInfo.edu.eleventh, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      eleventh: {...resumeInfo.edu.eleventh, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={1} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
        </FormControl>

        <FormControl>
        <Input
            type="file"
            key={inputKey}
            onChange={(e) => {
              const file = e.target.files[0];
        setSelectedFile11(file);
              // handleFileChange()
              
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                eleventh_marksheet : e.target.files[0],
              };
              const updateedu = {
                ...resumeInfo.edu,
                eleventh: {...resumeInfo.edu.eleventh, marksheet:`eleventh_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="7.8rem"
          />
       {resumeInfo?.edu?.fileH[0] && (
            <div>
              <ul>
                Selected files:
                {resumeInfo.edu.fileH[0].map((file, fileIndex) => (
                  <li  style={{ display: 'inline' }}>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
       </FormControl>
       <FormControl>
        
          <Button 
          marginLeft={4}
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile11) {
        window.open(URL.createObjectURL(selectedFile11));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile11(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>
 
        </FormControl>
      </SimpleGrid>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität<Text  as="span" fontWeight="bold" color="red">  * </Text>
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.eleventh.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                eleventh: {...resumeInfo.edu.eleventh, institute : e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 

      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>10th Standard<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
<br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">

      <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
             
          
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      tenth: {...resumeInfo.edu.tenth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      tenth: {...resumeInfo.edu.tenth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={1} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
        </FormControl>

        <FormControl>
        <Input
            type="file"
            key={inputKey}
            onChange={(e) => {
              const file = e.target.files[0];
        setSelectedFile10(file);
              // handleFileChange()
              
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                tenth_marksheet : e.target.files[0],
              };
              
              const updateedu = {
                ...resumeInfo.edu,
                tenth: {...resumeInfo.edu.tenth, marksheet:`tenth_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="7.8rem"
          />{resumeInfo?.edu?.fileI[0] && (
            <div>
              <ul>
                Selected files:
                {resumeInfo.edu.fileI[0].map((file, fileIndex) => (
                  <li  style={{ display: 'inline' }}>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </FormControl>
          <FormControl>
            
       
         <Button 
          marginLeft={4}
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile10) {
        window.open(URL.createObjectURL(selectedFile10));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile10(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>
 
        </FormControl>
      </SimpleGrid>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität<Text  as="span" fontWeight="bold" color="red">  * </Text>
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.tenth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                tenth: {...resumeInfo.edu.tenth, institute : e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/>
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>1st to 9th Standard<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />

<br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
       
        <FormControl>
              <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
             
          
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      first_to_ninth: {...resumeInfo.edu.first_to_ninth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime())) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      first_to_ninth: {...resumeInfo.edu.first_to_ninth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>



            <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität{" "}<Text  as="span" fontWeight="bold" color="red">  * </Text>
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.first_to_ninth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                first_to_ninth: {...resumeInfo.edu.first_to_ninth, institute :e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

      </SimpleGrid>
      <br/>

      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 

      <SimpleGrid>
        <FormControl>
        <FormLabel style={{ fontWeight: 'bold' }}>Blank Year(if any)<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
        </FormControl>
        <Divider
          orientation="horizontal"
          borderColor="#2F4F4F"
          borderWidth="2px"
        />
        <br />
      </SimpleGrid>
      {
        blankYear.map((ele, i)=>{
          return <VStack spacing={4} align="flex-start">
          <FormControl>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
              <FormControl>
                <FormLabel>Reason for Break<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder=" Reason for Break"
                  // value={resumeInfo.edu.Reason}
                  onChange={(e) => {
                    // const updateValue = {
                    //   ...resumeInfo.edu,
                    //   Reason: e.target.value,
                    // };
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputBlankYear("reason", e.target.value, i)
                  }}
                />
              </FormControl>
            </SimpleGrid>
  
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
                <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
               
            
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                
                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();
                
                      const formattedDate = `${day}-${month}-${year}`;
                
                      // const updateValue = {
                      //   ...resumeInfo.edu,
                      //   from7: formattedDate,
                      // };
                
                      // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputBlankYear("from_date", formattedDate,i)
                    }
                  }}
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
               
            
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                
                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();
                
                      const formattedDate = `${day}-${month}-${year}`;
                
                      // const updateValue = {
                      //   ...resumeInfo.edu,
                      //   to7: formattedDate,
                      // };
                
                      // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputBlankYear("to_date", formattedDate,i)
                    }
                  }}
                />
              </FormControl>
  
            </SimpleGrid>
              <br/>
            <Divider
              orientation="horizontal"
              borderColor="#2F4F4F"
              borderWidth="2px"
            />
           
          </FormControl>
        </VStack>
        })
      }
    <SimpleGrid columns={[1, 1, 1, 4]} spacing={1} placeItems="left">

      
      <FormControl>
            <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(blankYear, setBlankYear)}>
              Add
            </Button>
            <Button
              color="red"
              onClick={() => {
                // const lastBlock = blocks3[blocks3.length - 1];
                // if (lastBlock) {
                //   deleteBlock3(lastBlock.id);
                // }
                removeBlock(blankYear, setBlankYear)
              }}
            >
              Delete
            </Button>
            </FormControl>
</SimpleGrid>
<br/>

      <p style={paragraphStyle}>
         Attention!! German Authorities and
        Employers need a gapless (!) CV. Enter your educational qualification,
        years of completion of that education qualification with at most care
        and Very Correctly. You also need to specify all the educational
        qualification you have achieved till date (today!). Provide correct
        information. If you have taken a break in between your education,
        mention that also with the help of blank field. Declaration of
        information regarding your educational background is mandatory.
        Transparency is key to success. Remember: - A simple mistake can cause
        your VISA & Recognition process rejection.{" "}
        </p> <br/> <br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
      <br />
      <br />
      <br/>
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>Language Proficiency / Sprachkenntnisse: <Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
      </FormControl>

      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /><br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Mother tongue/ Muttersprache<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
          <Input
            type="text"
            placeholder="Mothen tongue"
            value={resumeInfo.edu.mother_tongue}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                mother_tongue: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>English/ Englisch<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
          <Select
            placeholder="Select an option"
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                english :  e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          >
            <option value="Good/ Gut">Good/ Gut </option>
            <option value="Average/ Durchschnittlich">Average/ Durchschnittlich </option>
            <option value="Poor /Schlecht">Poor /Schlecht </option>
          </Select>
        </FormControl>
        <br />
      </SimpleGrid>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/>
 <formlable style={{ fontWeight: 'bold' }}>German / Deutsch<Text  as="span" fontWeight="bold" color="red">  * </Text></formlable>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /> <br/> 
      <Stack>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
          <FormControl>
            <FormLabel>Select an option<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
          </FormControl>
          <FormControl>
          <Select
  placeholder="Select option"
  value={resumeInfo?.edu?.level[0]}
  onChange={(e) => {
   
    const newYear = [...(resumeInfo?.edu?.level[0] || [])];
    newYear[0] = e.target.value;;

    const updateValue = {
      ...resumeInfo.edu,
      level: newYear,
      
    };
    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
    setResumeInfo(updateResumeInfo);
    // handleInpuGerman("level", e.target.value)
  }}
>


              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
            </Select>
          </FormControl>
        
          <FormControl>
                  <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                </FormControl>
                <FormControl>
                  <Input
                    type="date"
                    placeholder=""
                  
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
      
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
      
      
                        const formattedDate = `${day}-${month}-${year}`;
                        const newYear = [...(resumeInfo?.edu?.from9 || [])];
                        newYear[0] = formattedDate;
      
                        const updateValue = {
                          ...resumeInfo.edu,
                          from9: newYear
                        };
      
                        const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                        setResumeInfo(updateResumeInfo);
                        
 //  handleInpuGerman("from", formattedDate)
                      }
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>To/bis<Text  as="span" fontWeight="bold" color="red">  * </Text> </FormLabel>
                </FormControl>
                <FormControl>
                  <Input
                    type="date"
                  
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
      
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
      
      
                        const formattedDate = `${day}-${month}-${year}`;
                        const newYear = [...(resumeInfo?.edu?.to9 || [])];
                        newYear[0] = formattedDate;
      
                        const updateValue = {
                          ...resumeInfo.edu,
                          to9: newYear
                        };
      
                        const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                        setResumeInfo(updateResumeInfo);
               //         handleInpuGerman("to", formattedDate)
                      }
                    }}
                  />
                </FormControl>
                <FormControl>
                <FormLabel>Certificate (Level / date)/ Zertifikat (Stufe/Datum) <Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                </FormControl>
                <FormControl>
                  <Input
                    type="date"
                    
                    onChange={(e) => {


                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
  
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
  
                        const formattedDate = `${day}-${month}-${year}`;
                        const newYear = [...(resumeInfo?.edu?.Certificate || [])];
                        newYear[0] = formattedDate;
  
                        const updateValue = {
                          ...resumeInfo.edu,
                          Certificate: newYear
                        };
                        const updateResumeInfo = {
                          ...resumeInfo,
                          edu: updateValue,
                        };
                        setResumeInfo(updateResumeInfo);
                      }
                    }}
                  />
                </FormControl>
        </SimpleGrid><br/>
        {(resumeInfo?.edu?.level[0] === "B1" || resumeInfo?.edu?.level[0] === "B2") && (
          <FormControl>
            <SimpleGrid
                  columns={[1, 1, 1, 3]}
                  spacing={1}
                  placeItems="center"
                >
        
        
        
        
        
                     <FormControl>
                     <FormLabel>Listening Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                    </FormControl>
                    <FormControl>



                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileA]; // Create a copy of the fileArrays array
                      newFileArrays[0] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileA: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
    handleInpuGerman("listening_module_marksheet", "listening_module_marksheet", e.target.files[0])
                    }}
                  
                    variant="whatsapp"
                    w="100%"
                  />
                  
                  </FormControl>
                 
                  <FormControl>
                  <Button 
          
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
    marginLeft={"4%"}
   >
    View
  </Button>

  <Button color="red" onClick={() => {
   setSelectedFile(null);
   setInputKey(Date.now());
   handleAddInput();
  }}>
    Delete
  </Button>  

  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Speaking Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                  </FormControl>
                  <FormControl>
                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileB]; // Create a copy of the fileArrays array
                      newFileArrays[0] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileB: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                      handleInpuGerman("speaking_module_marksheet", "speaking_module_marksheet", e.target.files[0])
                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="100%"
                  />
                  </FormControl>
                
                  <FormControl>

                  <Button 
          marginLeft={4}
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>   
                  </FormControl>
                  <FormControl>
                    <FormLabel>Reading Module<Text> Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></Text></FormLabel>
                  </FormControl>
                  <FormControl>
                     <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileC]; // Create a copy of the fileArrays array
                      newFileArrays[0] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileC: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);                     
                      handleInpuGerman("reading_module_marksheet", "reading_module_marksheet", e.target.files[0])

                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="100%"
                  />  </FormControl>
   
                  <FormControl>


                  <Button 
          marginLeft={4}
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button> 
                  </FormControl>
              


<FormControl>
                    <FormLabel>Writing Module <Text> Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></Text></FormLabel>
                  </FormControl>
                  <FormControl>
                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileD]; // Create a copy of the fileArrays array
                      newFileArrays[0] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileD: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                      handleInpuGerman("writing_module_marksheet", "writing_module_marksheet", e.target.files[0])
                    }}
                  
                    variant="whatsapp"
                    w="100%"
                  />
                  </FormControl>
                 
                  <FormControl>

                  <Button 
          marginLeft={4}
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>  
                  </FormControl>

                  </SimpleGrid>
          </FormControl>
        )}
        <Divider
          orientation="horizontal"
          borderColor="#2F4F4F"
          borderWidth="2px"
        />
      </Stack>

      <FormControl>
        {blocks4.map((block, index) => (
          <Stack>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
              <FormControl>
                <FormLabel>Select an option<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
              </FormControl>
              <FormControl>
                <Select
                  key={index + 1}
                  placeholder="Select option"
                  value={resumeInfo?.edu?.level[index + 1]}
                  onChange={(e) => {
                    const newComputerSkills = [...(resumeInfo?.edu?.level || [])];
                    newComputerSkills[index + 1] = e.target.value;
                    const updateValue = {
                      ...resumeInfo.edu,
                      level: newComputerSkills,
                    };
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }}
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>from/von<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
                  placeholder="mm/yyyy"
                  value={resumeInfo.edu.from1}
                  onChange={(e) => {


                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();

                      const formattedDate = `${day}-${month}-${year}`;
                      const newYear = [...(resumeInfo?.edu?.from9 || [])];
                      newYear[index + 1] = formattedDate;

                      const updateValue = {
                        ...resumeInfo.edu,
                        from9: newYear
                      };
                      const updateResumeInfo = {
                        ...resumeInfo,
                        edu: updateValue,
                      };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>To/bis <Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
                  placeholder="mm/yyyy"
                  value={resumeInfo.edu.to1}
                  onChange={(e) => {


                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();

                      const formattedDate = `${day}-${month}-${year}`;
                      const newYear = [...(resumeInfo?.edu?.to9 || [])];
                      newYear[index + 1] = formattedDate;

                      const updateValue = {
                        ...resumeInfo.edu,
                        to9: newYear
                      };
                      const updateResumeInfo = {
                        ...resumeInfo,
                        edu: updateValue,
                      };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>
              <FormLabel>
                Certificate (Level / date)/ Zertifikat (Stufe/Datum)<Text  as="span" fontWeight="bold" color="red">  * </Text>
                </FormLabel>
              <FormControl>
                {" "}
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"

                  onChange={(e) => {


                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();

                      const formattedDate = `${day}-${month}-${year}`;
                      const newYear = [...(resumeInfo?.edu?.Certificate || [])];
                      newYear[index + 1] = formattedDate;

                      const updateValue = {
                        ...resumeInfo.edu,
                        Certificate: newYear
                      };
                      const updateResumeInfo = {
                        ...resumeInfo,
                        edu: updateValue,
                      };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>
            </SimpleGrid>
            {(resumeInfo?.edu?.level[index + 1] === "B1" || resumeInfo?.edu?.level[index + 1] === "B2") && (
              <FormControl>
               <br/> <SimpleGrid
                  columns={[1, 1, 1, 4]}
                  spacing={1}
                  placeItems="center"
                >
        
        
        
        
        
                     <FormControl>
                     <FormLabel>Listening Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                    </FormControl>
                    <FormControl>



                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileA]; // Create a copy of the fileArrays array
                      newFileArrays[index+1] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileA: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="8rem"
                  />
                  
                  </FormControl>
                  <FormControl>
                  
                  {resumeInfo?.edu?.fileA[index+1] && (
                    <div>
                      <ul>
                        Selected files:
                        {resumeInfo.edu.fileA[index+1].map((file, fileIndex) => (
                          <li  style={{ display: 'inline' }}>
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

</FormControl>
                  <FormControl>
                  <Button 
          
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>

                  </FormControl>
                  <FormControl>
                    <FormLabel>Speaking Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                  </FormControl>
                  <FormControl>
                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileB]; // Create a copy of the fileArrays array
                      newFileArrays[index+1] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileB: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="8rem"
                  />
                  </FormControl>
                  <FormControl>

                  {resumeInfo?.edu?.fileB[index+1] && (
                <div>
                  <ul>
                    Selected files:
                    {resumeInfo.edu.fileB[index+1].map((file, fileIndex) => (
                      <li  style={{ display: 'inline' }}>
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                </FormControl>
                  <FormControl>

                  <Button 
          
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>  
                  </FormControl>
                  <FormControl>
                    <FormLabel>Reading Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                  </FormControl>
                  <FormControl>
                     <Input
                    type="file"
                    onChange={(e) => {
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileC]; // Create a copy of the fileArrays array
                      newFileArrays[index+1] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileC: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="8rem"
                  />  </FormControl>
    <FormControl>
{resumeInfo?.edu?.fileC[index+1] && (
                <div>
                  <ul>
                    Selected files:
                    {resumeInfo.edu.fileC[index+1].map((file, fileIndex) => (
                      <li  style={{ display: 'inline' }}>
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

</FormControl>
                  <FormControl>


                  <Button
                    color="#00b0ff"

                    marginRight={"4%"}
                  >
                    View
                  </Button>
                  <Button color="red" onClick={handleAddInput}>
                    Delete
                  </Button> 
                  </FormControl>
              


<FormControl>
                    <FormLabel>Writing Module Marksheet<Text  as="span" fontWeight="bold" color="red">  * </Text></FormLabel>
                  </FormControl>
                  <FormControl>
                  <Input
                    type="file"
                    key={inputKey}
                    onChange={(e) => {
                      const file = e.target.files[0];
             setSelectedFile(file);
                      const newFiles = e.target.files;

                      const newFileArrays = [...resumeInfo.edu.fileD]; // Create a copy of the fileArrays array
                      newFileArrays[index+1] = Array.from(newFiles);

                      const updateValue = {
                        ...resumeInfo.edu,
                        fileD: newFileArrays,
                      };

                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }}
                    marginRight={8}
                    variant="whatsapp"
                    w="8rem"
                  />
                  </FormControl>
                  <FormControl>

                  {resumeInfo?.edu?.fileD[index+1] && (
                <div>
                  <ul>
                    Selected files:
                    {resumeInfo.edu.fileD[index+1].map((file, fileIndex) => (
                      <li  style={{ display: 'inline' }}>
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                </FormControl>
                  <FormControl>

                  <Button 
          
    color="#00b0ff" 
    onClick={() => {
      if (selectedFile) {
        window.open(URL.createObjectURL(selectedFile));
      } else {
        alert('Please upload a file before trying to view it.');
      }
    }} 
    marginRight={"4%"}
  >
    View
  </Button>
  <Button color="red" onClick={() => {
    setSelectedFile(null);
    setInputKey(Date.now());
    handleAddInput();
  }}>
    Delete
  </Button>   
                  </FormControl>

                  </SimpleGrid>
              </FormControl>
            )}






            <Divider
              orientation="horizontal"
              borderColor="#2F4F4F"
              borderWidth="2px"
            />
          </Stack>
        ))}
        <br />
        <Button marginRight={2} color="#00b0ff" onClick={addBlock4}>
          Add
        </Button>
        <Button
          color="red"
          onClick={() => {
            const lastBlock = blocks4[blocks4.length - 1];
            if (lastBlock) {
              deleteBlock4(lastBlock.id);


              const newHobbies = [...(resumeInfo.edu.level)];
              newHobbies.pop();

              const updatedProfile = {
                ...resumeInfo?.edu,
                level: newHobbies,
              };

              const updatedResumeInfo = {
                ...resumeInfo,
                edu: updatedProfile,
              };

              setResumeInfo(updatedResumeInfo);


            }
          }}
        >
          Delete
        </Button>
      </FormControl><br/>
      <br/>

    

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
        <HStack spacing={8}>
          <Button
            colorScheme="blue"
            onClick={() => {
              setPage((p) => p - 1);
            }}
            leftIcon={<ChevronLeftIcon />}
          >
            back
          </Button>
          <Button
            color="#00b0ff"
            onClick={() => {
              // Check if all school names are filled
              for (let i = 0; i < educationData.length; i++) {
                if (!educationData[i].schoolName || educationData[i].schoolName === "Select...") {
                  alert(`Please select a school for education entry ${i + 1}`);
                  return;
                }
              }

              saveData();
              setPage((p) => p + 1);
            }}
            rightIcon={<ChevronRightIcon />}
          >
            Save
          </Button>
        </HStack>
      </SimpleGrid>
       </Stack>
  

  );
};

export default PersonalDetails;
