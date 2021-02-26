/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * Service for reading AnVIL studies and generating csv report.
 */

// Core dependencies
const fs = require("fs");
const fetch = require("node-fetch");
const {parseString} = require("xml2js");

// Template variables
const anVILNote = "anvilproject";
const restrictedAccessURL = "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/GetRestrictedAccess.cgi?study_id=";
const studyKeyIDs = {
    "phs001502.v1.p1": "3630",
    "phs001259.v1.p1": "3217",
    "phs001894.v1.p1": "4231",
    "phs001676.v1.p1": "3896",
    "phs001740.v1.p1": "3974",
    "phs001741.v1.p1": "3975",
    "phs001222.v1.p1": "3171",
    "phs001487.v1.p1": "3601",
    "phs001871.v1.p1": "4194",
    "phs001880.v1.p1": "4207",
    "phs001398.v1.p1": "3423",
    "phs000496.v1.p1": "1825",
    "phs000160.v1.p1": "315",
    "phs001539.v1.p1": "3684",
    "phs001543.v1.p1": "3689",
    "phs000920.v4.p2": "4347",
    "phs001395.v1.p1": "3420",
    "phs001545.v1.p1": "3691",
    "phs001598.v1.p1": "3773",
    "phs001544.v1.p1": "3690",
    "phs001062.v4.p2": "4410",
    "phs001547.v1.p1": "3694",
    "phs000997.v4.p2": "4392",
    "phs001227.v1.p1": "3177",
    "phs001272.v1.p1": "3239",
    "phs000424.v8.p2": "3551"
};

const generateReportAnVILStudies = async function generateReportAnVILStudies(studies) {

    /* Only generate csv if the studies exist. */
    if ( studies ) {

        console.log("*** Generating AnVIL studies report. ***");

        /* Generate the report headings. */
        const reportHeadings = "Study phsID, Public Posting, Data on AnVIL";

        /* Generate fields (of interest) for each study as a string response. */
        /* Concatenate each study with "\n" to format each study as it's own row in the CSV report. */
        /* Field one is whether or not public posting of results is allowed. */
        /* Field two is whether there is a note regarding data available on AnVIL. */
        const fieldsByStudy = await studies
            .filter(study => study.dbGapIdAccession)
            .reduce(async (promise, study) => {

                let acc = await promise;

                /* Build the fetch url. */
                const studyId = study.dbGapIdAccession;
                const studyUrl = `${restrictedAccessURL}${studyId}&study_key=${studyKeyIDs[studyId]}`;

                const [parsedHTML, textHTML] = await fetchStudy(studyUrl),
                    {html} = parsedHTML,
                    {body} = html,
                    {ul} = body;
                const {li: lists} = ul;
                const publicPostingList = lists.find(listEl => JSON.stringify(listEl).includes("Public Posting"));
                const allowed = publicPostingList ? publicPostingList["_"] : "Not Specified";
                const reference = textHTML.includes(anVILNote) ? "Yes" : "No";
                const result = `${studyId}, ${allowed}, ${reference}`;

                return acc.concat("\n", result);
            }, reportHeadings);

        fs.writeFileSync("static/dashboard-report-anvil-studies.csv", fieldsByStudy);
    }
};

/**
 * Fetches the GapId study page specified by URL and returns corresponding raw HTML.
 *
 * @param url
 * @returns {Promise.<*>}
 */
async function fetchStudy(url) {

    try {

        const fetchStudy = await fetch(url);
        const html = await fetchStudy.text();
        const parsedHTML = await parseHTML(html);
        return [parsedHTML, html];
    }
    catch(err) {

        console.log(`Error fetching ${url}`);
    }
}

/**
 * Parses HTML to raw JSON.
 *
 * This is a minor modification of function parseXML due to requiring strict mode as "false".
 * `sax-js` parses tag names to uppercase in this mode. Normalization of tags does not include the attributes "att"
 * and so a separate function has been created to parse the HTML.
 * See https://github.com/Leonidas-from-XIV/node-xml2js/issues/501.
 *
 * @param html
 * @returns {Promise}
 */
function parseHTML(html) {

    return new Promise((resolve, reject) => {

        parseString(html, ({async: true, attrkey: "att", explicitArray: false, normalize: true, normalizeTags: true, strict: false, trim: true}), (err, result) => {

            if (err) {

                reject(err);
            }
            else {

                resolve(result);
            }
        });
    });
}

module.exports.generateReportAnVILStudies = generateReportAnVILStudies;
