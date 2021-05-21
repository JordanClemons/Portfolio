import './Homepage.css'
import Header from './Header/Header'
import AboutMe from './AboutMe/AboutMe'
import MyWork from './MyWork/MyWork'
import ContactMe from './ContactMe/ContactMe'

function HomePage() {

    // window.onscroll = () => console.log('hey')
    // console.log(document.documentElement.scrollTop)
    return (
      <div className="home-container">
        <Header/>
        <AboutMe/>
        <MyWork/>
        <ContactMe/>
      </div>
    );
  }
  
  export default HomePage;
  