export const styles = {
  container: {
    fontFamily: "'Nunito', sans-serif",
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: '60px'
  },
  mainContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    background: 'white',
    borderRadius: '25px',
    padding: '25px 30px',
    marginBottom: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    border: '2px solid #F5F5F5'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  logoIcon: {
    width: '65px',
    height: '65px',
    background: 'linear-gradient(135deg, #FF6D00 0%, #FFEB3B 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: 'white',
    boxShadow: '0 10px 25px rgba(255, 109, 0, 0.3)'
  },
  logoText: {
    background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2.8em',
    margin: 0,
    fontWeight: '800',
    fontFamily: "'Nunito', sans-serif"
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    background: 'linear-gradient(135deg, #4FC3F7 0%, #81C784 100%)',
    padding: '12px 25px',
    borderRadius: '30px',
    color: 'white',
    fontWeight: '700',
    fontSize: '16px',
    boxShadow: '0 10px 25px rgba(79, 195, 247, 0.3)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  navTabs: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    background: 'white',
    padding: '15px',
    borderRadius: '25px',
    border: '2px solid #F5F5F5',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
  },
  tab: {
    background: '#F5F5F5',
    border: 'none',
    color: 'black',
    padding: '12px 20px',
    borderRadius: '20px',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap'
  },
  tabActive: {
    background: 'linear-gradient(135deg, #FF6D00 0%, #FFEB3B 100%)',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 30px rgba(255, 109, 0, 0.4)'
  },
  contentArea: {
    background: 'white',
    borderRadius: '25px',
    padding: '35px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    minHeight: '500px',
    border: '2px solid #F5F5F5'
  },
  welcomeSection: {
    textAlign: 'center',
    marginBottom: '80px',
    padding: '40px 20px'
  },
  welcomeTitle: {
    fontSize: '2.8em',
    background: 'linear-gradient(135deg, #FF6D00 0%, #4FC3F7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px',
    fontWeight: '800',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '1.2'
  },
  welcomeDescription: {
    fontSize: '1.4em',
    color: '#666',
    lineHeight: '1.8',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Nunito', sans-serif",
    padding: '0 20px'
  },
  actionCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '40px',
    marginBottom: '80px',
    padding: '0 20px'
  },
  card: {
    borderRadius: '25px',
    padding: '45px 35px',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Nunito', sans-serif",
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardIcon: {
    fontSize: '4.5em',
    marginBottom: '20px',
    display: 'block',
    filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))'
  },
  cardTitle: {
    fontSize: '1.9em',
    marginBottom: '15px',
    fontWeight: '700',
    fontFamily: "'Nunito', sans-serif"
  },
  cardDescription: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    opacity: '0.95',
    fontFamily: "'Nunito', sans-serif"
  },
  quickActionsSection: {
    marginTop: '60px',
    padding: '0 20px'
  },
  quickActionsTitle: {
    fontSize: '2.2em',
    fontWeight: '700',
    color: '#333',
    marginBottom: '40px',
    textAlign: 'center',
    fontFamily: "'Nunito', sans-serif"
  },
  quickActionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px'
  },
  sectionTitle: {
    fontSize: '2.5em',
    fontWeight: '700',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
    fontFamily: "'Nunito', sans-serif"
  },
  achievementsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginBottom: '40px'
  },
  achievementCard: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  achievementIcon: {
    fontSize: '3em',
    display: 'block',
    marginBottom: '15px'
  },
  achievementDate: {
    fontSize: '0.9em',
    opacity: '0.8',
    fontStyle: 'italic'
  },
  statsSection: {
    marginTop: '40px',
    padding: '30px',
    background: '#f8f9fa',
    borderRadius: '20px'
  },
  statsTitle: {
    fontSize: '1.8em',
    fontWeight: '600',
    color: '#333',
    marginBottom: '25px',
    textAlign: 'center',
    fontFamily: "'Nunito', sans-serif"
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px'
  },
  statCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  statNumber: {
    fontSize: '2.5em',
    fontWeight: '800',
    color: '#FF6D00',
    fontFamily: "'Nunito', sans-serif"
  },
  statLabel: {
    fontSize: '1em',
    color: '#666',
    fontWeight: '600',
    fontFamily: "'Nunito', sans-serif"
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px'
  },
  loadingSpinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #FF6D00',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loadingText: {
    fontSize: '1.2em',
    color: '#666',
    fontFamily: "'Nunito', sans-serif"
  },
logoutButton: {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 50%, #FFB74D 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '50px',
  padding: '16px 32px',
  fontSize: '16px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  zIndex: 1000,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
  overflow: 'hidden',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(255, 107, 53, 0.6)',
    background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 50%, #FFAB40 100%)',
  },
  
  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.5)',
  }
},
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  sectionContent: {
    marginTop: '20px'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  }
};