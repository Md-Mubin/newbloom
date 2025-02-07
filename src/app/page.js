import AskedQuestions from "./Components/AskedQuestions/AskedQuestions";
import Banner from "./Components/Banner/Banner";
import HomeAboutUs from "./Components/HomeAboutUS/HomeAboutUs";
import LearnBlog from "./Components/LearnBlog/LearnBlog";
import OurTeam from "./Components/OurTeam/OurTeam";
import StartJourney from "./Components/StartJourney/StartJourney";
import WhyChoose from "./Components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAboutUs />
      <WhyChoose />
      <OurTeam />
      <LearnBlog />
      <StartJourney />
    </>
  )
}
