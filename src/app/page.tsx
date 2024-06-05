import Head from "next/head";
import LandingPage from "../../components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/wine101-landing-page/logo.ico"
        />
      </Head>
      <LandingPage />
    </main>
  );
}
