import './Content.css';
import Title from '../Title/Title';
import Tab from '../tab/Tab';
import ScrollButton from '../scrollButton/scrollButton';
import ResizeScreen from '../resizeScreen/resizeScreen';

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
      <ScrollButton/>
    </div>
  );
}   

export default Content;
