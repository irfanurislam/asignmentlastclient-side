import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const MyEnrolled = () => {

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
      <p className="text-error font-bold text-3xl">You Are No Enrollemnt this </p>
    ) : (
      <table className="table">
        <thead>
          <tr className="text-black">
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Date</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Total En ST</th>
            <th>status</th>
            
          </tr>
        </thead>
        <tbody>
          {classes?.map((classItem) => (
            <tr key={classItem._id}>
              <td className="align-middle">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classItem.classImage} alt="Avatar" />
                  </div>
                </div>
              </td>
              <td>{classItem?.className}</td>
              <td>{classItem?.name}</td>
              <td>{new Date(classItem?.date).toLocaleString()}</td>
              <td>{classItem?.seats || 0}</td>
              <td>{classItem?.price}</td>
              <td>0</td>
              <td>{classItem.status === 'pending' && 'succeeded'}succeeded</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>

    );
};

export default MyEnrolled;