import { createContext, useContext, useEffect, useState } from "react";
import schemes from "../data/schemes.json";
import { matchSchemes } from "../data/match";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAnswers, setUserAnswersState] = useState({});
  const [matchedSchemes, setMatchedSchemes] = useState([]);
  const [savedSchemes, setSavedSchemes] = useState([]);

  useEffect(() => {
    const storedUser = getFromLocalStorage("eligifyUser", null);
    if (storedUser) {
      setCurrentUser(storedUser);
      setIsAuthenticated(true);
    }

    const storedAnswers = getFromLocalStorage("eligifyAnswers", {});
    if (storedAnswers) {
      setUserAnswersState(storedAnswers);
    }

    const storedSaved = getFromLocalStorage("savedSchemes", []);
    if (storedSaved) {
      setSavedSchemes(storedSaved);
    }
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    saveToLocalStorage("eligifyUser", userData);
  };

  const signup = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    saveToLocalStorage("eligifyUser", userData);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    removeFromLocalStorage("eligifyUser");
    removeFromLocalStorage("eligifyAnswers");
    setUserAnswersState({});
    setMatchedSchemes([]);
  };

  const setUserAnswers = (answers) => {
    let newAnswers;
    if (typeof answers === "function") {
      newAnswers = answers(userAnswers);
    } else {
      newAnswers = answers;
    }
    setUserAnswersState(newAnswers);
    saveToLocalStorage("eligifyAnswers", newAnswers);
  };

  const clearUserAnswers = () => {
    setUserAnswersState({});
    removeFromLocalStorage("eligifyAnswers");
    setMatchedSchemes([]);
  };

  const generateResults = () => {
    const results = matchSchemes(schemes, userAnswers);
    setMatchedSchemes(results);
  };

  const toggleSaveScheme = (scheme) => {
    const alreadySaved = savedSchemes.some((item) => item.id === scheme.id);
    let updatedSchemes = [];

    if (alreadySaved) {
      updatedSchemes = savedSchemes.filter((item) => item.id !== scheme.id);
    } else {
      updatedSchemes = [...savedSchemes, scheme];
    }

    setSavedSchemes(updatedSchemes);
    saveToLocalStorage("savedSchemes", updatedSchemes);
  };

  const clearSavedSchemes = () => {
    setSavedSchemes([]);
    removeFromLocalStorage("savedSchemes");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        login,
        signup,
        logout,
        userAnswers,
        setUserAnswers,
        clearUserAnswers,
        matchedSchemes,
        generateResults,
        savedSchemes,
        toggleSaveScheme,
        clearSavedSchemes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
