import styles from "./NavBar.module.css";
import { MdBuild } from "react-icons/md";

96
const NavBar=()=>{
    return( 
    <>
        <nav className={styles.NavBar}>
        <div className={styles.LogoName}>
            <MdBuild className={styles.logo} size={30} />
            <p className={styles.Name}>Resume Builder</p>
        </div>
        <p className={styles.Greet}>Welcome Priyanshu Garg</p>
        </nav>
    </>
    );
}
export default NavBar