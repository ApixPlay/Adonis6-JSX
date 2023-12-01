import router from "@adonisjs/core/services/router";

export const route = ( routeIdentifier: string, params?: any, options?: any ) => {
  return router.makeUrl(routeIdentifier, params, options)
}
