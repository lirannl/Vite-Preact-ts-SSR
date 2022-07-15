import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML by liran.</li>
        <li>Written in typescript.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
