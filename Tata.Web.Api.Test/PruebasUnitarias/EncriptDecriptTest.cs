using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Test.PruebasUnitarias
{
    [TestClass]
    public class EncriptDecriptTest
    {

        [TestMethod]
        public void Validar_EncriptDecript_ReturnValid()
        {
            string pass = "BZBA2be8nSAR96PAdKhSyQ==";

            string passDecripted = new EncriptDecript().DecryptString(pass);

            Assert.AreEqual("VGAdmin20!", passDecripted);
        }

        [TestMethod]
        public void Validar_EncriptDecript_ReturnError()
        {
            string pass = "BZBA2be8nSAR96PcdKhSyQ==";

            string passDecripted = new EncriptDecript().DecryptString(pass);
            Assert.AreNotEqual("VGAdmin20!", passDecripted);
        }
    }
}
