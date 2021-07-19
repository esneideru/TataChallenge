using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tata.Web.Api.Helpers;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Test.PruebasUnitarias
{
    [TestClass]
    public class HashTests
    {
        [TestMethod]
        public void ValidarHash_PasswordIguales_ReturnValid()
        {
            string pass = new EncriptDecript().DecryptString("BZBA2be8nSAR96PAdKhSyQ==");

            Usuario userValidate = new Usuario();
            userValidate.Password = Hash.Create("VGAdmin20!", userValidate.Salt);

            var match = Hash.Validate(pass.Trim(), userValidate.Salt, userValidate.Password.Trim());

            Assert.AreEqual(true, match);
        }


        [TestMethod]
        public void ValidarHash_PasswordDiferentes_ReturnError()
        {
            string pass = new EncriptDecript().DecryptString("BZBA2be8nSAR96SAdKhSyQ==");

            Usuario userValidate = new Usuario();
            userValidate.Password = Hash.Create("VGAdmin20!", userValidate.Salt);

            var match = Hash.Validate(pass.Trim(), userValidate.Salt, userValidate.Password.Trim());

            Assert.AreEqual(false, match);
        }

    }
}
