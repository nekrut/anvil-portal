---
draft: false
---

# Research Use Cases

<hero>We are collecting specific research use cases in this section that can drive our proof of concept.</hero>


## Need Title: e.g. Improve Detection of de novo Mutations in Family Trios using Graph Genome Based Variant Calling

**Platforms**: NHLBI BioData Catalyst, Kids First DRC

**Researchers**: Bruce Gelb (Mount Sinai)

**Interop Contact**: Allison Heath

### Analysis Question

The Pediatric Cardiovascular Genetics Consortium (PCGC) is committed to defining the molecular mechanisms for Congenital Heart Disease. They have developed a novel method to identify de novo mutations in clinical probands by post-processing the family genotypes posited by the GATK whole genome sequencing (WGS) pipeline. This method has a precision rate of 95% for de novo SNVs as well as short INDELs (validated by Sanger sequencing of the putative calls).
 
Seven Bridges Genomics, Inc. (SBG) has recently described Pan-genome Graph References for improved WGS analyses and presented the use of personalized genome graphs for more consistent variant calling in family trios (ASHG 2019).
  
  This collaboration aims to develop a more accurate pipeline to detect de novo mutations in family trios by utilizing the consistent calls and other graph-related information produced by the SBG graph tools in the PCGC pipeline.

### Analysis Plan

1. Obtain confirmation from appropriate NIH Data Access Committees (NHLBI & Kids First) that these datasets can be used/combined in this manner.
1. Identify subset of trios with validated de novo variants from PCGC to use as “gold standard” for new graph-based methods.
1. Refine and improve methods utilizing the validated data on Cavatica.
1. Expand to run in Cavatica and BDCatalyst across entire PCGC cohort.
1. Provide new PCGC callset to approved researchers for analysis and further community validation / potential method refinement.
1. If improvement, run across Kids First and TOPMed studies of interest to provide callsets to the community
    1. Potentially any trio-based AnVIL datasets, e.g. CMGs.

### Interop Requirements
1. Search for data in PCGC on the Kids First DRC and export to BDCatalyst for analysis.


## Need Title

**Platforms**: NHLBI BioData Catalyst, Kids First DRC

**Researchers**: Elizabeth Goldmuntz and Deanne Taylor (CHOP), A.J. Agopian (UTH), Ryan Urbanowicz (UPenn)

**Interop Contact**: Allison Heath

### Analysis Question

Congenital heart defects (CHDs) are important birth defects to study due to their high mortality, occurring in about 1% of all live births and 10% of still births. Many individuals born with CHDs need early medical interventions to survive. In spite of the impact CHDs have on public health, little is known about their etiology. However, CHDs have been shown to have a genetic component, evident by their recurrence risk (~5%) in siblings.
 
 In this research, we intend to study the genetic bases of congenital heart defects using a variant and gene set analysis approaches, machine learning methods, amongst other statistical and genetic analysis models to help fill in the gaps that exist in the understanding of the etiology of CHDs.
  
 This will help the scientific community to better understand cardiogenesis and to better assess risk of disease. Access to this whole genome sequence data will facilitate our work.

### Analysis Plan

1. Obtain confirmation from appropriate NIH Data Access Committees that these datasets can be used/combined in this manner.
1. Find and aggregate all relevant CHD data into one workspace (PCGC whole exome, PCGC whole genome, locally sequenced data).
1. Run Kids First DRC pipelines (currently in CWL on Cavatica) across data that has not already been harmonized to GRChr38.
1. Perform joint genotyping across whole exome data.
1. Perform joint genotyping across whole genome data.
1. Aggregate and harmonize phenotypic data for analysis.
    1. E.g. severity of defect.
1. Bring own custom methods for gene set analysis and machine learning for downstream analysis.

## NHGRI AnVIL + Kids First DRC

**Interop Contact**: Allison Heath

**Researchers**: Batsal Devkota, Ian Kranz (CHOP)

### Analysis Question

