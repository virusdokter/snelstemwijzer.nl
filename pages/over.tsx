import Layout from "../components/layout";

const Over: React.FC = () => {
  return (
    <Layout>
      <p className="text-xl md:text-2xl mb-4">
        De Snelstemwijzer is een initiatief van een groep collega’s bij een
        IT-bedrijf met wisselende politieke voorkeuren, van VVD tot D66, van
        GroenLinks tot SP.
      </p>

      <p className="text-xl md:text-2xl mb-4">
        Wij hebben het idee dat de komende verkiezingen eigenlijk over maar één
        onderwerp gaan: de corona crisis. Bij het invullen van stemwijzers
        kwamen we allemaal voor het eerst bij andere politieke partijen uit dan
        waar we normaal op zouden stemmen.
      </p>

      <p className="text-xl md:text-2xl mb-4">
        Vandaar dat het ludieke idee ontstond voor een stemwijzer met slechts
        één vraag die iedereen bezig houdt. Willen we wel of niet terug naar het
        oude normaal, ...en waar moeten we dan op stemmen?
      </p>
    </Layout>
  );
};

export default Over;
