import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'AxiosGet',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AxiosGet = require('./containers/AxiosGetContainer').default
      const reducer = require('./modules/AxiosGet').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'AxiosGet', reducer })

      /*  Return getComponent   */
      cb(null, AxiosGet)

    /* Webpack named bundle   */
    }, 'AxiosGet')
  }
})