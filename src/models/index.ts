export interface PostMeta {
  title: string;
  url: string;
  herf: string;
  description: string;
  image: string;
  imageLabel: string;
  date: string;
}

export interface Post {
  metaData: PostMeta;
  content: string;
}

export interface Archive {
  title: string;
  url: string;
}

export interface Social {
  name: string;
  icon: any | undefined;
  url: string;
}

export interface SidBarModel {
  title: string;
  description: string;
  archives: Array<Archive>;
  social: Array<Social>;
}

export interface Features {
  [key: string]: boolean;
  email: boolean;
}

type About = PostMeta;

export interface Config {
  about: About;
  featuredPosts: Array<PostMeta>;
  allPosts: Array<PostMeta>;
  social: Array<Social>;
  features?: Features;
}

export interface Experience {
  logo: string;
  height: string;
  width: string;
  color: string;
  company: string;
  title: string;
  header: string;
  theme: Array<string>;
}
