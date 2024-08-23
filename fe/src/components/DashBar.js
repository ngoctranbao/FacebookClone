import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faDesktop, faHouse, faMagnifyingGlass, faUserGroup,faStore } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger } from'@fortawesome/free-brands-svg-icons';
import './DashBar.css'
import { Row } from 'antd';

const Dashboard = () => {
    return (
      <Row style={{width: "100%", position: "absolute", backgroundColor: "yellow", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute"}}>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {/* <Link to='/'>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to='/friends'>
            <FontAwesomeIcon icon={faUserGroup} />
          </Link>
          <Link to='/watch'>
            <FontAwesomeIcon icon={faDesktop} />
          </Link>
          <Link to='/*'>
            <FontAwesomeIcon icon={faStore} />
          </Link>
          <Link to='/messages'>
              <FontAwesomeIcon icon={faFacebookMessenger} />
          </Link> */}
          <FontAwesomeIcon icon={faBell} />
      </Row>
    )
}

export default Dashboard