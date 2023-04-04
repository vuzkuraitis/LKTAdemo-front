import React from "react";
import PropTypes from "prop-types";
import * as S from "./ClinicsTable.styles";

const ClinicsTable = ({ clinics, id }) => {
  return (
    <S.ClinicsTable id={id} className="clinictable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Clinic Name</th>
            <th className="notvisible">Place</th>
            <th>Hours</th>
            <th className="notvisible">Address</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {clinics &&
            clinics.map((clinic) => (
              <tr key={clinic.id}>
                <td>{clinic.id}</td>
                <td>{clinic.name}</td>
                <td className="notvisible">{clinic.place}</td>
                <td>{clinic.hours}</td>
                <td className="notvisible">{clinic.address}</td>
                <td>{clinic.price}</td>
                <td>{clinic.start_date.slice(0, 10)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </S.ClinicsTable>
  );
};

ClinicsTable.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  status: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  license_nr: PropTypes.string,
};

export default ClinicsTable;
