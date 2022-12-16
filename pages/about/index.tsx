import React from "react";
import Layout from "../../components/layout";

import styles from "./about.module.scss";

export default function index() {
  return (
    <Layout>
      <article className={styles.main}>
        <section>
          <h2>About me</h2>
          <p>
            I live in Tokyo, Japan - moved here in 2018. If you ask me how I
            like it, my answer tends to change from day to day, but on the
            whole, it's great.
          </p>
          <br />
          <p>
            On the weekends, I skateboard, I go cycling through the city, I
            golf. If it rains, I try to code something.
          </p>
          <br />
          <br />
          <p>
            I like to ( think that I like to ) try new things. Sometimes I stick to what I know. Maybe I'll get better at that in this coming year.
          </p>
        </section>
        <section>
          <h2>About this blog</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sequi fugiat nam enim recusandae. Molestiae architecto sapiente
            eligendi quod iste nemo quidem autem porro harum? Accusantium
            expedita consectetur iusto adipisci. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit est minus molestias dolorum
            nostrum mollitia cupiditate modi ipsam numquam enim, delectus, dicta
            repudiandae consequuntur itaque at minima nemo quas vel. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolore
            recusandae optio impedit quia rem eveniet dolorem nulla ab velit
            porro quam ullam totam odio maiores, cum, voluptate fugit Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Alias
            consequuntur repudiandae suscipit earum assumenda provident
            accusantium dolorem facere ad nihil tempora quia quo culpa,
            temporibus ipsam ratione amet quis deserunt. voluptatem? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Nisi, provident
            maiores? Minima, laboriosam aut officiis ut voluptatem qui, vero
            repellendus sit non maxime, velit et eius rem cumque nemo ex!
          </p>
        </section>
      </article> 
      </Layout>
  );
}
