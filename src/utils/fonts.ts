import { Roboto } from "next/font/google";

const roboto_init = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100"
}); 

export const roboto = roboto_init.variable;