import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    border: {
      borderRadius: number;
      border: string;
    };
    borderBox: {
      boxShadow: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    borderBox?: {
      boxShadow?: string;
    };
    border: {
      borderRadius?: number;
      border?: string;
    }
  }
}