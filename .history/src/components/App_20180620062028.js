import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// MUIThemeProvider voir palette dans les props
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24}>
          {[1, 2, 3].map(elt => (
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="http://medias.psychologies.com/storage/images/dictionnaire-des-reves/reptiles/2442012-3-fre-FR/Reptiles_imagePanoramique647_286.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <header className="App-header">
          <StyledButton color="info">Niceeee Styled Button</StyledButton>
          <Button variant="contained" color="primary">
            <Icon>face</Icon> Hello World
          </Button>
          <Button variant="contained" color="secondary">
            Second Boutton
          </Button>
        </header>

        <MyComponent />

        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        {/*<SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />*/}

        <div>
          <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <Button variant="contained" onClick={this.handleClick}>
          Open Popover
        </Button>
        <Popover
          open={Boolean(this.anchorEl)}
          anchorEl={this.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={Number(40)}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                      This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                      Paper can be used to build surface
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <br />

        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={16}
              alignItems="center"
              direction="row"
              justify="center"
            >
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper
                    className={classes.paper}
                    style={{
                      paddingTop: (value + 1) * 10,
                      paddingBottom: (value + 1) * 10
                    }}
                  >
                    {`Cell ${value + 1}`}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
