import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { changeSearchBar } from '../actions'

const mapDispatchToProps = { changeSearchBar }

export default connect(null, mapDispatchToProps)(SearchBar)
