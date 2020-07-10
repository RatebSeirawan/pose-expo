import React, {createContext, useContext} from 'react';
import {colorsDark, colorsLight} from './colors';

type Colors = typeof colorsDark;

export interface Theme {
  colors: Colors;
}

const defaultTheme: Theme = {
  colors: colorsLight,
};

const Context = createContext({isDark: false, theme: defaultTheme});

interface ContextProps {
  children: React.ReactNode;
  isDark?: boolean;
  theme?: Theme;
}

export const ThemeProvider = (props: ContextProps) => {
  const {children, isDark = false} = props;

  const colors = isDark ? colorsDark : colorsLight;

  const theme: Theme = {
    colors,
  };

  return <Context.Provider value={{isDark, theme}}>{children}</Context.Provider>;
};

export const useTheme = () => {
  const {isDark, theme} = useContext(Context);

  return {isDark, theme};
};
