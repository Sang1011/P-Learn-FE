import { Col, Image, Tooltip } from "antd";
import "./style.scss";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type Course = {
  image: string;
  rating: number;
  title: string;
  review: number;
  author: string;
  price: string;
};

interface ICourseProps {
  item: Course;
}

export default function Course({ item }: ICourseProps) {
  function renderStar(rating: number) {
    let stars: JSX.Element[] = [];
    if (Number.isInteger(rating)) {
      for (let i = 0; i < rating; i++) {
        stars.push(<BsStarFill key={i}/>);
      }
    } else {
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<BsStarFill key={i}/>);
      }
      stars.push(<BsStarHalf key={`half-${stars.length}`} />);
    }
    while (stars.length < 5) {
      stars.push(<BsStar key={`empty-${stars.length}`}/>);
    }
    return stars;
  }

  return (
    <Col
      span={6}
      style={{
        height: "95%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="course">
        <Tooltip placement="right" title={item.title}>
          <div className="course--image">
            <Image src={item.image} width="100%" height="100%" preview={false} />
          </div>
        </Tooltip>

        <div className="course--content">
          <h4 className="title">{item.title}</h4>
          <p>{item.author}</p>
          <span className="span">
            <span className="rating">{item.rating}</span>
            <span className="star">{renderStar(item.rating)}</span>{" "}
            <span className="review">({item.review})</span>
          </span>
          <h4 className="price">{item.price}</h4>
        </div>
      </div>
    </Col>
  );
}
