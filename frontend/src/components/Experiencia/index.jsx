/* eslint-disable react/prop-types */
const Experiencia = ({ year, title, description }) => (
  <div>
    <h3>{year} • {title}</h3>
    <p style={{ color: '#c3baba', marginTop: '5px' }}>{description}</p>
  </div>
);

export default Experiencia;
