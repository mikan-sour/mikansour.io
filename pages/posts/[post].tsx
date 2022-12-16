import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import { TError, TPost } from "../../types";
import { getOnePost, getPostNames } from "../../utils/posts";

interface IParamsPost extends ParsedUrlQuery {
  post: string;
}

export const getStaticPaths = async () => {
  const paths = getPostNames();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  postData: TPost | TError;
}> = async (ctx) => {
  const { post } = ctx.params as IParamsPost;
  const postData: TPost | TError = getOnePost(post as string);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (Object.hasOwnProperty.call(postData, "code")) {
    return <h1>error...</h1>;
  }
  const { content, title, date } = postData as TPost;
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <h6>{date}</h6>
        <section>{content}</section>
      </article>
    </Layout>
  );
};

export default Post;
