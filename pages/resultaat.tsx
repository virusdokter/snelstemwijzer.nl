import Layout from "../components/layout";
import Link from "next/link";
import { InlineShareButtons } from "sharethis-reactjs";

const Resultaat: React.FC = () => {
  return (
    <Layout variant="oneens">
      <div className="flex flex-col md:flex-row gap-8 my-8 md:mt-16 md:gap-16">
        <div className="flex flex-row md:flex-col items-center md:w-28">
          <img
            src="/match-fvd.jpg"
            alt="Logo van Forum voor Democratie met een ronde pijl er volledig omheen"
            width="120"
            height="120"
          />
          <div className="flex flex-col p-4 md:items-center">
            <strong className="mb-2">100%</strong>
            <div className="md:text-center">Forum voor Democratie</div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col items-center">
          <img
            src="/match-lijst-30.jpg"
            alt="Logo van Lijst 30 met een ronde pijl er volledig omheen"
            width="120"
            height="120"
          />
          <div className="flex flex-col p-4 md:items-center">
            <strong className="mb-2">100%</strong>
            <div className="md:text-center">Lijst 30</div>
          </div>
        </div>
      </div>
      <InlineShareButtons
        config={{
          alignment: "center", // alignment of buttons (left, center, right)
          color: "social", // set the color of buttons (social, white)
          enabled: true, // show/hide buttons (true, false)
          font_size: 16, // font size for the buttons
          labels: "cta", // button labels (cta, counts, null)
          language: "en", // which language to use (see LANGUAGES)
          networks: [
            // which networks to include (see SHARING NETWORKS)
            "facebook",
            "messenger",
            "whatsapp",
            "twitter",
            "linkedin",
          ],
          padding: 12, // padding within buttons (INTEGER)
          radius: 4, // the corner radius on each button (INTEGER)
          show_total: true,
          size: 40, // the size of each button (INTEGER)
          url: "https://www.snelstemwijzer.nl",
        }}
      />
      <Link href="/over">
        <a className="inline-block font-bold underline text-xl md:text-2xl text-blue-600 mt-8 mb-4 md:mt-16">
          Meer weten?
        </a>
      </Link>
    </Layout>
  );
};

export default Resultaat;
