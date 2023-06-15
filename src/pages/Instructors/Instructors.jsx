import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Instructors = () => {
   
  const [allMentor,setMentor] = useState([])
  useEffect(() => {
    fetch('https://side-of-server.vercel.app/myclass')
    .then(res => res.json())
    .then(data => {
     console.log(data)
     setMentor(data)
    })
   }, []);
 
   console.log(allMentor)



  return (
    <div className="container mx-auto p-8">
   

    <div className="overflow-x-auto">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left">#</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Image</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Instructor Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Instructor Email</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Classes Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left">details</th>
          </tr>
        </thead>
        <tbody>
          {allMentor.map((instructor,index) => (
            <tr key={instructor._id}>
              <td>
                {index + 1}
              </td>
              <td className="px-4 py-2">
                <img
                  src={instructor?.instructorImage}
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{instructor.name}</td>
              <td className="px-4 py-2">{instructor.email}</td>
              <td className="px-4 py-2">
                {instructor.className}
              </td>
              <td className="px-4 py-2">
                <Link to={`/instructors/${instructor._id}/classes`} className="btn btn-primary btn-sm">
                 info
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Instructors;
