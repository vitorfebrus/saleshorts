const sfConfigs = [
    {
        "configName": "Setup Home",
        "configURI": "/lightning/setup/SetupOneHome/home"
    },
    {
        "configName": "Service Setup Assistant",
        "configURI": "/lightning/setup/ServiceHome/home"
    },
    {
        "configName": "Commerce Setup Assistant",
        "configURI": "/lightning/setup/CommerceSetupAssistant/home"
    },
    {
        "configName": "Multi-Factor Authentication Assistant",
        "configURI": "/lightning/setup/MfaAssistant/home"
    },
    {
        "configName": "Hyperforce Assistant",
        "configURI": "/lightning/setup/HyperforceAssistant/home"
    },
    {
        "configName": "Release Updates",
        "configURI": "/lightning/setup/ReleaseUpdates/home"
    },
    {
        "configName": "Salesforce Mobile App",
        "configURI": "/lightning/setup/SalesforceMobileAppQuickStart/home"
    },
    {
        "configName": "Optimizer",
        "configURI": "/lightning/setup/SalesforceOptimizer/home"
    },
    {
        "configName": "Sales Cloud Everywhere",
        "configURI": "/lightning/setup/SalesCloudEverywhereSettings/home"
    },
    {
        "configName": "Permission Set Groups",
        "configURI": "/lightning/setup/PermSetGroups/home"
    },
    {
        "configName": "Permission Sets",
        "configURI": "/lightning/setup/PermSets/home"
    },
    {
        "configName": "Profiles",
        "configURI": "/lightning/setup/Profiles/home"
    },
    {
        "configName": "Public Groups",
        "configURI": "/lightning/setup/PublicGroups/home"
    },
    {
        "configName": "Queues",
        "configURI": "/lightning/setup/Queues/home"
    },
    {
        "configName": "Roles",
        "configURI": "/lightning/setup/Roles/home"
    },
    {
        "configName": "User Management Settings",
        "configURI": "/lightning/setup/UserManagementSettings/home"
    },
    {
        "configName": "Users",
        "configURI": "/lightning/setup/ManageUsers/home"
    },
    {
        "configName": "Big Objects",
        "configURI": "/lightning/setup/BigObjects/home"
    },
    {
        "configName": "Data Export",
        "configURI": "/lightning/setup/DataManagementExport/home"
    },
    {
        "configName": "Data Integration Metrics",
        "configURI": "/lightning/setup/XCleanVitalsUi/home"
    },
    {
        "configName": "Data Integration Rules",
        "configURI": "/lightning/setup/CleanRules/home"
    },
    {
        "configName": "Duplicate Error Logs",
        "configURI": "/lightning/setup/DuplicateErrorLog/home"
    },
    {
        "configName": "Duplicate Rules",
        "configURI": "/lightning/setup/DuplicateRules/home"
    },
    {
        "configName": "Matching Rules",
        "configURI": "/lightning/setup/MatchingRules/home"
    },
    {
        "configName": "Mass Delete Records",
        "configURI": "/lightning/setup/DataManagementDelete/home"
    },
    {
        "configName": "Mass Reassign Account Teams",
        "configURI": "/lightning/setup/DataManagementMassAcctTeamReassign/home"
    },
    {
        "configName": "Mass Transfer Approval Requests",
        "configURI": "/lightning/setup/DataManagementManageApprovals/home"
    },
    {
        "configName": "Mass Transfer Records",
        "configURI": "/lightning/setup/DataManagementTransfer/home"
    },
    {
        "configName": "Mass Update Addresses",
        "configURI": "/lightning/setup/DataManagementMassUpdateAddresses/home"
    },
    {
        "configName": "Picklist Settings",
        "configURI": "/lightning/setup/PicklistSettings/home"
    },
    {
        "configName": "Schema Settings",
        "configURI": "/lightning/setup/SchemaSettings/home"
    },
    {
        "configName": "State and Country/Territory Picklists",
        "configURI": "/lightning/setup/AddressCleanerOverview/home"
    },
    {
        "configName": "Storage Usage",
        "configURI": "/lightning/setup/CompanyResourceDisk/home"
    },
    {
        "configName": "Apex Exception Email",
        "configURI": "/lightning/setup/ApexExceptionEmail/home"
    },
    {
        "configName": "Classic Email Templates",
        "configURI": "/lightning/setup/CommunicationTemplatesEmail/home"
    },
    {
        "configName": "Classic Letterheads",
        "configURI": "/lightning/setup/CommunicationTemplatesLetterheads/home"
    },
    {
        "configName": "Compliance BCC Email",
        "configURI": "/lightning/setup/SecurityComplianceBcc/home"
    },
    {
        "configName": "DKIM Keys",
        "configURI": "/lightning/setup/EmailDKIMList/home"
    },
    {
        "configName": "Delete Attachments Sent as Links",
        "configURI": "/lightning/setup/EmailAttachmentManagement/home"
    },
    {
        "configName": "Deliverability",
        "configURI": "/lightning/setup/OrgEmailSettings/home"
    },
    {
        "configName": "Email Address Internationalization",
        "configURI": "/lightning/setup/InternationalEmailAddresses/home"
    },
    {
        "configName": "Email Attachments",
        "configURI": "/lightning/setup/EmailAttachmentSettings/home"
    },
    {
        "configName": "Email Domain Filters",
        "configURI": "/lightning/setup/EmailDomainFilter/home"
    },
    {
        "configName": "Email Relays",
        "configURI": "/lightning/setup/EmailRelay/home"
    },
    {
        "configName": "Email Footers",
        "configURI": "/lightning/setup/EmailDisclaimers/home"
    },
    {
        "configName": "Email to Salesforce",
        "configURI": "/lightning/setup/EmailToSalesforce/home"
    },
    {
        "configName": "Enhanced Email",
        "configURI": "/lightning/setup/EnhancedEmail/home"
    },
    {
        "configName": "Filter Email Tracking",
        "configURI": "/lightning/setup/FilterEmailTracking/home"
    },
    {
        "configName": "Gmail Integration and Sync",
        "configURI": "/lightning/setup/LightningForGmailAndSyncSettings/home"
    },
    {
        "configName": "Lightning Email Templates",
        "configURI": "/lightning/setup/LightningEmailTemplateSetup/home"
    },
    {
        "configName": "Mail Merge Templates",
        "configURI": "/lightning/setup/CommunicationTemplatesWord/home"
    },
    {
        "configName": "Organization-Wide Addresses",
        "configURI": "/lightning/setup/OrgWideEmailAddresses/home"
    },
    {
        "configName": "Outlook Integration and Sync",
        "configURI": "/lightning/setup/LightningForOutlookAndSyncSettings/home"
    },
    {
        "configName": "Send through External Email Services",
        "configURI": "/lightning/setup/EmailTransportServiceSetupPage/home"
    },
    {
        "configName": "Test Deliverability",
        "configURI": "/lightning/setup/TestEmailDeliverability/home"
    },
    {
        "configName": "App Manager",
        "configURI": "/lightning/setup/NavigationMenus/home"
    },
    {
        "configName": "AppExchange Marketplace",
        "configURI": "/lightning/setup/AppExchangeMarketplace/home"
    },
    {
        "configName": "Connected Apps OAuth Usage",
        "configURI": "/lightning/setup/ConnectedAppsUsage/home"
    },
    {
        "configName": "Manage Connected Apps",
        "configURI": "/lightning/setup/ConnectedApplication/home"
    },
    {
        "configName": "Settings",
        "configURI": "/lightning/setup/ExternalClientApplicationSettings/home"
    },
    {
        "configName": "Flow Category",
        "configURI": "/lightning/setup/FlowCategory/home"
    },
    {
        "configName": "Lightning Bolt Solutions",
        "configURI": "/lightning/setup/LightningBolt/home"
    },
    {
        "configName": "Mobile Security",
        "configURI": "/lightning/setup/MobileSecurity/home"
    },
    {
        "configName": "Salesforce Branding",
        "configURI": "/lightning/setup/Salesforce1Branding/home"
    },
    {
        "configName": "Salesforce Navigation",
        "configURI": "/lightning/setup/ProjectOneAppMenu/home"
    },
    {
        "configName": "Salesforce Notifications",
        "configURI": "/lightning/setup/NotificationsSettings/home"
    },
    {
        "configName": "Salesforce Offline",
        "configURI": "/lightning/setup/MobileOfflineStorageAdmin/home"
    },
    {
        "configName": "Salesforce Settings",
        "configURI": "/lightning/setup/Salesforce1Settings/home"
    },
    {
        "configName": "Installed Packages",
        "configURI": "/lightning/setup/ImportedPackage/home"
    },
    {
        "configName": "Package Manager",
        "configURI": "/lightning/setup/Package/home"
    },
    {
        "configName": "Package Usage",
        "configURI": "/lightning/setup/PackageUsageSummary/home"
    },
    {
        "configName": "App Install History",
        "configURI": "/lightning/setup/InsightsSetupAppHistoryControlPanel/home"
    },
    {
        "configName": "Auto-Installed Apps",
        "configURI": "/lightning/setup/InsightsSetupAutoInstalledApps/home"
    },
    {
        "configName": "Access Policies",
        "configURI": "/lightning/setup/SessionLevelPolicyUI/home"
    },
    {
        "configName": "Historical Trending",
        "configURI": "/lightning/setup/HistoricalTrendingUI/home"
    },
    {
        "configName": "Report Types",
        "configURI": "/lightning/setup/CustomReportTypes/home"
    },
    {
        "configName": "Reporting Snapshots",
        "configURI": "/lightning/setup/AnalyticSnapshots/home"
    },
    {
        "configName": "Reports and Dashboards Settings",
        "configURI": "/lightning/setup/ReportUI/home"
    },
    {
        "configName": "Tableau Embedding",
        "configURI": "/lightning/setup/TableauEmbeddingSettings/home"
    },
    {
        "configName": "Chatter Settings",
        "configURI": "/lightning/setup/CollaborationSettings/home"
    },
    {
        "configName": "Email Settings",
        "configURI": "/lightning/setup/ChatterEmailSettings/home"
    },
    {
        "configName": "Feed Item Actions",
        "configURI": "/lightning/setup/FeedItemActions/home"
    },
    {
        "configName": "Feed Item Layouts",
        "configURI": "/lightning/setup/FeedItemLayouts/home"
    },
    {
        "configName": "Feed Tracking",
        "configURI": "/lightning/setup/FeedTracking/home"
    },
    {
        "configName": "Group Layouts",
        "configURI": "/lightning/setup/CollaborationGroupLayouts/home"
    },
    {
        "configName": "Group Member Triggers",
        "configURI": "/lightning/setup/CollaborationGroupMemberTriggers/home"
    },
    {
        "configName": "Group Record Triggers",
        "configURI": "/lightning/setup/CollaborationGroupRecordTriggers/home"
    },
    {
        "configName": "Group Triggers",
        "configURI": "/lightning/setup/CollaborationGroupTriggers/home"
    },
    {
        "configName": "Record Types",
        "configURI": "/lightning/setup/CollaborationGroupRecordTypes/home"
    },
    {
        "configName": "Influence",
        "configURI": "/lightning/setup/InfluenceSettings/home"
    },
    {
        "configName": "FeedComment Triggers",
        "configURI": "/lightning/setup/FeedCommentTriggers/home"
    },
    {
        "configName": "FeedItem Triggers",
        "configURI": "/lightning/setup/FeedItemTriggers/home"
    },
    {
        "configName": "B2C Commerce Connections",
        "configURI": "/lightning/setup/ManageC2CSelfProvisioningConnections/home"
    },
    {
        "configName": "All Sites",
        "configURI": "/lightning/setup/SetupNetworks/home"
    },
    {
        "configName": "Pages",
        "configURI": "/lightning/setup/CommunityFlexiPageList/home"
    },
    {
        "configName": "Settings",
        "configURI": "/lightning/setup/NetworkSettings/home"
    },
    {
        "configName": "Templates",
        "configURI": "/lightning/setup/CommunityTemplateDefinitionList/home"
    },
    {
        "configName": "Themes",
        "configURI": "/lightning/setup/CommunityThemeDefinitionList/home"
    },
    {
        "configName": "Field History Tracking",
        "configURI": "/lightning/setup/FieldHistoryTracking/home"
    },
    {
        "configName": "Functions",
        "configURI": "/lightning/setup/Functions/home"
    },
    {
        "configName": "Home",
        "configURI": "/lightning/setup/Home/home"
    },
    {
        "configName": "Accounts As Campaign Members",
        "configURI": "/lightning/setup/AccountAsCM/home"
    },
    {
        "configName": "Auto-Association Settings",
        "configURI": "/lightning/setup/AutoAssociationSettings/home"
    },
    {
        "configName": "Campaign Influence Settings",
        "configURI": "/lightning/setup/CampaignInfluenceSettings/home"
    },
    {
        "configName": "Model Settings",
        "configURI": "/lightning/setup/CampaignInfluenceModel/home"
    },
    {
        "configName": "Lead Assignment Rules",
        "configURI": "/lightning/setup/LeadRules/home"
    },
    {
        "configName": "Lead Auto-Response Rules",
        "configURI": "/lightning/setup/LeadResponses/home"
    },
    {
        "configName": "Lead Processes",
        "configURI": "/lightning/setup/LeadProcess/home"
    },
    {
        "configName": "Lead Settings",
        "configURI": "/lightning/setup/LeadSettings/home"
    },
    {
        "configName": "Lead Gen Fields",
        "configURI": "/lightning/setup/LinkedInLeadGenFields/home"
    },
    {
        "configName": "LinkedIn Accounts",
        "configURI": "/lightning/setup/LinkedInLeadGenAccounts/home"
    },
    {
        "configName": "Web-to-Lead",
        "configURI": "/lightning/setup/LeadWebtoleads/home"
    },
    {
        "configName": "Omnichannel Inventory",
        "configURI": "/lightning/setup/OmniChannelInventory/home"
    },
    {
        "configName": "Quip (Salesforce Anywhere)",
        "configURI": "/lightning/setup/SalesforceAnywhereSetupPage/home"
    },
    {
        "configName": "Account Intelligence View Setup",
        "configURI": "/lightning/setup/AccountInspectionSettings/home"
    },
    {
        "configName": "Account Owner Report",
        "configURI": "/lightning/setup/AccountOwnerReport/home"
    },
    {
        "configName": "Account Settings",
        "configURI": "/lightning/setup/AccountSettings/home"
    },
    {
        "configName": "Account Teams",
        "configURI": "/lightning/setup/AccountTeamSelling/home"
    },
    {
        "configName": "Person Accounts",
        "configURI": "/lightning/setup/PersonAccountSettings/home"
    },
    {
        "configName": "Activity Settings",
        "configURI": "/lightning/setup/HomeActivitiesSetupPage/home"
    },
    {
        "configName": "Contact Intelligence View Setup",
        "configURI": "/lightning/setup/ContactInspectionSettings/home"
    },
    {
        "configName": "Contact Roles on Contracts",
        "configURI": "/lightning/setup/ContractContactRoles/home"
    },
    {
        "configName": "Contact Roles on Opportunities",
        "configURI": "/lightning/setup/OpportunityRoles/home"
    },
    {
        "configName": "Buyer Relationship Map",
        "configURI": "/lightning/setup/BuyerRelationshipMap/home"
    },
    {
        "configName": "Contract Settings",
        "configURI": "/lightning/setup/ContractSettings/home"
    },
    {
        "configName": "Forecasts Hierarchy",
        "configURI": "/lightning/setup/Forecasting3Role/home"
    },
    {
        "configName": "Forecasts Quotas",
        "configURI": "/lightning/setup/Forecasting3Quota/home"
    },
    {
        "configName": "Forecasts Settings",
        "configURI": "/lightning/setup/Forecasting3Settings/home"
    },
    {
        "configName": "Individual Settings",
        "configURI": "/lightning/setup/IndividualSettings/home"
    },
    {
        "configName": "Lead Intelligence View Setup",
        "configURI": "/lightning/setup/LeadInspectionSettings/home"
    },
    {
        "configName": "LinkedIn Sales Navigator",
        "configURI": "/lightning/setup/LinkedInSalesNavigatorPage/home"
    },
    {
        "configName": "Settings",
        "configURI": "/lightning/setup/SalesforceMeetingsSettings/home"
    },
    {
        "configName": "Notes Settings",
        "configURI": "/lightning/setup/NotesSetupPage/home"
    },
    {
        "configName": "Big Deal Alert",
        "configURI": "/lightning/setup/OpportunityAlerts/home"
    },
    {
        "configName": "Opportunity Settings",
        "configURI": "/lightning/setup/OpportunitySettings/home"
    },
    {
        "configName": "Opportunity Team Settings",
        "configURI": "/lightning/setup/OpportunityTeamMemberSettings/home"
    },
    {
        "configName": "Pipeline Inspection Setup",
        "configURI": "/lightning/setup/PipelineInspectionSettings/home"
    },
    {
        "configName": "Order Settings",
        "configURI": "/lightning/setup/OrderSettings/home"
    },
    {
        "configName": "An Overview of PRM",
        "configURI": "/lightning/setup/PrmUnifiedSetupSettings/home"
    },
    {
        "configName": "Channel Management",
        "configURI": "/lightning/setup/ChannelManagement/home"
    },
    {
        "configName": "Partner Experience",
        "configURI": "/lightning/setup/PartnerExperience/home"
    },
    {
        "configName": "Partner Productivity",
        "configURI": "/lightning/setup/ChannelProductivity/home"
    },
    {
        "configName": "Asset Settings",
        "configURI": "/lightning/setup/AssetSettings/home"
    },
    {
        "configName": "Product Schedules Settings",
        "configURI": "/lightning/setup/Product2ScheduleSetup/home"
    },
    {
        "configName": "Product Settings",
        "configURI": "/lightning/setup/Product2Settings/home"
    },
    {
        "configName": "Quote Templates",
        "configURI": "/lightning/setup/QuoteTemplateEditor/home"
    },
    {
        "configName": "Quotes Settings",
        "configURI": "/lightning/setup/QuoteSettings/home"
    },
    {
        "configName": "Setup Assistant",
        "configURI": "/lightning/setup/EmailIqSetupPage/home"
    },
    {
        "configName": "Log a Call",
        "configURI": "/lightning/setup/DialerLogACallSetup/home"
    },
    {
        "configName": "Sales Engagement Settings",
        "configURI": "/lightning/setup/SalesEngagement/home"
    },
    {
        "configName": "Sales Processes",
        "configURI": "/lightning/setup/OpportunityProcess/home"
    },
    {
        "configName": "Territory Models",
        "configURI": "/lightning/setup/Territory2Models/home"
    },
    {
        "configName": "Territory Settings",
        "configURI": "/lightning/setup/Territory2Settings/home"
    },
    {
        "configName": "Territory Types",
        "configURI": "/lightning/setup/Territory2Types/home"
    },
    {
        "configName": "Update Reminders",
        "configURI": "/lightning/setup/OpportunityUpdateReminders/home"
    },
    {
        "configName": "Asset Files",
        "configURI": "/lightning/setup/ContentAssets/home"
    },
    {
        "configName": "Content Deliveries and Public Links",
        "configURI": "/lightning/setup/ContentDistribution/home"
    },
    {
        "configName": "Files Connect",
        "configURI": "/lightning/setup/ContentHub/home"
    },
    {
        "configName": "General Settings",
        "configURI": "/lightning/setup/FilesGeneralSettings/home"
    },
    {
        "configName": "Regenerate Previews",
        "configURI": "/lightning/setup/RegeneratePreviews/home"
    },
    {
        "configName": "Salesforce CRM Content",
        "configURI": "/lightning/setup/SalesforceCRMContent/home"
    },
    {
        "configName": "Call Centers",
        "configURI": "/lightning/setup/CallCenters/home"
    },
    {
        "configName": "Directory Numbers",
        "configURI": "/lightning/setup/AdditionalDirectoryNumbers/home"
    },
    {
        "configName": "Softphone Layouts",
        "configURI": "/lightning/setup/SoftphoneLayouts/home"
    },
    {
        "configName": "Case Assignment Rules",
        "configURI": "/lightning/setup/CaseRules/home"
    },
    {
        "configName": "Case Auto-Response Rules",
        "configURI": "/lightning/setup/CaseResponses/home"
    },
    {
        "configName": "Case Comment Triggers",
        "configURI": "/lightning/setup/CaseCommentTriggers/home"
    },
    {
        "configName": "Case Merge",
        "configURI": "/lightning/setup/CaseMerge/home"
    },
    {
        "configName": "Case Team Roles",
        "configURI": "/lightning/setup/CaseTeamRoles/home"
    },
    {
        "configName": "Predefined Case Teams",
        "configURI": "/lightning/setup/CaseTeamTemplates/home"
    },
    {
        "configName": "Contact Roles on Cases",
        "configURI": "/lightning/setup/CaseContactRoles/home"
    },
    {
        "configName": "Customer Contact Requests",
        "configURI": "/lightning/setup/ContactRequestFlows/home"
    },
    {
        "configName": "Customer Service Incident Management",
        "configURI": "/lightning/setup/IncidentManagement/home"
    },
    {
        "configName": "Email-to-Case",
        "configURI": "/lightning/setup/EmailToCase/home"
    },
    {
        "configName": "Channel Menu",
        "configURI": "/lightning/setup/ChannelMenuDeployments/home"
    },
    {
        "configName": "Embedded Service Deployments",
        "configURI": "/lightning/setup/EmbeddedServiceDeployments/home"
    },
    {
        "configName": "Entitlement Processes",
        "configURI": "/lightning/setup/SlaProcess/home"
    },
    {
        "configName": "Entitlement Settings",
        "configURI": "/lightning/setup/EntitlementSettings/home"
    },
    {
        "configName": "Entitlement Templates",
        "configURI": "/lightning/setup/EntitlementTemplates/home"
    },
    {
        "configName": "Milestones",
        "configURI": "/lightning/setup/MilestoneTypes/home"
    },
    {
        "configName": "Escalation Rules",
        "configURI": "/lightning/setup/CaseEscRules/home"
    },
    {
        "configName": "Feed Filters",
        "configURI": "/lightning/setup/FeedFilterDefinitions/home"
    },
    {
        "configName": "Field Service Mobile App Builder",
        "configURI": "/lightning/setup/FieldServiceAppBuilder/home"
    },
    {
        "configName": "Field Service Settings",
        "configURI": "/lightning/setup/FieldServiceSettings/home"
    },
    {
        "configName": "Inbound Social Post Errors",
        "configURI": "/lightning/setup/InboundSocialPostErrors/home"
    },
    {
        "configName": "Macro Settings",
        "configURI": "/lightning/setup/MacroSettings/home"
    },
    {
        "configName": "Omni-Channel Settings",
        "configURI": "/lightning/setup/OmniChannelSettings/home"
    },
    {
        "configName": "Einstein Classification",
        "configURI": "/lightning/setup/EinsteinCaseClassification/home"
    },
    {
        "configName": "Social Business Rules",
        "configURI": "/lightning/setup/SocialCustomerServiceBusinessRules/home"
    },
    {
        "configName": "Social Customer Service",
        "configURI": "/lightning/setup/SocialCustomerManagementAccountSettings/home"
    },
    {
        "configName": "Support Processes",
        "configURI": "/lightning/setup/CaseProcess/home"
    },
    {
        "configName": "Support Settings",
        "configURI": "/lightning/setup/CaseSettings/home"
    },
    {
        "configName": "Swarming",
        "configURI": "/lightning/setup/CaseSwarming/home"
    },
    {
        "configName": "Web-to-Case",
        "configURI": "/lightning/setup/CaseWebtocase/home"
    },
    {
        "configName": "Web-to-Case HTML Generator",
        "configURI": "/lightning/setup/CaseWebToCaseHtmlGenerator/home"
    },
    {
        "configName": "Survey Settings",
        "configURI": "/lightning/setup/SurveySettings/home"
    },
    {
        "configName": "Topic Assignment Triggers",
        "configURI": "/lightning/setup/TopicAssigmentTriggers/home"
    },
    {
        "configName": "Topic Triggers",
        "configURI": "/lightning/setup/TopicTriggers/home"
    },
    {
        "configName": "Topics for Objects",
        "configURI": "/lightning/setup/TopicRecords/home"
    },
    {
        "configName": "Slack Apps Setup",
        "configURI": "/lightning/setup/SlackSetupAssistant/home"
    },
    {
        "configName": "About Heroku",
        "configURI": "/lightning/setup/AboutHeroku/home"
    },
    {
        "configName": "Einstein Bots Assessor",
        "configURI": "/lightning/setup/EinsteinBotsReadinessCheck/home"
    },
    {
        "configName": "Einstein Conversation Insights Assessor",
        "configURI": "/lightning/setup/EinsteinCIReadinessCheck/home"
    },
    {
        "configName": "Sales Cloud Einstein Assessor",
        "configURI": "/lightning/setup/SalesCloudEinsteinReadinessCheck/home"
    },
    {
        "configName": "Service Cloud Einstein Assessor",
        "configURI": "/lightning/setup/ServiceCloudEinsteinReadinessCheck/home"
    },
    {
        "configName": "Einstein Prediction Builder",
        "configURI": "/lightning/setup/EinsteinBuilder/home"
    },
    {
        "configName": "Einstein Recommendation Builder",
        "configURI": "/lightning/setup/EinsteinRecommendation/home"
    },
    {
        "configName": "Einstein.ai",
        "configURI": "/lightning/setup/EinsteinKeyManagement/home"
    },
    {
        "configName": "Settings",
        "configURI": "/lightning/setup/ActivitySyncEngineSettingsMain/home"
    },
    {
        "configName": "Objects to Always Search (Moved)",
        "configURI": "/lightning/setup/SearchScope/home"
    },
    {
        "configName": "Search Layouts",
        "configURI": "/lightning/setup/EinsteinSearchLayouts/home"
    },
    {
        "configName": "Search Manager",
        "configURI": "/lightning/setup/SearchConfiguration/home"
    },
    {
        "configName": "Settings",
        "configURI": "/lightning/setup/EinsteinSearchSettings/home"
    },
    {
        "configName": "Synonyms",
        "configURI": "/lightning/setup/ManageSynonyms/home"
    },
    {
        "configName": "Reply Mail Management",
        "configURI": "/lightning/setup/E360ReplyMailManagement/home"
    },
    {
        "configName": "Object Manager",
        "configURI": "/lightning/setup/ObjectManager/home"
    },
    {
        "configName": "Picklist Value Sets",
        "configURI": "/lightning/setup/Picklists/home"
    },
    {
        "configName": "Schema Builder",
        "configURI": "/lightning/setup/SchemaBuilder/home"
    },
    {
        "configName": "Event Manager",
        "configURI": "/lightning/setup/EventManager/home"
    },
    {
        "configName": "Event Relays",
        "configURI": "/lightning/setup/EventRelay/home"
    },
    {
        "configName": "Approval Processes",
        "configURI": "/lightning/setup/ApprovalProcesses/home"
    },
    {
        "configName": "Automation Home (Beta)",
        "configURI": "/lightning/setup/ProcessHome/home"
    },
    {
        "configName": "Flows",
        "configURI": "/lightning/setup/Flows/home"
    },
    {
        "configName": "Migrate to Flow",
        "configURI": "/lightning/setup/MigrateToFlowTool/home"
    },
    {
        "configName": "Next Best Action",
        "configURI": "/lightning/setup/NextBestAction/home"
    },
    {
        "configName": "Paused And Failed Flow Interviews",
        "configURI": "/lightning/setup/Pausedflows/home"
    },
    {
        "configName": "Post Templates",
        "configURI": "/lightning/setup/FeedTemplates/home"
    },
    {
        "configName": "Process Automation Settings",
        "configURI": "/lightning/setup/WorkflowSettings/home"
    },
    {
        "configName": "Process Builder",
        "configURI": "/lightning/setup/ProcessAutomation/home"
    },
    {
        "configName": "Email Alerts",
        "configURI": "/lightning/setup/WorkflowEmails/home"
    },
    {
        "configName": "Field Updates",
        "configURI": "/lightning/setup/WorkflowFieldUpdates/home"
    },
    {
        "configName": "Outbound Messages",
        "configURI": "/lightning/setup/WorkflowOutboundMessaging/home"
    },
    {
        "configName": "Send Actions",
        "configURI": "/lightning/setup/SendAction/home"
    },
    {
        "configName": "Tasks",
        "configURI": "/lightning/setup/WorkflowTasks/home"
    },
    {
        "configName": "Workflow Rules",
        "configURI": "/lightning/setup/WorkflowRules/home"
    },
    {
        "configName": "Action Link Templates",
        "configURI": "/lightning/setup/ActionLinkGroupTemplates/home"
    },
    {
        "configName": "Actions & Recommendations",
        "configURI": "/lightning/setup/GuidedActions/home"
    },
    {
        "configName": "App Menu",
        "configURI": "/lightning/setup/AppMenu/home"
    },
    {
        "configName": "Custom Labels",
        "configURI": "/lightning/setup/ExternalStrings/home"
    },
    {
        "configName": "Density Settings",
        "configURI": "/lightning/setup/DensitySetup/home"
    },
    {
        "configName": "Global Actions",
        "configURI": "/lightning/setup/GlobalActions/home"
    },
    {
        "configName": "Publisher Layouts",
        "configURI": "/lightning/setup/GlobalPublisherLayouts/home"
    },
    {
        "configName": "Lightning App Builder",
        "configURI": "/lightning/setup/FlexiPageList/home"
    },
    {
        "configName": "Lightning Extension",
        "configURI": "/lightning/setup/LightningExtension/home"
    },
    {
        "configName": "Loaded Console Tab Limit",
        "configURI": "/lightning/setup/ConsoleMaxTabCacheSetup/home"
    },
    {
        "configName": "Path Settings",
        "configURI": "/lightning/setup/PathAssistantSetupHome/home"
    },
    {
        "configName": "Quick Text Settings",
        "configURI": "/lightning/setup/LightningQuickTextSettings/home"
    },
    {
        "configName": "Record Page Settings",
        "configURI": "/lightning/setup/SimpleRecordHome/home"
    },
    {
        "configName": "Rename Tabs and Labels",
        "configURI": "/lightning/setup/RenameTab/home"
    },
    {
        "configName": "Custom URLs",
        "configURI": "/lightning/setup/DomainSites/home"
    },
    {
        "configName": "Domains",
        "configURI": "/lightning/setup/DomainNames/home"
    },
    {
        "configName": "Sites",
        "configURI": "/lightning/setup/CustomDomain/home"
    },
    {
        "configName": "Tabs",
        "configURI": "/lightning/setup/CustomTabs/home"
    },
    {
        "configName": "Themes and Branding",
        "configURI": "/lightning/setup/ThemingAndBranding/home"
    },
    {
        "configName": "Export",
        "configURI": "/lightning/setup/LabelWorkbenchExport/home"
    },
    {
        "configName": "Import",
        "configURI": "/lightning/setup/LabelWorkbenchImport/home"
    },
    {
        "configName": "Override",
        "configURI": "/lightning/setup/LabelWorkbenchOverride/home"
    },
    {
        "configName": "Translate",
        "configURI": "/lightning/setup/LabelWorkbenchTranslate/home"
    },
    {
        "configName": "Translation Language Settings",
        "configURI": "/lightning/setup/LabelWorkbenchSetup/home"
    },
    {
        "configName": "User Interface",
        "configURI": "/lightning/setup/UserInterfaceUI/home"
    },
    {
        "configName": "Apex Classes",
        "configURI": "/lightning/setup/ApexClasses/home"
    },
    {
        "configName": "Apex Settings",
        "configURI": "/lightning/setup/ApexSettings/home"
    },
    {
        "configName": "Apex Test Execution",
        "configURI": "/lightning/setup/ApexTestQueue/home"
    },
    {
        "configName": "Apex Test History",
        "configURI": "/lightning/setup/ApexTestHistory/home"
    },
    {
        "configName": "Apex Triggers",
        "configURI": "/lightning/setup/ApexTriggers/home"
    },
    {
        "configName": "Canvas App Previewer",
        "configURI": "/lightning/setup/CanvasPreviewerUi/home"
    },
    {
        "configName": "Custom Metadata Types",
        "configURI": "/lightning/setup/CustomMetadata/home"
    },
    {
        "configName": "Custom Permissions",
        "configURI": "/lightning/setup/CustomPermissions/home"
    },
    {
        "configName": "Custom Settings",
        "configURI": "/lightning/setup/CustomSettings/home"
    },
    {
        "configName": "DataWeave Resources",
        "configURI": "/lightning/setup/DataWeaveResources/home"
    },
    {
        "configName": "Email Services",
        "configURI": "/lightning/setup/EmailToApexFunction/home"
    },
    {
        "configName": "Debug Mode",
        "configURI": "/lightning/setup/UserDebugModeSetup/home"
    },
    {
        "configName": "Lightning Components",
        "configURI": "/lightning/setup/LightningComponentBundles/home"
    },
    {
        "configName": "Platform Cache",
        "configURI": "/lightning/setup/PlatformCache/home"
    },
    {
        "configName": "Remote Access",
        "configURI": "/lightning/setup/RemoteAccess/home"
    },
    {
        "configName": "Static Resources",
        "configURI": "/lightning/setup/StaticResources/home"
    },
    {
        "configName": "Tools",
        "configURI": "/lightning/setup/ClientDevTools/home"
    },
    {
        "configName": "Visualforce Components",
        "configURI": "/lightning/setup/ApexComponents/home"
    },
    {
        "configName": "Visualforce Pages",
        "configURI": "/lightning/setup/ApexPages/home"
    },
    {
        "configName": "Einstein for Developers",
        "configURI": "/lightning/setup/EinsteinForDevelopers/home"
    },
    {
        "configName": "Performance Assistant",
        "configURI": "/lightning/setup/PerformanceAssistant/home"
    },
    {
        "configName": "Inbound Change Sets",
        "configURI": "/lightning/setup/InboundChangeSet/home"
    },
    {
        "configName": "Outbound Change Sets",
        "configURI": "/lightning/setup/OutboundChangeSet/home"
    },
    {
        "configName": "Deployment Settings",
        "configURI": "/lightning/setup/DeploymentSettings/home"
    },
    {
        "configName": "Deployment Status",
        "configURI": "/lightning/setup/DeployStatus/home"
    },
    {
        "configName": "Apex Flex Queue",
        "configURI": "/lightning/setup/ApexFlexQueue/home"
    },
    {
        "configName": "Apex Jobs",
        "configURI": "/lightning/setup/AsyncApexJobs/home"
    },
    {
        "configName": "Background Jobs",
        "configURI": "/lightning/setup/ParallelJobsStatus/home"
    },
    {
        "configName": "Bulk Data Load Jobs",
        "configURI": "/lightning/setup/AsyncApiJobStatus/home"
    },
    {
        "configName": "Scheduled Jobs",
        "configURI": "/lightning/setup/ScheduledJobs/home"
    },
    {
        "configName": "Debug Logs",
        "configURI": "/lightning/setup/ApexDebugLogs/home"
    },
    {
        "configName": "Email Log Files",
        "configURI": "/lightning/setup/EmailLogFiles/home"
    },
    {
        "configName": "API Usage Notifications",
        "configURI": "/lightning/setup/MonitoringRateLimitingNotification/home"
    },
    {
        "configName": "Case Escalations",
        "configURI": "/lightning/setup/DataManagementManageCaseEscalation/home"
    },
    {
        "configName": "Email Snapshots",
        "configURI": "/lightning/setup/EmailCapture/home"
    },
    {
        "configName": "Entitlement Processes",
        "configURI": "/lightning/setup/DataManagementManageSlaProcess/home"
    },
    {
        "configName": "Outbound Messages",
        "configURI": "/lightning/setup/WorkflowOmStatus/home"
    },
    {
        "configName": "Time-Based Workflow",
        "configURI": "/lightning/setup/DataManagementManageWorkflowQueue/home"
    },
    {
        "configName": "System Overview",
        "configURI": "/lightning/setup/SystemOverview/home"
    },
    {
        "configName": "Adoption Assistance",
        "configURI": "/lightning/setup/AdoptionAssistance/home"
    },
    {
        "configName": "Guidance Center",
        "configURI": "/lightning/setup/LearningSetup/home"
    },
    {
        "configName": "Help Menu",
        "configURI": "/lightning/setup/HelpMenu/home"
    },
    {
        "configName": "In-App Guidance",
        "configURI": "/lightning/setup/Prompts/home"
    },
    {
        "configName": "Enablement Settings",
        "configURI": "/lightning/setup/EnablementLitePrograms/home"
    },
    {
        "configName": "API",
        "configURI": "/lightning/setup/WebServices/home"
    },
    {
        "configName": "Basic Data Import",
        "configURI": "/lightning/setup/BasicDataImport/home"
    },
    {
        "configName": "Change Data Capture",
        "configURI": "/lightning/setup/CdcObjectEnablement/home"
    },
    {
        "configName": "Data Import Wizard",
        "configURI": "/lightning/setup/DataManagementDataImporter/home"
    },
    {
        "configName": "Data Loader",
        "configURI": "/lightning/setup/DataLoader/home"
    },
    {
        "configName": "Dataloader.io",
        "configURI": "/lightning/setup/DataLoaderIo/home"
    },
    {
        "configName": "External Data Sources",
        "configURI": "/lightning/setup/ExternalDataSource/home"
    },
    {
        "configName": "External Objects",
        "configURI": "/lightning/setup/ExternalObjects/home"
    },
    {
        "configName": "External Services",
        "configURI": "/lightning/setup/ExternalServices/home"
    },
    {
        "configName": "Platform Events",
        "configURI": "/lightning/setup/EventObjects/home"
    },
    {
        "configName": "Teams Integration",
        "configURI": "/lightning/setup/MicrosoftTeamsIntegration/home"
    },
    {
        "configName": "Custom Notifications",
        "configURI": "/lightning/setup/CustomNotifications/home"
    },
    {
        "configName": "Notification Delivery Settings",
        "configURI": "/lightning/setup/NotificationTypesManager/home"
    },
    {
        "configName": "Briefcase Builder",
        "configURI": "/lightning/setup/Briefcase/home"
    },
    {
        "configName": "Business Hours",
        "configURI": "/lightning/setup/BusinessHours/home"
    },
    {
        "configName": "Public Calendars and Resources",
        "configURI": "/lightning/setup/Calendars/home"
    },
    {
        "configName": "Company Information",
        "configURI": "/lightning/setup/CompanyProfileInfo/home"
    },
    {
        "configName": "Data Protection and Privacy",
        "configURI": "/lightning/setup/ConsentManagement/home"
    },
    {
        "configName": "Fiscal Year",
        "configURI": "/lightning/setup/ForecastFiscalYear/home"
    },
    {
        "configName": "Holidays",
        "configURI": "/lightning/setup/Holiday/home"
    },
    {
        "configName": "Language Settings",
        "configURI": "/lightning/setup/LanguageSettings/home"
    },
    {
        "configName": "Maps and Location Settings",
        "configURI": "/lightning/setup/MapsAndLocationServicesSettings/home"
    },
    {
        "configName": "My Domain",
        "configURI": "/lightning/setup/OrgDomain/home"
    },
    {
        "configName": "Data Classification Download",
        "configURI": "/lightning/setup/DataClassificationDownload/home"
    },
    {
        "configName": "Data Classification Settings",
        "configURI": "/lightning/setup/DataClassificationSettings/home"
    },
    {
        "configName": "Data Classification Upload",
        "configURI": "/lightning/setup/DataClassificationUpload/home"
    },
    {
        "configName": "Consent Event Stream",
        "configURI": "/lightning/setup/ConsentEventStream/home"
    },
    {
        "configName": "Auth. Providers",
        "configURI": "/lightning/setup/AuthProviders/home"
    },
    {
        "configName": "Identity Provider",
        "configURI": "/lightning/setup/IdpPage/home"
    },
    {
        "configName": "Identity Provider Event Log",
        "configURI": "/lightning/setup/IdpErrorLog/home"
    },
    {
        "configName": "Identity Verification",
        "configURI": "/lightning/setup/IdentityVerification/home"
    },
    {
        "configName": "Identity Verification History",
        "configURI": "/lightning/setup/VerificationHistory/home"
    },
    {
        "configName": "Login Flows",
        "configURI": "/lightning/setup/LoginFlow/home"
    },
    {
        "configName": "Login History",
        "configURI": "/lightning/setup/OrgLoginHistory/home"
    },
    {
        "configName": "OAuth Custom Scopes",
        "configURI": "/lightning/setup/OauthCustomScope/home"
    },
    {
        "configName": "OAuth and OpenID Connect Settings",
        "configURI": "/lightning/setup/OauthOidcSettings/home"
    },
    {
        "configName": "Single Sign-On Settings",
        "configURI": "/lightning/setup/SingleSignOn/home"
    },
    {
        "configName": "Token Exchange Handlers",
        "configURI": "/lightning/setup/OauthTokenExchangeHandlers/home"
    },
    {
        "configName": "Account Owner Report",
        "configURI": "/lightning/setup/SecurityAccountOwner/home"
    },
    {
        "configName": "Activations",
        "configURI": "/lightning/setup/ActivatedIpAddressAndClientBrowsersPage/home"
    },
    {
        "configName": "CORS",
        "configURI": "/lightning/setup/CorsWhitelistEntries/home"
    },
    {
        "configName": "Certificate and Key Management",
        "configURI": "/lightning/setup/CertificatesAndKeysManagement/home"
    },
    {
        "configName": "Delegated Administration",
        "configURI": "/lightning/setup/DelegateGroups/home"
    },
    {
        "configName": "Event Log File Browser",
        "configURI": "/lightning/setup/ElfBrowser/home"
    },
    {
        "configName": "Event Monitoring Settings",
        "configURI": "/lightning/setup/EventMonitoringSetup/home"
    },
    {
        "configName": "Transaction Security Policies",
        "configURI": "/lightning/setup/TransactionSecurityNew/home"
    },
    {
        "configName": "Expire All Passwords",
        "configURI": "/lightning/setup/SecurityExpirePasswords/home"
    },
    {
        "configName": "Field Accessibility",
        "configURI": "/lightning/setup/FieldAccessibility/home"
    },
    {
        "configName": "File Upload and Download Security",
        "configURI": "/lightning/setup/FileTypeSetting/home"
    },
    {
        "configName": "Guest User Sharing Rule Access Report",
        "configURI": "/lightning/setup/GuestUserAccessVerification/home"
    },
    {
        "configName": "Health Check",
        "configURI": "/lightning/setup/HealthCheck/home"
    },
    {
        "configName": "Login Access Policies",
        "configURI": "/lightning/setup/LoginAccessPolicies/home"
    },
    {
        "configName": "Named Credentials",
        "configURI": "/lightning/setup/NamedCredential/home"
    },
    {
        "configName": "Network Access",
        "configURI": "/lightning/setup/NetworkAccess/home"
    },
    {
        "configName": "Password Policies",
        "configURI": "/lightning/setup/SecurityPolicies/home"
    },
    {
        "configName": "Encryption Settings",
        "configURI": "/lightning/setup/EncryptionAdvancedSettings/home"
    },
    {
        "configName": "Encryption Statistics",
        "configURI": "/lightning/setup/EncryptionStatistics/home"
    },
    {
        "configName": "Key Management",
        "configURI": "/lightning/setup/PlatformEncryptionKeyManagement/home"
    },
    {
        "configName": "Portal Health Check",
        "configURI": "/lightning/setup/PortalSecurityReport/home"
    },
    {
        "configName": "Private Connect",
        "configURI": "/lightning/setup/PrivateConnect/home"
    },
    {
        "configName": "Remote Site Settings",
        "configURI": "/lightning/setup/SecurityRemoteProxy/home"
    },
    {
        "configName": "Session Management",
        "configURI": "/lightning/setup/SessionManagementPage/home"
    },
    {
        "configName": "Session Settings",
        "configURI": "/lightning/setup/SecuritySession/home"
    },
    {
        "configName": "Sharing Settings",
        "configURI": "/lightning/setup/SecuritySharing/home"
    },
    {
        "configName": "Trusted URL and Browser Policy Violations",
        "configURI": "/lightning/setup/BrowserPolicyViolations/home"
    },
    {
        "configName": "Trusted URLs",
        "configURI": "/lightning/setup/SecurityCspTrustedSite/home"
    },
    {
        "configName": "Trusted URLs for Redirects",
        "configURI": "/lightning/setup/SecurityRedirectWhitelistUrl/home"
    },
    {
        "configName": "View Setup Audit Trail",
        "configURI": "/lightning/setup/SecurityEvents/home"
    },
    {
        "configName": "Setup Assistant",
        "configURI": "/lightning/setup/GettingStartedEmbedded/home"
    },
    {
        "configName": "1 - Object Manager",
        "configURI": "/lightning/setup/ObjectManager/home"
    },
    {
        "configName": "Personal Information",
        "configURI": "/lightning/settings/personal/PersonalInformation/home"
    },
    {
        "configName": "Language & Time Zone",
        "configURI": "/lightning/settings/personal/PersonalInformation/LanguageAndTimeZone/home"
    },
    
]