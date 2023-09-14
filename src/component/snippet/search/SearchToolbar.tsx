import React, {FunctionComponent, useState} from 'react';
import clsx from "clsx";
import Icon from "../Icon";
import SearchBar, {SearchBarProps} from "../field/SearchBar";
import {useTranslation} from "react-i18next";
import {TranslationLibFile, TranslationLibKey} from "../../../utils/locale";
import SearchBarClearable, {SearchBarClearableProps} from "../field/SearchBarClearable";

type SearchToolbarProps = {
    searchBar?: SearchBarProps | SearchBarClearableProps;
    actions?: React.ReactNode[];
    children?: React.ReactNode;
    canHideFilters?: boolean;
    onClearFilters?: (e: React.MouseEvent) => void;
    themeWhite?: boolean;
}

const SearchToolbar: FunctionComponent<SearchToolbarProps> = ({searchBar, children, actions, canHideFilters, onClearFilters, themeWhite}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [isShowFilters, setShowFilters] = useState(true);

    return (
        <div className={clsx("search-toolbar", {"search-toolbar--white": themeWhite})}>
            {(searchBar || actions || (children && canHideFilters)) &&
                <div className="search-toolbar__main">
                    {searchBar &&
                        ((searchBar as SearchBarProps).onChange !== undefined ?
                                <SearchBar value={searchBar.value}
                                           onChange={(searchBar as SearchBarProps).onChange}
                                           placeholder={searchBar.placeholder}
                                           cssClass={clsx("search-toolbar__main__search", searchBar.cssClass)} 
                                           small={searchBar.small}/> :
                                <SearchBarClearable value={searchBar.value}
                                                    onSubmit={(searchBar as SearchBarClearableProps).onSubmit}
                                                    placeholder={searchBar.placeholder}
                                                    cssClass={clsx("search-toolbar__main__search", searchBar.cssClass)}
                                                    small={searchBar.small}/>
                        )
                    }
                    {(children && canHideFilters) &&
                        <span className="search-toolbar__link" onClick={() => setShowFilters(prev => !prev)}>
                            <span>{t(isShowFilters ? TranslationLibKey.ACTION_HIDE_FILTERS : TranslationLibKey.ACTION_SHOW_FILTERS)}</span>
                            <Icon name={isShowFilters ? "keyboard_arrow_up" : "keyboard_arrow_down"} cssClass="search-toolbar__link__icon"/>
                        </span>
                    }
                    {actions && <div className="search-toolbar__main__actions">{actions}</div>}
                </div>
            }
            {children &&
                <div className={clsx("search-toolbar__filters", {"search-toolbar__filters--visible": isShowFilters})}>
                    {children}
                    {onClearFilters &&
                        <div className="search-toolbar__link search-toolbar__filters__link" onClick={onClearFilters}>
                            <Icon name="refresh" cssClass="search-toolbar__link__icon"/>
                            <span>{t(TranslationLibKey.ACTION_RESET_FILTERS)}</span>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default SearchToolbar;
