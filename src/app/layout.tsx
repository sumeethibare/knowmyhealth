import Navigate from "@/components/navigate/Navigate";
import Base from "@/components/footer/Base";
import './globals.css'

export const metadata = {
  title: "Know My Health",
  description: "Enhance Your Lifestyle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth noscrollbar text-selection-none">
      <body className="h-dvh">
        <Navigate />
        <main>{children}</main>
        <Base />
      </body>
    </html>
    
  );
}
