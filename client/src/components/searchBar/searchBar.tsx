import { useRef } from 'react';

import './searchBar.scss';

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
    entitiesFound: number | undefined;
    inputPlaceHolder?: string;
 }

const SearchBar: React.FC<SearchBarProps> = ({onChange, onClear, entitiesFound, inputPlaceHolder}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    const hanldeClearButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClear(e);
        if (inputRef.current) inputRef.current.value = '';
     }

    return (
        <div className="searchBar">
        <input 
            className="searchBar--input" 
            type="text" 
            ref={inputRef} 
            placeholder={inputPlaceHolder ?? "Search..."}
            onChange={handleOnChangeEvent}/>
        <div className="searchBar__options">
            {inputRef.current && inputRef.current.value.length > 0 && <button className="searchBar--clearBtn" onClick={hanldeClearButton}>Clear</button>}
            <label className="searchBar--itemsFound">{`${entitiesFound ?? 'Unknown'} results`}</label>
        </div>
    </div>
    );
};

export default SearchBar;