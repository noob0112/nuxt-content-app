interface IRoute {
  name: string;
  label: string;
  path: string;
}

export const routes: IRoute[] = [
  {
    name: "home",
    label: "Home",
    path: "/",
  },
  {
    name: "about",
    label: "About",
    path: "/about",
  },
  {
    name: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
];

export const route = {
  home: "/",
  about: "/about",
  blogs: "/blogs",
};
