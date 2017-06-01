import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    {' · '}
    <Link to='/OrdinalSuffix' activeClassName='page-layout__nav-item--active'>Ordinal Suffix</Link>
    {' · '}
    <Link to='/Mapping' activeClassName='page-layout__nav-item--active'>Mapping</Link>
    {' · '}
    <Link to='/Filter' activeClassName='page-layout__nav-item--active'>Filtering</Link>
    {' · '}
    <Link to='/Find' activeClassName='page-layout__nav-item--active'>Finding</Link>
    {' · '}
    <Link to='/TEMPLATE' activeClassName='page-layout__nav-item--active'>TEMPLATE</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
