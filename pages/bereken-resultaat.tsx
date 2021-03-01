import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const BerekenEens: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/resultaat");
    }, 2000);
  });

  return (
    <Layout>
      <p className="text-xl mb-16 md:text-2xl text-center text-gray-500">
        Stemadvies wordt opgehaald...
      </p>
      <p className="text-xl mb-8 md:text-2xl text-gray-500 flex flex-col items-center">
        <img src="/loading.gif" alt="Aan het laden..." width="80" height="80" />
      </p>
    </Layout>
  );
};

export default BerekenEens;
