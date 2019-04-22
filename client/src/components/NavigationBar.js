import React , {Component} from 'react';
import {
    Navbar,
    Nav,
    NavLink,
    NavbarToggler,
    NavbarBrand,
    Collapse
} from 'reactstrap'
import {withAuth} from '@okta/okta-react';
import { Link, withRouter } from 'react-router-dom';
import NavItem from "reactstrap/es/NavItem";

const LoginButton = (props) => <NavLink href='#' {...props}>Login</NavLink>;
const LogoutButton = (props) => <NavLink href='#' {...props}>Logout</NavLink>;

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavBarOpen: false,
            isAuthenticated: false
        }
    }

    componentDidMount() {
        this.checkForAuthentication();
    }

    componentDidUpdate() {
        this.checkForAuthentication();
    }

    checkForAuthentication = async () => {
        const { auth } = this.props;
        const isAuthenticated = await auth.isAuthenticated();

        if (this.state.isAuthenticated !== isAuthenticated) {
            this.setState({ isAuthenticated });
        }
    };

    toggleNavigationBar = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    login = async () => {
        const { location, auth } = this.props;
        await auth.login(location.pathname);
    };

    logout = async () => {
        await this.props.auth.logout('/');
    };

    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand tag={Link} to='/'>
                    EM React
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavigationBar} />
                <Collapse isOpen={this.state.isNavBarOpen} navbar>
                    <Nav navbar className='mr-auto'>
                        <NavItem>
                            <NavLink tag={Link} to='/employees'>Employees</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className='ml-auto'>
                        <NavItem>
                        { this.state.isAuthenticated ?
                            <LogoutButton onClick={this.logout} /> :
                            <LoginButton onClick={this.login} />
                        }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default withRouter(withAuth(NavigationBar));