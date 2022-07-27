import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import style from './Form.module.css';
import propTypes from 'prop-types';
import { Sabmit, Label } from './Form.style';

import { useAddContactMutation } from 'server/fetchContacts';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [updatePost] = useAddContactMutation()

  // цикл первой загрузки компонента
  useEffect(() => {
    const lwrite = localStorage.getItem('write');
    if (lwrite) {
      const write = JSON.parse(lwrite);
      setName(write.name);
      setPhone(write.phone);
    }
  }, []);

  // после обновления стейта сохраним локально вводимые значения
  useEffect(() => {
    localStorage.setItem('write', JSON.stringify({ name, phone }));
  }, [name, phone]);

  //генерируем необходимые ключи
  const { idName, idTel } = nanoid();

  // универсальный метод для инпутов
  const onCangeInpute = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  //внутрений метод сабмита обрабатывающий событие
  const formSubmit = event => {
    event.preventDefault();
    updatePost({ name, phone });
    reset();
  };

  // очистка формы
  const reset = () => {
    setName('');
    setPhone('');
    // тут же нам необходимо очистить локалку чтоб вводимые ранее значения не всплыли вновь
    localStorage.removeItem('write');
  };

  return (
    <form className={style.form} action="" onSubmit={formSubmit}>
      <label className={style.label} htmlFor={idName}>
        Name
      </label>
      <input
        className={style.input}
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onCangeInpute}
        value={name}
      />
      <Label htmlFor={idTel}>Telephone</Label>
      <input
        className={style.input}
        id={idTel}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={onCangeInpute}
      />
      <Sabmit type="submit">Save</Sabmit>
    </form>
  );
};

Form.propTypes = { chengeSabmit: propTypes.func };
