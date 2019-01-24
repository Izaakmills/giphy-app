import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ShareIcon from '@material-ui/icons/Share';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

  const tileData = [
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
      share: "Link"
    },
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
    },
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
    },
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
    },
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
    },
    {
      img: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: 'Spongebob',
      author: 'Izaak Mills',
    },
   
  ];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          {/* <ListSubheader component="div"><h2>Giphs</h2></ListSubheader> */}
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>

                  <ShareIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);