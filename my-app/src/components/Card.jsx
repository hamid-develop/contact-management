import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ contacts, group }) => {
  return (
    <div>
      {contacts.map((person) => (
        <div
          key={person.id}
          className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-5 mb-5 "
        >
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={person.photo}
            alt="sample"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {person.fullname}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {person.job}
            </p>
            <span className="flex justify-end">
              <BiEditAlt
                size={30}
                color="green"
                cursor="pointer"
                className="mx-2"
              />
              <RiDeleteBin6Line size={30} color="red" cursor="pointer" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
