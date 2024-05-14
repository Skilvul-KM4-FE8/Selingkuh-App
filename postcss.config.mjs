/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          colors: {
            primary: "#ff0000",
            secondary: "#00ff00",
            accent: "#0000ff",
            transparant: "rgba(0,0,0,0)",
            bgSelingkuh:
              "bg-gradient-to-b from-[#DB4E66] from-10% via-[#A24688] via-30% to-[#4E3ABA] to-80%",
          },
        },
      },
    },
  },
};

export default config;
