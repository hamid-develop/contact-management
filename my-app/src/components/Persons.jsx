import { Link, Outlet } from "react-router-dom";
import { getUsers } from "../data";

const Persons = () => {
  const users = getUsers()
  return (
    <div className=" flex">
     {users.map((user) => (
     <div className="mx-5" >
       <Link to={`/persons/${user.userId}`} key={user.userId}>{user.name}</Link>
     </div>
     ) )}
      <Outlet />
    </div>
  );
};

export default Persons;
