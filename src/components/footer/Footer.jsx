import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {
  return (  
    <div className={styles.container}>
      <div>&copy;2023 Lamania. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={25} height={25} className={styles.icon} alt="Facebook"/>
        <Image src="/2.png" width={25} height={25} className={styles.icon} alt="Instagram"/>
        <Image src="/3.png" width={25} height={25} className={styles.icon} alt="Twitter"/>
        <Image src="/4.png" width={25} height={25} className={styles.icon} alt="Youtube"/>

      </div>
    </div>
  );
}
 
export default Footer;