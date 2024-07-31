import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner({ black }) {
  return <span className={black ? classes.blackLoader : classes.loader}></span>;
}
