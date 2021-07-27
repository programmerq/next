import Header, { HeaderBehaviour, HeaderMode } from "components/Header";
import Flex, { FlexProps } from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
  mode?: HeaderMode;
  behaviour?: HeaderBehaviour;
  headerColor?: string;
  border?: string;
}

const Layout = ({
  children,
  mode,
  behaviour = "static",
  headerColor,
  border,
  ...props
}: LayoutProps & FlexProps) => {
  return (
    <>
      <Header mode={mode} headerColor={headerColor} border={border} />
      <Flex
        as="main"
        pt={behaviour === "static" ? ["48px", "80px"] : undefined}
        flexDirection="column"
        {...props}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
