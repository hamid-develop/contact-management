import Card from "./Card";
import Spinner from "./Spinner";
import NotFound from "./NotFound";

const Main = ({ loading, user }) => {
  

  if (user.length === 0) return <NotFound />

  return (
    <div className="grid sm:grid-cols-2">
      {loading ? <Spinner /> : <Card contacts={user} />}
      
    </div>
  );
};

export default Main;
