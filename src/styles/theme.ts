import { extendTheme } from '@mui/joy/styles';

const baseTheme = extendTheme();

export const customLightTheme = extendTheme({
  colorSchemes: {
    light: {
      ...baseTheme.colorSchemes.light,
      palette: {
        primary: {
          ...baseTheme.colorSchemes.light.palette.primary,
          100: '#E3F5FF'
        },
        neutral: {
          ...baseTheme.colorSchemes.light.palette.neutral,
          50: '#F7F9FB',
          100: '#E5ECF6'
        },
      },
    },
    // dark: baseTheme.colorSchemes.light
    dark: {
      ...baseTheme.colorSchemes.light,
      palette: {
        ...baseTheme.colorSchemes.light.palette,
        primary: {
          ...baseTheme.colorSchemes.light.palette.primary,
          100: '#E3F5FF'
        },
        neutral: {
          ...baseTheme.colorSchemes.light.palette.neutral,
          50: '#F7F9FB',
          100: '#E5ECF6'
        },
      },
    }
  },
});

export const customDarkTheme = extendTheme({
  colorSchemes: {
    dark: {
      ...baseTheme.colorSchemes.dark,
      palette: {
        ...baseTheme.colorSchemes.dark.palette,
        background: {
          ...baseTheme.colorSchemes.dark.palette.background,
          body: "#1C1C1C"
        },
        primary: {
          ...baseTheme.colorSchemes.dark.palette.primary,        
        },
        neutral: {
          ...baseTheme.colorSchemes.dark.palette.neutral,
          800: 'rgba(255,255,255,0.1)',
          900: 'rgba(255,255,255,0.05)'
        }
      }
    },
    light: {
      ...baseTheme.colorSchemes.dark,
      palette: {
        ...baseTheme.colorSchemes.dark.palette,
        background: {
          ...baseTheme.colorSchemes.dark.palette.background,
          body: "#1C1C1C"
        },
        primary: {
          ...baseTheme.colorSchemes.dark.palette.primary,
        },
        neutral: {
          ...baseTheme.colorSchemes.dark.palette.neutral,
          800: 'rgba(255,255,255,0.1)',
          900: 'rgba(255,255,255,0.05)'
        }
      }
    },
  },
});