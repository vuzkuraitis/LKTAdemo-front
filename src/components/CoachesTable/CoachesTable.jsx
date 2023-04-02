import React from "react";
import PropTypes from "prop-types";
import * as S from "./CoachesTable.styles";

const CoachesTable = ({ users, id }) => {
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
                <td>{user.year}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
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
