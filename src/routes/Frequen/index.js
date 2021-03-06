import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import ButtonLink from '../../components/Button/Link'

import FrequenForm from './FrequenForm'
import FrequenResults from './FrequenResults'
import frequenService from './FrequenService'
import styles from './styles'

import { canonical, siteTitle } from '../../App'

class Frequen extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onAnalyze = this.onAnalyze.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = frequenService.getData()
  }

  onChangeInput (e) {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        frequenService.save(this.state)
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore a saved state
      const file = e.target.files[0]
      const updateState = response => {
        if (response) {
          // Only change state if the file was successfully opened
          this.setState(prevState => response)
        }
      }
      frequenService.open(file, updateState)
    } else {
      const val =
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
      const name = e.target.name
      this.setState(prevState => ({
        [name]: val
      }))
    }
  }

  onAnalyze (e) {
    e.preventDefault()
    this.setState(
      prevState => ({
        analyzed: false
      }),
      () => {
        // Save the current state to storage
        frequenService.setStorage(this.state)

        const response = frequenService.analyze(this.state)

        this.setState(prevState => ({
          results: response,
          analyzed: true
        }))
      }
    )
  }

  onMouseOver (datapoint) {
    this.setState(prevState => ({
      hovered: datapoint
    }))
  }

  onMouseOut () {
    this.setState(prevState => ({
      hovered: undefined
    }))
  }

  render () {
    return (
      <div className={this.props.classes.frequen}>
        <Helmet>
          <title>{siteTitle} Frequen</title>
          <meta
            name='description'
            content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.'
          />
          <link rel='canonical' href={`${canonical}frequen/`} />
        </Helmet>
        <ButtonLink route='/frequen/help'>Help</ButtonLink>
        <h2 className='toolTitle'>LanguaFrequen</h2>
        <FrequenForm
          styles={this.props.classes}
          state={this.state}
          onChangeInput={this.onChangeInput}
          onAnalyze={this.onAnalyze}
        />
        <FrequenResults
          styles={this.props.classes}
          results={this.state.results}
          hovered={this.state.hovered}
          filter={this.state.filter}
          analyzed={this.state.analyzed}
          onChangeInput={this.onChangeInput}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        />
      </div>
    )
  }
}

Frequen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Frequen)
