// Packages
import PropTypes from "prop-types";

// Components
import Button from "./Button";
import Searchbar from "./Searchbar";
// import DropdownLi from "./DropdownLi";
import DropdownList from "./DropdownList";

export default function Dropdown({
  name = "",
  title,
  items,
  isOpen,
  setIsOpen,
}) {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <Button
        customCSS="flex items-center justify-between rounded-lg bg-primary p-3 text-center text-sm text-neutralLight focus:outline-none hover:bg-primaryLight min-w-[200px]"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className="flex h-4 w-4 justify-end"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>
      {isOpen && (
        <div className="w-50 absolute z-10 mt-2 rounded-lg bg-gray-700 shadow">
          {/* <div className="p-3"> */}
          {/* <Searchbar className="relative w-full" /> */}
          <Searchbar className="relative w-full p-3" />
          {/* </div> */}
          <DropdownList name={name} items={items} />
          {/* <ul
            name={name}
            className="h-48 overflow-y-auto px-3 pb-3 text-sm text-neutralDarkest dark:text-neutralLightest"
            aria-labelledby="dropdownSearchButton"
          >
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item) => (
                <DropdownLi
                  key={item.id}
                  item={item}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              ))
            ) : (
              <li>No items found</li>
            )}
          </ul> */}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  name: null,
  items: null,
};
