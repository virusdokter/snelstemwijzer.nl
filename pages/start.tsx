import Layout from "../components/layout";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "./_app";

const Start: React.FC = () => {
  const { started, setStarted } = useContext(AppContext);

  useEffect(() => {
    if (!started) {
      setStarted(true);
    }
  }, [started, setStarted]);

  return (
    <Layout>
      <p className="text-xl font-bold mb-4 md:text-2xl">
        Ik wil alleen stemmen op partijen die hier{" "}
        <strong className="text-blue-600 font-bold">100% tegen</strong> zijn:
      </p>
      <ul className="list-disc list-inside text-xl md:text-2xl ml-4 md:ml-8">
        <li className="leading-relaxed">avondklok</li>
        <li className="leading-relaxed">mondkapjesplicht</li>
        <li className="leading-relaxed">
          kinderen verplicht testen en afzonderen
        </li>
        <li className="leading-relaxed">spoedwet</li>
      </ul>
      <Link href="/bereken-resultaat">
        <a className="inline-block font-bold text-2xl bg-green-600 text-white my-8 mr-4 py-4 px-8 rounded-2xl md:mt-16">
          Eens
        </a>
      </Link>
      <Link href="/bereken-oneens">
        <a className="inline-block font-bold text-2xl bg-red-600 text-white my-8 py-4 px-8 rounded-2xl md:mt-16">
          Oneens
        </a>
      </Link>
    </Layout>
  );
};

export default Start;
