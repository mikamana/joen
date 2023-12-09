import LiWrap from "./components/LiWrap";
import styles from "./style.module.css";
import NewStyles from "./new.module.css";
// import New from "./New";



function App() {

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.modal}>
          <nav className={styles.nav}>
            <div className={styles.mode_icon}>
            </div>
            <ul className={styles.nav_list}>
              <LiWrap list={["aa", "bb", "cc"]} />
            </ul>
          </nav>
          <ul className={NewStyles.new_list}>
            <LiWrap list={["dd", "bb", "cc"]} />
          </ul>
          {/* <New /> */}
        </div>
      </div >
    </>
  );
}

export default App;
