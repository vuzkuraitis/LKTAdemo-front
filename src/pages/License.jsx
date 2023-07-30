import React, { useState } from "react";
import RegularSection from "../components/RegularSection/RegularSection";
import Table from "../components/Table/Table";
import SearchForm from "../components/SearchForm/SearchForm";
import CardList from "../components/CardList/CardList";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CardAbout from "../components/CardAbout/CardAbout";
import Paz from "../assets/Paz.jpg";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Seo from "../components/Seo/Seo";

const Home = () => {
  const [users, setUsers] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getUsers = async (surname) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/users?surname=${surname}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    setUsers(data);
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
  };
  return (
    <>
      <Seo
        title="Lietuvos Krepšinio Trenerių Asociacija"
        description="Pažymėjimai"
        type="webapp"
        name="Krepšinio Treneris"
      />
      <RegularSection>
        <Hero title="Surasti Trenerio Pažymėjimą">
          <FontAwesomeIcon icon={faMagnifyingGlass} beatFade />
        </Hero>
        <div className="licenseAboutSearch">
          <h4>Krepšinio Trenerio Pažymėjimo Įgijimo Tvarka</h4>
          <div className="licenseAbout">
            <CardAbout>
              <img className="pazymejimas" src={Paz} alt="Pazymejimas" />
              <Link to="/docs" className="linktodocs">
                <Button>Spausti Čia</Button>
              </Link>
            </CardAbout>
            <SearchForm
              handleSubmit={getUsers}
              setSelectedUsers={setSelectedUsers}
            />
          </div>
        </div>
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
