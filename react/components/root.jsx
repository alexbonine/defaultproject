import PropTypes from 'prop-types';

const Root = ({ to }) => {
  const text = `Hello, ${to}!`;

  return (
    <div className='text'>
      {text}
    </div>
  );
};

Root.propTypes = {
  to: PropTypes.string,
};

Root.defaultProps = {
  to: 'world',
};

export default Root;
