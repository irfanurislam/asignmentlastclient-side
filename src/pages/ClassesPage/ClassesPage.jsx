import React, { useState, useEffect, useContext } from 'react';
import 'tailwindcss/tailwind.css';
import { AuthContext } from '../../Providers/AuthProviders';
import { json, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useBooked from '../../hooks/useBooked';

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  const [cart, refetch] = useBooked();
  // user
  const {user} = useContext(AuthContext)

  useEffect(() => {
   fetch('https://side-of-server.vercel.app/myclass')
   .then(res => res.json())
   .then(data => {
    console.log(data)
    setClasses(data)
   })
  }, []);


  // handle cart


  const handleAddToCart = (classItem) =>{
    console.log(classItem)
    const {_id,classImage,className,name,seats,price,status,students,instructorImage,instructorName,instructorEmail} = classItem
   

    if(user && user?.email){
          const bookedClass = {classId:_id,classImage,className,seats,price,name,email: user?.email,status,students,instructorImage,instructorName,instructorEmail}


      fetch(`https://side-of-server.vercel.app/carts`,{
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(bookedClass)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.insertedId ){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your book succesfully',
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
    }
    else{
        
      Swal.fire({
        title: 'please login to add cart',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, login Now'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state: {from: location}})
        }
      })


    }

  }

  const handleSelect = (classId) => {
    // Handle the selection of a class
    console.log(`Selected class with ID: ${classId}`);
  };

//   const renderClasses = () => {
//     return classes.map((classItem) => (
//       <tr
//   key={classItem._id}
//   className={`${classItem.seats === 0 ? 'bg-red-700' : ''}`}
// >
//   <td>
//     <div className="avatar">
//       <div className="mask mask-squircle w-12 h-12">
//         <img src={classItem.classImage} alt={classItem.className} />
//       </div>
//     </div>
//   </td>
//   <td>{classItem.className}</td>
//   <td>{classItem.name}</td>
//   <td className='text-center'>{classItem.seats}</td>
//   <td>${classItem.price}</td>
//   <td>
//     {classItem.status === 'approved' ? (
//       <button
//         className="btn btn-primary"
//         disabled={classItem.seats === 0}
//         onClick={() => handleAddToCart(classItem)}
//       >
//         Select
//       </button>
//     ) : (
//       'No Approved Class'
//     )}
//   </td>
// </tr>

//     ));
//   };

  return (
    <div className='my-28'>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">All Classs</h1>
      <table className="table w-full">
      <thead>
          <tr className="text-black">
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Available seats</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody className="bg-white divide-y divide-gray-200">{renderClasses()}</tbody> */}
        <tbody>
  {classes
    .filter((classItem) => classItem.status === 'approved')
    .map((classItem) => (
      <tr
        key={classItem._id}
        className={`${classItem.seats === 0 ? 'bg-red-700' : ''}`}
      >
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classItem.classImage} alt={classItem.className} />
            </div>
          </div>
        </td>
        <td>{classItem.className}</td>
        <td>{classItem.name}</td>
        <td className="text-center">{classItem.seats}</td>
        <td>${classItem.price}</td>
        <td>
          <button
            className="btn btn-primary"
            disabled={classItem.seats === 0}
            onClick={() => handleAddToCart(classItem)}
          >
            Select
          </button>
        </td>
      </tr>
    ))}
</tbody>

      </table>
    </div>
    </div>
  );
}

export default ClassesPage;