import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 800,
    height: 650,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  img: {
    maxWidth: 400
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

const tileData = [
  {
    img:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/02/easter-nest-cake.jpg?itok=-ZAZCCss",
    title: "Image One",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://homecookingadventure.com/images/recipes/caramel_mirror_cake_main.jpg",
    title: "Image Two",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
    title: "Image Three",
    author: "Julien Boyer",
    featured: true
  },

  {
    img:
      "http://homecookingadventure.com/images/recipes/Chocolate_Mirror_Cake_main.jpg",
    title: "Image Four",
    author: "Julien Boyer",
    featured: true
  }
];

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {tileData.map(tile => (
            <ListItem>
              <img className={classes.img} src={tile.img} alt={tile.title} />
              <ListItemText primary= />
            <Typography variant="display3" gutterBottom>
                            {tile.title}
      </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Liste);
