import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { newFilter } from 'redux/sliceFilter';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // метод просто обновляет состояние при вводе текста
  const onSaveFinde = event => {
    dispatch(newFilter(event.currentTarget.value.trim().toLowerCase()));
  };

  return (
    <input
      className={style.inputFinde}
      type="text"
      name="filter"
      value={filter}
      onChange={onSaveFinde}
    />
  );
};

export default Filter;
