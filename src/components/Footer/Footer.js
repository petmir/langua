// @flow
import React from 'react'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'

type props = {
  classes: Classes
}

const Footer = (props: props) => {
  const getCopyrightYear = () => {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()
    return y > initYear ? `${initYear}–${y}` : initYear.toString()
  }

  const author = 'Ian A. Cook'
  const authorURL = 'https://github.com/nai888'
  const appGhURL = 'https://github.com/nai888/langua'

  return (
    <footer>
      <div className={props.classes.footer}>
        <p className={props.classes.copyright}>
          <a
            href={appGhURL + '/blob/master/CHANGELOG.md'}
            target='_blank'
            rel='noopener noreferrer'
          >
            Version
            {' '}
            <i
              className='fas fa-code'
            />
            {' '}
            0.1.4
          </a>
          . Built by
          {' '}
          <a
            href={authorURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            {author}
          </a>
          , copyright
          {' '}
          <i
            className='far fa-copyright'
          />
          {' '}
          {getCopyrightYear()} under the
          {' '}
          <a
            href='https://choosealicense.com/licenses/agpl-3.0/'
            target='_blank'
            rel='noopener noreferrer'
          >
            AGPL-3.0
            {' '}
            <i
              className='fas fa-gavel'
            />
            {' '}
            license
          </a>
          .
          {' '}
          <a
            href='https://github.com/nai888/langua'
            target='_blank'
            rel='noopener noreferrer'
          >
            View this project on
            {' '}
            <i
              className='fab fa-github'
            />
            {' '}
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default injectSheet(styles)(Footer)
