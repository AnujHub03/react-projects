import React, { useEffect, useState } from 'react';

const Project8 = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filterData =
        users.length > 0
          ? users.filter((item) =>
              item.firstName.toLowerCase().includes(query)
            )
          : [];
      setFilteredUsers(filterData);
      setShowDropdown(true);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  async function fetchListOfUsers() {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users);
        setLoading(false);
        setError(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  console.log(users, filteredUsers);

  return (
    <>
    <div className=" min-h-screen bg-[url('../../public/img/sunbeam.jpg')] bg-cover bg-center"> 

    <div className=" text-white p-3  rounded-b-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mt-10">Project 8</h1>
    </div>
      <div className="m-auto p-5 mt-10 bg-slate-500 bg-opacity-70 rounded-lg w-11/12 lg:w-8/12">
        <h2 className="text-xl font-bold text-center p-2">Search User From API</h2>
        <input
          type="text"
          name="search-user"
          placeholder="Search users here"
          value={searchParam}
          onChange={handleChange}
          className="w-full mt-3 p-3 rounded"
        />

        {showDropdown && (
          <ul className="bg-white bg-opacity-60 text-black rounded mt-2 max-h-60 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <li
                  key={user.id}
                  className="p-2  hover:bg-gray-400 cursor-pointer"
                >
                  {user.firstName} {user.lastName}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No User Found</li>
            )}
          </ul>
        )}
      </div>
      </div>
    </>
  );
};

export default Project8;
