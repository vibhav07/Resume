import { Header, ScrollBar } from './components/Chrome'
import {
  Impact, Credentials, Footer, CourtDivider, Hero, Products, Skills, Timeline,
} from './components/Sections'

export default function App() {
  return (
    <>
      <ScrollBar />
      <Header />
      <main>
        <Hero />
        <Impact />
        <CourtDivider />
        <Products />
        <CourtDivider />
        <Timeline />
        <CourtDivider />
        <Skills />
        <CourtDivider />
        <Credentials />
      </main>
      <Footer />
    </>
  )
}
