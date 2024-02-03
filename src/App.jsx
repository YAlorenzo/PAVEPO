import Contact from "./components/Contact"
import Custemers from "./components/Custemers"
import Directions from "./components/Directions"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Questions from "./components/Questions"
import Res from "./components/Res"
import Text from "./components/Text"

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Res /> */}
      <Gallery />
      <Text />
      <Directions />
      <Custemers />
      <Contact />
      <Questions />
      <Footer />
    </>
  )
}

export default App
