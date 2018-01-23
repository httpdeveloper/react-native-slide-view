import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, View } from 'react-native';

const defaultProps = {
  delay: 0,
  from: 10,
  toValue: 1,
  direction: 1, //1 Right to Left, -1 Left to Right,
  duration: 160,
  animate: false,
  translateAxis: 'x',
  onAfterSlide: () => {}
};

class SlideView extends React.Component {
  constructor(props) {
    super(props);
    this._animateSlideView = new Animated.Value(0);
  }

  componentDidMount() {
    this._animate();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.animate) {
      this._animate();
    }
  }

  _animate = () => {
    Animated.timing(this._animateSlideView, {
      toValue: this._getToValue(),
      duration: this.props.duration,
      easing: Easing.easeInOutQuart
    }).start(({ finished }) => {
      if (!finished) return;
      this._animateSlideView = new Animated.Value(0);
      this.props.onAfterSlide && this.props.onAfterSlide();
    });
  };

  _getToValue = () => {
    const { toValue, delay } = this.props;

    if (delay > 0) {
      return delay + 500;
    }

    return toValue;
  };

  _slideView = () => {
    const { from, delay, direction } = this.props;
    const translateAxis = this.props.translateAxis === 'y' ? 'translateY' : 'translateX';

    return {
      opacity: this._animateSlideView.interpolate({
        inputRange: [delay, this._getToValue()],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      }),
      transform: [
        {
          [translateAxis]: this._animateSlideView.interpolate({
            inputRange: [delay, this._getToValue()],
            outputRange: [direction * from, 0],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  };

  render() {
    if (!this.props.children) return;

    return <Animated.View style={[this.props.style, this.props.from > 0 ? this._slideView() : null]}>{this.props.children}</Animated.View>;
  }
}

SlideView.propTypes = {
  from: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  style: View.propTypes.style,
  onAfterSlide: PropTypes.func,
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([-1, 1]),
  translateAxis: PropTypes.oneOf(['x', 'y'])
};

SlideView.defaultProps = defaultProps;

export default SlideView;
