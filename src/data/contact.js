import Map from "../components/map/Map"
import Pic from "../components/Pic"

const contacts = [
  {
    id: 1,
    btn: 'Address',
    title: 'Intelligent Search',
    desc: `Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.`,
    tab:<Pic/>
  },
  {
    id: 2,
    btn: 'Google Maps',
    tab:<Map/>
  }
];
export default contacts;
