import {App} from "../layouts/app.js";
import Html from "@kitajs/html";
import {route} from "#start/view";

export function TestPage() {

  return (
    <App>
      <>
        <a href={route('home')}>Home Route</a>
        <div>Tête de noeeeeeuuuddd</div>
      </>
    </App>
  )
}
