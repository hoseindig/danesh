import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const ChildMenu = ({ item }) => {
  return (
    <div>
      {item.child
        ? item.child.map((c) => {
            return (
              <div className="child-menu" key={c.id}>
                <ListGroup variant="flush" key={c.id}>
                  <ListGroup.Item>
                    <Link to={c.path}>
                      <i className={c.icon} aria-hidden="true"></i>
                      {c.name}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ChildMenu;
