import Html from "@kitajs/html";
import vite from "@adonisjs/vite/services/main";

export const Assets = {
  Script
}

interface Script {
  entrypoint: string
}

export function Script(props: Script) {
  const { entrypoint } = props

  const assetsURL = vite.assetsUrl()
  if (!assetsURL || !assetsURL.startsWith('http://') || assetsURL.startsWith('https://')) {
    return ''
  }

  vite.devUrl()
  return <>
    <script type="module" src={`${assetsURL}/@vite/client`} />
    <script type="module" src={`${assetsURL}/${entrypoint}`} />
  </>
}
