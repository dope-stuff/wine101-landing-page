import LandingPage from "../../components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="logo.ico"
      />
      <LandingPage />
    </main>
  );
}
