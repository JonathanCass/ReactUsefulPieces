import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Filter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Filter = require('./containers/FilterContainer').default
      const reducer = require('./modules/Filter').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'Filter', reducer })

      /*  Return getComponent   */
      cb(null, Filter)

    /* Webpack named bundle   */
    }, 'Filter')
  }
})