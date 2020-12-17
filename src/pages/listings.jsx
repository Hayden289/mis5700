import { GridList, GridListTile } from "@material-ui/core";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';

let watches = {
  products: [
    {
      name: "Alpine Flats-Student Apartments",
      description: "729 E 900 N, Logan, UT 84321 – Adams",
      img:
        "https://images1.apartments.com/i2/gfrzWB_cNUHGGnkflIzzw2aBG_seOZ57zHY6WBvcEj0/102/alpine-flats-student-apartments-logan-ut-clubhouseoffice.jpg",
      price: 104.99,
      id: 1,
      stars: 3.5
    },
    {
      name: "Wasatch Pointe Apartments",
      description: " 1620 N 200 E, North Logan, UT 84341 – North Logan",
      img:
        "https://images1.apartments.com/i2/JA-h1SObcScSs3CniEI4miJKJnnxSSEfLqcIkHQgowo/102/wasatch-pointe-apartments-north-logan-ut-building-photo.jpg",
      price: 174.99,
      id: 2,
      stars: 1.6666666666666667
    },
    {
      name: "The Factory",
      description:
        "870 N 600 E, Logan, UT 84321 – Adams",
      img:
        "https://images1.apartments.com/i2/adbaxqllkyYyIQYVsnACy3TNq0rhbUcg1FDyUzESrIo/102/the-factory-logan-ut-primary-photo.jpg",
      price: 144.99,
      id: 3,
      stars: 2.75
    },
    {
      name: "Four Seasons Apartments & Townhomes",
      description:
        "140 E 2200 N, North Logan, UT 84341 – North Logan",
      img:
        "https://images1.apartments.com/i2/eNfI2JCRAy_Rnq6c5gYVIxDDeTogO_ZgNht54qbJj-0/102/four-seasons-apartments-townhomes-north-logan-ut-building-photo.jpg",
      price: 144.99,
      id: 3,
      stars: 2.75
    },
    {
      name: "The Factory",
      description:
        "870 N 600 E, Logan, UT 84321 – Adams",
      img:
        "https://images1.apartments.com/i2/adbaxqllkyYyIQYVsnACy3TNq0rhbUcg1FDyUzESrIo/102/the-factory-logan-ut-primary-photo.jpg",
      price: 144.99,
      id: 3,
      stars: 2.75
    },
    {
      name: "The Factory",
      description:
        "870 N 600 E, Logan, UT 84321 – Adams",
      img:
        "https://images1.apartments.com/i2/adbaxqllkyYyIQYVsnACy3TNq0rhbUcg1FDyUzESrIo/102/the-factory-logan-ut-primary-photo.jpg",
      price: 144.99,
      id: 3,
      stars: 2.75
    }
  ],
  count: 8,
  pageNum: 2
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export function Listings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={380} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {watches.products.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}