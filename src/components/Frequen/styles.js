import * as v from '../../styles/variables'

const styles = {
  form: {
    '& label': {
      marginLeft: `${v.lnht}rem`,
      marginRight: `${v.lnht}rem`,
      verticalAlign: 'middle'
    }
  },
  sectionTitle: {
    margin: 0
  },
  corpus: {
    height: `${2 * v.ms6}rem`
  },
  input: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: `${v.lnht}rem`
  },
  controlPiece: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    alignContent: 'space-between',
    margin: `${v.lnht}rem`,
    verticalAlign: 'middle'
  },
  results: {
    marginTop: `${v.lnht}rem`,
    paddingTop: `${v.lnht}rem`,
    borderTop: {
      width: 1,
      style: 'dotted',
      color: v.bluNtl.string()
    }
  },
  error: {
    color: v.red.string()
  },
  resultsSection: {
    marginTop: `${v.ms2}rem`,
    marginBottom: `${v.ms2}rem`
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: {
      width: 1,
      style: 'dotted',
      color: v.ong.string()
    }
  },
  headerCell: {
    padding: `${v.lnht}rem`,
    textAlign: 'center',
    backgroundColor: v.ong.string(),
    borderBottom: {
      width: 1,
      style: 'dotted',
      color: v.ong.string()
    }
  },
  tableBody: {
    paddingTop: `${v.lnht}rem`,
    paddingBottom: `${v.lnht}rem`
  },
  dataCell: {
    borderRight: {
      width: 1,
      style: 'dotted',
      color: v.ong.string()
    },
    '&:last-child': {
      borderRight: 'none'
    },
    padding: {
      top: 0,
      right: `${v.lnht}rem`,
      bottom: 0,
      left: `${v.lnht}rem`
    },
    textAlign: 'center'
  }
}

export default styles
