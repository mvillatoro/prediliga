using DomainDrivenDatabaseDeployer;
using NHibernate;
using PrediLiga.Domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    class AccountSeeder : IDataSeeder
    {
        readonly ISession _session;

        public AccountSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            _session.Save(new Account
            {
                Email = "test@test.com",
                Name = "Test Name",
                Password = "password"
            });
        }
    }
}