import Features from './components/Features/Featuress'
import Navbar from './components/layouts/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Product from './components/Product/Product'
import Gallery from './components/Gallery/Gallery'
import NewSeason from './components/NewSeason/NewSeason'
import Maps from './components/Maps/Maps'
import Footer from './components/layouts/Footers/Footers'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Features/>
    <Product/>
    <Gallery/>
    <NewSeason/>
    <Maps />
    <Footer/>
    </>
  )
}
