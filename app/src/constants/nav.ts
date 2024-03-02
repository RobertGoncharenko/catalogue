interface NavItem {
    link: string;
    caption: string;
}

const nav: NavItem[] = [
    {
        link: "/",
        caption: "Home",
    },
    {
        link: "/items",
        caption: "Catalogue",
    },
    {
        link: "/about",
        caption: "About Us"
    },
    {
        link: "/signin",
        caption: "Sign In"
    },
    {
        link: "/signup",
        caption: "Sign Up"
    },
];

export default nav;
