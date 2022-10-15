import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import RegularSection from "../components/RegularSection/RegularSection";
import Table from "../components/Table/Table";
import Loading from "../components/Loading/Loading";
import SearchForm from "../components/SearchForm/SearchForm";
import CardList from "../components/CardList/CardList";

const Home = () => {
  const [users, setUsers] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

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
  useEffect(() => {
    getUsers();
  }, []);

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
  useEffect(() => {
    getSelectedUser();
  }, []);

  if (!users) {
    return <Loading />;
  } else if (!selectedUsers) {
    return <Loading />;
  }

  return (
    <>
      <RegularSection>
        <SearchForm
          handleSubmit={getUsers}
          isShown={isShown}
          setIsShown={setIsShown}
        />
        <h2>Search results</h2>
        {!users && <Loading />}
        {users && users.length === 0 && <div>No Coaches found</div>}
        {isShown ? (
          <div>
            {users && users.length > 0 && (
              <Table
                users={users}
                options={users}
                selectedUsers={selectedUsers}
                setSelectedUsers={setSelectedUsers}
                getSelectedUser={getSelectedUser}
                isShown={isShown}
                setIsShown={setIsShown}
              />
            )}
          </div>
        ) : (
          !isShown
        )}
        {!isShown ? (
          <div>
            {selectedUsers && selectedUsers.length > 0 && (
              <CardList
                cards={selectedUsers}
                setIsShown={setIsShown}
                isShown={isShown}
              />
            )}
          </div>
        ) : (
          isShown
        )}
      </RegularSection>
    </>
  );
};

export default Home;
