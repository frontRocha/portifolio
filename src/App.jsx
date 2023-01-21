import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import SectionFour from "./SectionsApp/SectionFour/SectionFour"
import SectionOne from "./SectionsApp/SectionOne/SectionOne"
import SectionTree from "./SectionsApp/SectionTree/SectionTree"
import SectionTwo from "./SectionsApp/SectionTwo/SectionTwo"
import SectionFive from "./SectionsApp/SectionFive/SectionFive"


function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <SectionOne />
      <SectionTwo />
      <main>
        <SectionTree />
        <SectionFour />
        <SectionFive />
      </main>            
      <Footer />
    </div>
  )
}

export default App
