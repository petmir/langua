import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

const MorphHelp = props => (
  <div className={props.classes.morphHelp}>
    <Helmet>
      <title>{siteTitle} Morph Help</title>
      <meta
        name='description'
        content='LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word’s proto-language roots.'
      />
      <link rel='canonical' href={`${canonical}morph/help/`} />
    </Helmet>
    <ButtonLink route='/morph'>Back</ButtonLink>
    <h2 className='toolTitle'>LanguaMorph Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

MorphHelp.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(MorphHelp)
