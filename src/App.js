import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Chart from "./components/Chart";
import UserInfo from "./components/UserInfo";

function App() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  // get data
  useEffect(() => {
    fetch("http://localhost:5000/datas")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`http://localhost:5000/datas/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="App">
      <h2 className="text-2xl mt-2">Welcome</h2>
      <p>Data is comming from mongodb</p>
      <button
        onClick={() => setOpen(true)}
        className="bg-pink-500 text-gray-100 px-4 py-2 rounded-full mt-3"
      >
        Add User
      </button>
      <div className="mt-6">
        I have tried a lot for chartjs and I could not,,,But I will grab it very
        soon{/* <Chart /> */}
      </div>
      {/* meduim and large screen */}
      <div className="hidden md:grid  lg:grid-cols-3 md:grid-cols-2 my-8 mx-24 gap-8">
        {users.map((user) => (
          <UserInfo
            handleDeleteUser={handleDeleteUser}
            user={user}
            key={user._id}
          ></UserInfo>
        ))}
      </div>
      {/* mobile */}
      <div className="grid grid-cols-1 md:hidden my-8 mx-24 gap-8">
        {users.slice(3, 120).map((user) => (
          <UserInfo
            handleDeleteUser={handleDeleteUser}
            user={user}
            key={user._id}
          ></UserInfo>
        ))}
      </div>
      <AddUser setUsers={setUsers} open={open} setOpen={setOpen}></AddUser>
    </div>
  );
}

export default App;
