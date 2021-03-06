import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';
import theme from 'universal/styles/theme';
import {ib, overflowTouch} from 'universal/styles/helpers';
import ui from 'universal/styles/ui';
import TeamArchiveHeader from 'universal/modules/teamDashboard/components/TeamArchiveHeader/TeamArchiveHeader';
import TeamProjectCard from 'universal/modules/teamDashboard/components/TeamProjectCard/TeamProjectCard';
import FontAwesome from 'react-fontawesome';
import getRallyLink from 'universal/modules/userDashboard/helpers/getRallyLink';

const iconStyle = {
  ...ib,
  fontSize: ui.iconSize,
  marginRight: '.25rem'
};

const TeamArchive = (props) => {
  const {styles} = TeamArchive;
  const {archivedProjects, dispatch, teamId} = props;
  return (
    <div className={styles.root}>
      <TeamArchiveHeader teamId={teamId}/>
      <div className={styles.body}>
        <div className={styles.scrollable}>
          {archivedProjects.length ?
            <div className={styles.cardGrid}>
              {archivedProjects.map(project =>
                <div className={styles.cardBlock} key={`cardBlockFor${project.id}`}>
                  <TeamProjectCard
                    key={project.id}
                    dispatch={dispatch}
                    form={`archived::${project.id}`}
                    project={project}
                    isArchived
                  />
                </div>
              )}
            </div> :
            <div className={styles.emptyMsg}>
              <FontAwesome name="smile-o" style={iconStyle} />
              <span style={ib}>
                Hi there! There are zero archived projects.
                Nothing to see here. How about a fun rally video?
                {' '}<span className={styles.link}>{getRallyLink()}!</span>
              </span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

TeamArchive.propTypes = {
  archivedProjects: PropTypes.array,
  dispatch: PropTypes.func,
  teamId: PropTypes.string,
  teamMembers: PropTypes.array
};

TeamArchive.styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '0 0 0 1rem',
    width: '100%'
  },

  body: {
    borderTop: `1px solid ${ui.dashBorderColor}`,
    flex: 1,
    position: 'relative'
  },

  scrollable: {
    ...overflowTouch,
    bottom: 0,
    left: 0,
    padding: '1rem 0 0',
    position: 'absolute',
    right: 0,
    top: 0,
  },

  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: ui.projectColumnsMaxWidth,
    width: '100%'
  },

  cardBlock: {
    flex: '0 0 100%',
    padding: '0 1rem .5rem 0',

    '@media (min-width: 40rem)': {
      flex: '0 0 50%'
    },

    '@media (min-width: 60rem)': {
      flex: '0 0 33.3333%'
    },

    '@media (min-width: 80rem)': {
      flex: '0 0 25%'
    },

    '@media (min-width: 100rem)': {
      flex: '0 0 20%'
    }
  },

  emptyMsg: {
    backgroundColor: '#fff',
    border: `1px solid ${theme.palette.mid30l}`,
    borderRadius: '.25rem',
    fontFamily: theme.typography.serif,
    fontSize: theme.typography.s2,
    fontStyle: 'italic',
    display: 'inline-block',
    padding: '1rem'
  },

  link: {
    color: theme.palette.cool
  }
});

export default look(TeamArchive);
