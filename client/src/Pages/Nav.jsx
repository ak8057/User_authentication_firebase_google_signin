import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const options = [
    {
      id: 0,
      text: "How we work",
    },
    {
      id: 1,
      text: "Blog",
    },
    {
      id: 2,
      text: "Account",
    },
  ];

  const listOptions = options.map((option) => {
    return (
      <li key={option.id}>
        {" "}
        <a href="#" className={styles.option}>
          {option.text}
        </a>{" "}
      </li>
    );
  });

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{listOptions}</ul>
      <button className={styles.view_plans_btn_bar} onClick={handleNavigate}>
        Get Started
      </button>
    </nav>
  );
};

export default Nav;
