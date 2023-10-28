import Features from './components/Features/Featuress'
import Navbar from './components/layouts/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Product from './components/Product/Product'
import Gallery from './components/Gallery/Gallery'
import NewSeason from './components/NewSeason/NewSeason'
import Maps from './components/Maps/Maps'
import Footer from './components/layouts/Footers/Footers'

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BAKSO",
    price: 12,
  },
  {
    id: 2,
    title: "MIE AYAM",
    price: 12,
  },
  {
    id: 3,
    title: "MIE AYAM BAKSO",
    price: 14,
  },
  {
    id: 4,
    title: "BAKSO TELOR",
    price: 14,
  },
  {
    id: 5,
    title: "ES CAMPUR",
    price: 12,
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
 
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
