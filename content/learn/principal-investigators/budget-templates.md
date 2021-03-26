---
title: "Setting up Lab Accounts in AnVIL"
author: "AnVIL"
description: "An overview of best practices for account setup in AnVIL to effectively track and control cloud costs."
---

# Preparing a Cloud Cost Budget Justification

This document is a Quick Start Guide for creating a budget justification paragraph for a grant proposal. 

## Understanding Types of Costs

### Compute
Cost for Computing is driven by your particular CPU and memory requirements. Importantly, you can save money if
your work can tolerate being interrupted (also known as a preemptible compute resource). In this case,
you pay less per hour with the understanding that your work may be interrupted by a customer willing to pay more.
For more information including current compute pricing see, [Google Cloud 
Compute Pricing](https://cloud.google.com/compute/all-pricing#top_of_page).

### Storage
Cost for storage is driven by the amount of data you store, and the length of time you wish to store the data. Here, you can save money if you have data that you do not plan to access frequently. This would be the case for raw data that has already been processed, backups, and archives.
For more information and current pricing see [Google Cloud Storage Pricing](https://cloud.google.com/storage/pricing#storage-pricing) 
and [Google Cloud Local SSD Pricing](https://cloud.google.com/compute/all-pricing#localssdpricing).

### Network Usage (Egress)
Egress applies to data being transferred out of a Cloud resource. In this context, a Cloud resource
refers to a set of computers in a particular region. This would apply, for example, if you transferred data from Google’s East Coast computers to Amazon’s West Coast computers.

In general, while it’s free to upload data to the Cloud, you will incur costs when downloading data to your local computer or between Cloud regions.
For more information see [Google Cloud Network Pricing](https://cloud.google.
com/storage/pricing#network-egress).


## Estimating your Costs
To estimate your costs, use the [AnVIL Cost Estimator](https://docs.google.com/spreadsheets/d/1GUN93HDRqDbZ0uktaZjoP-y8Ril1T_VIJnQrjRD6tV4) Google Sheet to calculate costs for computing, storage and network usage (egress) for your proposal.


## Preparing a Budget Justification
To prepare a budget justification you can use the template Google Doc [AnVIL 
Budget Justification](https://docs.google.com/document/d/145JFLn2hviLmaYF-mO06gbCkG0i4HRaWvkUBKORo85Y) as a guide to create a budget justification paragraph 
for your proposal by including the information highlighted in pink (mostly 
copying entries from your AnVIL Cost Estimator Google Sheet).

For further guidance, you can have a look at a completed document [AnVIL 
Budget Justification Example](https://docs.google.com/document/d/1qMZNvZig7vNXposBxA77AIASY0gDCwaYwGl2YwzHXuY). 

Be sure to check that the prices are up to date by using the links listed below 
or in the AnVIL Cost Estimator.


