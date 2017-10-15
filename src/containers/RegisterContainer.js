/**
 * @summary   Register container for redux state connection
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';

export default connect()(RegisterForm);
