import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: contactsList } = await axios.get(
          "http://localhost:9000/contacts"
        );
        const { data: groupList } = await axios.get(
          "http://localhost:9000/groups"
        );
        setContacts(contactsList);
        setGroup(groupList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-cyan-800 h-screen flex justify-center items-center">
      <Card contacts={contacts} group={group} />
    </div>
  );
}

export default App;
