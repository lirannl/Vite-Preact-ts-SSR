// `usePageContext` allows us to access `pageContext` in any component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import { createContext, FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { PageContextBuiltIn } from "vite-plugin-ssr"

interface DocumentProps {
  title?: string;
  description?: string;
}

export interface PageContext extends PageContextBuiltIn {
  isHydration: boolean;
  pageProps: Record<string, unknown>;
  documentProps?: DocumentProps,
  exports: { documentProps?: DocumentProps }
};

const Context = createContext<PageContext>({} as unknown as PageContext);

export const PageContextProvider: FunctionComponent<{ pageContext: PageContext }> = ({ pageContext, children }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
};

export const usePageContext = () => {
  const pageContext = useContext(Context)
  return pageContext;
}
