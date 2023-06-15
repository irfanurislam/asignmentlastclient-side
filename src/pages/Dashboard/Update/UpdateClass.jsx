import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateClass = () => {

  
 const classesItem = useLoaderData();
 console.log(classesItem)

 const {_id,className,classImage,email,name,price,seats,status} = classesItem

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const name = form.name.value;
    const email = form.email.value;
    const seats = form.seats.value;
    const price = form.price.value;

    const newUpdatedClass = {
      className,
      classImage,
      name,
      email,
      seats: parseFloat(seats),
      price: parseFloat(price),
      status
    };
console.log(newUpdatedClass)
fetch(`https://side-of-server.vercel.app/myclass/${_id}`,{
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newUpdatedClass)
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    if(data.modifiedCount > 0){
        Swal.fire({
            title: 'Success!',
            text: 'toys Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
   })


    
  };

  return (
    <>
    <div className="w-full">
      <h2 className="text-center my-5">Update Class</h2>

      <form onSubmit={handleAddClass} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
          required
          defaultValue={className}
            type="text"
            name="className"
            placeholder="classname"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Class image</span>
          </label>
          <input
            type="url"
            required
            defaultValue={classImage}
            name="classImage"
            placeholder="photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
          
            placeholder="classname"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            placeholder="instructor Email "
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seats</span>
          </label>
          <input
            type="text"
            defaultValue={seats}
            name="seats"
            placeholder="seats avaialabl"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="price "
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Update class" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </>
    
  );
};

export default UpdateClass;
