// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
        <div style={styles.container}>
                    <ul style={styles.ul}>
                            <li style={styles.li}>
                            <Link href="/">Home</Link>
                            </li>
                            <li style={styles.li}>
                            <Link href="/About">About</Link>
                            </li>
                            <li style={styles.li}>
                            <Link href="/contact">Contact</Link>
                            </li>
                    </ul>
            <div style={styles.right}>
                        <Link href="/Login" style={styles.ul}>
                        Login
                        </Link>
            </div>
        </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#333',
    color: '#fff',
    padding: '1rem',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    marginRight: '1rem',
  },
  right:{
    display:"flex",
    alignItems:"center"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

export default Navbar;
