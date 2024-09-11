/* eslint-disable react/prop-types */
import { Cards, Card } from "./styles";

function CardAbout({ title, description, image }) {
  return (
    <Card>
      <Cards>
        <img src={image} alt={title} />
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Cards>
    </Card>
  );
}

export default CardAbout;
