import {useState} from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const user = [
    { name: "حمیدرضا", phone: "09194106814", email: "a@b.com" },
    { name: "حمیدرضا", phone: "09194106814", email: "a@b.com" },
    { name: "حمیدرضا", phone: "09194106814", email: "a@b.com" },
  ];
  const [loading, setLoading] = useState(false);
  return <div>
    <Navbar />
    <Main loading={loading} user={user} />
  </div>;
}

export default App;
