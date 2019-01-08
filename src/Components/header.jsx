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

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import red from '@material-ui/core/colors/red';
// const styles = theme => ({
//   card: {
//     maxWidth: 250,
//     maxHeight: '95%'
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// });

// class RecipeReviewCard extends React.Component {
//   state = { expanded: false };

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>

//         <Card className={classes.card}>
//           <CardMedia
//             className={classes.media}
//             image="https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/save-the-date.gif"
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.card}>
//           <CardMedia
//             className={classes.media}
//             image="https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/pycommex.png"
//             title="Paella dish" /></Card>
//       </div>
//     );
//   }
// }

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(RecipeReviewCard);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#BBDEFB',

  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  gridListTile:{
    flexBasis: '50%',
  },
  gridListTile1:{
    flexBasis: '35%',
  },
 });

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
          <GridListTile className={classes.gridListTile} key={"https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/public/pycommex.png"}>
            <img src={"https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/public/pycommex.png"} alt={"py"} />
          </GridListTile>
          <GridListTile className={classes.gridListTile1} key={"https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/save-the-date.gif"}>
            <img src={"https://raw.githubusercontent.com/kpazfagundes/pycommunities/master/src/Images/save-the-date.gif"} alt={"save"} />
          </GridListTile>
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
