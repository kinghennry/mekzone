import VideoCallIcon from '@material-ui/icons/VideoCall';
// AiOutlineVideoCamera
// AiOutlineSelect
import service from "../images/service.png"
import work from "../images/message.png"
import chat from "../images/chat.png"
import video from "../images/video.png"
const works = [
  {
    id: 1,
    icon:<VideoCallIcon/>,
    title: 'Choose a Service',
    img: service,
    desc: `Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.`,
  },
  {
    id: 2,
    title: 'Request a Meeting',
    img:video,
    desc: `Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.`,
  },
  {
    id: 3,
    title: 'Receive Custom Plan',
    img:chat,
    desc: `Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better`,
  },
  {
    id: 4,
    title: 'Let’s Make it Happen',
    img:work,
    desc: `Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking bette`,
  }
];
export default works;
