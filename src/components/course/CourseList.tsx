import { Row } from "antd";
import "./style.scss";
import Course from "./Course";
export default function CourseList () {
    const list = [
        {
            image: "/images/courseImage.png",
            title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            author: "Rachel Thompson",
            rating: 5,
            review: 123,
            price: "Free"
        },
        {
            image: "/images/courseImage.png",
            title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            author: "Rachel Thompson",
            rating: 4.8,
            review: 123,
            price: "86$"
        },
        {
            image: "/images/courseImage.png",
            title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            author: "Rachel Thompson",
            rating: 2,
            review: 123,
            price: "33$"
        },
        {
            image: "/images/courseImage.png",
            title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
            author: "Rachel Thompson",
            rating: 3.2,
            review: 123,
            price: "Free"
        }
    ]
  return (
        <Row justify={"space-between"} style={{ maxHeight: '350px', minHeight:"150px"}}>
            {list.map((item, idx) => (
                <Course item={item} key={idx}/>
            ))}
        </Row>
  );
}
