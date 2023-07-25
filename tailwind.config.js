/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#587b7f',
        red: '#DD6980',
        yellow: '#FDCC49',
        grey: '#EDEDED',
        green: '#04935E',
        pink: '#FC5FBD',
        purple: '#6F5EEA',
        white: '#FFFFFF',
        'cool-grey': '#4B5262',
        'dark-green': '#124734',
        'border-black': '#334155',
        'blue-grey': '#94A3B8',
        'textbox1-grey': '#cbd4e54d',
        'textbox2-grey': '#CBD4E5',
        'sidebar-grey': '#C2CFE009',
        'line-grey': '#6A6E72',
        'subscription-color': '#ffffff4d',
        'sub-green': '#04935E'
      },
      backgroundImage: (theme) => ({
        'gradient-pinkblue':
          'linear-gradient(240.51deg, #C6DCFA 3.11%, #C2CFE0 51.79%, #BFD1DF 99.67%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24BCFF 14.53%, #FC59FF)',
        'gradient-green': 'linear-gradient(90deg, #04935E 15.08%, #0A676F 100%)'
      }),
      opacity: {
        62: '0.62'
      },
      boxShadow: {
        custom: 'inset -53px -35px 183px -117px rgba(0, 0, 0, 0.59)',
        'custom-2': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'sub-shadow': '0px 10px 25px rgba(204, 217, 255, 1)'
      },
      spacing: {
        'custom-lefty': 'calc(50% - 519.75px)'
      },
      fontFamily: {
        'DM-Sans': [
          'DM Sans', 'sans-serif'
        ],
        Manrope: [
          'Manrope', 'sans-serif'
        ],
        Poppins: [
          'Poppins', 'sans-serif'
        ],
        Inter: [
          'Inter', 'sans-serif'
        ]
      },
      fontSize: {
        40: '40px',
        22: '22px',
        16: '16px',
        56: '56px',
        36: '36px',
        20: '20px',
        18: '18px',
        80: '80px',
        21: '21px'
      },
      lineHeight: {
        52: '52.08px',
        30: '30.05px',
        21: '21.86px',
        84: '84px',
        44: '44px',
        28: '28px',
        24: '24px',
        86: '86px',
        34: '34px'
      },
      letterSpacing: {
        '-2': '-2%',
        '-4': '-4%'
      },
      fontWeight: {
        500: '500',
        400: '400'
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms')
  ]
}
