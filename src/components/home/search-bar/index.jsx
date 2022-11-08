import * as s from './styles';

export default function SearchBar(props) {
  const inputHandler = (event) => {
    if (event.target.value.trim() === '') {
      return;
    }
    props.setSearchInput(event.target.value);
  };
  return (
    <s.Search>
      <s.SearchInput
        type="text"
        value={props.searchInput}
        onChange={inputHandler}
      />
      <s.SearchButton onClick={props.searchPhotos}>Search</s.SearchButton>
    </s.Search>
  );
}
