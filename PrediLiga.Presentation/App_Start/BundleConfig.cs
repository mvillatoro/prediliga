// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2014 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.PrediLiga.Presentation
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css"));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include(
                "~/scripts/vendor/jquery-2.0.3.js",
                "~/scripts/vendor/angular.js",
                "~/scripts/vendor/angular-ui-router.js",
                "~/scripts/routingConfig.js",
                "~/scripts/filters.js",
                "~/scripts/services.js",
                "~/scripts/services/AccountService.js",
                "~/scripts/services/AuthService.js",
                "~/scripts/services/ServerService.js",
                "~/scripts/directives.js",
                "~/scripts/controllers.js",
                "~/scripts/controllers/AboutController.js",
                "~/scripts/controllers/Error404Controller.js",
                "~/scripts/controllers/HomeController.js",
                "~/scripts/controllers/LoginController.js",
                "~/scripts/controllers/RegisterController.js",
                "~/scripts/app.js"));
        }
    }
}
