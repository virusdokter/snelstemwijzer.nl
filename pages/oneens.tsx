import Layout from "../components/layout";
import Link from "next/link";

const Oneens: React.FC = () => {
  return (
    <Layout variant="oneens">
      <p className="text-xl mb-8 md:text-2xl">Stem op 1 van deze partijen:</p>
      <p className="text-9xl absolute right-0 hidden md:block">→</p>
      <p className="text-9xl absolute bottom-0 md:hidden">↓</p>
      <p className="text-right md:text-left">
        <Link href="/over">
          <a className="inline-block font-bold underline text-xl md:text-2xl text-blue-600 mt-8 mb-4 md:mt-32">
            Meer weten?
          </a>
        </Link>
      </p>
    </Layout>
  );
};

export default Oneens;
