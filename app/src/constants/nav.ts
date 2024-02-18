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
    }
];

export default nav;
