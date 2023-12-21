import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  StackDivider,
  Button,
  Box,
  FormLabel
} from "@chakra-ui/react";
import React from "react";
import ReactToPrint from "react-to-print";

const ResumeTemplate = (props) => {
  const { resumeInfo, page } = props;

  const ref = React.useRef(null);

  return (
    <Box
      p={8}
      borderRadius="3g"
      bg="white"
      color="gray.900"
      boxShadow="xl"
      rounded="md"
      border="2px solid #e2e8f0"
      width="100%"
      height="100%"
    >
      <Stack spacing={4} ref={ref} m={6} fontFamily="sans-serif">
        <Stack spacing={1}>
          <Center>
            <Heading as="h1">
              {resumeInfo.profile?.firstname} {resumeInfo.profile?.lastname}
            </Heading>
          </Center>
          <Center>
            <HStack
              justify="center"
              wrap="wrap"
              divider={<StackDivider borderColor="gray.500" />}
            >
              {resumeInfo.profile?.email.length ? (
                <Link
                  href={resumeInfo.profile.email}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  {resumeInfo.profile.email}{" "}
                </Link>
              ) : null}

              {resumeInfo.profile?.website.length ? (
                <Link
                  href={resumeInfo.profile.website}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Portfolio{" "}
                </Link>
              ) : null}
            </HStack>
          </Center>
          <HStack justify="center">
            <address>
              <PhoneIcon /> {resumeInfo.profile?.Country_code}  {resumeInfo.profile?.phone} &nbsp;

            </address>
          </HStack>
        </Stack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
            PERSONAL DATA/ PERSÖNLICHE ANGABEN
          </Heading>

          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Language:</Text>{resumeInfo.profile?.lang}</FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Father's Name / Vater Name:</Text>  {resumeInfo.profile?.father}</FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Birthdate / Geburtsdatum:</Text> {resumeInfo.profile?.birth}</FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Place of Birth / Geburtsort: </Text> {resumeInfo.profile?.pob} </FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Passport Number / Reisepassnummer:</Text> {resumeInfo.profile?.pass} </FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Marital Status/ Familienstand:</Text> {resumeInfo.profile?.mari}</FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Computer skills /Computerkenntnisse:</Text>
            {resumeInfo?.profile?.ComputerSkills1?.map((CS, index) => (
              <React.Fragment key={index}>
                {index > 0 && ","}
                {CS}
              </React.Fragment>
            ))}
          </FormLabel>

          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Hobbies / Hobbies :</Text>
            {resumeInfo?.profile?.hobbi1?.map((hobby, index) => (
              <React.Fragment key={index}>
                {index > 0 && ","}
                {hobby}
              </React.Fragment>
            ))}

          </FormLabel>

          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Address: </Text> {resumeInfo.profile?.address} </FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>country:  </Text>{resumeInfo.profile?.country} </FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Marital Status/ Familienstand: </Text>{resumeInfo.profile?.mari} </FormLabel>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Gender/Geschlecht(wie im reisepass): </Text>{resumeInfo.profile?.Gender} </FormLabel>
        </VStack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="2px">
            EDUCATIONAL QUALIFICATION / SCHULISCHE QUALIFIKATION
          </Heading>
          <Heading as="h3" fontSize="m" >
            Post Graduation/Masters
          </Heading>

          <Text style={{ fontWeight: 'bold' }}>program:{resumeInfo.edu.grad}</Text>
          {
  Array.from({ length: 3 }, (_, i) => (
    <div key={i}>
    <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}> Year/Semester:</Text>  {resumeInfo.edu.post_graduate[i]?.year_no || 'N/A'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</FormLabel>
    <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>     From:</Text> {resumeInfo.edu?.post_graduate[i]?.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text as="span" style={{ fontWeight: 'bold' }}> To:</Text> {resumeInfo.edu?.post_graduate[i]?.to_date}<br /> </FormLabel>
            

    </div>
  ))
}


<FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>University:</Text>{resumeInfo.edu?.University}</FormLabel>

          <Heading as="h3" fontSize="m" >
            Under Graduate Degree/Diploma
          </Heading>
          <Text style={{ fontWeight: 'bold' }}>program:{resumeInfo.edu.Ugrad}</Text>
          {
  Array.from({ length: 3 }, (_, i) => (
    <div key={i}>
     <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>Year/Semester:</Text> {resumeInfo.edu.under_graduate[i]?.year_no || 'N/A'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text as="span" style={{ fontWeight: 'bold' }}> From:</Text>  {resumeInfo.edu?.under_graduate[i]?.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text as="span" style={{ fontWeight: 'bold' }}> To:</Text>  {resumeInfo.edu?.under_graduate[i]?.to_date}<br />
   </FormLabel> </div> 
  ))
}

<FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>University:</Text>{resumeInfo.edu?.Universityz}</FormLabel>




          <Heading as="h3" fontSize="m" >
            12th
          </Heading>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}> From:</Text> {resumeInfo.edu?.twelweth.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Text as="span" style={{ fontWeight: 'bold' }}>To:</Text> {resumeInfo.edu?.twelweth.to_date}<br />

          <Text as="span" style={{ fontWeight: 'bold' }}>University:{resumeInfo.edu?.twelweth.institute}</Text></FormLabel>
          <Heading as="h3" fontSize="m" >
            11th
          </Heading>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>  From:</Text>  {resumeInfo.edu?.eleventh.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Text as="span" style={{ fontWeight: 'bold' }}>  To: </Text> {resumeInfo.edu?.eleventh.to_date}

          <Text as="span" style={{ fontWeight: 'bold' }}>University:</Text>{resumeInfo.edu?.eleventh.institute}</FormLabel>

          <Heading as="h3" fontSize="m" >
            10th
          </Heading>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}>  From:</Text> {resumeInfo.edu?.tenth.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Text as="span" style={{ fontWeight: 'bold' }}> To: </Text>{resumeInfo.edu?.tenth.to_date}<br />

          <Text as="span" style={{ fontWeight: 'bold' }}>University:</Text>{resumeInfo.edu?.tenth.institute}</FormLabel>

          <Heading as="h3" fontSize="m" >
            1st to 9th
          </Heading>
          <FormLabel display="inline" >   <Text as="span" style={{ fontWeight: 'bold' }}> From: </Text>{resumeInfo.edu?.first_to_ninth.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text as="span" style={{ fontWeight: 'bold' }}> To:</Text> {resumeInfo.edu?.first_to_ninth.to_date}<br />

          <Text as="span" style={{ fontWeight: 'bold' }}>University:</Text>{resumeInfo.edu?.first_to_ninth.institute}</FormLabel>
          <Heading as="h3" fontSize="m" >
            Break year(ifany)
          </Heading>
          {
  Array.from({ length:  resumeInfo.edu?.blank_year?.length }, (_, i) => (
    <div key={i}>
     <FormLabel display="inline" >  
     <Text as="span" style={{ fontWeight: 'bold' }}> From:</Text>  {resumeInfo.edu?.blank_year[i]?.from_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text as="span" style={{ fontWeight: 'bold' }}> To:</Text> {resumeInfo.edu?.blank_year[i]?.to_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <Text as="span" style={{ fontWeight: 'bold' }}> Reason for break:</Text>  {resumeInfo.edu.blank_year[i]?.reason}<br />
   </FormLabel> </div> 
  ))
}
        

          <Heading as="h3" fontSize="m" >
            Language Proficiency / Sprachkenntnisse:
          </Heading>
          <Text style={{ fontWeight: 'bold' }}>Mother tongue/ Muttersprache:{resumeInfo.edu.mother_tongue}</Text>
          <Text style={{ fontWeight: 'bold' }}>English/ Englisch: {resumeInfo.edu.english_level}</Text>


          <Heading as="h3" fontSize="m" >
            German / Deutsch*
          </Heading>
          {
  Array.from({ length: resumeInfo.edu?.level?.length }, (_, i) => (
    <div key={i}>
   <Text style={{ fontWeight: 'bold' }}> Level:{resumeInfo.edu.level[i]}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  from: {resumeInfo.edu.from9[i]}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to: {resumeInfo.edu.to9[i]}</Text><br />
   <Text style={{ fontWeight: 'bold' }}>  Certificate:{resumeInfo.edu.Certificate[i]}      </Text>

    </div>
  ))
}


        </VStack>


        <VStack spacing={4} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
            WORK EXPERIENCE
          </Heading>

          <Heading as="h3" fontSize="m" >
            Employer
          </Heading>

         
        
    
      
          {
  Array.from({ length: resumeInfo.work?.work_experience.length }, (_, i) => (
    <div key={i}>
     <Text style={{ fontWeight: 'bold' }}>{i === 0 ? 'Current:' : 'Past:'}</Text> 
      <Text style={{ fontWeight: 'bold' }}>From/von (month / year): {resumeInfo.work?.work_experience[i]?.from_date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.work?.work_experience[i]?.to_date}<br /></Text>    
      <Text style={{ fontWeight: 'bold' }}>Employer Name / Address Name/Adresse des Arbeitgebers: {resumeInfo.work?.work_experience[i]?.hospital_name}</Text>
      <Text style={{ fontWeight: 'bold' }}>Department / Position Abteilung / Position: {resumeInfo.work?.work_experience[i]?.department}</Text>
    </div>
  ))
}

   
    
          <Heading as="h3" fontSize="m" >
            Internship
          </Heading>
          {
 
 Array.from({ length: resumeInfo.work?.from2?.length }, (_, i) => (
  <div key={i}>
     <Text style={{ fontWeight: 'bold' }}>{i === 0 ? 'Current:' : 'Past:'}</Text> 
    <Text style={{ fontWeight: 'bold' }}>From / von (month / year): {resumeInfo.work.from2[i]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to / bis (Monat - Jahr): {resumeInfo.work.to2[i]}</Text>    
    <Text style={{ fontWeight: 'bold' }}>Employer Name / Address Name / Adresse des Arbeitgebers: {resumeInfo.work.Hosp[i]}</Text>
    <Text style={{ fontWeight: 'bold' }}>Department / Position Abteilung / Position: {resumeInfo.work.Dept2[i]}</Text>
    <Text style={{ fontWeight: 'bold' }}key={i}> Duty{i + 1} </Text>

    {/* Check if 'Duty' and 'Dura' arrays are defined */}
    {resumeInfo.work?.Duty && resumeInfo.work?.Dura && (
      Array.from({ length: resumeInfo.work.Duty[i]?.dut?.length }, (_, j) => (
        // Check if indices 'i' and 'j' are valid and 'dut' property exists
        resumeInfo.work.Duty[i]?.dut && resumeInfo.work.Dura[i]?.dur ? (
          <div key={j}>
            {/* Check if 'dut' property is defined before accessing it */}
            <Text style={{ fontWeight: 'bold' }}> Information about duties performed: {resumeInfo.work.Duty[i].dut[j]}</Text>
            {/* Check if 'dur' property is defined before accessing it */}
            <Text style={{ fontWeight: 'bold' }}>Duration (in months): {resumeInfo.work.Dura[i].dur[j]}</Text>
          </div>
        ) : null
      ))
    )}
  </div>
))
        }
         

     
        </VStack>


        <HStack divider={<StackDivider />} pt="24px">
          <Button
            w="max-content"
            colorScheme="messenger"
            isDisabled={page !== 5}
            onClick={() => {
              window.location.reload();
            }}
          >
            Create New
          </Button>
          <div style={{ fontWeight: 'bold' }}>
            <ReactToPrint
              trigger={() => (
                <Button
                  colorScheme="messenger"
                  w="max-content"
                  isDisabled={page !== 5}
                >
                  View
                </Button>
              )}
              content={() => ref.current}
            />
          </div>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ResumeTemplate;
