import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'OrdinalSuffix',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const OrdinalSuffix = require('./containers/OrdinalSuffixContainer').default
      const reducer = require('./modules/OrdinalSuffix').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'OrdinalSuffix', reducer })

      /*  Return getComponent   */
      cb(null, OrdinalSuffix)

    /* Webpack named bundle   */
    }, 'OrdinalSuffix')
  }
})