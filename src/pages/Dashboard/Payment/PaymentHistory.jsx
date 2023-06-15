import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';


const paymentHistroy = () => {

    const [classes, setClasses] = useState([])
  const {user} = useContext(AuthContext)
  console.log(user.email)

  useEffect(() => {
    fetch(`https://side-of-server.vercel.app/payments?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setClasses(data)})
      .catch((error) => console.error('Error fetching classes:', error));
  }, []);

console.log(classes)


    return (
        <div className="overflow-x-auto w-3/4">
    {classes.length === 0 ? (
      <p className="text-error font-bold text-3xl">You Are No Payment For this this </p>
    ) : (
      <table className="table">
        <thead>
          <tr className="text-black">
            <th>#</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Date</th>
            <th>Tranjaction Id</th>
            <th>Price</th>
           
            
            
          </tr>
        </thead>
        <tbody>
          {classes?.map((classItem,index) => (
            <tr key={classItem._id}>
              <th className="">
               {index + 1}
              </th>
              <td>{classItem?.className}</td>
              <td>{classItem?.name}</td>
              <td>{new Date(classItem?.date).toLocaleString()}</td>
              <td>{classItem?.transactionId}</td>
              <td>{classItem?.price}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>

    );
};

export default paymentHistroy;