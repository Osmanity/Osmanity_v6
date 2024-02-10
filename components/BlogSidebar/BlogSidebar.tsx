import styles from "./menu.module.css";
import MenuCategories from "./menuCategories/MenuCategories";
import MenuPosts from "./menuPosts/MenuPosts";

const BlogSidebar = () => {
  return (
    // <div className={styles.container}>
    <div className="hidden xl:flex flex-col w-2/5  2xl:w-[580px] 3xl:w-[700px] z-20  mt-2 pl-6">
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1> */}
      {/* <MenuPosts withImage={true} /> */}
    </div>
  );
};

export default BlogSidebar;