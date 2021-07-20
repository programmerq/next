import { useRouter } from "next/router";
import { createContext, useState } from "react";

const scopeValues = ["oss", "cloud", "enterprise"] as const;

export type ScopeType = typeof scopeValues[number];

export interface DocsContextProps {
  scope: ScopeType;
  setScope: (scope: ScopeType) => void;
  isCurrentVersion: boolean;
  setIsCurrentVersion: (isCurrentVersion: boolean) => void;
  version: string;
  setVersion: (version: string) => void;
}

export const getScopeFromUrl = (asPath: string): ScopeType => {
  const [, search] = asPath.split("?");
  const params = new URLSearchParams(search || "");
  const scope = params.get("scope") as ScopeType;

  return scopeValues.includes(scope) ? scope : "oss";
};

export const DocsContext = createContext<DocsContextProps>({
  scope: "oss",
  setScope: () => undefined,
  isCurrentVersion: true,
  setIsCurrentVersion: () => undefined,
  version: "",
  setVersion: () => undefined,
});

interface DocsContextProviderProps {
  children: React.ReactNode;
}

export const DocsContextProvider = ({ children }: DocsContextProviderProps) => {
  const router = useRouter();

  const [scope, setScope] = useState<ScopeType>(getScopeFromUrl(router.asPath));
  const [isCurrentVersion, setIsCurrentVersion] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("");

  return (
    <DocsContext.Provider
      value={{
        scope,
        setScope,
        isCurrentVersion,
        setIsCurrentVersion,
        version,
        setVersion,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};
