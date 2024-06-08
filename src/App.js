import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div className="App">
     <ChatEngine
         height="100vh"
         projectID="7284d102-4360-435d-a28f-d2878d521bd6"
         userName="Nitheesh"
         userSecret="nitheesh@123"
         renderChatFeed = {(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
         onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazoaws.com/click.mp3').paly}
     />
    </div>
  );
}

export default App;
