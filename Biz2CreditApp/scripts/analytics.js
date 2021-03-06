(function(global){
    var AnalyticsModel,
        app = global.app = global.app || {};
    
    var productId = "f59992bd604a4febb1309522069c3937",
        version   = "1.5";
    
    AnalyticsModel = kendo.data.ObservableObject.extend({
       
       monitorStatusCheck:function(latitude,longitude)
       {  
           var factory = window.plugins.EqatecAnalytics.Factory;
           
           factory.IsMonitorCreated(function(result){
               if(result.IsCreated === 'true' || result.IsCreated === true)
               {
                   console.log("monitor has been create");
                   app.analyticsService.viewModel.monitorStatus();
               }
               else
               {
                   console.log("monitor not create");
                   app.analyticsService.viewModel.monitorCreate(latitude,longitude);
               }
           });
       },
        
        monitorCreate:function(latitude,longitude)
        {
            var factory = window.plugins.EqatecAnalytics.Factory;
            var settings = factory.CreateSettings(productId,version);
            
            settings.TestMode = 'true';
            settings.LoggingInterface = {
                                            LogError:function(errorMsg)
                                            {
                                                console.log("Error :"+errorMsg);
                                            },
                                            LogMessage:function(msg)
                                            {
                                                console.log(msg);    
                                            }
                                        };
            settings.DailyNetworkUtilizationInKB = 5120;
            settings.MaxStorageSizeInKB = 8192;
            settings.LocationCoordinates.Latitude = latitude;
            settings.LocationCoordinates.Longitude = longitude;
            
            console.log(settings);
            
            factory.CreateMonitorWithSettings(settings,
                function()
                {
                    console.log("Monitor create");
                    app.analyticsService.viewModel.monitorStart();
                },
                function(msg)
                {
                    console.log("Error creating monitor :"+msg);
                }
            )
        },
        
        monitorStart:function()
        {
            var monitor = window.plugins.EqatecAnalytics.Monitor;
            monitor.Start(function()
            {
                console.log('monitor start');
                app.analyticsService.viewModel.userStatus("AppLoad_Login");
            });
        },
        
        monitorStop:function(stopReason)
        {   
            var monitor = window.plugins.EqatecAnalytics.Monitor;
            app.analyticsService.viewModel.trackFeature("Exit."+stopReason);
            monitor.Stop(function()
            {
                console.log('monitor stop');
            });
        },
        
        userStatus:function(operation)
        {   
           console.log(operation);
           var loginStatus = localStorage.getItem("isLoggedIn");
           
           if(loginStatus === 'true' || loginStatus === true)
           {
               app.analyticsService.viewModel.trackFeature(operation+"."+localStorage.getItem("userEmail"));
               app.analyticsService.viewModel.setInstallationInfo(localStorage.getItem("userEmail"));
           }
           else
           {
               app.analyticsService.viewModel.trackFeature(operation+".Unknown User");
               //app.analyticsService.viewModel.setInstallationInfo("Not Register");
           }
        },
        
        trackFeature:function(feature)
        {
            var monitor = window.plugins.EqatecAnalytics.Monitor;
            monitor.TrackFeature(feature);
        },
        
        setInstallationInfo:function(installationId)
        {
            var monitor = window.plugins.EqatecAnalytics.Monitor;
            console.log(installationId);
            monitor.SetInstallationInfo(installationId);
        },
        
        monitorStatus:function(){
            
            var monitor = window.plugins.EqatecAnalytics.Monitor;
           
            monitor.GetStatus(function(status) {

                if(status.IsStarted === true)
                {
                    console.log("getstatus");
                    app.analyticsService.viewModel.userStatus("AppLoad_AfterLogout");
                }
                else
                {
                    app.analyticsService.viewModel.monitorStart();
                }
            });
        }
    });
    app.analyticsService = {
        viewModel :new AnalyticsModel()
    };
})(window);