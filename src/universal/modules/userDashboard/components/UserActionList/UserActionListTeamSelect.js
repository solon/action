import React from 'react';
import look, {StyleSheet} from 'react-look';
import theme from 'universal/styles/theme';
import {ib} from 'universal/styles/helpers';
import ui from 'universal/styles/ui';
import FontAwesome from 'react-fontawesome';
import Type from 'universal/components/Type/Type';

const height = '1.25rem';
const lineHeight = height;

const iconStyle = {
  ...ib,
  fontSize: ui.iconSize,
  height,
  lineHeight,
  marginRight: '.3125rem',
  textAlign: 'center',
  verticalAlign: 'middle',
  width: '1rem'
};

const UserActionListTeamSelect = () => {
  const {styles} = UserActionListTeamSelect;
  const teams = [
    'Parabol',
    'Engineering',
    'Core',
    'Product',
    'Design'
  ];

  const cancelAddAction = () =>
    // TODO: if a user clicks the cancel icon, or anywhere else in the DOM, then cancel (TA)
    console.log('cancelAddAction()');

  const selectTeam = () =>
    // TODO: when a user selects a team, a new action is autoFocused at the top of the list.
    //       the list isAdding is false and the Add New control is visible so that the user
    //       can add an action again as soon as they blur the content they wrote for the new action (TA)
    console.log('selectTeam()');

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <FontAwesome className={styles.cancel} name="times-circle" onClick={cancelAddAction} style={iconStyle} title="Cancel" />
        <Type bold display="inlineBlock" lineHeight={lineHeight} scale="s3" width="auto">
          Select a Team:
        </Type>
      </div>
      <div className={styles.controls}>
        {teams.map(team =>
          <div className={styles.control} onClick={selectTeam} title={`Select team: ${team}`}>{team}</div>
        )}
      </div>
    </div>
  );
};

UserActionListTeamSelect.styles = StyleSheet.create({
  root: {
    width: '100%'
  },

  header: {
    fontSize: 0,
    padding: '.25rem .875rem .25rem .4375rem'
  },

  cancel: {
    color: theme.palette.mid,
    cursor: 'pointer',

    ':hover': {
      color: theme.palette.dark
    },
    ':focus': {
      color: theme.palette.dark
    }
  },

  controls: {
    padding: '0 .5rem .5rem 1.75rem'
  },

  control: {
    color: theme.palette.warm,
    cursor: 'pointer',
    lineHeight: '1.5rem',
    padding: '.25rem 0',

    ':hover': {
      textDecoration: 'underline'
    },
    ':focus': {
      textDecoration: 'underline'
    }
  }
});

export default look(UserActionListTeamSelect);