[![Build Status](https://travis-ci.org/cfn-modules/nlb.svg?branch=master)](https://travis-ci.org/cfn-modules/nlb)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/nlb.svg)](https://www.npmjs.com/package/@cfn-modules/nlb)

# cfn-modules: NLB

Network load balancer.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/nlb
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Nlb:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        VpcModule: !GetAtt 'Vpc.Outputs.StackName' # required
        BucketModule: '' # optional
        Scheme: 'internet-facing' # optional
        CrossZone: 'false' # optional
      TemplateURL: './node_modules/@cfn-modules/nlb/module.yml'
```

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VpcModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/vpc">vpc module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>BucketModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/s3-bucket">S3 bucket module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>Scheme</td>
      <td>Indicates whether the load balancer reachable from the public Internet or only from within the VPC</td>
      <td>internet-facing</td>
      <td>no</td>
      <td>[internet-facing, internal]</td>
    </tr>
    <tr>
      <td>CrossZone</td>
      <td>Indicates whether cross-zone load balancing is enabled</td>
      <td>false</td>
      <td>no</td>
      <td>[true, false]</td>
    </tr>
  </tbody>
</table>
