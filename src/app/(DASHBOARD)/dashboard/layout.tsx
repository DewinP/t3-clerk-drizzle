import Header from "~/components/Header";
import Sidebar from "~/components/SideBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col pl-[72px]">
      <Sidebar />
      {/* <Header /> */}
      {children}
    </div>
  );
}
