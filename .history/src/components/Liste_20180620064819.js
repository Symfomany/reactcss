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
import Typography from "@material-ui/core/Typography";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";

import "velocity-animate";
import "velocity-animate/velocity.ui";

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
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 100);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <VelocityTransitionGroup
            enter={
              {
                animation: "transition.slideLeftIn",
                stagger: "200",
                duration: "400"
              } // velocity-animate
            }
            leave={{ animation: "transition.slideLeftOut", backwards: "350" }}
          >
            {this.state.visible &&
              tileData.map(tile => (
                <ListItem>
                  <img
                    className={classes.img}
                    src={tile.img}
                    alt={tile.title}
                  />
                  <Typography variant="display1">{tile.title}</Typography>
                  <Typography variant="caption">
                    Etape 1 Mélanger la farine, le sucre, la levure et le sel.
                    Ajouter les oeufs et l'huile. Mélanger rapidement jusqu'à
                    obtention d'une pate à peu près homogène. Etape 2 Avec une
                    rappe ou un zesteur, récupérer le zeste du citron, à ajouter
                    à la pâte. Etape 3 Presser le citron et verser le jus dans
                    le mélange. Si possible, ajouter la pulpe (mais pas les
                    pépins !). Etape 4 Mélanger jusqu'à obtention d'une pâte
                    onctueuse et homogène. Etape 5 Beurrer un plat à gateau et y
                    verser la pâte. Etape 6 Cuire au four pendant 25 min environ
                    à 200°C (thermostat 6-7).
                  </Typography>
                </ListItem>
              ))}
          </VelocityTransitionGroup>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Liste);
