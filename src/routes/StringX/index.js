import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'StringX',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const StringX = require('./containers/StringXContainer').default
      const reducer = require('./modules/StringX').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'StringX', reducer })

      /*  Return getComponent   */
      cb(null, StringX)

    /* Webpack named bundle   */
    }, 'StringX')
  }
})