import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

interface AuthContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  bearerToken: string | null;
  authenticatedUser: CognitoUser | null;
  error: string | null;
  signIn: (username: string, password: string, userPool: CognitoUserPool) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [bearerToken, setBearerToken] = useState<string | null>(null);
  const [authenticatedUser, setAuthenticatedUser] = useState<CognitoUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (username: string, password: string, userPool: CognitoUserPool) => {
    setError(null);
    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    return new Promise<void>((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: (session) => {
          setIsLoading(false);  
          setIsAuthenticated(true);
          console.log('session', session);
          // The ID token is used here; you might choose the access token instead
          const token = session.getIdToken().getJwtToken();
          setBearerToken(token);
          resolve();
        },
        onFailure: (err) => {
          console.error(err);
          setError(err.message || 'An error occurred');
          reject(err);
        },
      });
    });
  };

  const signOut = () => {
    if (authenticatedUser) {
      authenticatedUser.signOut();
      setAuthenticatedUser(null);
      setIsAuthenticated(false);
      setBearerToken(null);
    }
  };

  const clearError = () => setError(null);

  const value = useMemo(() => ({
    isLoading,
    isAuthenticated,
    bearerToken,
    authenticatedUser,
    error,
    signIn,
    signOut,
    clearError,
  }), [isLoading, isAuthenticated, bearerToken, authenticatedUser, error]);

  return (
     <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
