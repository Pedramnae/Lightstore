/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futurab: ["futurab"],
        futuram: ["futuram"],
        futuras: ["futuras"],
      },
      backgroundImage:{
        'lmapbanner' : "url('./src/assets/img/lampbanner.jpg')",
        'outdoorbanner' : "url('./src/assets/img/outdoorbanner.jpg')",
        'Accessoriesbanner' : "url('./src/assets/img/Accessoriesbanner.jpg')",
        'bathroomlightningbanner' : "url('./src/assets/img/bathroomlightningbanner.jpg')",
        'smarthomebanner' : "url('./src/assets/img/smarthomebanner.jpg')",
      },
      animation:{
        Totop1: 'ToTop1 8s linear infinite',
        Totop2: 'ToTop2 8s linear infinite',
        Totop3: 'ToTop3 8s linear infinite',
      },
      keyframes: {
        ToTop1: {
          "0%": {
            'top': "0px",
            'opacity': "1",
          },
          "30%": {
            'top': "0px",
            'opacity': "1",
          },
          "40%": {
            'top': "-100%",
            'opacity': "0",
          },
          "40.00000000001%": {
            'top': "200%",
            'opacity': "0",
          },
          "60%": {
            'top': "200%",
            'opacity': "0",
          },
          "70%": {
            'top': "100%",
            'opacity': "0",
          },
          "90%": {
            'top': "100%",
            'opacity': "0",
          },
          "100%": {
            'top': "0%",
            'opacity': "1",
          },
        },
        ToTop2: {
          "0%": {
            'top': "100%",
            'opacity': "0",
          },
          "30%": {
            'top': "100%",
            'opacity': "0",
          },
          "40%": {
            'top': "0%",
            'opacity': "1",
          },
          "60%": {
            'top': "0%",
            'opacity': "1",
          },
          "70%": {
            'top': "-100%",
            'opacity': "0",
          },
          70.00000000001: {
            'top': "200%",
            'opacity': "0",
          },
          "90%": {
            'top': "200%",
            'opacity': '0'
          },

          '100%':{
            'top':'100%',
            'opacity': '0'
          }
        },
        ToTop3: {
          "0%": {
            'top': "200%",
            'opacity': "0",
          },
          "30%": {
            'top': "200%",
            'opacity': "0",
          },
          "40%": {
            'top': "100%",
            'opacity': "0",
          },
          "60%": {
            'top': "100%",
            'opacity': "0",
          },
          "70%": {
            'top': "0%",
            'opacity': "1",
          },
          "90%": {
            'top': "0%",
            'opacity': "1",
          },
          '100%':{
            'top': "-100%",
            'opacity': "0",
          },
        },
      },
    },
  },
  plugins: [],
};
