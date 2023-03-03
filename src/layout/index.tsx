import Navbar from './header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-background">{children}</main>
    </>
  );
}
