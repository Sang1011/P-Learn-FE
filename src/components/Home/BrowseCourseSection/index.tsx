import CourseList from "@/components/course/CourseList";
import { Typography } from "antd";

export default function BrowseCourseSection() {
  return (
    <section className="browseCourseSection" style={{ margin: "5% 2%" }}>
      <div style={{ margin: "45px 0" }}>
        <Typography.Title style={{ margin: "30px" }} className="section-title">
          Top Rating Courses
        </Typography.Title>
        <CourseList />
      </div>
      <div style={{ margin: "45px 0" }}>
        <Typography.Title style={{ margin: "30px" }} className="section-title">
          Top Courses in IT
        </Typography.Title>
        <CourseList />
      </div>
      <div style={{ margin: "45px 0" }}>
        <Typography.Title style={{ margin: "30px" }} className="section-title">
          Top Courses in Business
        </Typography.Title>
        <CourseList />
      </div>
    </section>
  );
}
