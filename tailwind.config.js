const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      containers: "1140px",
      mxw442: "442px",
      mxw988: "988px",
    },
    minWidth: {
      56: "56px",
    },
    minHeight: {
      521: "521px",
    },
    borderWidth: {
      3: "3px",
      4: "4px",
      5: "5px",
      8: "8px",
    },
    extend: {
      keyframes: {
        loading: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "25%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(25%)" },
          "75%": { transform: "translateY(50%)" },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
      },
      lineHeight: {
        26: "26px",
      },
      colors: {
        "bda-brand": "#f26531",
        "bda-brand-hover": "#db4c18",
        "bda-linked": "#5535e5",
        "footer-color": "#212529",
        "footer-copyright": "#1f2225",
        "address-box": "#fbf4f1",
        "bg-light": "#fbfbfb",
        orange: colors.orange,
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"'],
      },
      fontSize: {
        ltiny: "15px",
        lg: "18px",
        title: "30px",
        xxl: "22px",
        subtitle: "25px",
        "3xl": "34px",
        "4xl": "42px",
        "5xl": "45px",
      },
      borderRadius: {
        large: "28px",
        "5xl": "2.6rem",
        43: "43px",
      },
      boxShadow: {
        menu: "0 2px 28px 0 rgba(0, 0, 0, 0.05)",
        eb: "0px 0px 13px 1px rgba(0, 0, 0, 0.3)",
        ota: "0px -48px 20px 14px rgba(0, 0, 0, 0.4) inset",
        sb: "0px 0px 12px 6px rgba(0, 0, 0, 0.07)",
        input: "0px 0px 5px rgba(0, 0, 0, 0.13)",
        address:
          "0 3.4px 2.7px -30px rgb(0 0 0 / 6%), 0 8.2px 8.9px -30px rgb(0 0 0 / 7%), 0 25px 40px -30px rgb(0 0 0 / 20%)",
      },
      variants: {
        borderWidth: ["responsive", "last", "hover", "focus"],
      },
      padding: {
        3.6: "15px",
      },
      backgroundImage: {
        "service-icon1": "url('/img/service-icon1.svg')",
        "service-icon2": "url('/img/service-icon2.svg')",
        "service-icon3": "url('/img/service-icon3.svg')",
        b2b: "url('/img/b2b.svg')",
        b2c: "url('/img/b2c.svg')",
        c2c: "url('/img/c2c.svg')",
        call: "url('/img/call-icon.svg')",
        email: "url('/img/email-icon.svg')",
        address: "url('/img/address-icon.svg')",
      },
      height: {
        13: "55px",
      },
      transformOrigin: {
        top: "10% 10%",
        bottom: "10% 90%",
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
};
