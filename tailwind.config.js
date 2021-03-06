module.exports = {
    purge: ['~/**/*.vue'],
    theme: {
      colors: {
        transparent: 'transparent',
        'primary-blue': '#5CE1E6',
        'secondary-blue': '#4349EB',
        'third-blue': '#EDF2F7',
        'lime-green': '#ADFF2F',
        info: '#F8EF13',
        danger: '#EB5757',
        black: '#000000',
        gray: '#CECECE',
        disabled: '#BDBDBD',
        white: '#ffffff',
        orange: '#fca21b'
      },
      fontSize: {
        '0': '0rem',
        xs: '0.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem',
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '5rem' // 80px
      },
      fontFamily: {
        sans: ['Noto Sans Thai UI', 'Noto Sans', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem'
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        light: '#F7FAFC'
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        light: '#E0E0E0',
        lighter: '#E8E8E8'
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        'white-50': 'rgba(255,255,255,0.5)'
      }),
      boxShadow: {
        xs: '0 0 0 1px rgba(238, 243, 244, 1)',
        sm: '0 1px 2px 0 rgba(238, 243, 244, 1)',
        md: '0 4px 6px -1px rgba(238, 243, 244, 1), 0 2px 4px -1px rgba(238, 243, 244, 1)',
        lg: '0 10px 15px -3px rgba(238, 243, 244, 1), 0 4px 6px -2px rgba(238, 243, 244, 1)',
        xl: '0 20px 25px -5px rgba(238, 243, 244, 1), 0 10px 10px -5px rgba(238, 243, 244, 1)'
      },
      extend: {
        spacing: {
          wide: '52.333%',
          xxl: '7.5rem', // 120px –  Deprecated, will be removed
          xl: '5rem', // 80px  –  Deprecated, will be removed
          lg: '2.5rem', // 40px  –  Deprecated, will be removed
          md: '1.5rem', // 24px  –  Deprecated, will be removed
          base: '1rem', // 16px  –  Deprecated, will be removed
          sm: '0.75rem', // 12px  –  Deprecated, will be removed
          xs: '0.5rem', // 8px   –  Deprecated, will be removed
          xxs: '0.25rem' // 4px   –  Deprecated, will be removed
        },
        borderRadius: {
          xl: '1rem'
        }
      }
    },
    variants: {},
    plugins: []
  }