import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from "../components/rating"

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
    maxHeight: 'auto'
  },
});

export default function ListingCard(props) {
  const classes = useStyles();
  const watch = props.watch;

  return (
    <Card className={classes.root}>
      <CardActionArea href={`/listing/${watch.id}`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="580"
          image={watch.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {watch.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {watch.description}
          </Typography>
          <Rating rating={watch.stars} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}