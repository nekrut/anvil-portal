/**
 * The AnVIL
 * https://www.anvilproject.org
 * Custom plugin generating a csv file reporting on AnVIL studies.
 */

// Core dependencies
const path = require("path");

// App dependencies
const {generateReportAnVILStudies} = require(path.resolve(__dirname, "dashboard-report-anvil-studies.service.js"));

exports.onPostBootstrap = ({getNodesByType}) => {

    /* Get the studies. */
    const studies = getNodesByType("Study");

    /* Generate a csv report on the AnVIL studies. */
    generateReportAnVILStudies(studies);
};
