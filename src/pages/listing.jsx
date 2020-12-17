import { makeStyles } from '@material-ui/core/styles';
import watches from "../data.json";
import ListingCard from "../components/card";

const useStyles = makeStyles();

export function Listing(props) {
  const classes = useStyles();
  const listingId = window.location.pathname.split("/").pop();
  const listing = watches.products[listingId - 1];

  console.log(listing.rating)

  return (
    <div className={classes.root}>
      <ListingCard watch={listing} />
    </div>
  )
}