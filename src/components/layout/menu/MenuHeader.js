import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../reducers/menu';
import PropTypes from 'prop-types';

/*eslint-disable */
class MenuHeader extends React.Component {

  componentWillMount () {
    this.props.fetchMenu();
  }
  
  render () {
    const { menu } = this.props;
    return (
      <div className="header-menu header-menu">
        {menu.length && <ul className="p-0 m-0 overflow-hidden w-100 d-block">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.href}
                className="text-uppercase">{item.name}</a>
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    menu: state.menuHeader,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchMenu: () => {
      dispatch(Action.fetchMenu());
    }
  };
};

MenuHeader.propTypes = {
  menuHeader: PropTypes.array,
  fetchMenu: PropTypes.func,
  menu: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuHeader);