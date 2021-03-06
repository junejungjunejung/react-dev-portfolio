import React from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { sortByDate, sortByTitle } from '../../actions/filters';

export class PostFilter extends React.Component {
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'title') {
      this.props.sortByTitle();
    }
  };
  render() {
    return (
      <FormControl variant="outlined" >
        <Select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
          className="post-list-filter"
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFilter);
