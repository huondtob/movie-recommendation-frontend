/**
 * @summary   Register container for redux data connection
 * @author    Kevin Gasser, Simon Müller, Tobias Huonder
*/

import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';

export default connect()(RegisterForm);
