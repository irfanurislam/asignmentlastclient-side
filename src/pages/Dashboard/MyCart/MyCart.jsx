import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useBooked from "../../../hooks/useBooked";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useBooked();
  console.log(cart);
  // how does reduce work!!!
  // const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (classItem) => {
    console.log(classItem._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://side-of-server.vercel.app/carts/${classItem._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  // todo list
 
  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th> Name</th>
              <th> Instructor Name</th>
              <th>Price</th>
              <th>Avaiable Seats</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classItem.classImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{classItem.className}</td>
                <td>{classItem.name}</td>
                <td className="text-end">${classItem.price}</td>
                <td className="text-end">${classItem.seats}</td>
                <td>
                  <Link to={`/dashboard/payment/${classItem._id}`}>
                    <button className="btn btn-warning btn-sm">PAY</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(classItem)}
                    className="btn btn-outline bg-pink-800 text-white "
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
