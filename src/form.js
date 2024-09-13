import React, { useState } from 'react';

const Form = () => {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9fafb',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e0e0e0',
      padding: '20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    userProfile: {
      marginBottom: '30px',
      textAlign: 'center',
    },
    userAvatar: {
      fontSize: '30px',
      fontWeight: 'bold',
      fontSize: '16px',
      marginRight:'120px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
      marginBottom:'150px',
    },
    navItem: {
      padding: '10px 15px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
      color: '#555',
      transition: 'background-color 0.3s ease',
      marginBottom: '10px',
    },
    navItemHover: {
      backgroundColor: '#e0f0ff', 
      color: '#000', 
    },
    
    footer: {
      textAlign: 'center',
      fontSize: '12px',
      color: '#777',
    },
    main: {
      flexGrow: 1,
      backgroundColor: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
    },
    dashboardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
    },
    headerIcons: {
      display: 'flex',
      alignItems: 'center',
    },
    searchInput: {
      padding: '8px 12px',
      borderRadius: '20px',
      border: '1px solid #ccc',
      marginRight: '15px',
    },
    notificationIcon: {
      fontSize: '20px',
      cursor: 'pointer',
    },
    content: {
      flexGrow: 1,
      padding: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '20px',
    },
    tableHeader: {
      backgroundColor: '#f8f8f8',
      textAlign: 'left',
      fontSize: '14px',
    },
    tableCell: {
      padding: '12px 15px',
      borderBottom: '1px solid #e0e0e0',
      fontSize: '14px',
      color: '#333',
    },
    tableRow: {
      backgroundColor: '#f9fafb',
    },
  };

  // Hover state management
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.sidebar}>
        <div style={styles.userProfile}>
          <div style={styles.userAvatar}>👤 Super Admin</div>
        </div>
        <nav>
          <ul style={styles.navList}>
            {['Overview', 'Event Organizers', 'Event Status', 'Registrations', 'Forms', 'Account'].map(
              (item, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.navItem,
                    ...(hoveredItem === index && styles.navItemHover),
                    ...(item === 'Registrations' && styles.activeNavItem),
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>
        <footer style={styles.footer}>
          <div>Powered by Anginat Events</div>
        </footer>
      </div>

      
      <div style={styles.main}>
        <div style={styles.header}>
          <div style={styles.dashboardTitle}>Dashboard</div>
          <div style={styles.headerIcons}>
            <input type="text" placeholder="Search                       " style={styles.searchInput} />
            <span style={styles.notificationIcon}>🔔</span>
          </div>
        </div>

        <div style={styles.content}>
          <h3>Forms Overview</h3>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableCell}></th>
                <th style={styles.tableCell}>Name</th>
                <th style={styles.tableCell}>Event Organizers</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Contact</td>
                <td style={styles.tableCell}>-</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Leads</td>
                <td style={styles.tableCell}>-</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Registration</td>
                <td style={styles.tableCell}>-</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Onsite</td>
                <td style={styles.tableCell}>-</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Form Name</td>
                <td style={styles.tableCell}>-</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.tableCell}><input type="checkbox" /></td>
                <td style={styles.tableCell}>Form Name</td>
                <td style={styles.tableCell}>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