We are analyzing genomic data from patients with non-syndromic sensorineural hearing loss. Our goal is to identify novel candidate genes as well as compare the diagnostic utility of the AUDIOME—a two-tiered, exome-based test including targeted analysis of 123 known hearing loss genes to whole-exome analysis. We would like to identify all participants with hearing loss across the datasets to combine with data we have generated to increase our power. We are aware of cases in the Kids First datasets as well as in the PediSeq (part of CSER), but anticipate more cases are available, especially in AnVIL datasets. We would like to expand this analysis to whole genome data, if available, as it will help us explore regulatory regions, copy number variants and structural variants. In the future, understanding hearing loss in the context of syndromic disorders could be of interest, including our Cornelia de Lange syndrome cohort currently undergoing sequencing as part of Kids First.

### Analysis Plan

1. Obtain confirmation from appropriate NIH Data Access Committees (e.g., Kids First ) that these datasets can be used/combined in this manner.
1. Identify all cases with non-syndromic sensorineural hearing loss across all platforms
1. For exome data, utilize in the cloud platforms ExomeDepth and XHMM to analyze rare CNVs as well as using GEMINI to evaluate the SNV burden per gene, in our cohort as compared to unaffected controls.

## NHGRI AnVIL + Kids First DRC + NHLBI BioData Catalyst

**Interop Contact**: Allison Heath

**Researchers**: Any investigator that can leverage other datasets as controls for analysis, has been mentioned by a number of Kids First X01 investigators. For example, TOPMed and/or GTEx could be good controls for Kids First studies, mentioned most recently by Ali Gharavi (Columbia), studying structural defects of kidney and urinary tract. Unaffected family members or germline from cancer cohorts in Kids First could be good controls for other studies.

### Analysis Question

Appropriate controls are needed for various case/control analysis, such as burden testing. Ideally this is a healthy population with similar ancestry, but cohorts without the phenotype/disease of interest are often reasonable substitutes.

### Analysis Plan

1. Obtain confirmation from appropriate NIH Data Access Committees (e.g., Kids First ) that these datasets can be used/combined in this manner.
1. Identify studies/participants with appropriate exclusion criteria that have the appropriate consent to be used as controls.
1. Determine the pipeline used to call the variants to make sure they’re co-analyzable.
    1. If not, run appropriate pipelines.

## NCI CRDC + NHGRI AnVIL

**Interop Contact**: Jack DiGiovanna

**Researcher**: Wilson McKerrow [PDC (CRDC), GDC (CRDC), and GTEx (AnVIL) data]

### Analysis Question

The Fenyo lab is studying how retrotransposons work, which is fundamentally a multi-omic question. Specifically, the insertion occurs in the genome; this insertion can change the transcriptome and resulting in altered protein expression. This research project involves testing a hypothesis that the activity of a specific retrotransposon, LINE1, is different in tumors than in normal cells.
 
 In order to test this hypothesis, the researcher requires datasets that have matching samples of DNA, RNA, and protein data. To date,  work has focused on the tumor samples in the TCGA data and proteomic data from the CPTAC datasets. However, the number of normal samples in the TCGA data set is fairly small. The GTEx dataset has many more normal samples for the same tissue types as the tumor samples in TCGA, and they would like to expand their analysis to GTEx to better understand LINE1 activity in normal tissue and compare it to the tumor data.

The genomic and proteomic workflows are wrapped in CWL and functional on the CRDC. The results of their analysis of the TCGA data are already complete and available on the CRDC (highlighted at the prior Interop Meeting). The GTEx data is only accessible from the AnVIL platform, which currently only supports workflows wrapped in WDL. The interoperability project aims to find a path to connect the GTEx data on the AnVIL platform to further processing and also combination with a prior analysis on the CRDC. This “normals” use case is a frequent request from our users, so finding a solution would be extremely valuable for a large number of cancer researchers.

### Analysis Plan

