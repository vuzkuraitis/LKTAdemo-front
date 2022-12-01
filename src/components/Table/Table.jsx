import React from "react";
import PropTypes from "prop-types";
import * as S from "./Table.styles";

const Table = ({ options, type, users, setUsers, getSelectedUser }) => {
  return (
    <S.Table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>License Nr.</th>
          </tr>
        </thead>
        <tbody>
          {options &&
            options.map((option) => (
              <tr
                option={options}
                key={option.id}
                id={option.id}
                type={type}
                value={option.id}
                onClick={(e) => {
                  const filteredUsers = [...users];
                  const findId = filteredUsers.find(
                    ({ id }) => id === Number(e.currentTarget.id)
                  );
                  getSelectedUser(findId.id);
                  setUsers([]);
                }}
              >
                <td>
                  {option.name} {option.surname}
                </td>
                <td>{option.license_nr}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </S.Table>
  );
};

Table.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  handleClick: PropTypes.func,
};

Table.defaultProps = {
  type: "text",
};
export default Table;
