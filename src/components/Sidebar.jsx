import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = {
    'auth': {
      icon: 'fas fa-lock',
      title: 'Authentication',
      pages: ['Login', 'Sign Up', 'Forgot Password']
    },
    'home': {
      icon: 'fas fa-home',
      title: 'Home Page',
      pages: ['New Users', 'Users with lists', 'App Menu']
    },
    'configuration': {
      icon: 'fas fa-cog',
      title: 'Configuration',
      pages: ['Basic Settings', 'Advanced Options', 'Environment Setup']
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: '250px' }}>
      <ul className="nav flex-column">
        {Object.entries(categories).map(([key, category]) => (
          <li key={key} className="nav-item mb-2">
            <div
              className="nav-link d-flex align-items-center cursor-pointer"
              onClick={() => toggleCategory(key)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`${category.icon} me-2`}></i>
              {category.title}
              <i className={`fas fa-chevron-${expandedCategories[key] ? 'down' : 'right'} ms-auto`}></i>
            </div>
            {expandedCategories[key] && (
              <ul className="nav flex-column ms-3 mt-1">
                {category.pages.map((page) => (
                  <li key={page} className="nav-item">
                    <Link
                      to={`/category/${key}/${page.toLowerCase().replace(/\s+/g, '-')}`}
                      className="nav-link py-1"
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