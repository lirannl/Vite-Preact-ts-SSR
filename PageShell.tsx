import { PageContextProvider } from './services/PageContext'
import './PageShell.css'
import { Link } from './components/Link'
import { FunctionalComponent } from "preact"

export { PageShell }

const PageShell: FunctionalComponent<{ pageContext?: any }> = ({ children, pageContext }) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>
        <Sidebar>
          <Link className="navitem" href="/">
            Home
          </Link>
          <Link className="navitem" href="/about">
            About
          </Link>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </PageContextProvider>
  )
}

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      {children}
    </div>
  )
}

const Sidebar: FunctionalComponent = ({ children }) => {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em',
      }}
    >
      {children}
    </div>
  )
}

const Content: FunctionalComponent = ({ children }) => {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  )
}