
import { AuthPage } from './pages/auth/auth';
import { ChatPage } from './pages/chat/chat';
// @ts-ignore
import { Route, Routes} from 'react-router-dom';



function App() {
    return (
    <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/chat" element={<ChatPage/>} />
    </Routes>
  );
}

export default App;
