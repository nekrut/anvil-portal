---
title: "Learning AnVIL"
author: "AnVIL"
description: "An overview of the AnVIL platform documentation and getting
started content."
---

# Learning AnVIL

  <!--- Add links! --->

The AnVIL platform is an [NHGRI](https://www.genome.gov/Funded-Programs-Projects/Computational-Genomics-and-Data-Science-Program/Genomic-Analysis-Visualization-Informatics-Lab-space-AnVIL) supported data commons running on the Google Cloud Platform (GCP). AnVIL enables researchers to analyze high-value open and controlled access genomic [datasets](/data) with popular analysis tools in a [secure](/overview/security) cloud computing environment.

AnVIL uses [Terra](https://anvil.terra.bio/#workspaces) as its analysis platform, [Gen3](https://gen3.theanvil.io) for data search and artificial cohort creation, and [Dockstore](https://dockstore.org/) as a repository for Docker-based genomic analysis tools and workflows.

In addition to Docker-based analysis workflows,  AnVIL supports popular interactive analysis tools such as Jupyter notebooks, Bioconductor, RStudio, and [Galaxy](https://galaxyproject.org/).

By operating in the cloud, AnVIL users can scale analyses from a single computer to thousands of cores and securely share data, workflows, and reproducible results with collaborators and colleagues.

### About AnVIL’s Documentation
AnVIL’s training materials curate, organize, and augment existing component and tool documentation, and show how to use AnVIL’s parts together to accomplish the goals of AnVIL’s different user personas.

The AnVIL team is in the process of developing persona-specific guides and tutorials for data analysts, [principal investigators](/learn/principal-investigators/setting-up-lab-accounts), developers, instructors, and [data contributors](/learn/consortia/data-submission).

<hero>  For a full list of AnVIL guides and tutorials for each persona, see [Guides and Tutorials](/learn/guides-and-tutorials). </hero>

  <!--- Add FAIR, add interoperability with other data commons, increased accessibility to complex data center--->

## Getting Started

This guide provides an overview of AnVIL, focusing on onboarding and preparing new users to run genomic analyses in the cloud.

This guide walks you through:

1. Setting up and linking user accounts.
1. Obtaining access to controlled-access data.
1. Managing billing for cloud compute costs.

### Account Setup

All you need is a Google account to register with Terra and browse AnVIL’s publicly accessible workspaces.

Likewise, with a Google account, you  can register with Gen3 and browse publicly accessible datasets or register with Dockstore and browse tools and workflows.

To send artificial cohorts from Gen3 to Terra, you will need to link your Gen3 and Terra accounts.

To allow your dbGaP data request approvals to flow through to Terra and Gen3,  you will need to link your eRA commons ID with both platforms.


<hero> For instructions on setting up accounts in Google, Terra, Gen3, and linking them together see  [Account Setup](/learn/account-setup).</hero>

### Discovering and Accessing Data

AnVIL holds genomic data for hundreds of thousands of study participants. Much of this data is controlled-access.

To obtain access to controlled-access data sets, you must either be a member of a data-generating consortia with a data-sharing agreement among consortia members or have been granted access to a study through the dbGapP Data Access Request process.


Once you are have been granted access, and assuming you have linked your eRA commons ID with Terra and Gen3, you will be able to see your new studies in Gen3 and new data oriented workspaces in Terra.

AnVIL’s open access datasets such as [1000 Genomes High Coverage 2019](https://anvil.terra.bio/#workspaces/anvil-datastorage/1000G-high-coverage-2019) can be accessed in Terra or Gen3 immediately after account creation.

For a detailed listing of available datasets searchable by disease, data type, consent type and consortia, see AnVIL’s  [Dataset Catalog](/data).

<hero> For instructions on requesting data access see [Requesting Data Access](/learn/accessing-data/requesting-data-access) and [Discovering Data](learn/accessing-data/discovering-data).</hero>

### Understanding Cloud Compute Costs and Billing

There are several concepts that need to be understood in order to configure billing and effectively manage cloud compute costs in AnVIL. They are:

1. Cloud Compute Fees and Pricing
1. Terra Workspaces
1. Terra Billing Projects
1. GCP Billing Accounts and related resources


#### Cloud Compute Costs

AnVIL runs on the Google Cloud Platform (GCP). AnVIL and all of its components are free to use, however, certain activities, such as running an analysis, or storing, or downloading data may incur Google Cloud Platform (GCP) fees.

In Terra cloud compute fees are passed through, without markup, to a GCP Billing Account. The fees are settled using the GCP Billing Account’s configured payment method.

See [Understanding Cloud Compute Costs](/learn/understanding-cloud-costs) for more detailed information on what activities cause fees and pricing.

#### Terra Workspaces

Performing genomic analysis in Terra is centered around the concept of a workspace.

Terra workspaces typically hold genomic data along subject-level phenotypic data and are configured with analysis tools such as notebooks and Docker images. Workspaces also hold the output generated by running an analysis.

Workspace configuration controls who can view, clone, launch, or share a workspace and whose Terra Billing Project is charged for any GCP cloud compute costs incurred by workspace.

Workspaces have an associated Google storage bucket usually configured as  “Requester Pays” meaning that users requesting downloads from the bucket must pay cloud egress fees for the data transfer.





<hero> For additional information about Terra workspaces see [Understanding Workspaces](/learn/understanding-workspaces). </hero>


#### Managing Cloud Cost Billing

AnVIL and all of its components are free to use, however, certain activities, such as running an analysis, or storing, or downloading data may incur Google Cloud Platform (GCP) fees.

In Terra, a Terra Billing Project passes through any cloud compute fees, without markup, to a GCP Billing Account where the fees are settled using the GCP Billing Account’s payment method. Terra Billing Projects are always linked to a single GCP Billing Account.


All activities that can incur GCP fees are associated with a Terra Billing Project either explicitly by requiring


Before you can perform an activity that incurs cloud costs you must be either a “member” or “owner” of a Terra Billing Project or have “Write + Can Compute” access to a Terra workspace.


When the Terra Billing Project is created it is associated with a GCP Billing Project. Any GCP fees associated with the Terra Billing Project are passed through, without markup to its associated GCP Billing Account.

Individual users may be members or owners of a Terra Billing Project

To download or view a workspaces files, you first select a Terra Billing Project they wish to use when they download or view data files. Similarly when a user creates or clones a workspace they .

When workspaces are launched, the Terra Billing Project they were created with is charged for any cloud costs incurred.




G

GCP fees may be incurred by:

1. Users when they download or view data or notebooks from a workspace’s “Requestor Pays” bucket.


1. Workspaces when they are launched.

GCP fees are passed through, without markup, to the GCP Billing Account associated with the workspace incurring the charges.






### Workspaces and Billing

When workspaces are created

You can incur cloud costs by creating or cloning a workspace, uploading data to your workspace, downloading data from your workspace or running an analysis which will consume compute resources and may also store analysis output back in the workspace.

If you share a workspace that you created and give the new user Write+Can Compute permissions, they will be able to run the workspace

For additional information on understanding and controlling cloud costs, see [Understanding Cloud Costs](/learn/understanding-cloud-costs).


### Billing Setup

To view workspace files, or to

To run analysis on Terra you must either have access to

1. Have “Write, Can-Execute” permissions on a workspace created by a collaborator. Any charges incurred by launching the workspaces flow through to the Google Billing Account associated with the Terra Billing Project your collaborator associated with the workspace.



1. Be added as a user on a collaborator’s Terra Billing Project. This allows you to create or clone workspaces on your own. Any charges incurred by the workspaces you create flow through to the Google Billing Account associated with your collaborator’s Terra Billing Project.


1. Create your own Google Billing Account, and link it to a payment method and to Terra. This allows you to create your own Terra Billing Project and then use it to create or clone your own workspaces. Your Google Billing Account will be charged for any GCP fees incurred by launching or downloading data from the workspace.

### Setting Up Budgets and Alerts


Create a GCP Billing Account
Must specify a payment method.

Add Terra as a User - can create projects

Create a Terra Billing Project, this creates a google billing project for the Billing Account.

Once you have a Terra Billing Project you can use it to create workspaces that you can use or share. Give it to someone with write and cant share.

You can search for workspaces per billing project, so you can see them again later.




The Terra Billing Project is in turn associated with a Google Billing Account associated with the workspace owner.

To launch an existing workspace you must either be the workspace “Owner” or be a workspace “Writer” with “Can Execute” permissions.


To create or clone a workspace you must be associated with a Terra Billing Project.

To obtain access to a Terra Billing Project you will need to either set one up yourself or be added to one by your lab manager or principal investigator.

https://support.terra.bio/hc/en-us/articles/360025851892-Reader-writer-or-owner-Workspace-access-controls-explained


  <!--- 

### Running an Analysis
 TODO guides for running different kinds of analysis.. --->

### Sharing Workspaces

Share with but consider if you want to allow can compute. Consider if you want to allow can share.


### More info


### Getting Help

See [Getting Help](/help) for more information on how to obtain support for AnVIL’s components and tools.



 











 




