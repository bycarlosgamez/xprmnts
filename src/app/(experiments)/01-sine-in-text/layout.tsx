import { Antic_Didone } from "next/font/google";

const antic = Antic_Didone({
  subsets: ["latin"],
  weight: "400",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={antic.className}>{children}</div>;
}
