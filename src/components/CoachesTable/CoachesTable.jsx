import React from "react";
import PropTypes from "prop-types";
import * as S from "./CoachesTable.styles";
import Button from "../Button/Button";

const CoachesTable = ({ users, id, years, setSelectedUser }) => {
  const getBackgroundColorTable = {
    success: "green",
    pending: "red",
  };
  return (
    <S.CoachesTable id={id} className="coachtable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>License Nr</th>
            <th>Year</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.license_nr}</td>
                <td
                  style={{
                    background: getBackgroundColorTable[user.status],
                  }}
                >
                  {user.year}
                </td>
                <td
                  style={{
                    background: getBackgroundColorTable[user.status],
                  }}
                >
                  {user.status}
                </td>
                <td>
                  {user.year === years && user.status === "success" ? null : (
                    <Button
                      value={user.id}
                      handleClick={(e) => {
                        setSelectedUser({
                          id: e.target.value,
                          name: user.name,
                          surname: user.surname,
                          license_nr: user.license_nr,
                          year: user.year,
                          status: user.status,
                        });
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </S.CoachesTable>
  );
};

CoachesTable.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  status: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  license_nr: PropTypes.string,
};

export default CoachesTable;
