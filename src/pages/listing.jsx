import { makeStyles } from '@material-ui/core/styles';
import watches from "../data.json";

const useStyles = makeStyles();

export function Listing(props) {
  const classes = useStyles();
  const listingId = window.location.pathname.split("/").pop();
  const listing = watches.products[listingId - 1];

  return (
    <div className={classes.root}>
      <img src={listing.img} />
    </div>
  )
}