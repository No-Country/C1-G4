import styles from "../styles/home.module.css";
import useUser from "./../hooks/useUser";

const Home = () => {
  const { showUser, isLogged } = useUser();
  return (
    <div className={styles.divs}>
      <h1 className={ styles.titulo }>{ isLogged() ? showUser() : null }  Bienvenido(a) a <br/> Medic Center</h1>
    </div>
  );
};

export default Home;
