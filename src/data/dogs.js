import kenaPhoto from '../assets/kena.jpeg';
import saintPhoto from '../assets/saint.jpeg';
import raiderPhoto from '../assets/raider.jpeg';
import kenaPedigree from '../assets/pedigree.jpeg';
import saintPedigree from '../assets/222C6997-8352-41BB-A3A1-9188BDEBFEB7.jpeg';
import raiderPedigree from '../assets/7D7411B9-C7CB-49A5-B239-F6F728A6CA8B.jpeg';

// One entry per dog. To add a dog: import its photo + pedigree above,
// then add an object here. The Our Dogs page builds itself from this list.
export const DOGS = [
  {
    id: 'kena',
    name: "Young Spirit's Kena Nell",
    breed: 'Doberman',
    color: 'Red & Rust',
    role: 'Dam',
    photo: kenaPhoto,
    photoPosition: 'center 37%',
    pedigree: kenaPedigree,
    description: '',
  },
  {
    id: 'saint',
    name: "Young Spirit's Saint",
    breed: 'Doberman',
    color: 'Black & Rust',
    role: 'Sire',
    photo: saintPhoto,
    photoPosition: 'center 25%',
    pedigree: saintPedigree,
    description: '',
  },
  {
    id: 'raider',
    name: "Young Spirit's Raider",
    breed: 'Rottweiler',
    color: '',
    role: 'Sire',
    photo: raiderPhoto,
    photoPosition: 'center 25%',
    pedigree: raiderPedigree,
    description: 'Available as stud.',
  },
];