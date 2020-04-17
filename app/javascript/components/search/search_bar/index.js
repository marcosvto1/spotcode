import React, {Fragment, useState} from 'react';
import {Form} from 'react-bulma-components';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const Search = (e) => {
    if (e.key === 'Enter') {
      props.fetchSearch(query);
    }
  }

  return (
    <Fragment>
      <Form.Field>
        <Form.Control iconRight>
          <Form.Input
            placeholder="Text input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          ></Form.Input>
        </Form.Control>
      </Form.Field>
    </Fragment>
  );
}

export default SearchBar;