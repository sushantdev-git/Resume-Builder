import styles from "./NavBar.module.css";
import { MdBuild } from "react-icons/md";


const NavBar=()=>{
    return( 
        <>
            <nav className={styles.NavBar}>
                <div className={styles.LogoName}>
                    <MdBuild className={styles.logo} size={30} />
                    <h2 className={styles.Name}>Resume Builder</h2>
                </div>
                {/* <h2 className={styles.Greet}>Welcome Priyanshu Garg</h2> */}
            </nav>
        </>
    );
}
export default NavBar