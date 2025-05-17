import { useState } from "react";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import useDebounce from "../../custom-hooks/useDebounce";

const MultiSelectSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [pills, setPiils] = useState([]);

  const debounceTerm = useDebounce(searchTerm, 500);

  const addPills = (name) => {
    setPiils([...pills, name]);
  };

  const removePills = (name) => {
    const newPills = pills.filter((pill) => pill !== name);
    setPiils(newPills);
  };

  const clearPills = () => {
    setPiils([]);
  };

  const fetchUsers = async () => {
    if (!debounceTerm) {
      setUsers([]);
      return;
    }
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [debounceTerm]);

  return (
    <div className="relative">
      <div className="flex relative items-center border-2 border-gray-200 w-full h-12">
        <div className="flex flex-wrap gap-2 mt-2">
          {pills.map((pill) => (
            <div key={pill} className="flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
                {pill}
              </span>
              <RxCross2 onClick={() => removePills(pill)} />
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search users"
          className="border-none outline-none ml-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <RxCross2 className="absolute right-5" onClick={() => clearPills()} />
      </div>
      <ul className="mt-10 ">
        {users.length > 0 &&
          users.map((user) => (
            <li
              onClick={() => addPills(user.firstName)}
              className="text-black"
              key={user.id}
            >
              {user.firstName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MultiSelectSearch;
