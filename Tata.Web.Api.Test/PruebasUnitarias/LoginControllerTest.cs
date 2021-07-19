using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tata.Web.Api.Controllers;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Test.PruebasUnitarias
{
    [TestClass]
    public class LoginControllerTest
    {
        [TestMethod]
        public void Usuario_isValid()
        {

            var inMemorySettings = new Dictionary<string, string> {
                {"JWT:key", "D3f4ultC0nn3t10ntoW3b4p1t4t4th3chn1c4l3v4lu4t10n"}
            };

            IConfiguration configuration = new ConfigurationBuilder()
                                            .AddInMemoryCollection(inMemorySettings)
                                            .Build();

            LoginController login = new LoginController(configuration);


            Usuario user = new Usuario();
            user.Nombre = "Admin";
            user.Password = "BZBA2be8nSAR96PAdKhSyQ==";

            var value = login.Login(user);

            Assert.IsNotNull(value.Value);
        }

        [TestMethod]
        public void Usuario_isInValid_User()
        {

            var inMemorySettings = new Dictionary<string, string> {
                {"JWT:key", "D3f4ultC0nn3t10ntoW3b4p1t4t4th3chn1c4l3v4lu4t10n"}
            };

            IConfiguration configuration = new ConfigurationBuilder()
                                            .AddInMemoryCollection(inMemorySettings)
                                            .Build();

            LoginController login = new LoginController(configuration);


            Usuario user = new Usuario();
            user.Nombre = "Prueba";
            user.Password = "BZBA2be8nSAR96PAdKhSyQ==";

            var value = login.Login(user);

            Assert.IsNull(value.Value);
        }

        [TestMethod]
        public void Usuario_isInValid_Password()
        {

            var inMemorySettings = new Dictionary<string, string> {
                {"JWT:key", "D3f4ultC0nn3t10ntoW3b4p1t4t4th3chn1c4l3v4lu4t10n"}
            };

            IConfiguration configuration = new ConfigurationBuilder()
                                            .AddInMemoryCollection(inMemorySettings)
                                            .Build();

            LoginController login = new LoginController(configuration);


            Usuario user = new Usuario();
            user.Nombre = "Prueba";
            user.Password = "BZBA2be8nSAR96PEdKhSyQ==";

            var value = login.Login(user);

            Assert.IsNull(value.Value);
        }
    }
}
