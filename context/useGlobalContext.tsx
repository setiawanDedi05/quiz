import React, { createContext, useContext, useState } from "react";

export type Ranking = {
  name: string;
  score: number;
};

export interface GlobalContextState {
  name: string;
  setName: (value: string) => void;
  loading: boolean;
  hideLoading: () => void;
  showLoading: () => void;
  leaderboard: Ranking[];
  setLeaderboard: React.Dispatch<React.SetStateAction<Ranking[]>>;
}

const GlobalContext = createContext<GlobalContextState | null>(null);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState<Ranking[]>([]);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        loading,
        showLoading,
        hideLoading,
        leaderboard,
        setLeaderboard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
