import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Table from "../components/Table/Table";
import SearchForm from "../components/SearchForm/SearchForm";
import CardList from "../components/CardList/CardList";

const Home = () => {
  const [users, setUsers] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getUsers = async (name) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users?name=${name}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setUsers(data);
    console.log(data);
  };

  const getSelectedUser = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users/selected_user?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setSelectedUsers(data);
    console.log(data);
  };

  return (
    <>
      <RegularSection>
        <SearchForm
          handleSubmit={getUsers}
          setSelectedUsers={setSelectedUsers}
        />
        <h2>Paieškos rezultatai</h2>
        {users &&
          users.length === 0 &&
          selectedUsers &&
          selectedUsers.length === 0 && (
            <div className="searchResults">Paieškos rezultatai: 0</div>
          )}
        {users && users.length > 0 && (
          <Table
            users={users}
            options={users}
            setUsers={setUsers}
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
            getSelectedUser={getSelectedUser}
          />
        )}

        {selectedUsers && selectedUsers.length > 0 && (
          <CardList cards={selectedUsers} />
        )}
      </RegularSection>
    </>
  );
};

export default Home;