1. Obtain confirmation from appropriate NIH Data Access Committees that these datasets can be used/combined in this manner.
1. Find proteomic cohort in PDC Data Portal.
1. Export manifest describing cohort.
1. Pull this data into a CRDC analysis ecosystem.
1. Perform proteomics analysis within CRDC.
1. Perform genomics analysis within CRDC.
1. Combined analysis of 5-6.
1. Find GTEx data cohort within AnVIL.
1. Copy this dataset to CRDC.
1. Perform GTEx analysis on CRDC.
1. Combine derived results from 7 and 10 as necessary.

### Interop Requirements
Interop between GDC and PDC within CRDC; interop between AnVIL - CRDC

## NCI CRDC + NHGRI AnVIL
**Barbara Stranger (Northwestern University)**

**Interop Contact**: Robert L. Grossman

**Studies**: TCGA (phs000178) and GTEx (phs000424)

**Title**: A comparison of transcriptome variation between tumors derived from male and female cancer patients.

**Researchers**: Barbara Stranger (Northwestern University) and Robert L. Grossman (University of Chicago),

### Analysis Question

We will explore the patterns of transcriptome variation between tumors derived from male and female patients across a diverse set of adult cancers.
 
 Sexual dimorphism in cancer susceptibility is well-documented. Across cancers, the worldwide overall age-standardized cancer incidence rate is almost 25% higher in males than in females, and in adult malignancies, males have worse overall survival and higher mortality rate (Molife, R., P. Lorigan and S. MacNeil, Gender and survival in malignant tumours. Cancer Treat Rev, 2001. 27(4): p. 201-9; Cook, M.B., K.A. McGlynn, S.S. Devesa et al., Sex Disparities in Cancer Mortality and Survival. Cancer Epidemiol Biomarkers Prev, 2011. 20(8): p. 1629-37.
  
 The incident rate ratio (IRR) of males to females for individual cancers ranges from strongly male-biased (e.g., bladder cancer), to strongly female biased (e.g., thyroid cancer) Ferlay, J., I. Soerjomataram, R. Dikshit et al., Cancer incidence and mortality worldwide: sources, methods and major patterns in GLOBOCAN 2012. Int J Cancer, 2015. 136(5): p. E359-86) (SEER). Hypotheses to explain this sexual dimorphism include: environmental exposures, hormones, the immune system, and genetic effects, including risk factors on autosomes and sex chromosomes, sexual dimorphism of gene expression, proteome, and the metabalome. Despite varying degrees of evidence in support of these hypotheses, the relative contribution of each is unknown for most cancers. A better understanding of the biological mechanisms influencing this sexual dimorphism is desperately needed.

We hypothesize that tumors exhibit sexual dimorphism at the molecular level that underlie sex differences in higher-order clinical features. Leveraging the resources of The Cancer Genome Atlas (TCGA), we will characterize sex differences in the tumor transcriptome within and between cancers. We will leverage the multi-tissue transcriptome data of the Genotype-Tissue Expression (GTEx) Project to interpret the dimorphism discovered within and between cancers. Dimorphic genes will be annotated with respect to known cancer genes, mechanisms, pathways, pharmacogenomics genes, and therapy targets. Potentially interesting targets could be further annotated with biological, functional, and pathway information that would be used in a synergistic way to describe both similar and unique biological signatures across the cancers.

### Analysis Plan

1. Obtain dbGaP authorization for GTEx and TCGA data
1. Obtain gene-summarized RNASeq count data from the GDCC and the GTEx portals
1. Aggregate and harmonize all files within a single workspace
1. Match GTEx tissues to TCGA cancers
1. Perform sex-differential expression (sex-DE) analysis of each TCGA tumor type and each GTEx tissue using limma
1. Compare sex-DE genes across cancers and between normal and tumor tissues
1. Annotate tumor sex-DE genes
1. Perform additional analysis gene-level differences

## Additional Use Cases

The list of use cases presented here is not exclusive.  If we have focused on the right interoperability problems then we expect to see many additional use cases.  We encourage additional use cases to be added over time.

