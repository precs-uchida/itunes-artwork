import React, { useState } from 'react';

type Props = {
  onClick: (keyword: string) => void;
};

function SearchForm({ onClick }: Props) {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          onClick(text);
        }}
      >
        検索
      </button>
    </div>
  );
}

export default SearchForm;
