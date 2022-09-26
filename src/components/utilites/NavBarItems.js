import { AiOutlineHome, AiOutlineSearch, AiOutlineContacts } from 'react-icons/ai'
import { FaRandom } from 'react-icons/fa'

export const NavBarItems = [
    {
        id: 1,
        name: 'Home',
        url: '/',
        icon: <AiOutlineHome />
    }, {
        id: 2,
        name: 'Search',
        url: '/search',
        icon: <AiOutlineSearch />
    }, {
        id: 3,
        name: 'Random Shot',
        url: '/randomize',
        icon: <FaRandom />
    }, {
        id: 4,
        name: 'Contact',
        url: '/contact',
        icon: <AiOutlineContacts />
    }

]