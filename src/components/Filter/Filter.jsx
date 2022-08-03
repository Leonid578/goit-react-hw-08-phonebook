import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { newFilter } from 'redux/sliceFilter';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // метод просто обновляет состояние при вводе текста
  const onSaveFinde = event => {
    dispatch(newFilter(event.currentTarget.value.trim().toLowerCase()));
  };

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Find contact"
        type="text"
        name="filter"
        value={filter}
        onChange={onSaveFinde}
      />
    </Grid>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
};

export default Filter;
