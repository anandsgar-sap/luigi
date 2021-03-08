Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'project',
        label: 'Project',
        icon: 'home',
        hideFromNav: true,
        hideSideNav: true,
        loadingIndicator: {
          enabled: false
        },
        viewUrl: 'https://chr-16763-t1-i077611-streamlinecockpit.cfapps.sap.hana.ondemand.com',
        children: [
          {
            pathSegment: 'overview/:projectId',
            label: 'Automation',
            hideFromNav: true,
            hideSideNav: true,
            viewUrl: 'https://chr-16763-t1-i077611-streamlinecockpit.cfapps.sap.hana.ondemand.com/project/overview/:projectId',
            loadingIndicator: {
              enabled: false
            }
          },
          {
            pathSegment: 'automation',
            label: 'Automation',
            hideFromNav: true,
            hideSideNav: true,
            viewUrl: 'https://chr-16763-t1--approuter--ipa-od--chryso--16763.internal.cfapps.sap.hana.ondemand.com/studio/?embed=true&artifactType=automation&artifactUid=3c253ba9-f08e-495c-a810-518b9c27a72d#84cc7c73-ba18-405b-aee3-1f3443edff48',
            loadingIndicator: {
              enabled: false
            }
          }
        ]
      },
    ]
  },
  settings: {
    header: {
      title: 'Application Cockpit',
      logo: '/logo.svg'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
