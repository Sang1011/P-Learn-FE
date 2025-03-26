import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <div style={{minHeight: "100vh"}}>
      <Header/>
      <div style={{height: "800px"}}>
        Content
      </div>
      <Footer/>
    </div>
  );
}