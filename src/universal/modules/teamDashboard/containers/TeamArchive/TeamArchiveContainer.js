import React, {PropTypes} from 'react';
import {cashay} from 'cashay';
import {connect} from 'react-redux';
import TeamArchive from 'universal/modules/teamDashboard/components/TeamArchive/TeamArchive';

const teamArchiveQuery = `
query {
  archivedProjects(teamId: $teamId) @live {
    id
    content
    status
    teamMemberId
    updatedAt
    teamMember @cached(type: "TeamMember") {
      picture
      preferredName
    }
  }
}`;

// const mutationHandlers = {
//   updateProject(optimisticVariables, queryResponse, currentResponse) {
//     if (optimisticVariables && optimisticVariables.updatedProject.isArchived === false) {
//       const projectId = optimisticVariables.updatedProject.id;
//       const projectIdx = currentResponse.archivedProjects.findIndex(p => p.id === projectId);
//       if (projectIdx !== -1) {
//         currentResponse.archivedProjects.splice(projectIdx, 1);
//         return currentResponse;
//       }
//     }
//     return undefined;
//   }
// };

const mapStateToProps = (state, props) => {
  const {teamId} = props.params;
  const teamArchiveContainer = cashay.query(teamArchiveQuery, {
    op: 'teamArchiveContainer',
    key: teamId,
    variables: {teamId},
    resolveCached: {
      teamMember: (source) => source.teamMemberId
    }
  });
  const {archivedProjects} = teamArchiveContainer.data;
  return {
    archivedProjects
  };
};

const TeamArchiveContainer = (props) => {
  const {archivedProjects, dispatch, params: {teamId}} = props;
  return (
    <TeamArchive
      archivedProjects={archivedProjects}
      teamId={teamId}
      dispatch={dispatch}
    />
  );
};

TeamArchiveContainer.propTypes = {
  archivedProjects: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(TeamArchiveContainer);
