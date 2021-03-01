import Layout from "../components/layout";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <Layout>
      <h2 className="mb-4 font-bold text-xl md:text-2xl">
        Tweede Kamerverkiezingen 2021
      </h2>
      <p className="text-xl md:text-2xl">
        Test je politieke voorkeur binnen 5 seconden ;-)
      </p>
      <Link href="/start">
        <a className="inline-block font-bold text-2xl bg-blue-600 text-white my-8 py-4 px-8 rounded-2xl md:mt-16">
          Start
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
