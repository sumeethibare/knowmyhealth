import Navigate from "@/components/navigate/Navigate";
import Base from "@/components/footer/Base";
import './globals.css'
export const metadata = {
  title: "Know My Health",
  description: "Take Care Of Yourself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigate />
        <main>{children}</main>
        <Base />
      </body>
    </html>
  );
}
