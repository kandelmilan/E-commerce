import banner from "./image/banner.png";
import chair1 from "./image/chair1.png";
import chair2 from "./image/chair2.png";
import chair3 from "./image/chair3.png";
import chair4 from "./image/chair4.png";
import chair5 from "./image/chair5.png";
import chair10 from "./image/chair10.png";
import chair11 from "./image/chair11.png";
import chair12 from "./image/chair12.png";
import chair13 from "./image/chair13.png";
import chair14 from "./image/chair14.png";
import chair6 from "./image/chair6.png";
import Blog1 from "./image/Blog1.png";
import Blog2 from "./image/Blog2.png";
import Blog3 from "./image/Blog3.png";



export const BannerData = [
  {
    id: 1,
    title: "Discover the Latest Trends",
    subtitle: "Shop our new arrivals and exclusive offers",
    description:
      "Explore our new collection of fashion items that redefine style.",
    image: banner,

  },
  {
    id: 2,
    title: "Discover the Latest Trends",
    subtitle: "Shop our new arrivals and exclusive offers",
    description:
      "Explore our new collection of fashion items that redefine style.",
    image: banner,

  }, {
    id: 3,
    title: "Discover the Latest Trends",
    subtitle: "Shop our new arrivals and exclusive offers",
    description:
      "Explore our new collection of fashion items that redefine style.",
    image: banner,

  }, {
    id: 4,
    title: "Discover the Latest Trends",
    subtitle: "Shop our new arrivals and exclusive offers",
    description:
      "Explore our new collection of fashion items that redefine style.",
    image: banner,

  },
];

export
  const ProductData = [
    { id: 1, name: "Cantilever chair", img: chair3, code: "Code - Y523201", price: "$42.00" },
    { id: 2, name: "Cantilever chair", img: chair1, code: "Code - Y523201", price: "$42.00" },
    { id: 3, name: "Cantilever chair", img: chair2, code: "Code - Y523201", price: "$42.00" },
    { id: 4, name: "Cantilever chair", img: chair5, code: "Code - Y523201", price: "$42.00" },
    { id: 5, name: "Cantilever chair", img: chair4, code: "Code - Y523201", price: "$42.00" },
    { id: 6, name: "Cantilever chair", img: chair6, code: "Code - Y523201", price: "$42.00" },
  ];


export const latestProducts = [
  { id: 1, title: "Modern Lounge Chair", price: 99.99, discountPrice: 79.99, image: chair1, thumbnails: [chair1, chair2, chair3] },
  { id: 2, title: "Ergonomic Office Chair", price: 109.99, discountPrice: 89.99, image: chair2, thumbnails: [chair2, chair3, chair4] },
  { id: 3, title: "Classic Wooden Chair", price: 119.99, discountPrice: 99.99, image: chair3, thumbnails: [chair3, chair4, chair5] },
  { id: 4, title: "Luxury Velvet Chair", price: 129.99, discountPrice: 109.99, image: chair4, thumbnails: [chair4, chair5, chair6] },
  { id: 5, title: "Minimalist Dining Chair", price: 139.99, discountPrice: 119.99, image: chair5, thumbnails: [chair5, chair6, chair1] },
  { id: 6, title: "Retro Accent Chair", price: 100, discountPrice: 20, image: chair6, thumbnails: [chair6, chair1, chair2] },
  { id: 7, title: "Scandinavian Chair", price: 159.99, discountPrice: 139.99, image: chair1, thumbnails: [chair1, chair2, chair3] },
  { id: 8, title: "Mid-Century Modern Chair", price: 169.99, discountPrice: 149.99, image: chair2, thumbnails: [chair2, chair3, chair4] },
  { id: 9, title: "Industrial Style Chair", price: 179.99, discountPrice: 159.99, image: chair3, thumbnails: [chair3, chair4, chair5] },
  { id: 10, title: "Contemporary Lounge Chair", price: 189.99, discountPrice: 169.99, image: chair4, thumbnails: [chair4, chair5, chair6] },
  { id: 11, title: "Outdoor Patio Chair", price: 199.99, discountPrice: 179.99, image: chair5, thumbnails: [chair5, chair6, chair1] },
  { id: 12, title: "Foldable Dining Chair", price: 209.99, discountPrice: 189.99, image: chair6, thumbnails: [chair6, chair1, chair2] },
  { id: 13, title: "Designer Accent Chair", price: 219.99, discountPrice: 199.99, image: chair1, thumbnails: [chair1, chair2, chair3] },
  { id: 14, title: "Recliner Armchair", price: 229.99, discountPrice: 209.99, image: chair2, thumbnails: [chair2, chair3, chair4] },
  { id: 15, title: "Vintage Rocking Chair", price: 239.99, discountPrice: 219.99, image: chair3, thumbnails: [chair3, chair4, chair5] },
  { id: 16, title: "Modern Swivel Chair", price: 249.99, discountPrice: 229.99, image: chair4, thumbnails: [chair4, chair5, chair6] },
  { id: 17, title: "Lounge Bean Chair", price: 259.99, discountPrice: 239.99, image: chair5, thumbnails: [chair5, chair6, chair1] },
  { id: 18, title: "Tufted Armchair", price: 269.99, discountPrice: 249.99, image: chair6, thumbnails: [chair6, chair1, chair2] },
  { id: 19, title: "Luxury Reclining Chair", price: 279.99, discountPrice: 259.99, image: chair1, thumbnails: [chair1, chair2, chair3] },
  { id: 20, title: "Designer Office Chair", price: 289.99, discountPrice: 269.99, image: chair2, thumbnails: [chair2, chair3, chair4] },
];

export const TrendingProduct = [
  {
    id: 1,
    name: "ErgoComfort Office Chair",
    discountPrice: 129.99,
    actualPrice: 159.99,
    image: chair4
  },
  {
    id: 2,
    name: "Scandi Wooden Armchair",
    discountPrice: 179.00,
    actualPrice: 199.00,
    image: chair5
  },
  {
    id: 3,
    name: "Velvet Luxe Accent Chair",
    discountPrice: 210.50,
    actualPrice: 249.00,
    image: chair6
  },
  {
    id: 4,
    name: "Outdoor Patio Lounge Chair",
    discountPrice: 95.00,
    actualPrice: 119.00,
    image: chair1
  }
];

export const showcaseProducts = [
  {
    id: 1,
    image: chair10,
    name: 'Executive Seat chair',
    price: '32.00',
  },
  {
    id: 2,
    image: chair11,
    name: 'Executive Seat chair',
    price: '32.00',
  },
  {
    id: 3,
    image: chair12,
    name: 'Executive Seat chair',
    price: '32.00',
  },
];


export const latestBlog = [
  {
    id: 1,
    image: Blog1,
    title: "SaberAli",
    Date: "21 August,2020",
    subHeading: "Top essential Trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
  {
    id: 2,
    image: Blog2,
    title: "Surfauxion",
    Date: "21 August,2020",
    subHeading: "Top essential trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
  {
    id: 3,
    image: Blog3,
    title: "SaberAli",
    Date: "21 August,2020",
    subHeading: "Top essential Trends in 2021",
    description:
      "More off this less hello samlande lied much over tightly circa horse taped mightly",
  },
];

