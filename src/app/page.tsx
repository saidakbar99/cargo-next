import { AboutUs } from "@/components/AboutUs"
import { Banner } from "@/components/Banner"
import { Benefits } from "@/components/Benefits"
import { BestStores } from "@/components/BestStores"
import { Calculator } from "@/components/Calculator"
import { ContactUs } from "@/components/ContactUs"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { HeroText } from "@/components/HeroText"
import { Navbar } from "@/components/Navbar"
import { Process } from "@/components/Process"
import { Container } from "@/components/ui/Container"

const HomePage = () => {
  return (
    <div className="hero-background pt-9">
      <Container>
        <Navbar />
        <HeroText />
        <AboutUs />
        <Process />
      </Container>
      <div className="banner-background mt-[140px]">
        <Banner />
      </div>
      <Container>
        <Benefits />
        <BestStores />
        <Calculator />
        <FAQ />
        <ContactUs />
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage;