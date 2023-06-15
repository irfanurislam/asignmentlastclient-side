import React, { useEffect, useState } from 'react';
import TopInstructor from './TopInstructor';

const TopInstructors = () => {

    
  const [allMentor,setMentor] = useState([])
  useEffect(() => {
    fetch('https://side-of-server.vercel.app/populerclass')
    .then(res => res.json())
    .then(data => {
     console.log(data)
     setMentor(data)
    })
   }, []);
 
   console.log(allMentor)
      // Sort classesData based on the number of students in descending order
  // const sortedClassesData = classesData.sort((a, b) => b.students - a.students);

  // Select the top 6 instructors
  // const topInstructors = sortedClassesData.slice(0, 6).map(classItem => ({
  //   _id: classItem._id,
  //   instructor: classItem.instructor,
  //   instructorImage: classItem.instructorImage,
  //   students: classItem.students,
  // }));



    return (
        <div className='mt-28'>
         <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-10 text-center">Our Instructor</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {allMentor.map((instructor, index) => (
          <TopInstructor
            key={instructor._id}
            classItem={instructor}
          />
        ))}
      </div>
    </div>   
        </div>
    );
};

export default TopInstructors;