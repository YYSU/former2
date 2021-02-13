/* ========================================================================== */
// IoT Core
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': 'Core',
    'resourcetypes': {
        'Things': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'typename',
                        title: 'Type Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'version',
                        title: 'Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Thing Principal Attachments': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Thing Name',
                        field: 'thingname',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'principal',
                        title: 'Principal',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policies': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'defaultversionid',
                        title: 'Default Version ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'generationid',
                        title: 'Generation ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Policy Principal Attachments': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Principal',
                        field: 'principal',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'policyname',
                        title: 'Policy Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Certificates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'cacertificateid',
                        title: 'CA Certificate ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'customerversion',
                        title: 'Customer Version',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Topic Rules': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Provisioning Templates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Authorizers': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'functionarn',
                        title: 'Function ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Domain Configurations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'servicetype',
                        title: 'Service Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Topic Rule Destinations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Confirmation URL',
                        field: 'confirmationurl',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Wireless Destinations': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Devices': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Gateways': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Wireless Device Profiles': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        },
        'Wireless Service Profiles': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // none
                ]
            ]
        }
    }
});

async function updateDatatableInternetofThingsCore() {
    blockUI('#section-internetofthings-core-things-datatable');
    blockUI('#section-internetofthings-core-thingprincipalattachments-datatable');
    blockUI('#section-internetofthings-core-policies-datatable');
    blockUI('#section-internetofthings-core-policyprincipalattachments-datatable');
    blockUI('#section-internetofthings-core-certificates-datatable');
    blockUI('#section-internetofthings-core-topicrules-datatable');
    blockUI('#section-internetofthings-core-provisioningtemplates-datatable');
    blockUI('#section-internetofthings-core-authorizers-datatable');
    blockUI('#section-internetofthings-core-domainconfigurations-datatable');
    blockUI('#section-internetofthings-core-topicruledestinations-datatable');
    blockUI('#section-internetofthings-core-wirelessdestinations-datatable');
    blockUI('#section-internetofthings-core-wirelessdevices-datatable');
    blockUI('#section-internetofthings-core-wirelessgateways-datatable');
    blockUI('#section-internetofthings-core-wirelessdeviceprofiles-datatable');
    blockUI('#section-internetofthings-core-wirelessserviceprofiles-datatable');

    await sdkcall("Iot", "listThings", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-things-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-core-thingprincipalattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.things.map(thing => {
            if (thing.thingName) {
                return Promise.all([
                    sdkcall("Iot", "listThingPrincipals", {
                        thingName: thing.thingName
                    }, true).then((data) => {
                        data.principals.forEach(principal => {
                            $('#section-internetofthings-core-thingprincipalattachments-datatable').deferredBootstrapTable('append', [{
                                f2id: principal,
                                f2type: 'iot.thingprincipalattachment',
                                f2data: {
                                    'thing': thing,
                                    'principal': principal
                                },
                                f2region: region,
                                principal: principal,
                                thingname: thing.thingName
                            }]);
                        });
                    }),
                    sdkcall("Iot", "describeThing", {
                        thingName: thing.thingName
                    }, true).then((data) => {
                        $('#section-internetofthings-core-things-datatable').deferredBootstrapTable('append', [{
                            f2id: data.thingArn,
                            f2type: 'iot.thing',
                            f2data: data,
                            f2region: region,
                            name: data.thingName,
                            id: data.thingId,
                            typename: data.thingTypeName,
                            version: data.version
                        }]);
                    })
                ]);
            } else {
                return Promise.resolve();
            }
        }));

        unblockUI('#section-internetofthings-core-things-datatable');
        unblockUI('#section-internetofthings-core-thingprincipalattachments-datatable');
    });

    await sdkcall("Iot", "listPolicies", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-policies-datatable').deferredBootstrapTable('removeAll');
        $('#section-internetofthings-core-policyprincipalattachments-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.policies.map(policy => {
            return Promise.all([
                sdkcall("Iot", "listPolicyPrincipals", {
                    policyName: policy.policyName
                }, true).then((data) => {
                    data.principals.forEach(principal => {
                        $('#section-internetofthings-core-policyprincipalattachments-datatable').deferredBootstrapTable('append', [{
                            f2id: principal,
                            f2type: 'iot.policyprincipalattachment',
                            f2data: {
                                'policy': policy,
                                'principal': principal
                            },
                            f2region: region,
                            principal: principal,
                            policyname: policy.policyName
                        }]);
                    });
                }),
                sdkcall("Iot", "getPolicy", {
                    policyName: policy.policyName
                }, true).then((data) => {
                    $('#section-internetofthings-core-policies-datatable').deferredBootstrapTable('append', [{
                        f2id: data.policyArn,
                        f2type: 'iot.policy',
                        f2data: data,
                        f2region: region,
                        name: data.policyName,
                        defaultversionid: data.defaultVersionId,
                        generationid: data.generationId
                    }]);
                })
            ]);
        }));

        unblockUI('#section-internetofthings-core-policies-datatable');
        unblockUI('#section-internetofthings-core-policyprincipalattachments-datatable');
    });

    await sdkcall("Iot", "listCertificates", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-certificates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.certificates.map(certificate => {
            return sdkcall("Iot", "describeCertificate", {
                certificateId: certificate.certificateId
            }, true).then((data) => {
                $('#section-internetofthings-core-certificates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.certificateDescription.certificateArn,
                    f2type: 'iot.certificate',
                    f2data: data.certificateDescription,
                    f2region: region,
                    id: data.certificateDescription.certificateId,
                    cacertificateid: data.certificateDescription.caCertificateId,
                    customerversion: data.certificateDescription.customerVersion
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-certificates-datatable');
    });

    await sdkcall("Iot", "listTopicRules", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-topicrules-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.rules.map(rule => {
            return sdkcall("Iot", "getTopicRule", {
                ruleName: rule.ruleName
            }, true).then((data) => {
                $('#section-internetofthings-core-topicrules-datatable').deferredBootstrapTable('append', [{
                    f2id: data.ruleArn,
                    f2type: 'iot.topicrule',
                    f2data: data,
                    f2region: region,
                    name: data.rule.ruleName,
                    description: data.rule.description
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-topicrules-datatable');
    });

    await sdkcall("Iot", "listProvisioningTemplates", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-provisioningtemplates-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.templates.map(template => {
            return sdkcall("Iot", "describeProvisioningTemplate", {
                templateName: template.templateName
            }, true).then((data) => {
                $('#section-internetofthings-core-provisioningtemplates-datatable').deferredBootstrapTable('append', [{
                    f2id: data.templateArn,
                    f2type: 'iot.provisioningtemplate',
                    f2data: data,
                    f2region: region,
                    name: data.templateName,
                    description: data.description
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-provisioningtemplates-datatable');
    }).catch(err => { });

    await sdkcall("Iot", "listAuthorizers", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-core-authorizers-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.authorizers.map(authorizer => {
            return sdkcall("Iot", "describeAuthorizer", {
                authorizerName: authorizer.authorizerName
            }, true).then((data) => {
                $('#section-internetofthings-core-authorizers-datatable').deferredBootstrapTable('append', [{
                    f2id: data.authorizerDescription.authorizerArn,
                    f2type: 'iot.authorizer',
                    f2data: data.authorizerDescription,
                    f2region: region,
                    name: data.authorizerDescription.authorizerName,
                    functionarn: data.authorizerDescription.authorizerFunctionArn
                }]);
            });
        }));

        unblockUI('#section-internetofthings-core-authorizers-datatable');
    }).catch(err => { });

    await sdkcall("Iot", "listDomainConfigurations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-domainconfigurations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.domainConfigurations.map(async (domainConfiguration) => {
            return sdkcall("Iot", "describeDomainConfiguration", {
                domainConfigurationName: domainConfiguration.domainConfigurationName
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Configuration.FunctionArn);

                $('#section-internetofthings-core-domainconfigurations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.domainConfigurationArn,
                    f2type: 'iot.domainconfiguration',
                    f2data: data,
                    f2region: region,
                    name: data.domainConfigurationName,
                    servicetype: data.serviceType
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("Iot", "listTopicRuleDestinations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-topicruledestinations-datatable').deferredBootstrapTable('removeAll');

        data.destinationSummaries.forEach(destination => {
            if (destination && destination.httpUrlSummary) {
                $('#section-internetofthings-core-topicruledestinations-datatable').deferredBootstrapTable('append', [{
                    f2id: "Topic Rule Destination " + destination.httpUrlSummary.confirmationUrl,
                    f2type: 'iot.topicruledestination',
                    f2data: destination,
                    f2region: region,
                    name: destination.httpUrlSummary.confirmationUrl
                }]);
            }
        });
    }).catch(err => { });

    await sdkcall("IoTWireless", "listDestinations", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdestinations-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DestinationList.map(async (destination) => {
            return sdkcall("IoTWireless", "getDestination", {
                Name: destination.Name
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdestinations-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdestination',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listWirelessDevices", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdevices-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WirelessDeviceList.map(async (device) => {
            return sdkcall("IoTWireless", "getWirelessDevice", {
                Identifier: device.Id,
                IdentifierType: "WirelessDeviceId"
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdevices-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdevice',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listWirelessGateways", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessgateways-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.WirelessGatewayList.map(async (gateway) => {
            return sdkcall("IoTWireless", "getWirelessGateway", {
                Identifier: gateway.Id,
                IdentifierType: "WirelessGatewayId"
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessgateways-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessgateway',
                    f2data: data,
                    f2region: region,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listDeviceProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessdeviceprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.DeviceProfileList.map(async (profile) => {
            return sdkcall("IoTWireless", "getDeviceProfile", {
                Id: profile.Id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessdeviceprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessdeviceprofile',
                    f2data: data,
                    f2region: region,
                    name: data.Name
                }]);
            });
        }));
    }).catch(err => { });

    await sdkcall("IoTWireless", "listServiceProfiles", {
        // no params
    }, false).then(async (data) => {
        $('#section-internetofthings-core-wirelessserviceprofiles-datatable').deferredBootstrapTable('removeAll');

        await Promise.all(data.ServiceProfileList.map(async (profile) => {
            return sdkcall("IoTWireless", "getServiceProfile", {
                Id: profile.Id
            }, true).then(async (data) => {
                data['Tags'] = await getResourceTags(data.Arn);

                $('#section-internetofthings-core-wirelessserviceprofiles-datatable').deferredBootstrapTable('append', [{
                    f2id: data.Arn,
                    f2type: 'iot.wirelessserviceprofile',
                    f2data: data,
                    f2region: region,
                    name: data.Name
                }]);
            });
        }));
    }).catch(err => { });

    unblockUI('#section-internetofthings-core-domainconfigurations-datatable');
    unblockUI('#section-internetofthings-core-topicruledestinations-datatable');
    unblockUI('#section-internetofthings-core-wirelessdestinations-datatable');
    unblockUI('#section-internetofthings-core-wirelessdevices-datatable');
    unblockUI('#section-internetofthings-core-wirelessgateways-datatable');
    unblockUI('#section-internetofthings-core-wirelessdeviceprofiles-datatable');
    unblockUI('#section-internetofthings-core-wirelessserviceprofiles-datatable');
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    if (obj.type == "iot.thing") {
        reqParams.cfn['ThingName'] = obj.data.thingName;
        reqParams.tf['name'] = obj.data.thingName;
        reqParams.cfn['AttributePayload'] = {
            'Attributes': obj.data.attributes
        };
        reqParams.tf['attributes'] = obj.data.attributes;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Thing'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Thing',
            'terraformType': 'aws_iot_thing',
            'options': reqParams,
            'returnValues': {
                'Ref': obj.data.thingName,
                'Import': {
                    'ThingName': obj.data.thingName
                }
            }
        });
    } else if (obj.type == "iot.thingprincipalattachment") {
        reqParams.cfn['ThingName'] = obj.data.thing.thingName;
        reqParams.tf['thing'] = obj.data.thing.thingName;
        reqParams.cfn['Principal'] = obj.data.principal;
        reqParams.tf['principal'] = obj.data.principal;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ThingPrincipalAttachment'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ThingPrincipalAttachment',
            'terraformType': 'aws_iot_thing_principal_attachment',
            'options': reqParams
        });
    } else if (obj.type == "iot.policy") {
        reqParams.cfn['PolicyName'] = obj.data.policyName;
        reqParams.tf['name'] = obj.data.policyName;
        reqParams.cfn['PolicyDocument'] = obj.data.policyDocument;
        reqParams.tf['policy'] = obj.data.policyDocument;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Policy'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Policy',
            'terraformType': 'aws_iot_policy',
            'options': reqParams
        });
    } else if (obj.type == "iot.policyprincipalattachment") {
        reqParams.cfn['PolicyName'] = obj.data.policy.policyName;
        reqParams.tf['policy'] = obj.data.policy.policyName;
        reqParams.cfn['Principal'] = obj.data.principal;
        reqParams.tf['target'] = obj.data.principal;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::PolicyPrincipalAttachment'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::PolicyPrincipalAttachment',
            'terraformType': 'aws_iot_policy_attachment',
            'options': reqParams
        });
    } else if (obj.type == "iot.certificate") {
        reqParams.cfn['Status'] = obj.data.status;
        reqParams.tf['active'] = (obj.data.status.toLowerCase() == "active");
        reqParams.cfn['CertificateSigningRequest'] = "REPLACEME";
        reqParams.tf['csr'] = "REPLACEME";

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Certificate'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Certificate',
            'terraformType': 'aws_iot_certificate',
            'options': reqParams
        });
    } else if (obj.type == "iot.topicrule") {
        var actions = null;
        var errorAction = null;

        if (obj.rule.actions) {
            actions = [];
            obj.rule.actions.forEach(action => {
                var actionitem = {};

                if (action.dynamoDB) {
                    actionitem['DynamoDB'] = {
                        'HashKeyField': action.dynamoDB.hashKeyField,
                        'HashKeyType': action.dynamoDB.hashKeyType,
                        'HashKeyValue': action.dynamoDB.hashKeyValue,
                        'PayloadField': action.dynamoDB.payloadField,
                        'RangeKeyField': action.dynamoDB.rangeKeyField,
                        'RangeKeyType': action.dynamoDB.rangeKeyType,
                        'RangeKeyValue': action.dynamoDB.rangeKeyValue,
                        'RoleArn': action.dynamoDB.roleArn,
                        'TableName': action.dynamoDB.tableName
                    };
                }
                if (action.dynamoDBv2) {
                    actionitem['DynamoDBv2'] = {
                        'PutItem': {
                            'TableName': action.dynamoDBv2.putItem.tableName
                        },
                        'RoleArn': action.dynamoDBv2.roleArn
                    };
                }
                if (action.lambda) {
                    actionitem['Lambda'] = {
                        'FunctionArn': action.lambda.functionArn
                    };
                }
                if (action.sns) {
                    actionitem['Sns'] = {
                        'MessageFormat': action.sns.messageFormat,
                        'RoleArn': action.sns.roleArn,
                        'TargetArn': action.sns.targetArn
                    };
                }
                if (action.sqs) {
                    actionitem['Sqs'] = {
                        'QueueUrl': action.sqs.queueUrl,
                        'RoleArn': action.sqs.roleArn,
                        'UseBase64': action.sqs.useBase64
                    };
                }
                if (action.kinesis) {
                    actionitem['Kinesis'] = {
                        'PartitionKey': action.kinesis.partitionKey,
                        'RoleArn': action.kinesis.roleArn,
                        'StreamName': action.kinesis.streamName
                    };
                }
                if (action.republish) {
                    actionitem['Republish'] = {
                        'RoleArn': action.republish.roleArn,
                        'Topic': action.republish.topic,
                        'Qos': action.republish.qos
                    };
                }
                if (action.s3) {
                    actionitem['S3'] = {
                        'BucketName': action.s3.bucketName,
                        'Key': action.s3.key,
                        'RoleArn': action.s3.roleArn
                    };
                }
                if (action.firehose) {
                    actionitem['Firehose'] = {
                        'DeliveryStreamName': action.firehose.deliveryStreamName,
                        'RoleArn': action.firehose.roleArn,
                        'Separator': action.firehose.separator
                    };
                }
                if (action.cloudwatchMetric) {
                    actionitem['CloudwatchMetric'] = {
                        'MetricName': action.cloudwatchMetric.metricName,
                        'MetricNamespace': action.cloudwatchMetric.metricNamespace,
                        'MetricTimestamp': action.cloudwatchMetric.metricTimestamp,
                        'MetricUnit': action.cloudwatchMetric.metricUnit,
                        'MetricValue': action.cloudwatchMetric.metricValue,
                        'RoleArn': action.cloudwatchMetric.roleArn
                    };
                }
                if (action.cloudwatchAlarm) {
                    actionitem['CloudwatchAlarm'] = {
                        'AlarmName': action.cloudwatchAlarm.alarmName,
                        'RoleArn': action.cloudwatchAlarm.roleArn,
                        'StateReason': action.cloudwatchAlarm.stateReason,
                        'StateValue': action.cloudwatchAlarm.stateValue
                    };
                }
                if (action.elasticsearch) {
                    actionitem['Elasticsearch'] = {
                        'Endpoint': action.elasticsearch.endpoint,
                        'Id': action.elasticsearch.id,
                        'Index': action.elasticsearch.index,
                        'RoleArn': action.elasticsearch.roleArn,
                        'Type': action.elasticsearch.type
                    };
                }
                if (action.iotAnalytics) {
                    actionitem['IotAnalytics'] = {
                        'ChannelName': action.iotAnalytics.channelName,
                        'RoleArn': action.iotAnalytics.roleArn
                    };
                }
                if (action.stepFunctions) {
                    actionitem['StepFunctions'] = {
                        'ExecutionNamePrefix': action.stepFunctions.executionNamePrefix,
                        'RoleArn': action.stepFunctions.roleArn,
                        'StateMachineName': action.stepFunctions.stateMachineName
                    };
                }
                if (action.http) {
                    var headers = null;
                    if (action.http.headers) {
                        headers = [];
                        action.http.headers.forEach(header => {
                            headers.push({
                                'Key': header.key,
                                'Value': header.value
                            });
                        });
                    }
                    var auth = null;
                    if (action.http.auth) {
                        auth = {};
                        if (action.http.auth.sigv4) {
                            auth['Sigv4'] = {
                                'RoleArn': action.http.auth.sigv4.roleArn,
                                'ServiceName': action.http.auth.sigv4.serviceName,
                                'SigningRegion': action.http.auth.sigv4.signingRegion
                            };
                        }
                    }
                    actionitem['Http'] = {
                        'Auth': auth,
                        'ConfirmationUrl': action.http.confirmationUrl,
                        'Headers': headers,
                        'Url': action.http.url
                    };
                }

                actions.push(actionitem);
            });
        }

        if (obj.data.rule.errorAction) {
            errorAction = {};
            if (obj.data.rule.errorAction.dynamoDB) {
                errorAction['DynamoDB'] = {
                    'HashKeyField': obj.data.rule.errorAction.dynamoDB.hashKeyField,
                    'HashKeyType': obj.data.rule.errorAction.dynamoDB.hashKeyType,
                    'HashKeyValue': obj.data.rule.errorAction.dynamoDB.hashKeyValue,
                    'PayloadField': obj.data.rule.errorAction.dynamoDB.payloadField,
                    'RangeKeyField': obj.data.rule.errorAction.dynamoDB.rangeKeyField,
                    'RangeKeyType': obj.data.rule.errorAction.dynamoDB.rangeKeyType,
                    'RangeKeyValue': obj.data.rule.errorAction.dynamoDB.rangeKeyValue,
                    'RoleArn': obj.data.rule.errorAction.dynamoDB.roleArn,
                    'TableName': obj.data.rule.errorAction.dynamoDB.tableName
                };
            }
            if (obj.data.rule.errorAction.dynamoDBv2) {
                errorAction['DynamoDBv2'] = {
                    'PutItem': {
                        'TableName': obj.data.rule.errorAction.dynamoDBv2.putItem.tableName
                    },
                    'RoleArn': obj.data.rule.errorAction.dynamoDBv2.roleArn
                };
            }
            if (obj.data.rule.errorAction.lambda) {
                errorAction['Lambda'] = {
                    'FunctionArn': obj.data.rule.errorAction.lambda.functionArn
                };
            }
            if (obj.data.rule.errorAction.sns) {
                errorAction['Sns'] = {
                    'MessageFormat': obj.data.rule.errorAction.sns.messageFormat,
                    'RoleArn': obj.data.rule.errorAction.sns.roleArn,
                    'TargetArn': obj.data.rule.errorAction.sns.targetArn
                };
            }
            if (obj.data.rule.errorAction.sqs) {
                errorAction['Sqs'] = {
                    'QueueUrl': obj.data.rule.errorAction.sqs.queueUrl,
                    'RoleArn': obj.data.rule.errorAction.sqs.roleArn,
                    'UseBase64': obj.data.rule.errorAction.sqs.useBase64
                };
            }
            if (obj.data.rule.errorAction.kinesis) {
                errorAction['Kinesis'] = {
                    'PartitionKey': obj.data.rule.errorAction.kinesis.partitionKey,
                    'RoleArn': obj.data.rule.errorAction.kinesis.roleArn,
                    'StreamName': obj.data.rule.errorAction.kinesis.streamName
                };
            }
            if (obj.data.rule.errorAction.republish) {
                errorAction['Republish'] = {
                    'RoleArn': obj.data.rule.errorAction.republish.roleArn,
                    'Topic': obj.data.rule.errorAction.republish.topic
                };
            }
            if (obj.data.rule.errorAction.s3) {
                errorAction['S3'] = {
                    'BucketName': obj.data.rule.errorAction.s3.bucketName,
                    'Key': obj.data.rule.errorAction.s3.key,
                    'RoleArn': obj.data.rule.errorAction.s3.roleArn
                };
            }
            if (obj.data.rule.errorAction.firehose) {
                errorAction['Firehose'] = {
                    'DeliveryStreamName': obj.data.rule.errorAction.firehose.deliveryStreamName,
                    'RoleArn': obj.data.rule.errorAction.firehose.roleArn,
                    'Separator': obj.data.rule.errorAction.firehose.separator
                };
            }
            if (obj.data.rule.errorAction.cloudwatchMetric) {
                errorAction['CloudwatchMetric'] = {
                    'MetricName': obj.data.rule.errorAction.cloudwatchMetric.metricName,
                    'MetricNamespace': obj.data.rule.errorAction.cloudwatchMetric.metricNamespace,
                    'MetricTimestamp': obj.data.rule.errorAction.cloudwatchMetric.metricTimestamp,
                    'MetricUnit': obj.data.rule.errorAction.cloudwatchMetric.metricUnit,
                    'MetricValue': obj.data.rule.errorAction.cloudwatchMetric.metricValue,
                    'RoleArn': obj.data.rule.errorAction.cloudwatchMetric.roleArn
                };
            }
            if (obj.data.rule.errorAction.cloudwatchAlarm) {
                errorAction['CloudwatchAlarm'] = {
                    'AlarmName': obj.data.rule.errorAction.cloudwatchAlarm.alarmName,
                    'RoleArn': obj.data.rule.errorAction.cloudwatchAlarm.roleArn,
                    'StateReason': obj.data.rule.errorAction.cloudwatchAlarm.stateReason,
                    'StateValue': obj.data.rule.errorAction.cloudwatchAlarm.stateValue
                };
            }
            if (obj.data.rule.errorAction.elasticsearch) {
                errorAction['Elasticsearch'] = {
                    'Endpoint': obj.data.rule.errorAction.elasticsearch.endpoint,
                    'Id': obj.data.rule.errorAction.elasticsearch.id,
                    'Index': obj.data.rule.errorAction.elasticsearch.index,
                    'RoleArn': obj.data.rule.errorAction.elasticsearch.roleArn,
                    'Type': obj.data.rule.errorAction.elasticsearch.type
                };
            }
            if (obj.data.rule.errorAction.iotAnalytics) {
                errorAction['IotAnalytics'] = {
                    'ChannelName': obj.data.rule.errorAction.iotAnalytics.channelName,
                    'RoleArn': obj.data.rule.errorAction.iotAnalytics.roleArn
                };
            }
            if (obj.data.rule.errorAction.stepFunctions) {
                errorAction['StepFunctions'] = {
                    'ExecutionNamePrefix': obj.data.rule.errorAction.stepFunctions.executionNamePrefix,
                    'RoleArn': obj.data.rule.errorAction.stepFunctions.roleArn,
                    'StateMachineName': obj.data.rule.errorAction.stepFunctions.stateMachineName
                };
            }
        }

        reqParams.cfn['RuleName'] = obj.data.rule.ruleName;
        reqParams.cfn['TopicRulePayload'] = {
            'Actions': actions,
            'AwsIotSqlVersion': obj.data.rule.awsIotSqlVersion,
            'Description': obj.data.rule.description,
            'ErrorAction': errorAction,
            'RuleDisabled': obj.data.rule.ruleDisabled,
            'Sql': obj.data.rule.sql
        };

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::TopicRule'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::TopicRule',
            'options': reqParams
        });
    } else if (obj.type == "iot.provisioningtemplate") {
        reqParams.cfn['TemplateName'] = obj.data.templateName;
        reqParams.cfn['Description'] = obj.data.description;
        reqParams.cfn['TemplateBody'] = obj.data.templateBody;
        reqParams.cfn['Enabled'] = obj.data.enabled;
        reqParams.cfn['ProvisioningRoleArn'] = obj.data.provisioningRoleArn;
        if (obj.data.preProvisioningHook) {
            reqParams.cfn['PreProvisioningHook'] = {
                'PayloadVersion': obj.data.preProvisioningHook.payloadVersion,
                'TargetArn': obj.data.preProvisioningHook.targetArn
            };
        }

        /*
        TODO
        Tags: 
         - Json
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::ProvisioningTemplate'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::ProvisioningTemplate',
            'options': reqParams
        });
    } else if (obj.type == "iot.authorizer") {
        reqParams.cfn['AuthorizerName'] = obj.data.authorizerName;
        reqParams.cfn['AuthorizerFunctionArn'] = obj.data.authorizerFunctionArn;
        reqParams.cfn['TokenKeyName'] = obj.data.tokenKeyName;
        reqParams.cfn['TokenSigningPublicKeys'] = obj.data.tokenSigningPublicKeys;
        reqParams.cfn['Status'] = obj.data.status;
        reqParams.cfn['SigningDisabled'] = obj.data.signingDisabled;

        /*
        TODO
        Tags: 
            Tags
        */

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::Authorizer'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::Authorizer',
            'options': reqParams
        });
    } else if (obj.type == "iot.domainconfiguration") {
        reqParams.cfn['DomainConfigurationName'] = obj.data.domainConfigurationName;
        reqParams.cfn['DomainName'] = obj.data.domainName;
        if (obj.data.serverCertificates) {
            reqParams.cfn['ServerCertificateArns'] = [];
            obj.data.serverCertificates.forEach(servercertificate => {
                reqParams.cfn['ServerCertificateArns'].push(servercertificate.serverCertificateArn);
            });
        }
        if (obj.data.authorizerConfig) {
            reqParams.cfn['DomainConfigurationName'] = {
                'DefaultAuthorizerName': obj.data.authorizerConfig.defaultAuthorizerName,
                'AllowAuthorizerOverride': obj.data.authorizerConfig.allowAuthorizerOverride
            };
        }
        reqParams.cfn['DomainConfigurationStatus'] = obj.data.domainConfigurationStatus;
        reqParams.cfn['ServiceType'] = obj.data.serviceType;
        reqParams.cfn['DomainConfigurationName'] = obj.data.domainConfigurationName;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::DomainConfiguration'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::DomainConfiguration',
            'options': reqParams
        });
    } else if (obj.type == "iot.topicruledestination") {
        reqParams.cfn['HttpUrlProperties'] = {
            'ConfirmationUrl': obj.data.httpUrlSummary.confirmationUrl
        };
        if (obj.data.vpcProperties && obj.data.vpcProperties.vpcId) {
            reqParams.cfn['VpcProperties'] = {
                'SubnetIds': obj.data.vpcProperties.subnetIds,
                'SecurityGroups': obj.data.vpcProperties.securityGroups,
                'VpcId': obj.data.vpcProperties.vpcId,
                'RoleArn': obj.data.vpcProperties.roleArn
            };
        }

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoT::TopicRuleDestination'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoT::TopicRuleDestination',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdestination") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['Expression'] = obj.data.Expression;
        reqParams.cfn['ExpressionType'] = obj.data.ExpressionType;
        reqParams.cfn['RoleArn'] = obj.data.RoleArn;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::Destination'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::Destination',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdevice") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['DestinationName'] = obj.data.DestinationName;
        reqParams.cfn['Type'] = obj.data.Type;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'DevEui': obj.data.LoRaWAN.DevEui,
                'DeviceProfileId': obj.data.LoRaWAN.DeviceProfileId,
                'ServiceProfileId': obj.data.LoRaWAN.ServiceProfileId,
                'OtaaV11': obj.data.LoRaWAN.OtaaV1_1,
                'OtaaV10X': obj.data.LoRaWAN.OtaaV1_0_x,
                'AbpV11': obj.data.LoRaWAN.AbpV1_1,
                'AbpV10X': obj.data.LoRaWAN.AbpV1_0_x
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::WirelessDevice'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::WirelessDevice',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessgateway") {
        reqParams.cfn['Name'] = obj.data.Name;
        reqParams.cfn['Description'] = obj.data.Description;
        reqParams.cfn['ThingName'] = obj.data.ThingName;
        reqParams.cfn['LoRaWAN'] = obj.data.LoRaWAN;
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::WirelessGateway'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::WirelessGateway',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessdeviceprofile") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'ClassBTimeout': obj.data.LoRaWAN.ClassBTimeout,
                'ClassCTimeout': obj.data.LoRaWAN.ClassCTimeout,
                'MacVersion': obj.data.LoRaWAN.MacVersion,
                'MaxDutyCycle': obj.data.LoRaWAN.MaxDutyCycle,
                'MaxEirp': obj.data.LoRaWAN.MaxEirp,
                'PingSlotDr': obj.data.LoRaWAN.PingSlotDr,
                'PingSlotFreq': obj.data.LoRaWAN.PingSlotFreq,
                'PingSlotPeriod': obj.data.LoRaWAN.PingSlotPeriod,
                'RegParamsRevision': obj.data.LoRaWAN.RegParamsRevision,
                'RfRegion': obj.data.LoRaWAN.RfRegion,
                'Supports32BitFCnt': obj.data.LoRaWAN.Supports32BitFCnt,
                'SupportsClassB': obj.data.LoRaWAN.SupportsClassB,
                'SupportsClassC': obj.data.LoRaWAN.SupportsClassC,
                'SupportsJoin': obj.data.LoRaWAN.SupportsJoin
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::DeviceProfile'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::DeviceProfile',
            'options': reqParams
        });
    } else if (obj.type == "iot.wirelessserviceprofile") {
        reqParams.cfn['Name'] = obj.data.Name;
        if (obj.data.LoRaWAN) {
            reqParams.cfn['LoRaWAN'] = {
                'AddGwMetadata': obj.data.LoRaWAN.AddGwMetadata
            };
        }
        reqParams.cfn['Tags'] = obj.data.Tags;

        tracked_resources.push({
            'obj': obj,
            'logicalId': getResourceName('iot', obj.id, 'AWS::IoTWireless::ServiceProfile'),
            'region': obj.region,
            'service': 'iot',
            'type': 'AWS::IoTWireless::ServiceProfile',
            'options': reqParams
        });
    } else {
        return false;
    }

    return true;
});
