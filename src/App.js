import { ChatEngine } from "react-chat-engine"
import "./App.css"
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App=()=> {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID  = "ae4d4799-c3f6-4422-90c3-77a105996ff7"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
 