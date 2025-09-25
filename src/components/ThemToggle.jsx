import { useGlobalContext } from "../context"
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";


const ThemToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext()
  return (
    <div className="toggle-container">
        <button onClick={toggleDarkTheme}>
            {isDarkTheme ?
                (<FaMoon className="toggle-icon"/>):
                (<IoIosSunny className="toggle-icon"/>)
            }
        </button>
    </div>
  )
}

export default ThemToggle