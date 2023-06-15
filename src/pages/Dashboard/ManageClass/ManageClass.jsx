import React from 'react';
import useClass from '../../../hooks/useClass';

const ManageClass = () => {
    const [myClass] = useClass()

const handleApproved = (_id,status) =>{

  console.log(_id,status)
  const newStatus = {status}

   fetch(`https://side-of-server.vercel.app/manageallclass/${_id}`,{
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newStatus)
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    if(data.modifiedCount > 0){
      alert ('update status')
    }
   })



}


    return (
        <div className="overflow-x-auto">
       
         
      
          <table className="table w-full">
            <thead>
              <tr className="text-black">
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>feedback</th>
              <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {myClass.map((classItem) => (
                <tr key={classItem._id}>
                  <td className="align-middle">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classItem.classImage} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{classItem.className}</td>
                  <td>{classItem.name}</td>
                  <td>{classItem.email}</td>
                  <td>{classItem.seats}</td>
                  <td>${classItem.price}</td>
                  <td>{classItem.status}</td>
                  <td>feedback</td>
                  <td>
                    <button onClick={() => handleApproved(classItem._id, 'approved')} 
                    disabled={classItem.status === 'approved' || classItem.status === 'deny'}
                    className='btn btn-success btn-xs'>approved</button>
                    <button onClick={() => handleApproved(classItem._id, 'deny')} 
                      disabled={classItem.status === 'approved' || classItem.status === 'deny'}
                     className='btn btn-success btn-xs'>Deny</button>
                    </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    );
};

export default ManageClass;