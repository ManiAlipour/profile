import AboutMe from "./components/aboutMe";
import NavBar from "./components/navbar";

const App = () => {
  return ( 
    <div style={{position:"relative", height:"100vh"}}>
    <NavBar/>
      <AboutMe/>
    </div>
   );
}
 
export default App;