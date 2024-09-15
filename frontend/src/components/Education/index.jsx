/* eslint-disable react/prop-types */
const Education = ({ year, school, description }) => (
  <div>
    <h3>{year} • {school}</h3>
    <p style={{ color: '#c3baba', marginTop: '5px' }}>{description}</p>
  </div>
);

export default Education;
