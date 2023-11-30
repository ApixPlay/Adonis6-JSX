import type { HttpContext } from '@adonisjs/core/http'
import {TestPage} from "../../resources/views/pages/test.js";
import {Html} from "@kitajs/html";

export default class HomeController {
  async index({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async test({}: HttpContext) {
    return <TestPage />
  }
}

