import React from "react";

const UserInfo = ({ user, handleDeleteUser }) => {
  const { employee_name, employee_salary, employee_age, profile_image, _id } =
    user;
  return (
    <div className="bg-white w-72 px-2 py-4 rounded-md text-sm">
      <div className="flex justify-center">
        <img className="w-7/12  rounded-md mb-4" src={profile_image} alt="" />
      </div>
      <h2>Name : {employee_name}</h2>
      <p>Salary: ${employee_salary}</p>
      <p>Age: {employee_age} years</p>
      <button
        onClick={() => handleDeleteUser(_id)}
        className="bg-red-500 text-gray-50 mt-3 px-4 py-2 rounded-xl"
      >
        delete user
      </button>
    </div>
  );
};

export default UserInfo;
