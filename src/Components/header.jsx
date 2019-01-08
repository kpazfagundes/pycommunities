// import React, { Component } from "react";
// import WOW from "wowjs";

// class Skills extends Component {
  
//   componentDidMount() {
//     const wow = new WOW.WOW();
//     wow.init();
//   }

//   render() {
//     return (
//       <div>
//        <img src="https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/save-the-date.gif"/>
//       </div>
//     )
//    }
// }
// export default Skills;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import red from '@material-ui/core/colors/red';
const styles = theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/save-the-date.gif"
          title="Paella dish"
        />
        </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
