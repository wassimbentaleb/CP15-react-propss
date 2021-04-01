import './App.css';
import './Components/Navbar/Navbar.css';
import N from './Components/Navbar/Navbar';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
  const handleName = fullname => alert(fullname);
  return (
    <div>
      <N />
      <div className="aboutme">
        {<P fullname="Wassim Ben Taleb"
          bio="Étudie à ISET NABEUL"
          profession="Technicien Superieur en Electronique Industrielle"
          handleName={handleName}>photo.png</P>}
        <A fullname="Wassim Ben Taleb"
          location="Nabeul,Tunisia"
          degree="Master degree" phone="+856 124 368"
          email="wassimwbt@gmail.com" dateOfBirth="1997/07/25"
          experience="2 Years"
          careerLevel="Mid-Level" />
      </div>
    </div>
  );
}

export default App;
