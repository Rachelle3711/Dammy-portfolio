import { IBM_Plex_Mono } from "next/font/google";


export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--mono-font-raw",
});
