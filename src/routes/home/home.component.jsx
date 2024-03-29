import Directory from "../../components/directory/directory.components";
import "./home.styles.scss"

function Home() {
  const categories = [
    {
      id: "aboutme",
      title: "About Me",
      imageUrl: "https://i.ibb.co/WFN8xhT/y.jpg",
    },
    {
      id: "taportal",
      title: "TA Portal",
      imageUrl: "https://i.ibb.co/VDVtdhR/Homepage.png",
    },
    {
      id: "capstone",
      title: "CareCoord",
      imageUrl: "https://i.ibb.co/CWr7YHX/Colorful-App-Icon-1.png",
    },
  ];

  return (
    <div className="home-container">
      <Directory categories={categories}></Directory>
    </div>
  );
}


export default Home;