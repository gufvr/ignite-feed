import styles from "./Avatar.module.css";
import PropTypes from "prop-types";

export function Avatar({ hasBorder = true, src }) {
return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};
