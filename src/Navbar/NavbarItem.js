import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export const MenuItems = [
    {
        id: 1,
        url : '/features',
        
        text : 'Features',
        line: 'underline'
    },
    {
        id: 2,
        url : '/pricing',
    
        text : 'Pricing',
        line : 'underline'
    },
    {
        id: 3,
        url : '/contact',
       
        text : 'Contact',
        line : 'underline'
    },
    
]

export const socials = [
    {
        id : 1,
        url : 'www.facebook.com',
        icon : <AiFillFacebook size={40}/>
    },
    {
        id : 2,
        url : 'www.twitter.com',
        icon : <AiOutlineTwitter size={40} />
    }
]