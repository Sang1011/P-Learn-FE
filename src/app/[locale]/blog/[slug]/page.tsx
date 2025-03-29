import { notFound } from "next/navigation";

type Blog = {
  id: string;
  title: string;
  content: string;
};

const blogs: Blog[] = [
  { id: "1", title: "helloA", content: "I am helloA" },
  { id: "2", title: "helloB", content: "I am helloB" },
  { id: "3", title: "helloC", content: "I am helloC" },
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.title.toLowerCase() === slug.toLowerCase());

  if (!blog) return notFound(); 

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
