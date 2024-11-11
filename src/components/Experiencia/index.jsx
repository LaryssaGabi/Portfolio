/* eslint-disable react/prop-types */
import { Container } from "./styler";

const Experiencia = ({ year, title, description }) => (
  <Container>
    <h3>{year} • {title}</h3>
    <p style={{ color: '#c3baba', marginTop: '5px' }}>{description}</p>
  </Container>
);

export default Experiencia;
