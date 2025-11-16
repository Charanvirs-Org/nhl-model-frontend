import NavBar from "../components/NavBar/NavBar.component";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      <main className="pt-20">{children}</main>
    </>
  );
}
