import Navbar from "./components/navbar"
import Header from "./components/header"
import Header2 from "./components/header2"
import Header3 from "./components/header3"
import Header4 from "./components/header4"
import Header5 from "./components/header5"
import Askques from "./components/askques"
import Quote from "./components/quote"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <Header2 />
      </section>
      <section id="services">
        <Header3 />
      </section>
      <section id="projects">
        <Header4 />
      </section>
      <section id="contact">
        <Quote />
      </section>
      <Header5 />
      <Askques />
      <Footer />
    </>
  );
}
