import { Container } from "./styler";

/* eslint-disable react/prop-types */
const Education = ({ year, school, description }) => (
  <Container>
    <h3>{year} • {school}</h3>
    <p style={{ color: '#c3baba', marginTop: '5px' }}>{description}</p>
  </Container>
);

export default Education;
