import './Content.css';
import Title from '../Title/Title';
import Tab from '../tab/Tab';
import ScrollButton from '../scrollButton/scrollButton';
import ResizeScreen from '../resizeScreen/resizeScreen';
import Avatar from '../avatar/avatar';
import Chat from '../chat/chat';

function Content() {
  return (
    <div className="Content">
      <hr />
      <p>1. This is an example for Mount and Unmount a component. Enter some texts to change the title of page</p>
      <Title/>
      <hr />
      <p>2. UseEffect with DOM events</p>
      <Tab/>
      <hr />
      <p>2. UseEffect with DOM events</p>
      <ResizeScreen/>
      <hr />
      <p>3. The avatar preview</p>
      <Avatar/>
      <p>4. Fake Chat</p>
      <Chat/>
      
      <ScrollButton/>

    </div>
  );
}   

export default Content;
