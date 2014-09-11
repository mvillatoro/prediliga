using System.Collections.Generic;
using DomainDrivenDatabaseDeployer;
using FluentNHibernate.Testing.Values;
using NHibernate;
using PrediLiga.Domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    public class AccountSeeder : IDataSeeder
    {
        readonly ISession _session;

        public AccountSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {

            var account = new Account
            {
                Email = "test@test.com",
                Name = "Test Name",
                Password = "password",
            };

            var ligaBbva = _session.QueryOver<Leagues>().Where(x => x.Name == "Liga BBVA").SingleOrDefault();

            account.AddLeagues(ligaBbva);
            

            _session.Save(account);
        }
    }

    

}