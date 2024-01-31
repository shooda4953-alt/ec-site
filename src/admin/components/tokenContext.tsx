// TokenContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface TokenContextProps {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

const TokenContext = createContext<TokenContextProps | undefined>(undefined);

interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
