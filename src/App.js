import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import people from './people';

const styles = theme => ({
  root: {
    width: '95%',
    verticalAlign: 'middle',
    margin: 20,
    backgroundColor: '#4dabf5'
  },
  headingTop: {
    fontSize: theme.typography.pxToRem(18),
    width: '100%',
    flexShrink: 0,
    verticalAlign: 'middle',
    color: '#757575',
    lineHeight: '100px'

  },
  headingTitle: {
    fontSize: theme.typography.pxToRem(18),
    width: '100%',
    flexBasis: '30%',
    flexShrink: 0,
    verticalAlign: 'middle',
    color: '#757575',
    lineHeight: '100px'

  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    width: '100%',
    flexShrink: 0,
    verticalAlign: 'middle',
    color: '#757575',
    lineHeight: '50px',
    flexBasis: '70%',

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    margin: 20,
    width: '80%',

  },
  back1: {
    backgroundColor: '#ffef62'
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
    flexBasis: '20%',
  },

});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel className={classes.back1} expanded={expanded === 'panel0'} onChange={this.handleChange('panel0')}>
          <ExpansionPanelSummary>
            <Typography><Avatar src='./logo.jpg' className={classes.bigAvatar} /></Typography>
            <Typography className={classes.headingTop}>Sobre o evento</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              As comunidades de Python de BH (PyLadies, PyData e PythonBH) se reuniram para fazer o
            PyCommunities Experience no dia 26/01/2019 na CI&T. O evento é sem fins lucrativos, que
            tem como objetivo reunir todas as tribos dessa tecnologia. Vamos compartilhar informações
             e experiências da nossa linguagem favorita que a cada dia vem conquistando cada vez mais
              espaço no mercado, além de abordar outras coisas muito importantes como inclusão e
              diversidade.
              Se você é um PySer que tem um tema bacana que queira compartilhar, submeta sua palestra
               no <a href="https://goo.gl/forms/lHRJr8QZP8NdCMiH2">link</a> e se você ainda não conseguiu pensar
               num tema bacana para compartilhar, vá no evento e nos ajude a fortalecer a comunidade!
               *As inscrições para o evento serão recebidas através da plataforma Meetup, no grupo
               PythonBH (<a href="https://www.meetup.com/pt-BR/PythonMG/">link</a>)
              </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {people.map((person, i) =>
          <ExpansionPanel className={classes.back1} expanded={expanded === 'panel' + (i + 1)} onChange={this.handleChange('panel' + (i + 1))}>
            <ExpansionPanelSummary>
              <Typography><Avatar src={person.imgSrc} className={classes.bigAvatar} /></Typography>
              <Typography className={classes.heading}>{person.name}<br />- {person.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Sobre o(a) palestrante: {person.detail}
              </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
              <Typography>
                Dinâmica da palestra: {person.dinamica}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
        {/* <ExpansionPanel className={classes.back1} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
            <ExpansionPanelSummary>
              <Typography className={classes.headingTop}>Localização: </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <MapContainer/>
            </ExpansionPanelDetails>
          </ExpansionPanel> */}
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);