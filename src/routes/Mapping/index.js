import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Mapping',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Mapping = require('./containers/MappingContainer').default
      const reducer = require('./modules/Mapping').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'Mapping', reducer })

      /*  Return getComponent   */
      cb(null, Mapping)

    /* Webpack named bundle   */
    }, 'Mapping')
  }
})