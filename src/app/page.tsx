import LandingPage from "../../components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <head>
        <link rel="icon" href="/wine101-landing-page/favicon.ico" sizes="any" />
      </head>
      <LandingPage />
    </main>
  );
}
