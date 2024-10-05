import {
  FaDrum,
  FaHeadphonesSimple,
  FaPaintRoller,
  FaPersonRunning,
  FaRegFaceGrinSquintTears,
} from 'react-icons/fa6';
import { GiVideoConference } from "react-icons/gi";


const CategoryData = [
  {
    categoryName: 'Musique',
    categoryIcon: FaHeadphonesSimple,
  },
  {
    categoryName: 'Sports',
    categoryIcon: FaPersonRunning,
  },
  {
    categoryName: 'Comedy',
    categoryIcon: FaRegFaceGrinSquintTears,
  },
  {
    categoryName: 'Arts',
    categoryIcon: FaPaintRoller,
  },
  {
    categoryName: 'Festivals',
    categoryIcon: FaDrum,
  },
  {
    categoryName: 'Conferences',
    categoryIcon: GiVideoConference,
  },
];



export default CategoryData;
