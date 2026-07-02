import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Stats from "../components/Stats/Stats";
import Features from "../components/Features/Features";
import Hospitals from "../components/Hospitals/Hospitals";
import BloodBanks from "../components/BloodBanks/BloodBanks";
import Camps from "../components/Camps/Camps";
import Testimonials from "../components/Testimonials/testimonials";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";

function Home() {

  return (
    <>

<Navbar/>

<Hero/>

<SearchBar/>

<Stats/>

<Features/>

<HowItWorks />

<Hospitals/>

<BloodBanks/>

<Camps/>

<Testimonials/>

<FAQ/>

<Footer/>

 <div style={{ marginTop: "80px" }}>
        Home Page
      </div>
    </>
  );

}

export default Home;