import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { TError, TPost } from "../types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(): TPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: TPost[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as TPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostNames(): { params: { post: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { post: fileName.replace(/\.md$/, "") },
  }));
}

export function getOnePost(postName: string): TPost | TError {
  try {
    const postFile = fs.readdirSync(postsDirectory).find((fileName) => {
      return postName === fileName.replace(/\.md$/, "");
    });
    if (!postFile) {
      throw new Error("post not found");
    }
    const id = postFile.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, postFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);

    return {
      id,
      content,
      ...data,
    } as TPost;
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      message: error,
    } as TError;
  }
}

// filters
// if filter is `Go` and `AWS`, article must have one or the other
export function filterByTagsOrMatching(
  posts: TPost[],
  tags: string[]
): TPost[] {
  const matchingPosts: TPost[] = [];
  tags.forEach((t) => {
    posts.forEach((p) => {
      if (p.labels.indexOf(t) > -1) matchingPosts.push(p);
    });
  });
  const setOf = new Set<TPost>(matchingPosts);
  return Array.from(setOf);
}

export function filterByTagsAndMatching(
  posts: TPost[],
  tags: string[]
): TPost[] {
  const matchingPosts: TPost[] = [];
  tags.forEach(tag => {
    if(matchingPosts.length === 0) {
      posts.forEach(post => {
        if(post.labels.indexOf(tag) > -1) matchingPosts.push(post);
      })
    } else {
      matchingPosts.forEach((matchingPost,index) => {
        if(matchingPost.labels.indexOf(tag) === -1) {
          matchingPosts.splice(index, 1)
        }
      })
    }
  })

  return matchingPosts;
}
