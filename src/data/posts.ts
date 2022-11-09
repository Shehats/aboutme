import { PostMeta, Post } from "../models";

export const getPost = async (postMeta: PostMeta): Promise<Post> => {
  const response = await fetch(postMeta.url);
  const content = await response.text();
  return {
    metaData: postMeta,
    content,
  }
}

export const getPosts = async (...postsMeta: Array<PostMeta>): Promise<Array<Post>> => {
  const posts = [];
  for (const postMeta of postsMeta) {
    const post = await getPost(postMeta);
    posts.push(post);
  }
  return posts;
}

