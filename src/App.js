import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTeamPage from './pages/CreateTeamPage';
import YourTeamPage from './pages/YourTeamPage';
import Layout from './components/layout/Layout';

function App() {
  return (
   <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-team" element={<CreateTeamPage /> } />
        <Route path="/your-team" element={<YourTeamPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
