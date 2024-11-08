import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faDesktop, faHouse, faMagnifyingGlass, faUserGroup,faStore, faUsersLine, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger } from'@fortawesome/free-brands-svg-icons';
import './DashBar.css'
import { Row, Col } from 'antd';
import { SocketContext } from '../providers/socketProviders';
import { useContext } from 'react';


const Dashboard = () => {
    const { roomChats } = useContext(SocketContext);

    return (
      <Row className='dash_bar'>
          <Col>
              <Link to='/'>
            <FontAwesomeIcon icon={faFacebook} className='facebook-item'/>
            </Link>
            <FontAwesomeIcon icon={faMagnifyingGlass}  className='dashbar-item'/>
          </Col>
          <Col>
            <Link to='/'>
            <FontAwesomeIcon icon={faHouse}  className='navigate-item'/>
            </Link>
          <Link to='/friends'> 
            <FontAwesomeIcon icon={faUserGroup}  className='navigate-item'/>
          </Link>
          <Link to='/watch'>
            <FontAwesomeIcon icon={faDesktop}  className='navigate-item'/>
          </Link>
          <Link to='/*'>
            <FontAwesomeIcon icon={faStore}  className='navigate-item'/>
          </Link>          
          <Link to='/*'>
            <FontAwesomeIcon icon={faUsersLine}  className='navigate-item'/>
          </Link>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faGripVertical}  className='dashbar-item'/>
            { roomChats && roomChats.length > 0 
              ? (
                  <Link to={`/messages/${roomChats[0].id}`}>
                    <FontAwesomeIcon icon={faFacebookMessenger} className='dashbar-item' />
                  </Link>
                )
              : (
                  <FontAwesomeIcon icon={faFacebookMessenger} className='dashbar-item' />
                )
            }
            <FontAwesomeIcon icon={faBell}  className='dashbar-item'/>
          </Col>
      </Row>
    )
}

export default Dashboard