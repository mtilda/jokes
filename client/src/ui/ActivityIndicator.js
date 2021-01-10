import {
  Dots,
  Levels,
  Sentry,
  Spinner,
  Squares,
  Digital,
  Bounce,
  Windmill
} from 'react-activity/lib';

import 'react-activity/lib/Dots/Dots.css';
import 'react-activity/lib/Levels/Levels.css';
import 'react-activity/lib/Sentry/Sentry.css';
import 'react-activity/lib/Spinner/Spinner.css';
import 'react-activity/lib/Squares/Squares.css';
import 'react-activity/lib/Digital/Digital.css';
import 'react-activity/lib/Bounce/Bounce.css';
import 'react-activity/lib/Windmill/Windmill.css';

export default (props) => props.type === 'dots'
  ? <Dots
      size={props.size}
      color={props.color}
      speed={props.speed}
      animating={props.animating}
    />
  : props.type === 'levels'
    ? <Levels
        size={props.size}
        color={props.color}
        speed={props.speed}
        animating={props.animating}
      />
    : props.type === 'sentry'
      ? <Sentry
          size={props.size}
          color={props.color}
          speed={props.speed}
          animating={props.animating}
        />
      : props.type === 'spinner'
        ? <Spinner
            size={props.size}
            color={props.color}
            speed={props.speed}
            animating={props.animating}
          />
        : props.type === 'squares'
          ? <Squares
              size={props.size}
              color={props.color}
              speed={props.speed}
              animating={props.animating}
            />
          : props.type === 'digital'
            ? <Digital
                size={props.size}
                color={props.color}
                speed={props.speed}
                animating={props.animating}
              />
            : props.type === 'bounce'
              ? <Bounce
                  size={props.size}
                  color={props.color}
                  speed={props.speed}
                  animating={props.animating}
                />
              : props.type === 'windmill'
                ? <Windmill
                    size={props.size}
                    color={props.color}
                    speed={props.speed}
                    animating={props.animating}
                  />
                : <></>;
