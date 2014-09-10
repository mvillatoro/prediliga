

using AutoMapper;
using PrediLiga.Domain.Entities;
using PregiLiga.Api.Controllers;
using PregiLiga.Api.Models;

namespace PregiLiga.Api
{
    public class ConfigureAutomapper : IBootstrapperTask
    {
        #region IBootstrapperTask Members

        public void Run()
        {
            //automappings go here
            //Ex: Mapper.CreateMap<SomeType, SomeOtherType>().ReverseMap();
            Mapper.CreateMap<AccountRegisterModel, Account>().ReverseMap();
        }

        #endregion
    }
}