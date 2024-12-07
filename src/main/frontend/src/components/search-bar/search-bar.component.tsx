import { FormEvent, useState } from "react";
import { useFilterStore } from "../../stores/filter.store";
import { useUIStateStore } from "../../stores/state.store";
import { cn } from "../../utils/classname";

export function SearchBar({ className, ...other }: React.HTMLAttributes<HTMLInputElement>) {
    const setIsSearching = useUIStateStore((state) => state.setIsSearching);
    const searchFilter = useFilterStore((state) => state.search);
    const setSearchFilter = useFilterStore((state) => state.setSearch);
    const [search, setSearch] = useState(searchFilter ?? '');

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        setIsSearching(true);
        setSearchFilter(search);
    }

    return <form className={cn("icon-input", className)} onSubmit={onSubmit}>
        <i className="bi bi-search icon icon-button" onClick={() => setIsSearching(true)} />
        <input
            className="search-bar-input"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            {...other}
        />
    </form>
}