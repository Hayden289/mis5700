import { makeStyles } from '@material-ui/core/styles';
import watches from "../data.json";
import ListingCard from "../components/card";
import CommentList from "../components/list"

const useStyles = makeStyles();

export function Listing(props) {
  const classes = useStyles();
  const listingId = window.location.hash.split("/").pop();
  const listing = watches.products[listingId - 1];

  console.log(window.location)

  return (
    <div className={classes.root}>
      <ListingCard watch={listing} />
      <CommentList comments={listing.comments} />
    </div>
  )
}