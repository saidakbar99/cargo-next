import { AboutUs } from "@/components/AboutUs"
import { Banner } from "@/components/Banner"
import { Benefits } from "@/components/Benefits"
import { BestStores } from "@/components/BestStores"
import { HomePageCalculator } from "@/components/HomePageCalculator"
import { ContactUs } from "@/components/ContactUs"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"
import { HeroText } from "@/components/HeroText"
import { Navbar } from "@/components/Navbar"
import { Process } from "@/components/Process"
import { Container } from "@/components/ui/Container"

const HomePage = () => {
  return (
    <div className="hero-background pt-9 h-[812px] lg:h-[900px]">
      <Navbar />
      <Container>
        <HeroText />
        <AboutUs />
        <Process />
      </Container>
      <div className="banner-background h-[270px] lg:h-[470px] mt-[50px] lg:mt-[140px]">
        <Banner />
      </div>
      <Container>
        <Benefits />
        <BestStores />
        <HomePageCalculator />
        <FAQ />
        <ContactUs />
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage;