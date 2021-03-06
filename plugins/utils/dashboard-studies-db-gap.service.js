/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service for dbGaP.
 */

// Core dependencies
const fetch = require("node-fetch");
const path = require("path");

// App dependencies
const {cacheFile, readFile, splitContentToContentRows} = require(path.resolve(__dirname, "./dashboard-file-system.service.js"));

// Template dependencies
const fileDBGAPs = "../../db-gap-cache/db-gap-id-accessions.csv";
const studyPath = "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=";

/**
 * Returns the study accession from dbGapId.
 * If no study exists an empty string is returned.
 *
 * @param studyId
 * @returns {Promise.<*>}
 */
const getStudyAccession = async function getStudyAccession(studyId) {

    /* Grab the study accession from cache. */
    const studyAccession = await getCacheDBGAP(studyId);

    /* Return the study accession from cache. */
    if ( studyAccession ) {

        return studyAccession;
    }

    /* Otherwise, fetch the study accession. */
    /* The new study accession will be cached for future use. */
    return await fetchStudyAccession(studyId);
};

/**
 * Returns the study url for the specified study accession.
 *
 * @param studyAccession
 * @returns {*}
 */
const getUrlStudy = function getUrlStudy(studyAccession) {

    if ( studyAccession ) {

        return `${studyPath}${studyAccession}`;
    }

    return "";
};

/**
 * Caches the dbGaP id and accession.
 *
 * @param studyId
 * @param studyAccession
 * @returns {Promise.<void>}
 */
async function cacheDBGAP(studyId, studyAccession) {

    if ( studyAccession ) {

        const content = `${studyId},${studyAccession}\r\n`;
        console.log(`Caching dbGaP for ${studyId}`);

        /* If the file does not exist, it will be created. */
        /* See https://nodejs.org/api/fs.html#fs_file_system_flags {"flag": "as+"}. */
        await cacheFile(fileDBGAPs, content, {"flag": "as+"});
    }
}

/**
 * Returns the fetched study accession for the specified study id.
 *
 * @param studyId
 * @returns {Promise.<string>}
 */
async function fetchStudyAccession(studyId) {

    /* Return the study id. */
    /* dbGaP will redirect to the latest study accession. */
    /* Site redirects to "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=". */
    const url = getUrlStudy(studyId);
    const response = await fetch(url);
    const status = response.status;
    const redirected = response.redirected;

    /* Cache and return the study accession, taken from the redirected url. */
    if ( redirected && status === 200 ) {

        const regex = /.*?study_id=/gi;
        const studyAccession = response.url.replace(regex, "");
        await cacheDBGAP(studyId, studyAccession);

        return studyAccession;
    }
    else {

        console.log(`dbGaP fetch status error ${status} for ${url}`);
    }

    return "";
}

/**
 * Returns the cached study accession for the specified study id.
 *
 * @param studyId
 * @returns {Promise<string | *>}
 */
async function getCacheDBGAP(studyId) {

    /* Grab the dbGaPs from cache. */
    const content = await readFile(fileDBGAPs, "utf8");

    /* Split the file content into rows. */
    const contentRows = splitContentToContentRows(content);

    /* Find the cached study. */
    const cachedStudy = contentRows.find(row => isStudyCached(row, studyId));

    /* If the study is cached, return the accession. */
    if ( cachedStudy ) {

        const [, studyAccession] = cachedStudy.split(",");

        return studyAccession;
    }
}

/**
 * Returns true if the study is cached.
 *
 * @param row
 * @param studyId
 * @returns {boolean}
 */
function isStudyCached(row, studyId) {

    const [dbGapId,] = row.split(",");

    return dbGapId === studyId;
}

module.exports.getStudyAccession = getStudyAccession;
module.exports.getUrlStudy = getUrlStudy;
