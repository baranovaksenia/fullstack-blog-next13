import CardList from '@/components/cardList/card-list';
import CategoryList from '@/components/categoryList/category-list';
import Featured from '@/components/featured/featured';
import styles from './page.module.css';
import Menu from '@/components/menu/menu';

const Home = () => {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu/>
      </div>
    </div>
  );
};

export default Home;
