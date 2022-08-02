import { useParams } from "react-router-dom";
import { getUserId } from "../data";

const Person = () => {
  const params = useParams();
  const userId = getUserId(parseInt(params.id));
  return (
    <div>
     {userId ? <div>
      <h3>{userId.name}</h3>
      <p>{userId.phone}</p>
      <p>{userId.email}</p>
     </div> : <div>name not founded</div>}
    </div>
  );
};

export default Person;
