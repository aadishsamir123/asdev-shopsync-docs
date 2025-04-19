import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css'

function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = {
    'auth': {
      icon: 'fas fa-lock',
      title: 'Authentication',
      pages: ['Login', 'Sign Up', 'Forgot Password']
    },
    'main': {
      icon: 'fas fa-home',
      title: 'Home Page',
      pages: ['New Users', 'Users with lists', 'App Menu']
    },
    'listopt': {
      icon: 'fas fa-cog',
      title: 'List Options',
      pages: ['Share List', 'Export List', 'Rename list(Owner-Only)', 'Delete List(Owner-Only)']
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        {Object.entries(categories).map(([key, category]) => (
          <li key={key} className={styles.navItem}>
            <div
              className={`${styles.categoryHeader} ${expandedCategories[key] ? styles.expanded : ''}`}
              onClick={() => toggleCategory(key)}
            >
              <span className={styles.categoryIcon}>
                <i className={category.icon}></i>
              </span>
              <span className={styles.categoryTitle}>{category.title}</span>
              <i className={`fas fa-chevron-${expandedCategories[key] ? 'down' : 'right'} ${styles.arrow}`}></i>
            </div>
            {expandedCategories[key] && (
              <ul className={styles.subMenu}>
                {category.pages.map((page) => (
                  <li key={page} className={styles.subMenuItem}>
                    <Link
                      to={`/category/${key}/${page.toLowerCase().replace(/\s+/g, '-')}`}
                      className={styles.subMenuLink}
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;