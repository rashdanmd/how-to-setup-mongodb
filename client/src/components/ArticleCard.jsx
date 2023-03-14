import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, description, category, handleShow, link }) => {
  return (
    <Card style={{ maxWidth: "400px", minWidth: "400px", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>

        <Button variant="primary" onClick={handleShow}>
          <Link to={`preview/${link}`}></Link>
          Preview
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
