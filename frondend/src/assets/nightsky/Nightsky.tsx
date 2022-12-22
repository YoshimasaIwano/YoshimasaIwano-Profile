// Image Daya
import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';
import Img5 from './img5.png';
import Img6 from './img6.png';
import Img7 from './img7.png';
import Img8 from './img8.png';
import Img9 from './img9.png';
import Img10 from './img10.png';
import Img11 from './img11.png';
import Img12 from './img12.png';
import Img13 from './img13.png';
import Img14 from './img14.png';
import Img15 from './img15.png';
import Img16 from './img16.png';

// Thumbnail Data
import Img1_thumbnail from './img1_thumbnail.png';
import Img2_thumbnail from './img2_thumbnail.png';
import Img3_thumbnail from './img3_thumbnail.png';
import Img4_thumbnail from './img4_thumbnail.png';
import Img5_thumbnail from './img5_thumbnail.png';
import Img6_thumbnail from './img6_thumbnail.png';
import Img7_thumbnail from './img7_thumbnail.png';
import Img8_thumbnail from './img8_thumbnail.png';
import Img9_thumbnail from './img9_thumbnail.png';
import Img10_thumbnail from './img10_thumbnail.png';
import Img11_thumbnail from './img11_thumbnail.png';
import Img12_thumbnail from './img12_thumbnail.png';
import Img13_thumbnail from './img13_thumbnail.png';
import Img14_thumbnail from './img14_thumbnail.png';
import Img15_thumbnail from './img15_thumbnail.png';
import Img16_thumbnail from './img16_thumbnail.png';

type ImageDataProps = {
    id: number,
    src: string,
    thumbnail: string,
    place: string,
    keywords: string,
    description: string,
    // TODO: add description
}

const ImgData1: ImageDataProps = {
    id: 1,
    src: Img1,
    thumbnail: Img1_thumbnail,
    place: "fukushima",
    keywords: "2020 summer milkyway shootingstar",
    description: "This is a picture of Milky Way with a shooting star at Hoshinomura Observatory in Fukushima. (2020 summer)"
} 

const ImgData2: ImageDataProps = {
    id: 2,
    src: Img2,
    thumbnail: Img2_thumbnail,
    place: "nikko",
    keywords: "2021 winter orion",
    description: "This is a picture of Winter Triangle and Orion at Senjogahara Moor. (2021 winter)"
} 

const ImgData3: ImageDataProps = {
    id: 3,
    src: Img3,
    thumbnail: Img3_thumbnail,
    place: "nikko",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2020 summer)"
} 

const ImgData4: ImageDataProps = {
    id: 4,
    src: Img4,
    thumbnail: Img4_thumbnail,
    place: "fukushima",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Hoshinomura Observatory in Fukushima. (2020 summer)"
} 

const ImgData5: ImageDataProps = {
    id: 5,
    src: Img5,
    thumbnail: Img5_thumbnail,
    place: "nikko",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2020 summer)"
} 

const ImgData6: ImageDataProps = {
    id: 6,
    src: Img6,
    thumbnail: Img6_thumbnail,
    place: "nikko",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2020 summer)"
} 

const ImgData7: ImageDataProps = {
    id: 7,
    src: Img7,
    thumbnail: Img7_thumbnail,
    place: "fukushima",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Hoshinomura Observatory in Fukushima. (2020 summer)"
} 

const ImgData8: ImageDataProps = {
    id: 8,
    src: Img8,
    thumbnail: Img8_thumbnail,
    place: "nikko",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2020 summer)"
} 

const ImgData9: ImageDataProps = {
    id: 9,
    src: Img9,
    thumbnail: Img9_thumbnail,
    place: "nikko",
    keywords: "2020 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2020 summer)"
} 

const ImgData10: ImageDataProps = {
    id: 10,
    src: Img10,
    thumbnail: Img10_thumbnail,
    place: "nikko",
    keywords: "2021 summer milkyway",
    description: "This is a picture of Milky Way at Senjogahara Moor. (2021 summer)"
} 

const ImgData11: ImageDataProps = {
    id: 11,
    src: Img11,
    thumbnail: Img11_thumbnail,
    place: "nikko",
    keywords: "2021 summer milkyway shootingstar",
    description: "This is a picture of Milky Way with a shhoting star at Senjogahara Moor. (2021 summer)"
} 

const ImgData12: ImageDataProps = {
    id: 12,
    src: Img12,
    thumbnail: Img12_thumbnail,
    place: "fukushima",
    keywords: "2021 spring milkyway",
    description: "This is a picture of Milky Way at Hoshinomura Observatory in Fukushima. (2021 summer)"
} 

const ImgData13: ImageDataProps = {
    id: 13,
    src: Img13,
    thumbnail: Img13_thumbnail,
    place: "fukushima",
    keywords: "2019 winter",
    description: "This is a picture I took on iPhone11. (2019 winter)"
} 

const ImgData14: ImageDataProps = {
    id: 14,
    src: Img14,
    thumbnail: Img14_thumbnail,
    place: "fukushima",
    keywords: "2019 winter",
    description: "This is a picture I took on iPhone11. (2019 winter)"
} 

const ImgData15: ImageDataProps = {
    id: 15,
    src: Img15,
    thumbnail: Img15_thumbnail,
    place: "nikko",
    keywords: "2019 winter orion",
    description: "This is a picture of Orion I took on iPhone11. (2019 winter)"
} 

const ImgData16: ImageDataProps = {
    id: 16,
    src: Img16,
    thumbnail: Img16_thumbnail,
    place: "fukushima",
    keywords: "2019 winter great dipper",
    description: "This is a picture of Great Dipper I took on iPhone11. (2019 winter)"
} 

export const ImageData: Array<ImageDataProps> = [
    ImgData1,
    ImgData2,
    ImgData3,
    ImgData4,
    ImgData5,
    ImgData6,
    ImgData7,
    ImgData8,
    ImgData9,
    ImgData10,
    ImgData11,
    ImgData12,
    ImgData13,
    ImgData14,
    ImgData15,
    ImgData16,
]