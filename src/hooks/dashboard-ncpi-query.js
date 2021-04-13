import {useStaticQuery, graphql} from 'gatsby';

export const DashboardNCPIStaticQuery = () => {
    const {allDashboardNcpi} = useStaticQuery(
        graphql`
        query DashboardNCPIStaticQuery {
          allDashboardNcpi {
            edges {
              node {
                consentCodes
                dataTypes
                dbGapIdAccession
                diseases
                gapId {
                  studyUrl
                  gapIdDisplay
                }
                meshCodes
                platform
                platforms
                studyName
                subjectsTotal
              }
            }
          }
        }
    `
    );
    return allDashboardNcpi.edges.map(n => n.node);
};
