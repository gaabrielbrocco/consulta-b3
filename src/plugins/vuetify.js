import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

const myTheme = {
  dark: false,
  colors: {
    background: "#030712",
    primary: "#030712",
  },
};

export default createVuetify({
  defaultTheme: "myTheme",
  themes: {
    myTheme,
  },
});
