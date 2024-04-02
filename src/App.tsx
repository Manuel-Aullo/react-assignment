import LoginForm from './components/LoginForm';
import Table from './components/Table';
import { useAuth } from './context/AuthContext';
import './app.css';

const App = () => {
  const { isAuthenticated, bearerToken, signOut } = useAuth();
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">      
        {isAuthenticated ? (
          <Table />
    ) : (
        <LoginForm />
    )}
    </div>
  );
}


export default App;
