import { FunctionalComponent, JSX } from "preact";
import { usePageContext } from '../services/PageContext';

export const Link: FunctionalComponent<JSX.HTMLAttributes<HTMLAnchorElement>> = (props) => {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} className={className} />
}
