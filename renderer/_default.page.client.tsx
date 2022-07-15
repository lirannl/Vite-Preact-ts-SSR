export const clientRouting = true
export { render }

import { hydrate, render as render_ } from 'preact'
import { PageShell } from '../PageShell'
import { PageContext } from "../services/PageContext"

const render = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  const container = document.querySelector('body')!;
  if (pageContext.isHydration) {
    hydrate(page, container)
  } else {
    render_(page, container)
  }
  document.title = getPageTitle(pageContext)
}

function getPageTitle(pageContext: PageContext) {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.tsx`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.tsx`)
    (pageContext.documentProps || {}).title ||
    'Demo'
  return title
}
