import Html from "@kitajs/html";
import {Assets} from "../assets.js";

interface AppProps {
  title?: string
  page?: string
  children: JSX.Element
}

export function App(props: AppProps) {
  const { title = "Test adonis", page, children } = props

  return (
    <Main>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>

        <Assets.Script entrypoint={'resources/js/app.js'} />
      </head>
      <body {...(page ? { 'data-page': page } : {})}>
      {children}
      </body>
      </html>
    </Main>
  )
}

function Main(props: Html.PropsWithChildren) {
  return <>
    {'<!doctype html>'}
    {props.children}
    </>
}
