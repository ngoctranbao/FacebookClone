import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faDesktop, faHouse, faMagnifyingGlass, faUserGroup,faStore, faUsersLine, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger } from'@fortawesome/free-brands-svg-icons';
import './DashBar.css'
import { Row, Col } from 'antd';

const Dashboard = () => {
    return (
      <Row className='dash_bar'>
          <Col>
            <FontAwesomeIcon icon={faFacebook} className='facebook-item'/>
            <FontAwesomeIcon icon={faMagnifyingGlass}  className='dashbar-item'/>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faHouse}  className='navigate-item'/>
            <FontAwesomeIcon icon={faUserGroup}  className='navigate-item'/>
            <FontAwesomeIcon icon={faDesktop}  className='navigate-item'/>
            <FontAwesomeIcon icon={faStore}  className='navigate-item'/>
            <FontAwesomeIcon icon={faUsersLine}  className='navigate-item'/>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faGripVertical}  className='dashbar-item'/>
            <FontAwesomeIcon icon={faFacebookMessenger}  className='dashbar-item'/>
            <FontAwesomeIcon icon={faBell}  className='dashbar-item'/>
          </Col>
          {/* <Link to='/'>
          </Link>
          <Link to='/friends'>
          </Link>
          <Link to='/watch'>
          </Link>
          <Link to='/*'>
          </Link>
          <Link to='/messages'>
          </Link> */}
      </Row>
    )
}

export default Dashboard