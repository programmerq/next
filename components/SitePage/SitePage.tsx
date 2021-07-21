import Code from "components/Code";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Head from "components/Head";
import { HeaderMode, HeaderBehaviour } from "components/Header";
import MDX from "components/MDX";
import getAddressImage from "utils/get-address-image";
import wavePngUrl from "sharedAssets/images/wave-light.png";

const components = {
  pre: Code,
};

interface Props {
  meta: {
    title?: string;
    description?: string;
    hideWave?: boolean;
    shortFooter?: boolean;
    layout?: HeaderMode;
    headerBehaviour?: HeaderBehaviour;
  };
  children: React.ReactNode;
}

const background = `url(${getAddressImage(wavePngUrl)}) 0 0 no-repeat`;

export default function SitePage({ meta, children }: Props) {
  const { layout = "full" } = meta;

  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout
        mode={layout}
        background={meta.hideWave ? "none" : background}
        behaviour={meta.headerBehaviour}
      >
        <MDX components={components}>{children}</MDX>
      </Layout>
      <Footer short={Boolean(meta.shortFooter)} />
    </>
  );
}
