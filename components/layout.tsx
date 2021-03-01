import Link from "next/link";

export type LayoutProps = {
  variant?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, variant = "" }) => (
  <div
    id="layout"
    className="min-h-screen md:bg-center md:bg-cover md:bg-no-repeat md:flex md:justify-center"
  >
    <div className="max-w-full lg:max-w-screen-lg flex flex-col md:flex-row md:flex-grow md:p-4 md:pt-16 md:items-start">
      <div className="py-8 px-4 md:py-16 md:px-16 relative md:bg-white md:flex-grow md:rounded-l-3xl md:rounded-b-3xl">
        <header>
          <Link href="/">
            <a>
              <img
                className="absolute top-9 left-0 w-12 md:-top-16 md:-left-24 md:w-56 xl:-left-36"
                src="/logo.png"
                alt="Logo snelle klok"
                width="222"
                height="140"
              />
            </a>
          </Link>
          <h1 className="font-sans pl-8 text-4xl mb-4 md:pl-0 md:text-6xl md:mt-4 md:mb-8 lowercase italic">
            <Link href="/">
              <a>
                <span className="inline-block text-blue-600 uppercase">
                  Snel
                </span>
                <span className="inline-block">Stemwijzer</span>
              </a>
            </Link>
          </h1>
        </header>
        <main>{children}</main>
      </div>
      <footer className="bg-darkGray text-gray-200 text-sm flex-grow p-4 md:flex-none md:rounded-r-3xl md:rounded-b-3xl">
        {variant === "oneens" ? (
          <img
            src="/partijen-oneens.jpg"
            alt="Logo's van de partijen die niet tegen lockdown, avondklok, mondkapjesplicht en kinderen verplicht testen en afzonderen zijn"
            width="269"
            height="469"
          />
        ) : (
          <>
            <h1 className="font-bold mb-2">Deze partijen doen mee</h1>
            <img
              src="/partijen.jpg"
              alt="Logo's van de partijen die meedoen"
              width="269"
              height="469"
            />
          </>
        )}
      </footer>
    </div>
  </div>
);

export default Layout;
