import React, { useCallback, useRef, useState } from 'react';
import { setSearchValue } from '../../redux/filter/slice';

import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        version='1.1'
        viewBox='0 0 18 18'
        width='18px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title />
        <desc />
        <defs />
        <g
          fill='none'
          fillRule='evenodd'
          id='Page-1'
          stroke='none'
          strokeWidth='1'
        >
          <g
            fill='#000000'
            id='Core'
            transform='translate(-339.000000, -381.000000)'
          >
            <g id='search' transform='translate(339.000000, 381.000000)'>
              <path
                d='M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z'
                id='Shape'
              />
            </g>
          </g>
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        className={styles.input}
        onChange={onChangeInput}
        placeholder='Searching...'
      />
      {value && (
        <svg
          onClick={onClickClear}
          fill='none'
          height='24'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.iconClear}
        >
          <path
            d='M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z'
            fill='currentColor'
          />
        </svg>
      )}
    </div>
  );
}

export default Search;
